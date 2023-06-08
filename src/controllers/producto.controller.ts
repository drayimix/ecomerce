import {  Request, Response } from 'express';
import { Model, where } from 'sequelize/types';

import { Producto,ProductoI } from '../models/producto';
import { Categoria } from '../models/categoria';


export class ProductoController{
    public async getAllProducto(req: Request, res:Response){
        try {
            const producto: ProductoI[] = await Producto.findAll({
                include: [
                    {
                        model: Categoria,
                        as:'categoria',
                        attributes: ['nameCategoria']
                    },
                ]
            })// select * from clientes;
            res.status(200).json({producto})
        } catch (error) {
            res.status(500).json({msg: "Error Internal"})
        }
    }

        //metodo mostrar un producto
    public async getOneProducto(req: Request, res:Response){
        const { id: idParam } = req.params
        try{
            const producto: ProductoI | null = await Producto.findOne(
                {
                    where: {
                        id: idParam,
                    } 
                }
            )
            if(producto){
                res.status(200).json({producto})
            } else return res.status(300).json({msg: "El producto no existe"})
        }catch (error) {
            res.status(500).json({msg: "Error Internal"})
        }
    }

        //metodo crear producto
    public async createProducto(req: Request, res:Response){
        const {
            nombreProducto,
            descripcionProducto,
            precioProducto,
            stockProducto,
        }= req.body;

        try{
            let body: ProductoI = {
                nombreProducto,
                descripcionProducto,
                precioProducto,
                stockProducto,
            }
            const producto:ProductoI = await Producto.create({...body});
            res.status(200).json({producto});
        }catch(error){
            res.status(500).json({msg: "Error Internal"})
        }
    }

    public async updateProducto(req: Request, res:Response){
        const {id:pk} = req.params;

        const {
            id,
            nombreProducto,
            descripcionProducto,
            precioProducto,
            stockProducto,
        }= req.body;

        try{
            let body: ProductoI ={
                nombreProducto,
                descripcionProducto,
                precioProducto,
                stockProducto,
            }
            const productoExist: ProductoI | null = await Producto.findByPk(pk);
            if(!productoExist) return res.status(500).json({msg:'El producto no existe'});
            await Producto.update(body, {
                where: {
                    id:pk
                }
            });

        }catch (error) {
            res.status(500).json({msg: "Error Internal"})
        }
        const producto: ProductoI | null = await Producto.findByPk(pk);
        if(producto) res.status(200).json({producto});
    }

        //metodo eliminar producto
    public async deleteProducto(req: Request, res:Response){
        const {id:pk} = req.params;
        try{
            const productoExist: ProductoI | null = await Producto.findByPk(pk);
            if(!productoExist) return res.status(500).json({msg:'El producto no existe'});
            await Producto.destroy({
                where: {id:pk}
            })
            res.status(200).json({msg: 'Producto Eliminado'})
        }catch (error) {
            res.status(500).json({msg: "Error Internal"})
        }
    }
}