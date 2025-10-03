
// add money section//

const pinNub = 1245;


document.getElementById('btn-add')
.addEventListener('click', function(e){
    e.preventDefault()
  const bank = document.getElementById('bank').value 
  const account = document.getElementById('account-number').value
  const amount = parseInt(document.getElementById('add-amount').value)
  const pin =parseInt( document.getElementById('add-pin').value)

  const avlBalance = parseInt(document.getElementById('avl-balance').innerText)
   if(account.length <11){
    alert('please  valid your account number')
    return
   }

   if(pin !== pinNub){
    alert('please valid your pin')
    return ;
   }
  
  const totalNewAmount = amount + avlBalance

  document.getElementById('avl-balance')
  .innerText =totalNewAmount

})

// cash out  section//

document.getElementById('add-button')
.addEventListener('click', function(){
  document.getElementById('cash-out-parent').style.display ='none'
  document.getElementById('add-money-parent').style.display ='block'
})
document.getElementById('cash-button')
.addEventListener('click', function(){
    document.getElementById('add-money-parent').style.display ='none'
  document.getElementById('cash-out-parent').style.display ='block'
  
})
 
const creatPin = 1234

document.getElementById('btn-withdraw')
.addEventListener('click', function(e){
  e.preventDefault()
  
  const agentNumber =document.getElementById('agent-number').value
 const  withdrawAmount = parseInt(document.getElementById('withdraw-amount').value)
 const withdrawPin = parseInt(document.getElementById('withdraw-pin').value)

 const avlBalance = parseInt(document.getElementById('avl-balance').innerText)
 if(agentNumber.length <11){
  alert('please valid your agent number')
  return
 }
 if(withdrawPin !== creatPin ){
  alert('please valid  your pin')
  return
 }

 const totalNewAmount =avlBalance -withdrawAmount
document.getElementById('avl-balance')
.innerText =totalNewAmount


})

// transfer money//

document.getElementById('btn-transfer')
.addEventListener('click', function(e){
  e.preventDefault()

  const 
})