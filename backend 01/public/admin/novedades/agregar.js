debugger

window.addEventListener('load', () => {
    let boton_submit = document.querySelector('#button-submit');
        console.log(boton_submit)
}) 
    


// boton_submit.addEventListener('click', e => getDatosDelForm(e))
    


function getDatosDelForm(e){
    let input = e.target.querySelectorAll('form-group')
    console.log(form,input)
}