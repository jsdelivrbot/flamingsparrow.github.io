function saythatwaseasy() {
var thatwaseasy = new Audio("that_was_easy.mp3");
thatwaseasy.play();
}
$("#easy").on("click", saythatwaseasy);

$(document).keypress(delegateKeypress);

function delegateKeypress(event){
    if (event.charCode == 32){
        $("easy").trigger("click");
    }
}