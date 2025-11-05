$( document ).ready(function() {
    
    var envelope = $('#envelope');
    var btn_open = $("#open");
    var btn_reset = $("#reset");
    
    envelope.click( function() {
        open();
    });
    btn_open.click( function() {
        open();
    });
    btn_reset.click( function() {
        close();
    });

    function open() {
        envelope.addClass("open")
           .removeClass("close");
    }
    function close() {
        envelope.addClass("close")
           .removeClass("open");
    }
    const letter = document.querySelector('.letter');

    // load saved note if available
    letter.innerHTML = localStorage.getItem('note') || letter.innerHTML;
    
    // save note whenever user types
    letter.addEventListener('input', () => {
      localStorage.setItem('note', letter.innerHTML);
    });
});