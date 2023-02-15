let display = document.getElementById('display')

let  calculate=(number)=> {
    display.value += number;
}

///This is a function that test in a user enters a right digit and also 

let result = () => {
    try{
        display.value= eval(display.value)
    } catch(err) {
        alert(`Enter a valid result`)
    }
}

/////THIS IS TO CLEAR ALL DATA FROM INPUT FIELDS

function clr(){
    display.value= "";
}


//////THIS IS TO CLEAR ALL DATA FROM INPUT FIELD

function del() {
    display.value = display.value.slice(0, -1) 
}


