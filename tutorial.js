$(function(){ // On ready - jQuery function
    function display(bool){ // Bool is either true or false
        if (bool){ // If true, show the container
            $(".container").show();
        } else { // If false, hide the container
            $(".container").hide();
        }
    }

    display(false); // When the resource is started, the menu is not shown by default.
})

window.addEventListener("message", function(event){ // Have the window listen for the 'message' event from the LUA file.
    if (event.type == "ui"){ // If 'type' is equal to "ui"
        display(event.bool); // Use the bool variable passed in the NUI message
    }
})

const resource_name = "Aurum_Helpmenu";

function post(callbackString, arguments){
    $.post("http://"+resource_name+"/"+callbackString, JSON.stringify(arguments)) // The string is formatted as follows: 'http://' - General prefix - 'Aurum_Helpmenu' - Resource name - 'exit' - The string of the callback.
}
/*
In Client LUA File:


function setDisplay(bool)
    SetNUIFocus(bool, bool)
    SendNUIMessage({
        type:"ui",
        display:bool
    })
end

RegisterNUICallback("exit", function()
    setDisplay(false)
end)
*/