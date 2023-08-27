function getMoney(money, cost) {
    let arrMoney = [1000, 500, 100, 50, 20, 10, 5, 2, 1];
    let total = money - cost;

    console.log("เงินสด = " + money + " บาท");
    console.log("ราคาสินค้า = " + cost + " บาท");
    console.log("เงินทอน = " + total + " บาท");
    console.log("**------------------------------------**");

    for(M of arrMoney){
        if(total <= 0){
            break;
        }
        let eachMoney = Math.floor(total / M);
        if(eachMoney > 0){
            if(M > 10){
                console.log("มีจำนวนธนบัตร " + M + " = " + eachMoney + " ใบ");
            }else{
                console.log("มีจำนวนเหรียญ " + M + " = " + eachMoney + " เหรียญ");
            }
        }        
        total = total % M;
    }
}

function swapString(A, B) {
    console.log("INPUT A : " + A);
    console.log("INPUT B : " + B);
    console.log("**------------------------------------**");
    
    let result = '';
    for(let i=0; i<B.length; i++){
        let indexA = i;
        let indexB = B.length - 1 - i;
        if(indexA >= A.length){
            indexA = i - A.length;
        }
        if(i < B.length-1){ 
            result = result + A[indexA] + B[indexB] + ',';
        }else{
            result = result + A[indexA] + B[indexB];
        }
    }
    console.log(result);
}

function triangle(input) {
    let result = '';
    let resultArr = []
    for(let i=1; i<=input; i++){
        if(i < input){           
            result = result + i + ' ';
        }else{
            result = result + i;
        }
        resultArr.push(result);
        console.log(result);
    }
    for(let i=resultArr.length-2; i>=0; i--){
        console.log(resultArr[i]);
    }
}

// Q1
getMoney(1000, 321);
getMoney(8000, 5219);
console.log("--------------------------------");

//Q2
swapString('ABCDEFG', 'qwert12');
swapString('aAbB', 'ZzXxYy');
console.log("--------------------------------");

//Q3
triangle(18);
triangle(11);