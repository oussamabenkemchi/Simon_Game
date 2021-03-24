var buttonColor = ["red", "blue", "green", "yellow"]
var machineColors = []
var userColors = []
var match = true
var level = 1
var step = 0


const randomChosenColour = () => {
    let color = Math.floor(Math.random() * 4)
    return buttonColor[color]
}



function makeAnimation(color) {
    var audio = new Audio('sounds/' + color + '.mp3')
    audio.play()
    $("#" + color).fadeTo(100, 0.5).fadeTo(100, 1);

}

function test(table1, table2) {
    let x = table1.length
    var result = true
    for (let i = 0; i < x; i++) {
        if (table1[i] != table2[i]) result = false

    }
    return result

}

function machinePLay() {

    $("#level-title").text("level " + level)
    let color = randomChosenColour()
    console.log('color chosed  ' + color)
    machineColors.push(color)
    console.log('machineCOlors length is   ' + machineColors.length)
    makeAnimation(color)
    step = machineColors.length
    console.log('step ----  ' + step);
    level++
}



/* 
function userPlay(){
    let x=machineColors.length
    console.log('step1');
    do{
        console.log('lood do');
        $(".btn").on('click',function(event){
            let color=$(this).attr('id')
            userColors.push(color)
            console.log('userColors  ' + userColors)

            makeAnimation(color)
            
        })
        console.log('end loop');
        x--;
        result=test(userColors,machineColors)
        console.log("test result is  "+ result)

    }while(result && x>0)
   
   match = result 
   console.log('match result is  '+match )

} */



$(document).on('keypress', function () {

    machineColors = []
    userColors = []

    match = true
    step = 0
    level = 1

    machinePLay();





})


$(".btn").on('click', function (event) {
    step -= 1;
    console.log(' *****user step after press********* ' + step);

    userColors.push($(this).attr('id'))

    makeAnimation($(this).attr('id'))

    match = test(userColors, machineColors)



    if (match && step == 0) {
        userColors = []


        setTimeout(machinePLay, 700)

    } else
        if (!match) {

            $("h1").text("Game Over, Press Any Key to Restart")
            var audio = new Audio('sounds/wrong.mp3')
            audio.play()
            $("body").animate({backgroundColor:#665544})
        }

})



