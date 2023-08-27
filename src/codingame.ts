
// const depart: string = '6:54';
// const arrive: string = '12:13';

// var departArr = depart.split(':');
// var arriveArr = arrive.split(':');
// var result: number = 0;
// if(arriveArr[1] < departArr[1]){
//     let valueHour = Number(arriveArr[0]) - 1;
//     let valueMin = Number(arriveArr[1]) + 60;
//     arriveArr[0] = valueHour.toString();
//     arriveArr[1] = valueMin.toString();
// }
// console.log(departArr)
// console.log(arriveArr)
// result = (Number(arriveArr[0])-Number(departArr[0]))*60 + (Number(arriveArr[1])-Number(departArr[1]));

// var a = 'asdfg'
// console.log(result);
// console.log(a[5] === undefined);

// var N = 18;
// var hexa: string = N.toString(16);
// var lastHex: string = hexa[hexa.length-1];
// var multi: number = N*Number(lastHex);
// console.log(lastHex);
// var multiBi: string = multi.toString(2);
// console.log(multiBi[multiBi.length-1]);

// var num: number = 15.646816;
// console.log(num.toFixed(2))


// var num: number = 1234
// var strNum = num.toString();
// var result: number = 1;
// for(let i=0; i<strNum.length; i++){
//     console.log(strNum[i])
//     result = result * Number(strNum[i]);
// }

// console.log(result);




const n: number = 4;
const s: string = 'Hello World';

// Write an answer using console.log()
// To debug: console.error('Debug messages...');
var str: string[] = [];
for(let i=0; i<s.length; i+=n){
    if(i+n < s.length){
        str.push(s.substring(i, i+n));
    }else{
        str.push(s.substring(i));
    }
}

console.log(str);
for(let i=0; i<n; i++){
    var text: string = '';
    for(let j=str.length-1; j>=0; j--){
        if(str[j][i] !== undefined){
            text = text + str[j][i];
        }else{
            text = text + ' ';
        }
    }
    console.log(text);
}