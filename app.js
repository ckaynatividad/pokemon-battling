


const submit = document.getElementById('submit');

submit.addEventListener('click', ()=>{
    const selected = document.querySelectorAll('input[type=radio]:checked');

    if (selected.length > 3 || selected.length < 3) {
        alert('Please only choose three.');
        window.location.reload();
    } else {
        window.location = './battle';
    }
});