let gammaRate = ""
let epsilonRate = ""

//gammaRate == the biggest num of 0/1 on each column.
//epsilonRate == the least comomon.
// powerConssumption == gama*epsilon.

let fs = require("fs")
let text = fs.readFileSync("./inputDay3.txt").toString()
let rawData = text.split("\n")

//length 11

let cleanData = [] //Creates arrays out of each number
let fullBinaryData = [] //Creates arrays with the numbers clean.

rawData.forEach((item) => {
  cleanData.push(Array.from(item.replace("\r", "")))
  fullBinaryData.push(item.replace("\r", ""))
})

//
const filterNumbers = (data, pos) => {
  let nums = []

  data.forEach((item) => {
    nums.push(item[pos])
  })

  let count = { count0: 0, count1: 0 }

  nums.forEach((item) => {
    item === "0" ? (count["count0"] += 1) : (count["count1"] += 1)
  })

  return count
}

const calculateGammaEpsilon = () => {
  for (let i = 0; i < cleanData[1].length; i++) {
    const numCount = filterNumbers(cleanData, i)
    if (numCount.count0 > numCount.count1) {
      gammaRate += "0"
      epsilonRate += "1"
    } else if (numCount.count0 < numCount.count1) {
      gammaRate += "1"
      epsilonRate += "0"
    }
  }
}

calculateGammaEpsilon()

let powerConssumption = parseInt(gammaRate, 2) * parseInt(epsilonRate, 2)

console.log(`Power conssumption: ${powerConssumption}`)

//--
//Part 2

const getOxygenGenerator = () => {
  let lifeSupportNumbers = fullBinaryData

  for (let i = 0; i < lifeSupportNumbers[0].length; i++) {
    if (lifeSupportNumbers.length === 1) {
      return lifeSupportNumbers[0]
    }

    let deconsNums = []
    lifeSupportNumbers.forEach((item) => {
      deconsNums.push(Array.from(item))
    })

    const numCount = filterNumbers(deconsNums, i)
    let controlIndex = null
    
    if (numCount.count0 > numCount.count1) {
      controlIndex = "0"
    } else if (numCount.count0 <= numCount.count1) {
      controlIndex = "1"
    }

    console.log(controlIndex)
    lifeSupportNumbers = lifeSupportNumbers.reduce((accNums, num) => {
      let currenNumDecons = Array.from(num)
      if (currenNumDecons[i] === controlIndex) {
        accNums.push(num)
      }
      return accNums
    }, [])
  }

  return "out without a number"
}

const getCO2Scrubber = () => {
  let lifeSupportNumbers = fullBinaryData
  

  for (let i = 0; i < lifeSupportNumbers[0].length; i++) {
    if (lifeSupportNumbers.length === 1) {
      return lifeSupportNumbers[0]
    }

    let deconsNums = []
    lifeSupportNumbers.forEach((item) => {
      deconsNums.push(Array.from(item))
    })

    const numCount = filterNumbers(deconsNums, i)
    let controlIndex = null

    if (numCount.count0 > numCount.count1) {
      controlIndex = "1"
    } else if (numCount.count0 <= numCount.count1) {
      controlIndex = "0"
    }

    lifeSupportNumbers = lifeSupportNumbers.reduce((accNums, num) => {
      let currenNumDecons = Array.from(num)
      if (currenNumDecons[i] === controlIndex) {
        accNums.push(num)
      }
      return accNums
    }, [])

    //console.log(`control index: ${controlIndex}  these are filtered: ${lifeSupportNumbers}`)
  }
  return "out without a number"
}

const oxygen = parseInt(getOxygenGenerator(), 2)
const co2=parseInt(getCO2Scrubber(), 2);
console.log(`Oxygen Generator Rating ${oxygen}, C02 scrubber rating ${co2}, total ${oxygen*co2}`)