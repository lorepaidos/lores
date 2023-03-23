const refresco = new BebidaAzucarada("1",1,0.50,"Fanta",0.15,true);
const agua     = new AguaMineral("4",1,0.50,"Aguas de Mondariz","Mondariz");

const almacen = new Almacen();

almacen.agregarProducto(refresco);
almacen.agregarProducto(agua);

almacen.eliminarProducto("1");