let counter = 0;
function count() {
    counter += 1;
    document.getElementById('counter').innerHTML = counter;
    if (counter % 10 === 0)
    {
        alert(`${counter} is a multiple of 10!`);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('btn1').onclick = count;
});