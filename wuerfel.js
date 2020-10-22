function wurf() {
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



