// continue statement in loops skips the current iteration of the loop and proceeds to the next iteration.
// for (let i = 1; i <= 10; i++){
//     if(i == 5){
//         console.log("hey iam 5 and iam stuck")
//         continue;
//     }
//     console.log(i);
// }
// // example
// for (let i = 1; i <= 10; i++){
//     if(i > 4 && i < 8){
//         continue;
//     }
//     console.log(i);
// }

// // for even numbers to be execute
// for (let i = 1; i <= 10; i++){
//     if(i%2==1){
//         continue;
//     }
//     console.log(i);
// }

// // for odd numbers to get execute
// for (let i = 1; i <= 10; i++){
//     if(i%2==0){
//         continue;
//     }
//     console.log(i);
// }
// //We can also use the continue statement with a while loop. For example,

let i = 1;
while(i < 10){
    if(i%2==1){
        i++;
        continue;
    }
    console.log(i);
    i++;
}