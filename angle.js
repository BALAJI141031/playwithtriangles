const angles = document.querySelectorAll('.angles')

const angleCheckBtn = document.querySelector('#check-btn')

const outputCon = document.querySelector("#output")

//console.log(angleCheckBtn)    

function getSumOfAngles(angle1, angle2, angle3) {
    return sum = (angle1 + angle2 + angle3)

}

function checkForTriangle() {
    var angle1 = angles[0].value
    var angle2 = angles[1].value
    var angle3 = angles[2].value

    let sum = getSumOfAngles(Number(angle1), Number(angle2), Number(angle3))
    //console.log(sum)

    if (sum === 180) {
        outputCon.innerText = "Yes these angles will form triangle"
    }
    else {
        outputCon.innerText = "Noo these angles didnot form the triangle"
    }


}

angleCheckBtn.addEventListener("click", checkForTriangle)