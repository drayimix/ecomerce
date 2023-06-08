import { Model, DataTypes } from "sequelize";
import { database } from "../database/db";
import { Producto } from "./producto";
import { Cliente } from "./cliente";

export class Pedido extends Model{
    public fechaPedido!: string;
    public cantidadPedido!: number;
    public valorPedido!: number;
}

export interface PedidoI{
    fechaPedido: string;
    cantidadPedido: number;
    valorPedido: number;
}

Pedido.init(
    {
        fechaPedido: {
            type: DataTypes.STRING,
            allowNull: false
        },
        cantidadPedido: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        valorPedido: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        productoId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: Producto,
                key: 'id',
            }
        },
        clienteId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: Cliente,
                key: 'id',
            }
        }
    },
    {
        tableName: "pedidos",
        sequelize: database,
        timestamps: true
    }
);

Pedido.belongsTo(Producto, {foreignKey: 'productoId', as: 'producto'});
Producto.hasMany(Pedido,{foreignKey: 'productoId'});

Pedido.belongsTo(Cliente,{foreignKey: 'clienteId', as: 'cliente'});
Cliente.hasMany(Pedido,{foreignKey:'clienteId'});

// Producto.belongsTo(Categoria, { foreignKey: "categoriaId", as: 'categoria'});
// Categoria.hasMany(Producto, {foreignKey: "categoriaId"});