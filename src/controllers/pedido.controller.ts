import {  Request, Response } from 'express';
import { Model, where } from 'sequelize/types';

import { Cliente } from '../models/cliente';
import { Producto } from '../models/producto';
import { Pedido, PedidoI } from '../models/pedido';

export class PedidoController{
    public async getAllPedidos(req: Request, res:Response){
        try{
            const pedido: PedidoI[] = await Pedido.findAll({
                include: [
                    {
                        model: Cliente,
                        as: 'cliente',
                        attributes: ['nombreCliente']
                    },
                    {
                        model: Producto,
                        as: 'producto',
                        attributes: ['nombreProducto']
                    }
                ]
            })
            res.status(200).json({pedido})
        } catch(error){
            res.status(500).json({msg: "Error Internal"})
        }
    }


}