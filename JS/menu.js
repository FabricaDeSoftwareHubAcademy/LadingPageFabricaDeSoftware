document.addEventListener('DOMContentLoaded', () => {
    const lista = document.querySelectorAll('.lista');

    function ativaLink() {
        lista.forEach(i => i.classList.remove('ativo'));
        this.classList.add('ativo');
    }

    lista.forEach(i => i.addEventListener('click', ativaLink));
});