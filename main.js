function shuffle(array) {
    let currentIndex = array.length,
        randomIndex;

    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // Swap elements
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex],
            array[currentIndex],
        ];
    }

    return array;
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
    const element = document.getElementById("mainBox");
    let SelectedItem = "";
    
    // [3000, 3665, 2955]
    // [2225, 2900, 2570]
    // [2145, 2820, 2490]
    // [2185, 2860, 2530]
    // [2125, 2800, 2470]
    // [2005, 2680, 2350]
    // [1945, 2620, 2290]
    
    let lR1 = shuffle([1850, 2210, 2570]); 
    let lR2 = shuffle([1770, 2130, 2490]); 
    let lR3 = shuffle([1810, 2170, 2530]); 
    let lR4 = shuffle([1750, 2110, 2470]); 
    let lW1 = shuffle([1630, 1990, 2350]); 
    let lW2 = shuffle([1570, 1930, 2290]);
    let lW3 = shuffle([1570, 1930, 2290]);
    let mD1 = shuffle([1570, 1930, 2290]);
    let hG1 = shuffle([1570, 1930, 2290]);
    let mL1 = shuffle([2625, 2975, 2955]);

    let results = shuffle([
        lR1[0], 
        lR2[0], 
        lR3[0], 
        lR4[0], 
        lW1[0], 
        lW2[0], 
        lW3[0], 
        mD1[0], 
        hG1[0], 
        mL1[0],
    ]);
    
    if (lR1.includes(results[0])) {
        SelectedItem = "Lower";
    } else if (lR2.includes(results[0])) {
        SelectedItem = "Lower";
    } else if (lR3.includes(results[0])) {
        SelectedItem = "Lower";
    } else if (lR4.includes(results[0])) {
        SelectedItem = "Lower";
    } else if (lW1.includes(results[0])) {
        SelectedItem = "Low";
    } else if (lW2.includes(results[0])) {
        SelectedItem = "Low";
    } else if (lW3.includes(results[0])) {
        SelectedItem = "Low";
    } else if (mD1.includes(results[0])) {
        SelectedItem = "Mid";
    } else if (hG1.includes(results[0])) {
        SelectedItem = "High";
    } else if (mL1.includes(results[0])) {
        SelectedItem = "Mega Lucky";
    }
    

    box.style.setProperty("transition", "all ease 9s"); 
    box.style.transform = "rotate(" + results[0] + "deg)"; 
    element.classList.remove("animate");

    setTimeout(function(){
        element.classList.add("animate");
    }, 9000);

    setTimeout(function(){
        Swal.fire({
            title: "Sweet!",
            text: "Modal with a custom image.",
            imageUrl: "https://unsplash.it/400/200",
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: "Custom image"
          });
    }, 9500);

    setTimeout(function(){
        box.style.setProperty("transition", "initial");
        box.style.transform = "rotate(90deg)";
    }, 10000);
}