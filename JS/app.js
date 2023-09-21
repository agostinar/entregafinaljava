// Clase Persona
class Persona {
    constructor(nombre, notas) {
        this.nombre = nombre;
        this.notas = notas;
    }

    calcularPromedio() {
        let suma = this.notas.reduce((total, nota) => total + nota, 0);
        return suma / this.notas.length;
    }

    encontrarNotaMaxima() {
        return Math.max(...this.notas);
    }

    filtrarNotasMayores(valor) {
        return this.notas.filter(nota => nota > valor);
    }
}

// Objeto simulado de usuarios 
const usuarios = [
    { nombreUsuario: "usuario1", contrasena: "clave123" },
    { nombreUsuario: "usuario2", contrasena: "abc456" }
];

// Función para manejar el envío del formulario de inicio de sesión
document.getElementById("inicioSesionForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente
    
    const usuarioSesion = document.getElementById("usuarioSesion").value;
    const contrasenaSesion = document.getElementById("contrasenaSesion").value;

    // Validación de inicio de sesión
    if (usuarioSesion.trim() === "" || contrasenaSesion.trim() === "") {
        // Si el nombre de usuario o la contraseña están en blanco, muestra un mensaje de error
        alert("Por favor, ingrese tanto el nombre de usuario como la contraseña.");
        return; // Evita que el formulario se envíe si la validación falla
    }

    if (contrasenaSesion.length < 6) {
        // Si la contraseña es menor de 6 caracteres, muestra un mensaje de error
        alert("La contraseña debe tener al menos 6 caracteres.");
        return;
    }

    // Verificar las credenciales con el objeto de usuarios simulado
    const usuarioAutenticado = usuarios.find(user => user.nombreUsuario === usuarioSesion && user.contrasena === contrasenaSesion);

    if (usuarioAutenticado) {
        // Autenticación exitosa
        alert("Inicio de sesión exitoso.");
        document.getElementById("registro").style.display = "none"; // Oculta el formulario de registro
        document.getElementById("inicioSesionForm").style.display = "none"; // Oculta el formulario de inicio de sesión
        document.getElementById("calculadora").style.display = "block"; // Muestra la calculadora
    } else {
        // Autenticación fallida
        alert("Nombre de usuario o contraseña incorrectos.");
    }
});

// Función para manejar el envío del formulario de cálculo de promedio
document.getElementById("calculoPromedioForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente

    // Obtener los datos ingresados por el usuario
    const nombre = document.getElementById("nombre").value;
    const notas = document.getElementById("notas").value.split(",").map(parseFloat);

    // Crear una instancia de Persona con los datos ingresados
    const persona = new Persona(nombre, notas);

    // Calcular el promedio y mostrar los resultados
    const promedio = persona.calcularPromedio();
    const notaMaxima = persona.encontrarNotaMaxima();

    // Mostrar los resultados en el área de visualización
    const resultadosDiv = document.getElementById("resultadosCalculadora");
    resultadosDiv.innerHTML = `
        <p>Nombre: ${persona.nombre}</p>
        <p>Notas: ${persona.notas.join(", ")}</p>
        <p>Promedio: ${promedio.toFixed(2)}</p>
        <p>Nota Máxima: ${notaMaxima}</p>
    `;
});

// Agregar lógica para cerrar sesión si lo deseas
document.getElementById("cerrarSesionBtn").addEventListener("click", function () {
    document.getElementById("registro").style.display = "block"; // Muestra el formulario de registro
    document.getElementById("inicioSesionForm").style.display = "block"; // Muestra el formulario de inicio de sesión
    document.getElementById("calculadora").style.display = "none"; // Oculta la calculadora
});
