import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AddJuegos from './AddJuegos';
import Home from './Home';
import NavbarPage from './Navbar';
import ReviewAdd from "./ReviewAdd";
import ReviewHome from "./ReviewHome";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

const Inicio = () => {
    return (
        <div>
            <BrowserRouter>
                <NavbarPage />
                <Switch>
                    <Route path='/home'>
                        <Home />
                    </Route>
                    <Route path='/addGames'>
                        <AddJuegos />
                    </Route>
                    <Route path='/addReview'>
                        <ReviewAdd />
                    </Route>
                    <Route path='/review'>
                        <ReviewHome />
                    </Route>
                    <Route path='/signIn'>
                        <SignIn />
                    </Route>
                    <Route path='/signUp'>
                        <SignUp />
                    </Route>
                </Switch>
            </BrowserRouter>


        </div>
    );
}

export default Inicio;
