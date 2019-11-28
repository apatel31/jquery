
var imgs = $("img");
var msg = "Hover over an image below."

$.each(imgs,function(i) {
    $(imgs[i]).mouseover(function(){
        $('#image').css("backgroundImage", "url("+imgs[i].src+"')")
        $("#image").html(imgs[i].alt)
    })

    $(imgs[i]).focus(function(){
        $('#image').css("backgroundImage", "url("+imgs[i].src+"')")
        $("#image").html(imgs[i].alt)
    })

    $(imgs[i]).mouseleave(function(){
        $('#image').css("backgroundImage", "url('')")
        $("#image").html(msg)
    })

    $(imgs[i]).blur(function(){
        $('#image').css("backgroundImage", "url('')")
        $("#image").html(msg)
    })


    })















    var validInput = true;
    var name = document.querySelector("#fullname")
    var address = document.querySelector("#streetaddr")
    console.log("Here");
    console.log(name);
    console.log(address)
    if (name.value.length == 0){
        document.querySelector("#nameerrormsg").style.display = "block"; 
        validInput = false;
    }
    else {
        document.querySelector("#nameerrormsg").style.display = "none";
    }

    if (address.value.length == 0){
        document.querySelector("#addrerrormsg").style.display = "block"; 
        validInput = false;
    }
    else {
        document.querySelector("#addrerrormsg").style.display = "none"; 
    }

    return validInput;
}

    </script>