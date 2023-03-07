const tipoUsuario = "0";

switch (tipoUsuario) {
    case "alumno":
    case "ALUMNO":
        console.log("Soy un alumno");
        break;
    case "profesor":
        console.log("Soy un profesor");
        break;
    case 0:
        console.log("Soy el usuario 0");
        break;
    default:
        console.log("Usuario no reconocido");
        break;
}