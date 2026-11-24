// Reusable quiz: <div class="quiz" data-answer="2" data-explain="..."><p class="q">..</p><button>..</button>...</div>
document.querySelectorAll('.quiz').forEach(function (q) {
  var ans = +q.dataset.answer, btns = q.querySelectorAll('button'), fb = document.createElement('p');
  fb.className = 'fb'; q.appendChild(fb);
  btns.forEach(function (b, i) {
    b.addEventListener('click', function () {
      if (i === ans) {
        b.classList.add('right');
        btns.forEach(function (x) { x.disabled = true; });
        fb.textContent = 'Correct. ' + (q.dataset.explain || '');
      } else {
        b.classList.add('wrong'); b.disabled = true;
        fb.textContent = 'Not quite. Try again.';
      }
    });
  });
});
