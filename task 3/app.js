document.getElementById('convert-btn').addEventListener('click', function () {
    const celsiusInput = document.getElementById('celsius-input');
    const temperatureUnit = document.querySelector('input[name="temperature"]:checked').value;
  
    if (celsiusInput.value === '') {
      alert('Please enter a temperature value.');
      return;
    }
  
    const temperatureValue = parseFloat(celsiusInput.value);
  
    let resultValue;
    let resultUnit;
  
    if (temperatureUnit === 'celsius') {
      resultValue = (temperatureValue * 9 / 5) + 32;
      resultUnit = 'Fahrenheit';
    } else {
      resultValue = (temperatureValue - 32) * 5 / 9;
      resultUnit = 'Celsius';
    }
  
    document.querySelector('.result .value').textContent = resultValue.toFixed(2);
    document.querySelector('.result .unit').textContent = resultUnit;
  });