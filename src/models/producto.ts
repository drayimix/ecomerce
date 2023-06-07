import { Model, DataTypes } from "sequelize";
import { database } from "../database/db";
import { Categoria } from "./categoria";
import { Proveedor } from "./proveedor";

export class Producto extends Model {
    public nombre! : string;
    public precio! : number;
    // public imagen! : string;
    public stock!: number;
    public descripcion! : string;
}

export interface ProductoI {
    nombre: string;
    precio: number;
    // imagen: string;
    stock: number;
    descripcion: string;
}

Producto.init(
    {
        nombre: {
            type: DataTypes.STRING,
            allowNull: false
        },
        precio: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        // imagen: {
        //     type: DataTypes.STRING,
        //     allowNull: false
        // },
        stock: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        descripcion: {
            type: DataTypes.STRING,
            allowNull: false
        },
        categoriaId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: Categoria,
                key: 'id'
            },
        },
        proveedorId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: Proveedor,
                key: 'id'
            },
        }
    },
    {
        tableName: "productos",
        sequelize: database,
        timestamps: true
    }
);

Producto.belongsTo(Categoria, { foreignKey: "categoriaId", as: 'categoria'});
Categoria.hasMany(Producto, {foreignKey: "categoriaId"});

Producto.belongsTo(Proveedor,{foreignKey: "proveedorId", as: 'proveedor'});
Proveedor.hasMany(Producto,{foreignKey:"proveedorId"});