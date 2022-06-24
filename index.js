let sumEl = document.getElementById('sum-el')

function add(){
   let num1 =  parseInt(document.getElementById('num1-el').value)
   let num2 = parseInt(document.getElementById('num2-el').value)

   const sum = num1 + num2
   sumEl.textContent = "Result is " + sum
}
function subtract(){
   let num1 =  parseFloat(document.getElementById('num1-el').value)
   let num2 = parseFloat(document.getElementById('num2-el').value)

   const sum = num1 - num2
   sumEl.textContent = `Result: ${sum}`
}
function multiply(){
   let num1 =  parseInt(document.getElementById('num1-el').value)
   let num2 = parseInt(document.getElementById('num2-el').value)

   const sum = num1 * num2
   console.log(sum)
}