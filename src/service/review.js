import serviceApi from "./servicio";
let DATOS = [];


function guardarReview(review) {
    serviceApi.post('reviews/add',review,{
        headers: {
            'auth-token': sessionStorage.getItem('token')
        }
    } ).then(res =>{
            console.log(res.data)
            alert("Proceso Exitoso...\nLa review se guardo correctamente")
        }
    ).catch(error =>{
        console.log(error.message)
        alert("Ocurrio un error en el proceso")
    })

}

function mostarReview(username) {
    var  data ={
        username: username
    }
    serviceApi.post('reviews/findOneUser/',data,{
        headers: {
            'auth-token': sessionStorage.getItem('token')
        }
    } ).then(res =>{
            console.log(res.data)
            DATOS = res.data.data;
        }
    ).catch(error =>{
        console.log(error.message)
    })

}

function mostrarReviewAdmin() {

    serviceApi.post('reviews/findAll',{},{
        headers: {
            'auth-token': sessionStorage.getItem('token')
        }
    } ).then(res =>{
            console.log(res.data)
            DATOS = res.data.data;
        }
    ).catch(error =>{
        console.log(error.message)
    })

}

function mostrarReviewHome() {

    serviceApi.post('reviews/findAll',{},{
        headers: {
            'auth-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkpvbmF0aGFuIiwiaWQiOiI2MGIzY2M5MjE4NjUxNDFlZDlmOWMxNzEiLCJpYXQiOjE2MjI1MTcwMjB9.cJJF3znJnIYGG2WZkMULdn26veBzl4Q3dpAbt38-Y_E"
        }
    } ).then(res =>{
            console.log(res.data)
            DATOS = res.data.data;
        }
    ).catch(error =>{
        console.log(error.message)
    })

}
function borrarReview(id){

    serviceApi.delete('reviews/deleteReview/'+id,{
            headers: {
                'auth-token': sessionStorage.getItem('token')
            }
        }
    ).then(res =>{
            console.log(res.data.data);
        }
    ).catch(error =>{
        console.log(error.message)
    })

}

export {guardarReview,borrarReview,mostarReview,mostrarReviewAdmin,DATOS,mostrarReviewHome}
