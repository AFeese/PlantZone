// function stateDropDown() {
//   var stateList = document.getElementById("stateList");
//   document.getElementById("selectedState").value =
//     stateList.options[stateList.selectedIndex].text;
// }

function stateDropDown() {
  var stateList = document.getElementById("stateList");

  document.getElementById("selectedState").value =
    stateList.options[stateList.selectedIndex].text;

  // if ("selectedState".value === "North Carolina") {
  //   document.getElementById("zoneNumber").value = "7";
  // }

  // if ("selectedState".value === "North Carolina") {
  //   document.getElementById("zoneNumber").value = "7";
  // }

  if (document.getElementById("selectedState").value === "North Carolina") {
    document.getElementById("zoneNumber").value = "7";
  }
  console.log(document.getElementById("selectedState").value);
}
