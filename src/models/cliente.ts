import { Model, DataTypes } from "sequelize";
import { database } from "../database/db";

export class Cliente extends Model{
    public nombreCliente!: string;
    public apellidoCliente!: string;
    public direccionCliente!: string;
    public ciudadCliente!: string;
    public codigoPostal!: string;
    public correoCliente!: string;
    public telefonoCliente!: string;
}

export interface ClienteI {
    nombreCliente: string;
    apellidoCliente: string;
    direccionCliente: string;
    ciudadCliente: string;
    codigoPostal: string;
    correoCliente: string;
    telefonoCliente: string;
}

Cliente.init(
    {
        nombreCliente: {
            type: DataTypes.STRING,
            allowNull: false
        },
        apellidoCliente: {
            type: DataTypes.STRING,
            allowNull: false
        },
        direccionCliente: {
            type: DataTypes.STRING,
            allowNull: false
        },
        ciudadCliente: {
            type: DataTypes.STRING,
            allowNull: false
        },
        codigoPostal: {
            type: DataTypes.STRING,
            allowNull: false
        },
        correoCliente: {
            type: DataTypes.STRING,
            allowNull: false
        },
        telefonoCliente: {
            type: DataTypes.STRING,
            allowNull: false
        },
    },
    {
        tableName: "clientes",
        sequelize: database,
        timestamps: true
    }
)