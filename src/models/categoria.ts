import { Model, DataTypes } from "sequelize";
import { database } from "../database/db";

export class Categoria extends Model{
    public nameCategoria!: string;
}

export interface CategoriaI{
    nameCategoria: string;
}

Categoria.init(
    {
        nameCategoria:{
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        tableName: "categorias",
        sequelize: database,
        timestamps: true
    }
)