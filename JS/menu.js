document.addEventListener('DOMContentLoaded', () => {
    const lista = document.querySelectorAll('.lista');

    function ativaLink() {
        lista.forEach(i => i.classList.remove('ativo'));
        this.classList.add('ativo');
    }

    lista.forEach(i => i.addEventListener('click', ativaLink));
});

// menu sanduiche
$(document).ready(function(){
    $('.mobile_btn').on('click', function(){
      $('.mobile_menu').toggleClass('active');
      $('.mobile_btn').find('i').toggleClass('fa-x');
    });
  })