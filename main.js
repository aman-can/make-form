function others(any) {
  var element = document.getElementById("other");
  if (any == "Other") {
    element.style.display = "block";
    hideselect1();
  } else element.style.display = "none";
}

function specific_times(any) {
  var element = document.getElementById("specific_time");
  if (any == "some specific time") {
    element.style.display = "block";
    hideselect();
  } else element.style.display = "none";
}

function hideselect1() {
  var element = document.getElementById("dropdown1");
  element.style.display = "none";
}

function hideselect() {
  var element = document.getElementById("dropdown");
  element.style.display = "none";
}

window.setTimeout(function () {
  alert(
    "This form does not get any data to me ,so just don't type anything and press submit.If you really want to show this to me then send me a screenshot of this form filled."
  );
}, 100);
