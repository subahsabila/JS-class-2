let inc = document.querySelector('.inc');
let input = document.querySelector('.input');
let dec = document.querySelector('.dec')

inc.addEventListener('click', function(){
if( Number(input.value) < 15){
  input.value = Number(input.value) + 1
}else{
  alert('Maximum 15 items can be purchased')
}
})

dec.addEventListener('click', function(){
  if(Number(input.value) > 1){
    input.value = Number(input.value) - 1
 }else{
  alert('At least 1 product needs to be purchased')
 }

})


let on = document.querySelector('.on')
let img = document.querySelector('.img')
let off = document.querySelector('.off')
on.addEventListener('click', function(){
  img.src = './images/on.png'
})
off.addEventListener('click', function(){
  img.src = './images/off.png'
})

const pswToggler = document.querySelector('.passwordToggler')
let formInput = document.querySelector('.formInput')
pswToggler.addEventListener('click', function(){
  if(formInput.type == 'password'){
    formInput.type = 'text'
    pswToggler.innerHTML = '<i class="bi bi-eye"></i>'

  }else{
    formInput.type = 'password'
    pswToggler.innerHTML = '<i class="bi bi-eye-slash"></i>'
  }
  
})