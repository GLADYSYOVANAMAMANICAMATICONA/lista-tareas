alert("Proyecto Final");
var arrayDeListaTareas = [{
    userId: 1,
    id: 1,
    title: "delectus aut autem",
    completed: false
  },
  {
    userId: 1,
    id: 2,
    title: "quis ut nam facilis et officia qui",
    completed: false
  },
  {
    userId: 1,
    id: 3,
    title: "fugiat veniam minus",
    completed: false
  },
  {
    userId: 1,
    id: 4,
    title: "et porro tempora",
    completed: true
  },
  {
    userId: 1,
    id: 5,
    title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
    completed: false
  },
  {
    userId: 1,
    id: 6,
    title: "qui ullam ratione quibusdam voluptatem quia omnis",
    completed: false
  },
  {
    userId: 1,
    id: 7,
    title: "illo expedita consequatur quia in",
    completed: false
  },
  {
    userId: 1,
    id: 8,
    title: "quo adipisci enim quam ut ab",
    completed: true
  },
  {
    userId: 1,
    id: 9,
    title: "molestiae perspiciatis ipsa",
    completed: false
  },
  {
    userId: 1,
    id: 10,
    title: "illo est ratione doloremque quia maiores aut",
    completed: true
  }
];
function areaMostrarLista(){
var nuevo="";
for (var i = 0; i < arrayDeListaTareas.length; i++) {
  var tareasTitulo = arrayDeListaTareas[i].title;
  //if(==completed)
  var areaDondeMostrar = "<div>"+"<li contentEditable='true'>"+tareasTitulo+"<input  type='checkbox' onclick='check(this)'>"+"</li>"+"</div>";
  nuevo +=areaDondeMostrar;
}
document.getElementById("contenedorDeLista").innerHTML=nuevo;
}
function tareas(userId,id,title,dni,completed){
  this.userId = userId;
  this.id = id;
  this.title = title;
  this.completed = completed
};

function agregarTarea(){
  var tituloDeTarea=document.getElementById("inputIngresarTarea").value;
  if (tituloDeTarea==="") {
    alert("Ingrese nueva trea");
  }else{
  var nuevaTarea = new tareas(1,1,tituloDeTarea);
    arrayDeListaTareas.push(nuevaTarea);
    areaMostrarLista();
    document.getElementById("inputIngresarTarea").value="";
  }
  console.log(arrayDeListaTareas)

}

function check (e) {
  console.log (e.id);
  arrayDeListaTareas[ parseInt (e.id) ].completed = true;

  areaMostrarLista ();
} 
