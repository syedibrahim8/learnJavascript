/*The JavaScript switch...case statement executes 
different blocks of code based on the value of a given expression.
*/

let trafficLight = "red"
let message

switch (trafficLight){
    case "red":
        message = "Stop immediately.";
        break;
    case "yellow":
        message = "Prepare to stop.";
        break;
    case "green":
        message = "Proceed or continue driving.";
        break;
    default:
        message = "Invalid traffic light color.";
}
console.log(message);
 