//break statement in loops terminates the loop immediately when it's encountered

for (let i = 1; i <= 10; i++){
    if(i == 5){
        console.log("I have stopped");
        break;
    }
    console.log(i);
}