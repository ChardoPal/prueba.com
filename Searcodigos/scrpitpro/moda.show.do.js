document.addEventListener('DOMContentLoaded', function () {
    var modal = document.getElementById('modal');
    var openModalBtn = document.getElementById('openModalBtn');
    var span = document.getElementsByClassName('close')[0];

    openModalBtn.onclick = function () {
        modal.style.display = 'block';
    };

    span.onclick = function () {
        modal.style.display = 'none';
    };

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    };
});