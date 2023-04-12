var energia = false;

function general(geral) {
    if (geral == 0) {
        energia = false;
        btngeral = "assets/btn-general-off.png";
        lampred = "assets/red-light-off.png";
        generalSw.setAttribute("onclick", "general(1)");
        motor.setAttribute("class", "motor-off");
    }

    if (geral == 1) {
        energia = true;
        btngeral = "assets/btn-general-on.png";
        lampred = "assets/red-light-on.png";
        generalSw.setAttribute("onclick", "general(0)");
    }
    document.getElementById("generalSw").src = btngeral;
    document.getElementById("redLight").src = lampred;
}