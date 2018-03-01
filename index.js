<<<<<<< HEAD
var katzDeli = [];
function takeANumber(katzDeli, customer){
    katzDeli.push(customer)
    return `Welcome, ${customer}. You are number ${katzDeli.length} in line.`
=======
var katzDeli = [];                                                    //The deli array is defined

function takeANumber(katzDeli, customer){
                                                                        //Accepts the current line of people along with
  for (let i = 1; i < katzDeli.length; i++){
    katzDeli.push(customer)
    return `Welcome, ${customer}. You are number ${katzDeli.length} in line.`
  }
                                    //new person's name and returns their position                           //in line.
>>>>>>> eb1efb0774638f771d4a3487518fb3387c7a24a9
}

function nowServing(katzDeliLine){                                              //Returns first person in line, then removes
  if (katzDeliLine.length === 0) {                                              //them from array. If no one in line, returns
return "There is nobody waiting to be served!"                                  //"There is nobody waiting to be served!"
}
  else {
  var name = katzDeliLine[0]
  katzDeliLine.shift()
}
for (var i = 0; i < katzDeliLine.length + 1; i++)
return`Currently serving ${name}.`
}

<<<<<<< HEAD
function currentLine(katzDeliLine){
  var nameList = []
=======
function currentLine(katzDeliLine){         //Returns whoever is in line right now, and
>>>>>>> eb1efb0774638f771d4a3487518fb3387c7a24a9
  if (katzDeliLine.length === 0) {
    return "The line is currently empty."
  }
  else {
<<<<<<< HEAD
    for (var i = 0; i < katzDeliLine.length; i++) {
    nameList.push(` ${i+1}. ${katzDeliLine[i]}`)
  }
}
return "The line is currently:" + nameList
=======
    var nameList = []
    for (var i = 0; i < katzDeliLine.length + 1; i++) {
    nameList = katzDeliLine.push(`${i}. ${katzDeliLine[i]}`)
  }
  return nameList                                         //their number in line. If empty, returns                                         //"The line is currently empty."                                           //"The line is currently: 1. Ada, 2. Grace" ${i}. ${katzDeliLine[i]
}
>>>>>>> eb1efb0774638f771d4a3487518fb3387c7a24a9
}
