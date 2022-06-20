let count=0;
var value= document.getElementById('value');

function inc(){
    count++;
    console.log(count);
    value.textContent=count;    
    console.log(value);
}

function dec(){
    count--;
    console.log(count);
    value.textContent=count;
    console.log(value);



}

function reset(){
count=0;
console.log(count);
value.textContent=count;
console.log(value);



}
// value.textContent=count;

