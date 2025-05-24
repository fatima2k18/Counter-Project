const counterValue = document.getElementById('counterValue');
const incrementBtn = document.getElementById('incrementBtn');
const decrementBtn = document.getElementById('decrementBtn');
const clearBtn = document.getElementById('clearBtn');
const errorMsg = document.getElementById('errorMsg');

let count = 0;

function updateUI() {
  counterValue.textContent = count;
  clearBtn.style.display = count > 0 ? 'inline-block' : 'none';

  // Hide error if count is valid
  if (count > 0) {
    errorMsg.style.display = 'none';
  }
}

incrementBtn.addEventListener('click', () => {
  count++;
  updateUI();
});

decrementBtn.addEventListener('click', () => {
  if (count === 0) {
    errorMsg.style.display = 'block';
  } else {
    count--;
    updateUI();
  }
});

clearBtn.addEventListener('click', () => {
  count = 0;
  updateUI();
  errorMsg.style.display = 'none';
});