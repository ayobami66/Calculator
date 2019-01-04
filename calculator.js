const btns = document.querySelectorAll('.btn');
const screen = document.querySelector('.screen');
const equalBtn = document.querySelector('.btn-equal');
const clearBtn = document.querySelector('.btn-clear');
//console.log(btns)
for(let bunny=0; bunny<btns.length;bunny++){
btns[bunny].addEventListener('click', function(){
    let number = btns[bunny].getAttribute('data-num');
    screen.value+=number;
    console.log(number)
})};


equalBtn.addEventListener('click', function(){
    if(screen.value ===''){
        alert('Input is Empty')
    }
else { let result = eval(screen.value);
    screen.value = result
}
  
})
clearBtn.addEventListener('click',function(){
    screen.value='';
})

