function getHandScore(input:string):number {
    let cards:string[] = input.split(" ");
    // suitValue
    let [H, C, D, S] = [0, 0, 0, 0];
    let result:number = 0;
        
    if(cards[0].substring(1) === cards[1].substring(1) && cards[0].substring(1) === cards[2].substring(1)){
        if(cards[0].substring(1) === 'A'){
            result = 35;
        }else{
            result = 32.5;
        }
    }else{
        for(let card of cards){
            let cardValue:string = card.substring(1)
            let value:number = 0;

            if(cardValue === 'A'){
                value = 11;
            }else if(cardValue === 'J' || cardValue === 'Q' || cardValue === 'K'){
                value = 10;
            }else{
                value = Number(cardValue);
            }

            switch(card[0]) {
                case 'H':
                    H += value;
                    break;
                case 'C':
                    C += value;
                    break;
                case 'D':
                    D += value;
                    break;
                case 'S':
                    S += value;
                    break;
                default:
                    break;
            }
        }
        result = Math.max(H, C, D, S);
    }
    return result;
}

function getClockAngle(hh_mm:string):number {
    let [hour, minute] = hh_mm.split(":");

    let minuteHandAngle:number = (Number(minute)/5)*30;
    let extraAngle:number = Number(minute)/2;
    let hourHandAngle:number = ((Number(hour)%12)*30 + extraAngle);

    let result:number = 0;
    if(hourHandAngle > minuteHandAngle){
        // compare angle between CCW or CW
        result = Math.min(hourHandAngle-minuteHandAngle, (minuteHandAngle+360)-hourHandAngle);
    }else{
        result = Math.min((minuteHandAngle-hourHandAngle), (hourHandAngle+360)-minuteHandAngle);
    }

    return result;
}

function getQuestionPart(phrases:string[]):string[] {
    let [word1, word2, word3] = phrases;
    let commonWord:string[] = [];

    for(let i=0; i<word1.length; i++){
        if(word2.includes(word1[i]) && word3.includes(word1[i])){
            commonWord.push(word1[i]);
        }
    }
    
    return [];
}
// test Q1
// console.log(getHandScore("S8 S10 CA"));
// console.log(getHandScore("D6 D2 H9"));
// console.log(getHandScore("S8 D8 C8"));

// // test Q2
// console.log(getClockAngle("09:00"));
// console.log(getClockAngle("17:30"));
// console.log(getClockAngle("03:48"));

// test Q3
console.log(getQuestionPart(['BATHROOM', 'BATH SALTS', 'BLOODBATH']));
console.log(getQuestionPart(['BEFRIEND', 'GIRLFRIEND', 'FRIENDSHIP']));