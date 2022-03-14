function stateDropDown() {
  var stateList = document.getElementById("stateList");
  document.getElementById("selectedState").value =
    stateList.options[stateList.selectedIndex].text;
}
