import { ProductoRoutes } from "./producto";
import { ClienteRoutes } from './cliente';
import { PedidoRoutes } from "./pedido";

export class Routes {
    public productoRoutes: ProductoRoutes = new ProductoRoutes();
    public clienteRoutes: ClienteRoutes = new ClienteRoutes();
    public pedidoRoutes: PedidoRoutes = new PedidoRoutes();
}