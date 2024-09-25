document.addEventListener('DOMContentLoaded', function() {
    const storedData = localStorage.getItem('inputData');
    document.getElementById('data').innerText = storedData ? storedData : 'No hay datos ingresados';
});
