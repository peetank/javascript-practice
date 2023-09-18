if (!localStorage.getItem('counter'))
{
    localStorage.setItem('counter', 0);
};

function count() {
    let counter = localStorage.getItem('counter');
    counter++;
    document.getElementById('counter').innerHTML = counter;
    localStorage.setItem('counter', counter);
};

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#counter').innerHTML = localStorage.getItem('counter');
    document.getElementById('btn1').onclick = count;
});