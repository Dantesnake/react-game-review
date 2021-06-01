import React from "react";
import { authFirebase, provider } from "../firebase/firebase";
import {Link} from "react-router-dom";
import {useHistory } from 'react-router';


const NavbarPage = () => {

     const history =useHistory()

  var usuario
  const IniciarSesion = () => {
    if (localStorage.getItem('usuario')) {
        history.push('/addGames')

    } else {
      authFirebase.auth().signInWithPopup(provider)
        .then((result) => {
          console.log(usuario)
          usuario = result.user
          console.log(usuario)
          console.log(usuario.email.slice(0, -10))
          localStorage.setItem('usuario', usuario.email.slice(0, -10))
            history.push('/addGames');
          // ..
        }).catch((error) => {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log(errorCode)
          console.log(errorMessage)
        });

    }
  }

  const CerrarSesion = () => {
    authFirebase.auth().signOut()
      .then(() => {
        localStorage.removeItem('usuario')
          history.push('/home')
        // ...
      }).catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode)
        console.log(errorMessage)
      });

  }
    const IniciarSesion2 = () => {
        history.push('/signIn')
    }

    const Registrarse = () => {
        history.push('/signUp')
    }
    const CerrarSesion2 = () => {
            sessionStorage.removeItem('user')
            sessionStorage.removeItem('token')
            history.push('/')
    }
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="collapse navbar-collapse" id="collapsibleNavbar">
          <ul class="navbar-nav">
            <li class="nav-item"  >
              <Link class="nav-link" to="/home" class="navbar-brand">VideoJuegos</Link>
            </li>
              <li className="nav-item">
                  <Link class="nav-link" to="/review" class="navbar-brand">Review</Link>
              </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                VideoJuegos
        </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" onClick={IniciarSesion}>Iniciar Sesion</a>
                <a class="dropdown-item" onClick={CerrarSesion}>Cerrar Sesion</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="/addGames">Agregar Video Juegos</a>
              </div>
            </li>
              <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown"
                     aria-haspopup="true" aria-expanded="false">
                      Reviews VideoJuegos
                  </a>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                      <a className="dropdown-item" onClick={IniciarSesion2}>Iniciar Sesion</a>
                      <a className="dropdown-item" onClick={Registrarse}>Registrarse</a>
                      <a className="dropdown-item" onClick={CerrarSesion2}>Cerrar Sesion</a>
                      <div className="dropdown-divider"></div>
                      <a className="dropdown-item" href="/addReview">Agregar Review</a>
                  </div>
              </li>

          </ul>
        </div>
      </nav>
    </div>
  );
}

export default NavbarPage;
