const celcius = document.getElementById("celcius");
const fahrenheit = document.getElementById("fahrenheit");
const kelvin = document.getElementById("kelvin");

const inputs = document.querySelectorAll("input");

for (let i = 0; i < inputs.length; i++) {
  let inputField = inputs[i];

  inputField.addEventListener("input", function (e) {
    let value = parseFloat(e.target.value);
    // console.log(value);

    switch (e.target.name) {
      case "celcius":
        fahrenheit.value = value * 1.8 + 32;
        kelvin.value = value + 273.15;
        break;
      case "fahrenheit":
        celcius.value = (value - 32) / 1.8;
        kelvin.value = (value - 32) / 1.8 + 273.15;
        break;
      case "kelvin":
        celcius.value = value - 273.15;
        fahrenheit.value = (value - 273) * 1.8 + 32;
        break;
    }
  });
}






















// if (e.target.name == "celcius") {
//   fahrenheit.value = value * 1.8 + 32;
//   kelvin.value = value + 273.15;
// }

// if (e.target.name == "fahrenheit") {
//   celcius.value = (value - 32) / 1.8;
//   kelvin.value = (value - 32) / 1.8 + 273.15;
// }

// if (e.target.name == "kelvin") {
//   celcius.value = value - 273.15;
//   fahrenheit.value = (value - 273) * 1.8 + 32;
// }
