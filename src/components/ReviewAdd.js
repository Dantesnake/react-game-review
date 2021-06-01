import React, {useState} from 'react';
import {MDBBtn, MDBCard, MDBCardBody, MDBCardGroup, MDBCardText, MDBCardTitle} from "mdbreact";
import { Redirect } from 'react-router';
import {borrarReview, DATOS, guardarReview, mostarReview, mostrarReviewAdmin} from "../service/review";


const ReviewAdd = () => {
    const [videojuego, setvideojuego] = useState('');
    const [review, setReview] = useState(null);

    function guardar() {
        var data = {
            username: sessionStorage.getItem("user"),
            videojuego: videojuego,
            review:review

        }
        guardarReview(data)
    }
    
    function consulta() {
        if (sessionStorage.getItem("user") == "Jonathan-Admin"){
            mostrarReviewAdmin()
        }else {

            mostarReview(sessionStorage.getItem("user"))
        }

    }

    function borrar(id) {
        borrarReview(id)
    }


    return (
        <div>
            {sessionStorage.getItem('user') ?


                <div>
                    <form>
                        <div class="form-group">
                            <label for="exampleFormControlInput1">VideoJuego</label>
                            <input onChange={(e) => {setvideojuego(e.target.value) }} type="text" class="form-control" id="exampleFormControlInput1" />
                            <div class="form-group">
                                <label for="exampleFormControlTextarea1">Review</label>
                                <textarea onChange={(e) => { setReview(e.target.value) }} class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>

                        </div>
                        <MDBBtn color="primary" size="md" onClick={guardar} >
                            Guardar
                        </MDBBtn>
                    </form>
                    <div>
                        <MDBBtn onClick={consulta} color="primary" size="md">
                            Consulta
                        </MDBBtn>

                        <div className="container">
                            {
                                DATOS.map((elemento) => {
                                    return (
                                        <div>
                                            <MDBCardGroup>
                                                <MDBCard>
                                                    <MDBCardBody>
                                                        <MDBCardTitle tag="h5">{elemento.videojuego}</MDBCardTitle>
                                                        <MDBCardText>
                                                            {elemento.review}
                                                        </MDBCardText>
                                                        <MDBCardText>
                                                            Usuario: {elemento.username}
                                                        </MDBCardText>
                                                        <MDBBtn
                                                            onClick={() => borrar(elemento._id)}
                                                            color="primary" size="md">
                                                            borrar
                                                        </MDBBtn>
                                                    </MDBCardBody>
                                                </MDBCard>
                                            </MDBCardGroup>

                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                   
                </div>
                :
                <Redirect to='/review' />
            }



        </div>
    );
}

export default ReviewAdd;
