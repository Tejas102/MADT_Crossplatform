
document.addEventListener("deviceready", abc);

function abc() {
    alert("Device is ready");
    alert("Model " + device.model);
    alert("Cordova Version: " + device.cordova);
    document.getElementById("version").innerHTML = device.cordova;
    document.getElementById("plat").innerHTML = device.platform;
    document.getElementById("model").innerHTML = device.model;
  //  document.getElementById("os").innerHTML = device.os;
    document.getElementById("manu").innerHTML = device.manufacturer;

    document.getElementById("vibrateButton", vibrateButtonPressed);

}
function vibrateButtonPressed() {
  alert("Vibrate button pressed");
  navigator.vibrate(3000);
}
