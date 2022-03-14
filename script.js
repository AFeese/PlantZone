function stateDropDown() {
  var stateList = document.getElementById("stateList");
  document.getElementById("favorite").value =
    stateList.options[stateList.selectedIndex].text;
}
