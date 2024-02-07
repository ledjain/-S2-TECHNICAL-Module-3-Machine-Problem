var buttons = document.querySelectorAll('.btn-container button');
var boxes = document.querySelectorAll('.box');

buttons.forEach(function(button, color) {
    button.addEventListener('click', function() {

        var targetBox = boxes[color];
        targetBox.style.transform = 'translateY(550px)';

        buttons.forEach(function(button, color) {
            button.addEventListener('click', function() {
                targetBox.style.transform = 'translateY(-50px)';
                targetBox.style.opacity = '0';
                targetBox = boxes[color];
                targetBox.style.transform = 'translatey(550px)';
                targetBox.style.opacity = '1';
            });
        });
    });
});
