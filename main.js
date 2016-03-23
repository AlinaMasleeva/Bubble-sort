"use strict";

(function () {
    var number = document.querySelectorAll('#number input'),
        start = document.getElementById('start'),
        result = document.getElementById('result'),
        btnNext = document.getElementById('step'),
        min = 0,
        max = 0;

    start.onclick = function() {
        loadData(number, result);
    };

    function loadData(elemArray, resultDiv) {
        resultDiv.innerHTML = '';
        min = 0;
        max = elemArray.length - 1;

        for (var i = 0; i < elemArray.length; i++) {
            var val = elemArray[i].value;
            var newBox = document.createElement('div');
            newBox.innerHTML = val;
            newBox.className = 'new-box';
            resultDiv.appendChild(newBox);
        }
        btnNext.className = 'btn';
    }

    btnNext.onclick = animateStep;
    function animateStep() {
        var boxes = document.querySelectorAll('#result div');

        if (min == max) {
            if (min == 0 && max == 0) {
                alert('DONE!!!');
                btnNext.className = 'btn hidden';
            }
            min = 0;
            max--;
            animateStep();
            return;
        }
        for(var i=0; i < boxes.length; i++){
            boxes[i].style.backgroundColor = 'grey';
        }

        var left = parseInt(boxes[min].innerHTML);
        var right = parseInt(boxes[min + 1].innerHTML);

        if (left > right) {
            boxes[min].style.backgroundColor = boxes[min + 1].style.backgroundColor = 'red';
            var a = boxes[min].innerHTML;
            boxes[min].innerHTML = boxes[min + 1].innerHTML;
            boxes[min + 1].innerHTML = a;
        }
        else {
            boxes[min].style.backgroundColor = boxes[min + 1].style.backgroundColor = 'green';
        }
        min++;
    }
})();
