import { Model, DataTypes } from "sequelize";
import { database } from "../database/db";
import { Categoria } from "./categoria";

export class Producto extends Model {
    public nombreProducto! : string;
    public descripcionProducto! : string;
    // public imagen! : string;
    public precioProducto!: number;
    public stockProducto! : number;
}

export interface ProductoI {
    nombreProducto: string;
    descripcionProducto: string;
    // imagen: string;
    precioProducto: number;
    stockProducto: number;
}

Producto.init(
    {
        nombreProducto: {
            type: DataTypes.STRING,
            allowNull: false
        },
        descripcionProducto: {
            type: DataTypes.STRING,
            allowNull: false
        },
        // imagen: {
        //     type: DataTypes.STRING,
        //     allowNull: false
        // },
        precioProducto: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        stockProducto: {
            type: DataTypes.FLOAT,
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
    },
    {
        tableName: "productos",
        sequelize: database,
        timestamps: true
    }
);

Producto.belongsTo(Categoria, { foreignKey: "categoriaId", as: 'categoria'});
Categoria.hasMany(Producto, {foreignKey: "categoriaId"});
