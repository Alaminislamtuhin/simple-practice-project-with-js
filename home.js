
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
    alert('please check your pin')
    return ;
   }
  
  const totalNewAmount = amount + avlBalance

  document.getElementById('avl-balance')
  .innerText =totalNewAmount

})


// cash out setion//
 
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

const creatPinNumber =1234;

document.getElementById('btn-transfer')
.addEventListener('click', function(e){
  e.preventDefault()

  const userNumber = document.getElementById('user-number').value
  const userAmount = parseInt(document.getElementById('transfer-amount').value)
  const userPin = parseInt(document.getElementById('transfer-pin').value)

  const avlBalance =parseInt(document.getElementById('avl-balance').innerText)

  

  if(userNumber.length <11 ){
    alert('please check your number')
    return
  }
  if(userPin !== creatPinNumber){
    alert('please check your pin ')
    return;
  }
  const totalNewAmount = avlBalance - userAmount
  document.getElementById('avl-balance').innerText =totalNewAmount
})

// get bonus//
const couponCode ='BONUS50'

document.getElementById('btn-get-bonus')
.addEventListener('click', function(e){
  e.preventDefault()
 
  const getBonus =document.getElementById('get-bonus-coupon').value.trim()


  const avlBalance = parseInt(document.getElementById('avl-balance').innerText)
  const bonusAmount = 50;
  const totalNewAmount = avlBalance + bonusAmount

   document.getElementById('avl-balance').innerText =totalNewAmount
   
   if(getBonus===couponCode){
     alert('add bonus successfully')
  return
    
   }
  else{
    alert('please keep your coupon code')
    return
   }
 
 
})

// pay bill section//

const payPin = 1234;

document.getElementById('btn-pay-bill')
.addEventListener('click', function(e){
  e.preventDefault()
  
  const payBill = document.getElementById('pay-bill').value
  const payBillNumber = document.getElementById('pay-bill-number').value
  const payAmount = parseInt(document.getElementById('pay-amount').value)
  const pin =parseInt(document.getElementById('pay-pin').value)
   
  const avlBalance = parseInt(document.getElementById('avl-balance').innerText)
  
  if(payBillNumber.length<11){
    alert('please check your number')
    return
  }
  if(pin !== payPin){
    alert('please check your pin ')
    return
  }

  const totalNewAmount = avlBalance -payAmount
  document.getElementById('avl-balance').innerText = totalNewAmount
})


















// click button and block or none button//

document.getElementById('add-button')
.addEventListener('click', function(){
  document.getElementById('cash-out-parent').style.display ='none'
  document.getElementById('Transfer-Money-parent').style.display ='none'
   document.getElementById('get-bonus-parent').style.display ='none'
   document.getElementById('pay-bill-parent').style.display ='none'
  document.getElementById('add-money-parent').style.display ='block'
})
document.getElementById('cash-button')
.addEventListener('click', function(){
    document.getElementById('add-money-parent').style.display ='none'
    document.getElementById('Transfer-Money-parent').style.display ='none'
     document.getElementById('get-bonus-parent').style.display ='none'
     document.getElementById('pay-bill-parent').style.display ='none'
  document.getElementById('cash-out-parent').style.display ='block'
  
})

document.getElementById('transfer-button')
.addEventListener('click', function(){
    document.getElementById('add-money-parent').style.display ='none'
  document.getElementById('cash-out-parent').style.display ='none'
   document.getElementById('get-bonus-parent').style.display ='none'
   document.getElementById('pay-bill-parent').style.display ='none'
  document.getElementById('Transfer-Money-parent').style.display ='block'
  
})
document.getElementById('get-bonus-button')
.addEventListener('click', function(){
    document.getElementById('add-money-parent').style.display ='none'
  document.getElementById('cash-out-parent').style.display ='none'
  document.getElementById('Transfer-Money-parent').style.display ='none'
  document.getElementById('pay-bill-parent').style.display ='none'
  document.getElementById('get-bonus-parent').style.display ='block'
  
})

document.getElementById('pay-bill-button')
.addEventListener('click', function(){
    document.getElementById('add-money-parent').style.display ='none'
  document.getElementById('cash-out-parent').style.display ='none'
  document.getElementById('Transfer-Money-parent').style.display ='none'
  document.getElementById('get-bonus-parent').style.display ='none'
  document.getElementById('pay-bill-parent').style.display ='block'
  
})
