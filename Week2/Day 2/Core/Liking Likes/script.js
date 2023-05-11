var like_1 = document.querySelector("#btn-1");
var like_2 = document.querySelector("#btn-2");
var like_3 = document.querySelector("#btn-3");

var counter_1 =0, counter_2 =0,counter_3 =0;
function count_1(){
    counter_1 = parseInt(like_1.innerHTML);
    counter_1 += 1;
    like_1.innerHTML=counter_1;
}
function count_2(){
    counter_2 = parseInt(like_2.innerHTML);
    counter_2 += 1;
    like_2.innerHTML=counter_2;
}
function count_3(){
    counter_3 = parseInt(like_3.innerHTML);
    counter_3 += 1;
    like_3.innerHTML=counter_3;
}

setTimeout(myFunction, 13000);
function myFunction() {
    alert('Hello');
}