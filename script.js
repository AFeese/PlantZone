// function stateDropDown() {
//   var stateList = document.getElementById("stateList");
//   document.getElementById("selectedState").value =
//     stateList.options[stateList.selectedIndex].text;
// }

function stateDropDown() {
	var stateList = document.getElementById("stateList");

	document.getElementById("selectedState").value =
		stateList.options[stateList.selectedIndex].text;

	//need to create loop? or array? for selected state.
	//Might save some space.

	if (document.getElementById("selectedState").value === "Arizona") {
		document.getElementById("zoneNumber").value = "2 through 5";
	}

	if (document.getElementById("selectedState").value === "Colorado") {
		document.getElementById("zoneNumber").value = "4 and 5";
	}

	if (document.getElementById("selectedState").value === "North Carolina") {
		document.getElementById("zoneNumber").value = "7";
		document.getElementById("plantPhoto").text = "Japanese Maple";
		document.getElementById("displayPhoto").src = "images/japanese_maple.jpg";
	}
	console.log(document.getElementById("selectedState").value);
	console.log(document.getElementById("plantPhoto").text);
}
