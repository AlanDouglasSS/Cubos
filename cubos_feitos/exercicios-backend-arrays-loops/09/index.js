



//===================MÉTODO 1:
console.log("============MÉTODO 1:");
const filaDePedidos2 = ["Pedido 12", "Pedido 13", "Pedido 13", "Pedido 14"];

filaDePedidos2.shift();
filaDePedidos2.push("Pedido 15");
console.log(filaDePedidos2);



//===============MÉTODO 2 ================
console.log("\n============MÉTODO 2:");

const filaDePedidos1 = [];

i = 1;
while(i <= 14){
    filaDePedidos1.push(i);
    //console.log("Pedido",filaDePedidos[i - 1]);

    if(filaDePedidos1.length == 14){
        filaDePedidos1.shift();
        filaDePedidos1.push(15);
        let pedidos = filaDePedidos1.slice(filaDePedidos1[9], filaDePedidos1[16]);
        console.log(`Pedido: ${pedidos}`);
    }
    i++
}

