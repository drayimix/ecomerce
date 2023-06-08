import { Request, Response, Application, Router } from "express";

import { PedidoController } from "../controllers/pedido.controller";

export class PedidoRoutes {
    public pedidoController: PedidoController = new PedidoController();

    public routes(app: Application): void {
        app.route("/pedidos").get(this.pedidoController.getAllPedidos)
    }
}