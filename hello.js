document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('hello-form').onsubmit = function() {
        let name = document.getElementById('name').value;
        document.querySelector('h2').innerHTML = name + '!';
        event.preventDefault();
    };
    
});