const getCheck = document.querySelector('#checkboxForm')
const getForm = document.querySelector('.formSubscribe')

getForm.addEventListener('submit', (e) => {
    e.preventDefault()
    let name = document.querySelector('#fname').value
    let email = document.querySelector('#emailForm').value

    if (name == ('') || email==('')){
        alert ('Please, fill in all fields')
    }else if (getCheck.checked == false){
        alert ('Please accept our terms and conditions')
    }else {
        let data = {
            name,
            email
        }
    
        let dataString = JSON.stringify(data)    
        localStorage.setItem('user', dataString)
        
        document.getElementById('formArea').innerHTML = '<div class="loadingio-spinner-dual-ring-sf7qn483d7m"><div class="ldio-ev4eydwonif"><div></div><div><div></div></div></div></div> <br> <p>Loading...</p>'

        setTimeout(() => {
            document.getElementById('formArea').innerHTML = '<p id="thanks">Thank you for subscribe!</p><img src ="assets/check.png" id="checkmark">'
          }, 1000)
    }    

})