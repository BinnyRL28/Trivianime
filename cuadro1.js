/*function Temporizador(id,inicio, final){
    this.id = id;
    this.incio = inicio;
    this.final = final;
    this.contador = this.incio;

    this.conteoSegundos = function(){
        if(this.contador == this.final){
            this.conteoSegundos == null;
            return;
        }

        document.getElementById(i).innerHTML = this.contador--;
        setTimeout(this.conteoSegundos.bind(this), 1000);
    };
}
let temporizador = new Temporizador('temporizador',30,0);
temporizador.conteoSegundos();
*/


//RECUERDA EL TEMPORIZADOR Y EL AUDIO




    
function comparar(elemento){
    if(elemento==document.getElementsByClass("correcta")){
        console.log("Correcta xd");
    }else if(elemento==document.getElementsByClassName("incorrecta")[0]||[1]||[2]||[3]){
        console.log("fallaste :v");
    }

    console.log(elemento);
}


function guardarNombre(e){
    if(e.keyCode === 13 ){
        var nombre = document.getElementById("ingresoNombre").value;
        sessionStorage.setItem('nombre',nombre);
        window.location.href="http://127.0.0.1:5500/Semana2/css/css/trivia/Cuadro2.html"

    }
    console.log(nombre);
}

function dato(){
    var Usuario = document.getElementById("Usuario").value;
    var Email = document.getElementById("celectrónico").value;
    var Contraseña = document.getElementById("contraseña").value

    var mensaje = "Usuario: " + Usuario + 
    "\n E-mail: " + Email +
    "\n Contraseña: " + Contraseña;
    console.log(mensaje);
}

function cargarNombre(){
    if(sessionStorage.getItem('nombre')){
         var guardar = document.getElementById("salidaNombre");
         guardar.value=sessionStorage.getItem('nombre');
    }
}

function dato1(){
    var Nombre = document.getElementById("Nombre").value;
    var Correo = document.getElementById("celectrónico").value;
    var Contraseña = document.getElementById("contraseña").value;
    var Femenino = document.getElementById("femenino").checked;
    var Masculino = document.getElementById("masculino").checked;
    var FechaNacimiento = document.getElementById("FechaNacimiento").value;
    var Edad = document.getElementById("Edad").value;

    var registrate = "Nombre: " + Nombre + 
    "\n Correo Electrónico: " + Correo +
    "\n Contraseña: " + Contraseña + 
    "\n Es mujer: " + Femenino + 
    "\n Es hombre: " + Masculino + 
    "\n Fecha de Nacimiento: " + FechaNacimiento +
    "\n Edad: " + Edad;
    console.log(registrate);
}

function reiniciar(){
    sessionStorage.clear();
}

var puntaje = 0;
var contCorrecta = 0;
var contIncorrecta = 0;
var contNula = 0;
var siguiente = "";
// var elemento = "";

//parseItem convierte el valor en entero.
//setItem para guardar , aqui se la clave y el valor ('nombre', nombre)y getItem para obtener lo guardado('clave')
function calcularPuntaje(urlSiguiente, elemento){
    if(elemento=="correcta"){
        if(sessionStorage.getItem('puntaje')){
            puntaje = parseInt(sessionStorage.getItem('puntaje')) + 5;
            if(sessionStorage.getItem('contCorrecta')){
                contCorrecta=parseInt(sessionStorage.getItem('contCorrecta'))+1;
            }else{
                contCorrecta=contCorrecta+1;
                sessionStorage.setItem('contCorrecta', contCorrecta);
            }
            sessionStorage.setItem('puntaje', puntaje);
            sessionStorage.setItem('contCorrecta', contCorrecta);
            // sessionStorage.setItem('contIncorrecta', contIncorrecta);
        }else {
            puntaje=puntaje+5;
            contCorrecta=contCorrecta+1;
            // contIncorrecta = contIncorrecta;
            sessionStorage.setItem('puntaje', puntaje);
            sessionStorage.setItem('contCorrecta', contCorrecta);
            // sessionStorage.setItem('contIncorrecta', 0);
        }

    }else if(elemento=="incorrecta"){
        if(sessionStorage.getItem('puntaje')){
            puntaje = parseInt(sessionStorage.getItem('puntaje'))-2;
            sessionStorage.setItem('puntaje', puntaje);
            if(sessionStorage.getItem('contIncorrecta', contIncorrecta)>0){
                contIncorrecta=parseInt(sessionStorage.getItem('contIncorrecta'))+1;
                sessionStorage.setItem('contIncorrecta', contIncorrecta);   
            }else{
                contIncorrecta=contIncorrecta+1;
                sessionStorage.setItem('contIncorrecta', contIncorrecta);   
            }
        }else{
            puntaje=puntaje-2;
            contIncorrecta=contIncorrecta+1;
            sessionStorage.setItem('puntaje', puntaje);
            sessionStorage.setItem('contIncorrecta', contIncorrecta);
        }
    }else{
        // contNula=contNula+1;
        if(sessionStorage.getItem('contNula')>0 || sessionStorage.getItem('contNula')){
            contNula=parseInt(sessionStorage.getItem('contNula'))+1;
            sessionStorage.setItem('contNula', contNula); 
        }else{
            contNula=contNula+1;
            sessionStorage.setItem('contNula', contNula); 
        }
    }
    window.location.href=urlSiguiente;
    console.log(puntaje);
}

