import {  Request, Response } from 'express';
import { Model, where } from 'sequelize/types';

import { Producto,ProductoI } from '../models/producto';
import { Categoria } from '../models/categoria';
import { Proveedor } from '../models/proveedor';

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
                    {
                        model: Proveedor,
                        as: 'proveedor',
                        attributes: ['nombreProveedor']
                    }
                ]
            })// select * from clientes;
            res.status(200).json({producto})
        } catch (error) {
            res.status(500).json({msg: "Error Internal"})
        }
    }
}