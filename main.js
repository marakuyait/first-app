function temperatureConvertor() {
  const degree = Number(document.getElementById("degree").value);
  const options = document.getElementById("options").value;
  const convertIn = document.getElementById("convertIn").value;
  let result;

  if (options === "celsius" && convertIn === "fahrenheit") {
    result = (degree * 9) / 5 + 32;
    document.getElementById("result").textContent = `${result.toFixed(2)} F`;
  } else if (options === "fahrenheit" && convertIn === "celsius") {
    result = ((degree - 32) * 5) / 9;
    document.getElementById("result").textContent = `${result.toFixed(2)} C`;
  } else {
    document.getElementById("result").textContent = `${degree.toFixed(2)} ${
      convertTo === "celsius" ? "°C" : "°F"
    }`;
  }
}
