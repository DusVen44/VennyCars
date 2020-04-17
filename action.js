//Function to toggle View Modes
function minimal() {
    $(".navbar").on("click", ".view-mode", function() {
        $("iframe").toggle();
        $(".car").toggleClass("small-car");
        if (this.innerHTML == "Show Minimal View") {
            this.innerHTML = "Show Full View";
        } else {
            this.innerHTML = "Show Minimal View";
        };
    });
}

minimal();