function mostrarResultado(){
    var inputCorrecta = document.getElementById("cantidadCorrecta");
    var inputIncorrecta = document.getElementById("cantidadIncorrecta");
    var inputNula = document.getElementById("cantidadNula");
    var resultadoFinal = document.getElementById("resultados");
    inputCorrecta.value = sessionStorage.getItem('contCorrecta');
    inputIncorrecta.value = sessionStorage.getItem('contIncorrecta');
    inputNula.value = sessionStorage.getItem('contNula');
    resultadoFinal.value = sessionStorage.getItem('puntaje');
}



 var isMarch = false; 
 var acumularTime = 0;

 function start () {
        pantalla = document.getElementById("screen");
          if (isMarch == false) { 
             timeInicial = new Date();
             control = setInterval(cronometro,10);
             isMarch = true;
             }
            
          }
 function cronometro () { 
          timeActual = new Date();
          acumularTime = timeActual - timeInicial;
          acumularTime2 = new Date();
          acumularTime2.setTime(acumularTime); 
          cc = Math.round(acumularTime2.getMilliseconds()/10);
          ss = acumularTime2.getSeconds();
          mm = acumularTime2.getMinutes();
        //   hh = acumularTime2.getHours()-18;
          if (cc < 10) {cc = "0"+cc;}
          if (ss < 10) {ss = "0"+ss;} 
          if (mm < 10) {mm = "0"+mm;}
        //   if (hh < 10) {hh = "0"+hh;}
          pantalla.innerHTML = mm+" : "+ss;
        //   console.log("tiempo", acumularTime);
        setTimeout(() => {
            stop();
            reset();           
            // window.location.href=siguiente;
        }, 15000);
            
          }

function navegarSiguiente(location){
    switch (location){
        case '/Semana2/css/css/trivia/Facil1.html':
            siguiente = 'Facil2.html';
            break;
        case '/Semana2/css/css/trivia/Facil2.html':
            siguiente = 'Facil3.html';
            break;
        case '/Semana2/css/css/trivia/Facil3.html':
            siguiente = 'Facil4.html';
            break;
        case '/Semana2/css/css/trivia/Facil4.html':
            siguiente = 'Resultados.html';
            break;
        case '/Semana2/css/css/trivia/Normal1.html':
            siguiente = 'Normal2.html';
            break;
        case '/Semana2/css/css/trivia/Normal2.html':
            siguiente = 'Normal3.html';
            break;
        case '/Semana2/css/css/trivia/Normal3.html':
            siguiente = 'Normal4.html';
            break;
        case '/Semana2/css/css/trivia/Normal4.html':
            siguiente = 'Resultados.html';
            break;
        case '/Semana2/css/css/trivia/Dificil1.html':
            siguiente = 'Dificil1.html';
            break;
        case '/Semana2/css/css/trivia/Dificil2.html':
            siguiente = 'Dificil2.html';
            break;
        case '/Semana2/css/css/trivia/Dificil3.html':
            siguiente = 'Dificil3.html';
            break;
        case '/Semana2/css/css/trivia/Dificil4.html':
            siguiente = 'Resultados.html';
            break;
    }

}
 
 function stop () { 
          if (isMarch == true) {
             clearInterval(control);
             isMarch = false;
             navegarSiguiente(window.location.pathname);
             calcularPuntaje(siguiente, 'Nulos')
             alert("Se te acabó el tiempo")
             }     
          }      
 
 function resume () {
          if (isMarch == false) {
             timeActu2 = new Date();
             timeActu2 = timeActu2.getTime();
             acumularResume = timeActu2-acumularTime;
             
             timeInicial.setTime(acumularResume);
             control = setInterval(cronometro,10);
             isMarch = true;
             }     
          }
 
 function reset () {
          if (isMarch == true) {
             clearInterval(control);
             isMarch = false;
             }
          acumularTime = 0;
          pantalla.innerHTML = "00 : 00 : 00 : 00";
          }
