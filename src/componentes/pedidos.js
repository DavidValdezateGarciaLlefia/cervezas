import { bd } from "./bd"


export const pedidos = {
    template: //html
    `
    <div class="container mt-3 p-5 border shadow-lg ">
      <h1 class="text-center mb-5 ">----- Vista usuario -----</h1>
      <div class="row">
        
        <div class="col-6">
          <h3>Grupo</h3>
          <label for="nombreGrupo" class="label-control">Nombre del grupo:</label>
          <input required id="nombreGrupo" type="text" class="form-control mt-2" placeholder ="Borrachos de DAW2">
          <label for="numeroMesa" class="label-control">Mesa numero</label>
          <input required id="numeroMesa" type="number" class="form-control mt-2" placeholder ="0" min="1" max="15" required>
        
          <h3 class="mt-5">Haz tu pedido</h3>
          <div class="d-flex gap-3 ">
            <select name="cervezas" id="cervezas" class="form-control">
              
            </select>
          
            <input id="cantidad" type="number" value="0" class="form-control">
          </div>
          <button id="btnAdd" class="btn btn-success mt-4 w-100">¡Enviar pedido!</button>
        </div>
        <div class="col-6 border ">
          <div class="p-3 d-flex">
            <div class="w-50">
              <img id="cervImagen" src="estrella.jpg" alt="" class="w-100">
            </div>
            <div>
              <h4 id="cervNombre" class=""></h4>
              <p id="cervDescripcion"></p>
            </div>
            
  
          </div>
        </div>
      </div>
      
  
    </div>
    `,
    script:()=>{
        
        const labelCerveza =  document.querySelector('#cervezas')
            let optionsCerveza = `
            <option value="">Selecciona qué birra quieres</option>
            `
            bd.map((item) =>{
                console.log(item)
              optionsCerveza += //html
              `
              <option value="${item.id}">${item.nombre}</option>
              `
              
             
            })
    
          labelCerveza.innerHTML = optionsCerveza
    
            let cervezaSeleccionada = ''
            labelCerveza.addEventListener('change',()=>{
              cervezaSeleccionada = labelCerveza.value
              console.log(cervezaSeleccionada)
              bd.map((item)=>{
                if(item.id == cervezaSeleccionada){
                  document.querySelector('#cervNombre').innerHTML = item.nombre
                  document.querySelector('#cervDescripcion').innerHTML = item.descripcion
                  document.querySelector('#cervImagen').src = item.imagen
                }
              })
            })
            
        
    }
}