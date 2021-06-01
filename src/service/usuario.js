import serviceApi from "./servicio";

const iniciarSesion = function (usuario,contraseña) {
    sessionStorage.setItem('user',usuario)
    usuario = {
        "username": usuario,
        "password": contraseña
    }
    serviceApi.post('/user/login',usuario).then(
        res => {
            alert("usuario registrado correctamente")
            console.log(res.data)
            sessionStorage.setItem('token',res.data.data.token)
        });

}
const registrar = function (usuario,contraseña) {
    usuario = {
        "username": usuario,
        "password": contraseña
    }
    serviceApi.post('/user/signup', usuario)
        .then((response) => {
            alert( 'Usuario registrado!')
        })
        .catch((error) => {
            console.log("Usuario ya registrado");
            alert( 'Usuario ya registrado!')
        });
}
export {iniciarSesion,registrar};
