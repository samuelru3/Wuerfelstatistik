
function move() {

    const cb = document.getElementById('accept');
    console.log(cb.checked);


    var i = 0;
    if (i == 0) {
        i = 1;
        var elem = document.getElementById("myBar");
        var width = 0;
        var anzahl = 0;
        anzahl = document.getElementById("anzahl").value;
        
        if (cb.checked) {
            anzahl = 1;
        }
        var id = setInterval(frame, anzahl);
        function frame() {
            if (width >= 100) {
                clearInterval(id);
                i = 0;
            } else {
                width += 0.5;
                elem.style.width = width + "%";
                elem.innerHTML = `Loading...${width}​​​​​​​​%`;
            }
            if (width == 100) {

                let eins = 0;
                let zwei = 0;
                let drei = 0;
                let vier = 0;
                let fünf = 0;
                let sechs = 0;
                var anzahl = document.getElementById("anzahl").value;
                for (let index = 1; index <= anzahl; index++) {
                    let wuerfel = Math.floor(Math.random() * 6) + 1;
                    switch (wuerfel) {
                        case 1:
                            eins++;
                            break;

                        case 2:
                            zwei++;
                            break;
                        case 3:
                            drei++;
                            break;
                        case 4:
                            vier++;
                            break;
                        case 5:
                            fünf++;
                            break;
                        case 6:
                            sechs++;
                            break;
                        default:
                            break;
                    }
                }
                document.getElementById("1").innerHTML = eins;
                document.getElementById("2").innerHTML = zwei;
                document.getElementById("3").innerHTML = drei;
                document.getElementById("4").innerHTML = vier;
                document.getElementById("5").innerHTML = fünf;
                document.getElementById("6").innerHTML = sechs;
            }
        }
    }
}

