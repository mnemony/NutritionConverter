const fatPercent = function (fatGet) {
    console.log(fatGet);
}



//main converting function
document.getElementById("baseForm").addEventListener("submit", newFunction);


function newFunction() {
    //gather and process all input data

    let carbsGet = document.getElementById("inputCarbs").value;
    let sugarGet = document.getElementById("inputSugar").value;
    let fatGet = document.getElementById("inputFat").value;
    let satGet = document.getElementById("inputSat").value;
    let proGet = document.getElementById("inputPro").value;
    let saltGet = document.getElementById("inputSalt").value;
    let fiberGet = document.getElementById("inputFiber").value;

    //put data in table and round it

    document.getElementById("tableFat").textContent = (Number(fatGet)).toFixed(1);
    document.getElementById("tableSat").textContent = (Number(satGet)).toFixed(1);
    document.getElementById("tableCarb").textContent = (Number(carbsGet)).toFixed(1);
    document.getElementById("tableSug").textContent = (Number(sugarGet)).toFixed(1);
    document.getElementById("tablePro").textContent = (Number(proGet)).toFixed(1);
    document.getElementById("tableFib").textContent = (Number(fiberGet)).toFixed(1);
    document.getElementById("tableSalt").textContent = (Number(saltGet)).toFixed(2);


    //calculate the energy value of the product

    let totalKcal = ((Number(fatGet)).toFixed(1) * 9 + (Number(carbsGet)).toFixed(1) * 4 +
        (Number(proGet)).toFixed(1) * 4 + (Number(fiberGet)).toFixed(1) * 2).toFixed(0);

    document.getElementById("tableKcal").textContent = totalKcal;

    let totalSum = Number(fatGet).toFixed(1) * 1 + Number(satGet).toFixed(1) * 1 +
        (Number(carbsGet)).toFixed(1) * 1 + (Number(sugarGet)).toFixed(1) * 1 + (Number(proGet)).toFixed(1) * 1 +
        (Number(fiberGet)).toFixed(1) * 1 + (Number(saltGet)).toFixed(2) * 1;

    //calculate RDI %
    document.getElementById("perKcal").textContent = (totalKcal / 20).toFixed();
    document.getElementById("perFat").textContent = ((Number(fatGet)).toFixed(1) / 0.7).toFixed();
    document.getElementById("perSat").textContent = ((Number(satGet)).toFixed(1) / 0.2).toFixed();
    document.getElementById("perCarb").textContent = ((Number(carbsGet)).toFixed(1) / 2.6).toFixed();
    document.getElementById("perSug").textContent = ((Number(sugarGet)).toFixed(1) / 0.9).toFixed();
    document.getElementById("perPro").textContent = ((Number(proGet)).toFixed(1) / 0.5).toFixed();
    document.getElementById("perSalt").textContent = ((Number(saltGet)).toFixed(2) / 0.06).toFixed();



    //check any nutritional statement available    
    if (totalSum > 100 || (satGet > fatGet) || sugarGet > carbsGet) {
        document.getElementById("justError").removeAttribute("hidden");

    } else {
        document.getElementById("justError").setAttribute("hidden", 'true');

    }

    if (totalKcal <= 40) {
        document.getElementById("lowEnergy").removeAttribute("hidden");
    } else {
        document.getElementById("lowEnergy").setAttribute("hidden", 'true');
    }

    if (fatGet <= 3) {
        document.getElementById("lowFat").removeAttribute("hidden");
    } else {
        document.getElementById("lowFat").setAttribute("hidden", 'true');
    }

    if (fatGet <= 0.5) {
        document.getElementById("fatFree").removeAttribute("hidden");
    } else {
        document.getElementById("fatFree").setAttribute("hidden", 'true');
    }

    if (satGet <= 1.75) {
        document.getElementById("lowSat").removeAttribute("hidden");
    } else {
        document.getElementById("lowSat").setAttribute("hidden", 'true');
    }

    if (satGet <= 0.1) {
        document.getElementById("freeSat").removeAttribute("hidden");
    } else {
        document.getElementById("freeSat").setAttribute("hidden", 'true');
    }

    if (sugarGet <= 5) {
        document.getElementById("lowSug").removeAttribute("hidden");
    } else {
        document.getElementById("lowSug").setAttribute("hidden", 'true');
    }

    if (sugarGet <= 0.5) {
        document.getElementById("freeSug").removeAttribute("hidden");
    } else {
        document.getElementById("freeSug").setAttribute("hidden", 'true');
    }

    if (saltGet <= 0.12) {
        document.getElementById("lowSalt").removeAttribute("hidden");
    } else {
        document.getElementById("lowSalt").setAttribute("hidden", 'true');
    }

    if (saltGet <= 0.04) {
        document.getElementById("vlowSalt").removeAttribute("hidden");
    } else {
        document.getElementById("vlowSalt").setAttribute("hidden", 'true');
    }

    if (saltGet <= 0.005) {
        document.getElementById("saltFree").removeAttribute("hidden");
    } else {
        document.getElementById("saltFree").setAttribute("hidden", 'true');
    }

    if (fiberGet >= 3) {
        document.getElementById("fibSor").removeAttribute("hidden");
    } else {
        document.getElementById("fibSor").setAttribute("hidden", 'true');
    }

    if (fiberGet >= 6) {
        document.getElementById("fibHigh").removeAttribute("hidden");
    } else {
        document.getElementById("fibHigh").setAttribute("hidden", 'true');
    }

    //compare protein energy value to total
    let protEnValue = (400 * (Number(proGet)).toFixed(1) / totalKcal);

    if (protEnValue >= 12) {
        document.getElementById("proSor").removeAttribute("hidden");
    } else {
        document.getElementById("proSor").setAttribute("hidden", 'true');
    }

    if (protEnValue >= 20) {
        document.getElementById("proHigh").removeAttribute("hidden");
    } else {
        document.getElementById("proHigh").setAttribute("hidden", 'true');
    }



    //set width of progress bars

    document.getElementById("energyBar").style["width"] = `${document.getElementById("perKcal").textContent}%`;
    document.getElementById("carbsBar").style["width"] = `${document.getElementById("perCarb").textContent}%`;
    document.getElementById("fatBar").style["width"] = `${document.getElementById("perFat").textContent}%`;
    document.getElementById("protBar").style["width"] = `${document.getElementById("perPro").textContent}%`;
    document.getElementById("saltBar").style["width"] = `${document.getElementById("perSalt").textContent}%`;




}