import { Model, DataTypes } from "sequelize";
import { database } from "../database/db";

export class Proveedor extends Model{
    public nombreProveedor!: string;
    public cantidadArticulos!: number;
    public precioUnitario!: number;
    public precioLote!: number;
}

export interface ProvedorI{
    nombreProveedor: string;
    cantidadArticulos: number;
    precioUnitario: number;
    precioLote: number;
}

Proveedor.init(
    {
        nombreProveedor: {
            type: DataTypes.STRING,
            allowNull: false
        },
        cantidadArticulos: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        precioUnitario: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        precioLote: {
            type: DataTypes.FLOAT,
            allowNull: false
        }
    },
    {
        tableName: "proveedores",
        sequelize: database,
        timestamps: true
    }
)