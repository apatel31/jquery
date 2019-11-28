

// var frt = $('input[name="fruit"]')
$("#ch3form").submit(function() {
    var frt = $('input[name="fruit"]')
    var stndng = $('input[name="standing"]')

    if((frt.is(':checked')) && (stndng.is(':checked'))) {
        return true;
    }

    else {
        alert("pick fruit and standing")
        return false;
    }



    // Advanced Answer
    // if(document.querySelector('input[name="fruit"]:checked'))
    //     return true;
    
    // alert("You must pick a fruit!")
    // return false;
  }