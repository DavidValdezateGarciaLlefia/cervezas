(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function t(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(e){if(e.ep)return;e.ep=!0;const n=t(e);fetch(e.href,n)}})();const v={template:`
    <p class="text-white ">David Valdezate García</p>
    `},l=[{id:3,nombre:"Mahou Cinco Estrellas",tipo:"Lager",origen:"Madrid",descripcion:"Cerveza rubia, suave y refrescante con un sabor ligeramente amargo.",imagen:"https://www.loscervecistas.es/wp-content/uploads/2021/10/mahou-cinco-estrellas-213770.png"},{id:22,nombre:"Estrella Galicia",tipo:"Lager",origen:"Galicia",descripcion:"Cerveza suave y equilibrada con un sabor ligeramente amargo y aroma a malta.",imagen:"https://www.crusat.com/wp-content/uploads/2021/07/estrella-galicia-especial.png"},{id:33,nombre:"Alhambra Reserva 1925",tipo:"Lager",origen:"Granada",descripcion:"Cerveza rubia con un sabor ligeramente dulce y toques de caramelo.",imagen:"https://sgfm.elcorteingles.es/SGFM/dctm/MEDIA03/202204/04/00118602800916____3__600x600.jpg"},{id:34,nombre:"San Miguel Especial",tipo:"Lager",origen:"Barcelona",descripcion:"Cerveza rubia, suave y refrescante con un sabor ligeramente amargo.",imagen:"https://www.sanmiguel.com/es/wp-content/uploads/sites/2/2021/01/san-miguel-gluten-free-4.png"},{id:35,nombre:"Damm Estrella",tipo:"Lager",origen:"Barcelona",descripcion:"Cerveza rubia, suave y refrescante con un sabor ligeramente amargo.",imagen:"https://static.damm.com/sites/default/files/config-page/estrella_header_logo/estrella-damm_0.png"}],u={template:`
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
    `,script:()=>{const o=document.querySelector("#cervezas");let r=`
            <option value="">Selecciona qué birra quieres</option>
            `;l.map(a=>{console.log(a),r+=`
              <option value="${a.id}">${a.nombre}</option>
              `}),o.innerHTML=r;let t="";o.addEventListener("change",()=>{t=o.value,console.log(t),l.map(a=>{a.id==t&&(document.querySelector("#cervNombre").innerHTML=a.nombre,document.querySelector("#cervDescripcion").innerHTML=a.descripcion,document.querySelector("#cervImagen").src=a.imagen)})})}};let s={bd:[]};const d={template:`
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
    `,script:()=>{d.añadirComanda(),d.estadoEliminar()},añadirComanda:()=>{document.querySelector("#btnAdd").addEventListener("click",r=>{var c;const a=((c=s.bd[s.bd.length-1])==null?void 0:c.id)+1||1,e=document.querySelector("#nombreGrupo"),n=document.querySelector("#numeroMesa"),i=document.querySelector("#cervezas"),p=document.querySelector("#cantidad"),b=i.options[i.selectedIndex],g={id:a,grupo:e.value,mesa:n.value,cerveza:b.textContent,numCervezas:p.value,estado:"pendiente"};s.bd.push(g),console.log("datosBD",s.bd),d.pintarComanda(s.bd)})},pintarComanda:o=>{document.querySelector("tbody").innerHTML="";let r="";o.map(t=>{console.log(t.estado),r+=`
            <tr data-tareaid=${t.id}>
            <td>${t.id}</td>
            <td>${t.grupo}</td>
            <td>${t.mesa}</td>
            <td>${t.cerveza}</td>
            <td>${t.numCervezas}</td>
            <td>
              <div class="d-flex gap-2">
            `,t.estado=="pendiente"?r+='<button class="botonEstado btn btn-outline-warning w-100 btn-sm">Pedido pendiente...</button>':r+='<button class="botonPendiente btn btn-outline-success w-100 btn-sm">¡Pedido servido!</button>',r+=`
                  <button class="botonEliminar btn btn-outline-danger w-100 btn-sm"> 🗑 Borrar pedido</button>
              </div>       
            </td>
          </tr>
            `}),document.querySelector("tbody").innerHTML=r},estadoEliminar:()=>{document.querySelector("body").addEventListener("click",o=>{if(o.target.classList.contains("botonEstado")){const t=o.target.closest("tr").dataset.tareaid,a=s.bd.find(e=>e.id==t);a&&(a.estado="servido"),d.pintarComanda(s.bd)}if(o.target.classList.contains("botonPendiente")){console.log("pendiente",o.target.classList);const t=o.target.closest("tr").dataset.tareaid,a=s.bd.find(e=>e.id==t);a&&(a.estado="pendiente"),d.pintarComanda(s.bd)}if(o.target.classList.contains("botonEliminar")){console.log("borrar comanda",o.target.classList);const t=o.target.closest("tr").dataset.tareaid;console.log("tareaId",t);const a=s.bd.filter(e=>e.id!=t);d.pintarComanda(a),s.bd=a}})}},m={template:`
    <div id="usuarios"></div>
    <div id="camareros"></div>
    `,script:()=>{document.querySelector("#usuarios").innerHTML=u.template,document.querySelector("#camareros").innerHTML=d.template,u.script(),d.script()}};document.querySelector("header").innerHTML=v.template;document.querySelector("main").innerHTML=m.template;m.script();
