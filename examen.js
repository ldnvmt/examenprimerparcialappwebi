function validacion_alquiler() {
    var codigo;
    var marca;
    var modelo;
    const anio = document.getElementById("anio");
    const fechainicio = document.getElementById("fechainicio");
    const fechafinal = document.getElementById("fechafinal");

if(codigo.value.lenght !=5) {
    alert(`El código debe ser de 5 caracteres.`);
}  

if(marca.value.lenght !=50) {
    alert(`La marca debe contener 50 caracteres.`)
}

if(modelo.value.lenght !=30) {
    alert(`El modelo deber contener 30 caracteres.`)
}
   
}