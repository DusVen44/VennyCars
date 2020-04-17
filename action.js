//Function to show Minimal View
function minimal() {
    $(".navbar").on("click", ".view-mode", function() {
        $("iframe").toggle();
        $(".car").toggleClass("small-car");
    })
}

minimal();