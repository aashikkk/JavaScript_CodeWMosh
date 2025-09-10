// Speed Limit = 70
// 5 -> 1 point
// Math.floor()
// 12 points -> Suspended

function checkSpeed(speed){
    const speedLimit = 70;
    const kmPerPoint = 5;

    if (speed < speedLimit+ kmPerPoint)
        return "Ok";
  
    const points = Math.floor((speed-speedLimit) / kmPerPoint);
    if (points >= 12)
        return "License Suspended"
    
    return `Points: ${points}`
    
} 

console.log(checkSpeed(81));
