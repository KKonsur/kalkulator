const form = document.getElementById('form')
const amountInput = document.getElementById('amount')
const resetBtn = document.getElementById('reset-button')

form.addEventListener('submit', (e) => {
   e.preventDefault()
   const pages = Number(document.getElementById('pages').value)
   let price = 0
   if (pages === 1) {
      price = 1
   } else if (pages <= 10) {
      price = pages * 0.5;
   } else if (pages <= 20) {
      price = 10 * 0.5 + (pages - 10) * 0.4;
   } else {
      price = 10 * 0.5 + 10 * 0.4 + (pages - 20) * 0.3;
   } 
   amountInput.textContent = `${price.toFixed(2)} zł`
})

resetBtn.addEventListener('click', () => {
   price = 0
   amountInput.textContent = `${price.toFixed(2)} zł`
   sheetsNumber.value = 0
})
