import { tablaComandas } from "./tablaComandes"

export const tablaPedidos = {
    template: //html
    `
    <div id="tablaPedidos" class="container mt-5 mb-5 p-5 border shadow-lg ">
      <div class="row">
        <h1 class="text-center mb-5 ">----- Vista camareros -----</h1>
      <h3>Pedidos</h3>
      <table class="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Grupo</th>
            <th>Mesa</th>
            <th>Cerveza</th>
            <th>Cantidad</th>
            <th>Estado</th>
          </tr>        
        </thead>
        <tbody>
         
        </tbody>
      </table>
      </div>
      
    </div>
    `,
    script: ()=>{
        tablaPedidos.añadirComanda()
        tablaPedidos.estadoEliminar()
    }
    ,
    añadirComanda: ()=>{
        const addPedido = document.querySelector('#btnAdd')
        addPedido.addEventListener('click', (e)=>{
            const anteriorId = tablaComandas.bd[tablaComandas.bd.length - 1]?.id
            const nuevoId = anteriorId + 1 || 1
            const grupo = document.querySelector('#nombreGrupo')
            const mesa = document.querySelector('#numeroMesa')
            const cerveza = document.querySelector('#cervezas')
            const numCervezas = document.querySelector('#cantidad')
            const selectedCervezaOption = cerveza.options[cerveza.selectedIndex];
            const pedidoObj = {
                id: nuevoId,
                grupo: grupo.value,
                mesa: mesa.value,
                cerveza: selectedCervezaOption.textContent, 
                numCervezas: numCervezas.value,
                estado: 'pendiente'
            }
            tablaComandas.bd.push(pedidoObj)
            console.log('datosBD',tablaComandas.bd)
    
            tablaPedidos.pintarComanda(tablaComandas.bd)
    
        })
    },
    pintarComanda: (bd)=>{
        document.querySelector('tbody').innerHTML = ''
        let trComanda = ''
        bd.map((item)=>{
            console.log(item.estado)
            trComanda += //html
            `
            <tr data-tareaid=${item.id}>
            <td>${item.id}</td>
            <td>${item.grupo}</td>
            <td>${item.mesa}</td>
            <td>${item.cerveza}</td>
            <td>${item.numCervezas}</td>
            <td>
              <div class="d-flex gap-2">
            `
            if(item.estado == 'pendiente'){
                trComanda += `<button class="botonEstado btn btn-outline-warning w-100 btn-sm">Pedido pendiente...</button>`
            }else{
                trComanda+= `<button class="botonPendiente btn btn-outline-success w-100 btn-sm">¡Pedido servido!</button>`
            }
                  
             trComanda+= //html
             `
                  <button class="botonEliminar btn btn-outline-danger w-100 btn-sm"> 🗑 Borrar pedido</button>
              </div>       
            </td>
          </tr>
            `     
       
        })

        document.querySelector('tbody').innerHTML = trComanda
    },
    estadoEliminar:() =>{

        document.querySelector('body').addEventListener('click', (e)=>{
            if (e.target.classList.contains('botonEstado')) {
                const trComanda = e.target.closest('tr');
                const comandaId = trComanda.dataset.tareaid
            
                const pedido = tablaComandas.bd.find((item) => item.id == comandaId);
                if (pedido) {
                    pedido.estado = 'servido';
                }
            
                tablaPedidos.pintarComanda(tablaComandas.bd);
            }
       
            
              if (e.target.classList.contains('botonPendiente')) {
                console.log('pendiente', e.target.classList);
                const trComanda = e.target.closest('tr')
            
               
                const comandaId = trComanda.dataset.tareaid
             
            
                const pedido = tablaComandas.bd.find((item) => item.id == comandaId);
                if (pedido) {
                    pedido.estado = 'pendiente';
                }
                tablaPedidos.pintarComanda(tablaComandas.bd)
                
            
              }

            if (e.target.classList.contains('botonEliminar')) {
                console.log('borrar comanda', e.target.classList);
                const trComanda = e.target.closest('tr')
            
                const tareaId = trComanda.dataset.tareaid
                console.log('tareaId', tareaId);
            
                const bdElementoBorrado = tablaComandas.bd.filter((item) => item.id != tareaId)
                tablaPedidos.pintarComanda(bdElementoBorrado)
                tablaComandas.bd = bdElementoBorrado
            
              }


        })


    }
}