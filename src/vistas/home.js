import { pedidos } from "../componentes/pedidos"
import { tablaPedidos } from "../componentes/tablaPedidos"

export const home = {
    template: //html
    `
    <div id="usuarios"></div>
    <div id="camareros"></div>
    `,
    script:()=>{
        document.querySelector('#usuarios').innerHTML = pedidos.template
        document.querySelector('#camareros').innerHTML = tablaPedidos.template
        pedidos.script()
    }

}



