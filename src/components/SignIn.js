import React, {useState} from 'react';
import {iniciarSesion} from "../service/usuario";
import {Redirect, useHistory } from 'react-router';



const SignIn = () => {
    const history = useHistory();
    const [usuario, setUsuario] = useState('');
    const [password, setPassword] = useState('');

    function login(event) {
        event.preventDefault();
        iniciarSesion(usuario,password)
        setTimeout(redireccionar,4000)
    }

    function redireccionar(){
        if(!!sessionStorage.getItem('token')){
            history.push('/addReview')
        }
    }
    return (
        <div>
            {!!sessionStorage.getItem('token') ?
                <Redirect to='/addReview' /> :
                <div className="container">
                <form>
                    <div className="col text-center">
        <h3>Iniciar sesion</h3>
                    </div>
        <div className="form-group">
            <label>Nombre de Usuario</label>
            <input type="text" onChange={event => {setUsuario(event.target.value)}} className="form-control" placeholder="Ingrese su usuario" />
        </div>
        <div className="form-group">
            <label>Password</label>
            <input type="password" onChange={event => {setPassword(event.target.value)}} className="form-control" placeholder="Ingrese su password" />
        </div>
        <button onClick={event => {login(event)}} className="btn btn-primary btn-block">Iniciar Sesion</button>
    </form>
                </div>}
        </div>
    );
}

export default SignIn;
