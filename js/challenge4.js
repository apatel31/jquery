// JQuery Code
$('#ch4form').submit(function() {
    var name = $("#fullname").val();
    var address = $("#streetaddr").val();
    var validInput = true;


    if (name.length == 0) {
        $("#nameerrormsg").css("display", "block");
        validInput = false;
    }

    else {
        $("#nameerrormsg").css("display", "none");
    }

    if (address.length == 0) {
        $("#addrerrormsg").css("display", "block");
        validInput = false;
    }

    else {
        $("addrerrormsg").css("display", "none");
    }

    return validInput
})




// Javascript Code
// ch4form.onsubmit = function() {
//     var validInput = true;
//     var name = document.querySelector("#fullname")
//     var address = document.querySelector("#streetaddr")
  
//     if (name.value.length == 0){
//         document.querySelector("#nameerrormsg").style.display = "block"; 
//         validInput = false;
//     }
//     else {
//         document.querySelector("#nameerrormsg").style.display = "none";
//     }

//     if (address.value.length == 0){
//         document.querySelector("#addrerrormsg").style.display = "block"; 
//         validInput = false;
//     }
//     else {
//         document.querySelector("#addrerrormsg").style.display = "none"; 
//     }

//     return validInput;
// }