// CLEAR SCREEN
function clearScreen(){
    let x = document.getElementById('display');
    x.innerHTML = "";
}
// display 
function display(val) {
    // document.getElementById('display').value+=val;
    var a = document.getElementsByTagName('input');
    document.getElementById('display').innerHTML += val;
}
function backSpace(){
    document.querySelector('.cancel-btn').innerHTML -= "";
}