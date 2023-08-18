function getHandScore(input:string):number {
    let cards:string[] = input.split(" ");
    // suitValue
    let [H, C, D, S] = [0, 0, 0, 0];
    let result:number = 0;
    
    // compare rank of cards
    if(cards[0].substring(1) === cards[1].substring(1) && cards[0].substring(1) === cards[2].substring(1)){
        if(cards[0].substring(1) === 'A'){
            result = 35;
        }else{
            result = 32.5;
        }
    }else{
        for(let card of cards){
            let cardRank:string = card.substring(1)
            let cardValue:number = 0;

            if(cardRank === 'A'){
                cardValue = 11;
            }else if(cardRank === 'J' || cardRank === 'Q' || cardRank === 'K'){
                cardValue = 10;
            }else{
                cardValue = Number(cardRank);
            }

            // check card suit
            switch(card[0]) {
                case 'H':
                    H += cardValue;
                    break;
                case 'C':
                    C += cardValue;
                    break;
                case 'D':
                    D += cardValue;
                    break;
                case 'S':
                    S += cardValue;
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

    // assume number 12 in clock are 0 degree and angle increase follow CW
    let minuteHandAngle:number = (Number(minute)/5)*30;
    let extraHourHandAngle:number = Number(minute)/2;
    let hourHandAngle:number = ((Number(hour)%12)*30 + extraHourHandAngle);

    let result:number = 0;
    if(hourHandAngle > minuteHandAngle){
        // compare angle between CCW and CW
        result = Math.min(hourHandAngle-minuteHandAngle, (minuteHandAngle+360)-hourHandAngle);
    }else{
        // compare angle between CCW and CW
        result = Math.min((minuteHandAngle-hourHandAngle), (hourHandAngle+360)-minuteHandAngle);
    }
    return result;
}

function getQuestionPart(phrases:string[]):string[] {
    let [word1, word2, word3] = phrases;
    let commonWordPerRound:string[] = ['']
    
    // check common word by starting with each character 
    for(let i=0; i<word1.length; i++){
        // and adding one character per round
        for(let j=i; j<word1.length; j++){
            let testWord = word1.substring(i, j+1)

            // if testWord exists in word2 and word3 then testWord is a common word in this round.
            if(word2.includes(testWord) && word3.includes(testWord)){
                commonWordPerRound[i] = testWord;
            }else{
                break;
            }
        }
    }

    let commonWord:string = '';
    let lengthWord:number = -1;
    
    // check each word in CommonWordPerRound which word is the longest then is commonword
    for(let word of commonWordPerRound){
        if(word.length > lengthWord){
            commonWord = word;
            lengthWord = word.length;;
        }
    }
    // remove commonWord and blank in each word of phrases
    return phrases.map(word => word.replace(commonWord, '').replace(' ', ''));
}


// test Q1
console.log(getHandScore("S8 S10 CA"));
console.log(getHandScore("H3 DJ H6"));
console.log(getHandScore("S8 D8 C8"));

// test Q2
console.log(getClockAngle("09:00"));
console.log(getClockAngle("17:30"));
console.log(getClockAngle("02:42"));

// test Q3
console.log(getQuestionPart(['BATHROOM', 'BATH SALTS', 'BLOODBATH']));
console.log(getQuestionPart(['BEFRIEND', 'GIRLFRIEND', 'FRIENDSHIP']));