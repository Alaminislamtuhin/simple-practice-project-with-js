document.getElementById('log-in')
.addEventListener('click', function(event){
    event.preventDefault()
    console.log('this is a parametter')
    console.log(event)
    
    const mobileNumber =12345678910
    const pinNumber =1234

    const mobileNumberAdd = document.getElementById('Mobile-num').value
    const mobileNumberConvert = parseInt(mobileNumberAdd)

    const pinNumberAdd = document.getElementById('pin-num').value
    const pinNumberConvert = parseInt(pinNumberAdd)

   

    if(mobileNumberConvert===mobileNumber && pinNumberConvert===pinNumber){
        window.location.href='./home.html'
    }
    else{
        alert('this number is invalid')
    }

})