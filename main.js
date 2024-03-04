function shuffle(array){
    var currnetIndex = array.length, 
    randomIndex;

    while(0 !== currnetIndex){
        randomIndex = Math.floor(Math.random() * currnetIndex);
        currnetIndex--;
        [array[currnetIndex], array[randomIndex]] = [
            array[currnetIndex],
            array[currnetIndex],
        ];
        return array;
    }
}

const bet = [1000, 5000, 25000, 50000, 100000, 500000]

let botChose = Math.random();

function choseRock(){
    if ( botChose < 0.4)
    spin();
}

function spin(){
    wheel.play();
    const box = document.getElementById("box");
    const element = document.getElementsByTagName("main");
    let SelectedItem = "";
    
    let AC = shuffle([1890, 2250, 2610]);
    let Camera = shuffle ([1850, 2210, 2570]); 
    let Zonk = shuffle([1770, 2130, 2490]); 
    let PS = shuffle([1810, 2170, 2530]); 
    let Headset = shuffle ([1750, 2110, 2470]); 
    let Drone = shuffle([1630, 1990, 2350]); 
    let ROG  = shuffle ([1570, 1930, 2290]);
    
    let results = shuffle([
    AC[0], 
    Camera[0],
    Zonk[0],
    PS[0],
    Headset[0],
    Drone[0],
    ROG[0],
    ])
    
    if (AC.includes (results[0]))       SelectedItem = "Air Conditioner"; 
    if (Camera.includes (results[0]))   SelectedItem = "Camera Sport Action";
    if (Zonk.includes (results[0]))     SelectedItem = "";
    if (PS.includes (results[0]))       SelectedItem = "Playsation 4 Slim"; 
    if (Headset.includes (results[0]))  SelectedItem = "Headset Gaming"; 
    if (Drone.includes (results[0]))    SelectedItem = "Drone Mini"; 
    if (ROG.includes (results[0]))      SelectedItem = "Laptop Asus ROG";

    box.style.setProperty("transition", "all ease 5s"); box.style.transform = "rotate(" + results[0] + "deg)"; 
    element.classList.remove("animate");
    setTimeout(function(){
        element.classList.add("animate");
    }, 5000);

    setTimeout(function(){
        // alert
    })

    setTimeout(function(){
        box.style.setProperty("transition", "initial");
        box.style.transform = "rotate(90deg)";
    }, 6000)
}