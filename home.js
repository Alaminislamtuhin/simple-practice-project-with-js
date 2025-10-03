
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
    alert('please submited valid your pin')
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