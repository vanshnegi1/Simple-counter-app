document.addEventListener('DOMContentLoaded',()=>{
const coubterValue = document.getElementById("counter-value");
const increaseBtn = document.getElementById("increase-btn");
const decreaseBtn = document.getElementById("decrease-btn");
const resetBtn = document.getElementById("reset-btn");

let count =0;
increaseBtn.addEventListener('click',()=>{
    count=count+3;
    coubterValue.textContent=count;
});

decreaseBtn.addEventListener('mouseenter',()=>{
        count --;
        coubterValue.textContent=count;
    });

resetBtn.addEventListener('click',()=>{
            count =0;
            coubterValue.textContent=count;

});
});