var sum = document.getElementById("sum")
var arrSum = document.getElementById("arrSum")
var str = document.getElementById("str")
var arrAvg = document.getElementById("arrAvg")
var factNum = document.getElementById("factNum")
var num = document.getElementById("num")
var factor = document.getElementById("factor")
var fiboIndex = document.getElementById("fiboIndex")
var fiboNumRes = document.getElementById("fiboNumRes")
var romanNum = document.getElementById("fiboNumRes")
var romNum = document.getElementById("romNum")
var romanResult = document.getElementById("romanResult")

var numbers = document.getElementsByClassName("sumNum")
var sumButton = document.getElementById("sumButton")
var arrayButton = document.getElementById("arrayButton")
var arrayString = document.getElementById("array")
var arrayString1 = document.getElementById("array1")
var strButton = document.getElementById("strButton")

//sum.value = numbers[0].value+numbers[1].value

var arr=[]
sumButton.addEventListener("click",function(){
	var total = 0
	console.log(numbers[0].value)
	console.log(numbers[1].value)
	total = parseInt(numbers[0].value) + parseInt(numbers[1].value)
	sum.innerHTML = total
})


arrayButton.addEventListener("click",function(){
	var arrStr = arrayCreate(arrayString)
	arrSum.innerHTML = sumArray(arrStr)
})

function arrayCreate(arrayString){
	//console.log(arrString.length)
	return arrayString.value.includes(",") ? arrayString.value.split(",") : arrayString.value.split(" ")
	
}
function sumArray(arr){
	var total = 0
	//arr =arrayCreate(arrayString)
	for(var i=0;i<arr.length;i++){
		//.log(parseInt(arrString[i]))
		total += parseInt(arr[i])
	}
	 
	return total
}

function vowelCount(){
	console.log('vowelCount')
	console.log(str.value)
	var count = 0
	for(var i=0;i<str.value.length;i++){
		if (str.value.charAt(i).match(/[aeiou]/g)){
			count++
		}
	}
	console.log(count)
	document.getElementById("vowCount").innerHTML = count

}

function rollDice(){

	var element = document.createElement('h4')
	dice.removeChild(dice.lastChild)
	dice1 = Math.floor(Math.random() * 6)+1;
	dice2 = Math.floor(Math.random() * 6)+1;
	element.textContent = 'The 2 dices are: '+dice1+ " & "+dice2
	dice.appendChild(element)
	
}

function arrayAvg(){
	console.log(arrayString1.value)
	var arr=arrayCreate(arrayString1)
	var arrayOfNumbers = arr.map(Number);
	console.log(arrayOfNumbers)
	var total = arrayOfNumbers.reduce(function(accumulator, currentValue, currentIndex, array) {
  return accumulator + currentValue;
});
	console.log(total)
	arrAvg.innerHTML = total/arr.length
	console.log(total/arr.length)


}
function fizzBuzz(){
	for(var i=0;i<=100;i++){
		if(i%3===0 && i%5===0){
			console.log("FizzBuzz")
		}else if(i%5===0){
			console.log("Buzz")
		}else if(i%3===0){
			console.log("Fizz")
		}else{
			console.log(i)

		}
	}
}

function factorial(){
	console.log(factNum.value)
	var factResult = 1
	for(var i=1;i<=factNum.value;i++){
		factResult *=i
		console.log(factResult)
	}
	factor.innerHTML = factResult
	num.innerHTML =factNum.value
}

function fibonacci(number){
	if( number == 1 || number == 2) {
			return 1
	}else{
	return fibonacci(number-1)+fibonacci(number-2)
	}
}

function fibo(number){
	console.log(number)
	var fiboArray=[]
	for(var i=1;i<20;i++){
		
		fiboArray.push(fibonacci(i))
	}
	var index = fiboArray.includes(parseInt(number)) ? fiboArray.indexOf(parseInt(number))+1 : -1
	fiboIndex.innerHTML = index
	fiboNumRes.innerHTML = number
}

function digitsArray(number){
	numLen = number.length
	console.log(numLen)
	var arr =[]
	
		if(numLen===4){
			arr.push(parseInt(number[0])*1000)
		
			arr.push(parseInt(number[1])*100)
		
			arr.push(parseInt(number[2])*10)
		
			arr.push(parseInt(number[3]))

		}else if(numLen === 3){
			arr.push(parseInt(number[0])*100)
		
			arr.push(parseInt(number[1])*10)
		
			arr.push(parseInt(number[2]))
		}else if(numLen === 2){
			arr.push(parseInt(number[0])*10)
		
			arr.push(parseInt(number[1]))
		
		}else{
			arr.push(parseInt(number[0]))
		}
	

	
	return arr

}
function romanNumbersConversion(number){
	//number = e.target.id
	number = number.trim()
	var numHash = {
		0 : "",
		1 : "I",
		2 : "II",
		3 : "III",
		4 : "IV",
		5 : "V",
		6 : "VI",
		7 : "VII",
		8 : "VIII",
		9 : "IX",
		10 : "X",
		20 : "XX",
		30 : "XXX",
		40 : "XL",
		50 : "L",
		60 : "LX",
		70 : "LXX",
		80 : "LXXX",
		90 : "XC",
		100 : "C",
		200 : "CC",
		300 : "CCC",
		400 : "CD",
		500 : "D",
		600 : "DC",
		700 : "DCC",
		800 : "DCCC",
		900 : "CM",
		1000: "M",
		2000: "MM",
		3000: "MMM"
	}
	var result = '' 
	//console.log(number)
	var digArray=digitsArray(number)
	
	console.log(digArray)
	
		for(var k=0;k<digArray.length;k++){
		
		result += numHash[digArray[k]]

	}

	console.log(result)
	document.getElementById('romNum1').innerHTML = number
	romanResult.innerHTML = result 
}