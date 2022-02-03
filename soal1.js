function lalulintas(lampu){
    if (lampu == "red" || lampu == "Red"){
        console.log("stop");
    }

    else if(lampu == "yellow" || lampu == "Yellow"){
        console.log("be carefull!");
    }

    else if(lampu == "green" || lampu == "Green"){
        console.log("go!");
    }
}
lalulintas("Green")