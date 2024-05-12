let table = document.querySelector("#insert");

window.addEventListener("keypress",(e)=>{
    console.log(e)
    table.innerHTML = ` 
 <table>
 <tr>
   <th>key</th>
   <th>keycode</th>
   <th>code</th>
 </tr>
 <tr>
   <td>${e.key === " " ? "space" :`${e.keyCode}`}</td>
   <td>${e.keyCode}</td>
   <td>${e.code}</td>
 </tr> 
 
 </table>`
})

 