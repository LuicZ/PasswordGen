
let inputEl = document.getElementById("value-input")
const buttonEl = document.getElementById("convert-btn")
const lengthResult = document.getElementById("length-result")
const volumeResult = document.getElementById("volume-result")
const massResult = document.getElementById("mass-result")   

const meter = 3.281 
const liter = 0.264
const kilogram = 2.204
lengthResult.innerHTML = `1 meter = ${meter.toFixed(3)} feet | 1 foot = ${(1 / meter).toFixed(3)} meters`
volumeResult.innerHTML = `1 liter = ${liter.toFixed(3)} gallons | 1 gallon = ${(1 / liter).toFixed(3)} liters`
massResult.innerHTML = `1 kilogram = ${kilogram.toFixed(3)} pounds | 1 pound = ${(1 / kilogram).toFixed(3)} kilograms`
buttonEl.addEventListener("click", function(){
    const inputValue = inputEl.value
    const lengthValue = inputValue * meter
    const volumeValue = inputValue * liter
    const massValue = inputValue * kilogram
     lengthResult.innerHTML = `${inputValue} meters = ${lengthValue.toFixed(3)} feet | ${inputValue} feet = ${(inputValue / meter).toFixed(3)} meters`
     volumeResult.innerHTML = `${inputValue} liters = ${volumeValue.toFixed(3)} gallons | ${inputValue} gallons = ${(inputValue / liter).toFixed(3)} gallons`
    massResult.innerHTML = `${inputValue} kilograms = ${massValue.toFixed(3)} pounds |  ${inputValue} pounds = ${(inputValue / kilogram).toFixed(3)} kilograms`
})