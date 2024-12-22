let numEl = document.getElementById("number-el-one"),
    numElTwo = document.getElementById("number-el-two"),
    againEl =document.getElementById("againEl");
    
let count = 0;
let countg = 0;

function home1() {
    count += 1
    numEl.textContent = count;
}
function home2() {
    count += 2
    numEl.textContent = count;   
}
function home3() {
    count += 3
    numEl.textContent = count; 
}

function guest1() {
    countg += 1
    numElTwo.textContent = countg;
}

function guest2() {
    countg += 2
    numElTwo.textContent = countg;
}

function guest3() {
    countg += 3
    numElTwo.textContent = countg;
}

againEl.addEventListener("click", function(){
    count = 0
    numEl.textContent = 0
    countg = 0
    numElTwo.textContent = 0
})