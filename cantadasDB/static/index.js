


let btn = document.querySelector('#copy');
btn.addEventListener('click', function (e) {
    let textArea = document.querySelector('.texto');
    textArea.select();
    document.execCommand('copy');

});

