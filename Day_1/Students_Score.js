let scores = [45,92,33,67,89,25,78,96,57,79];
let count =0;
for(let i=0;i<scores.length;i++){
    if(scores[i]<40){
        scores[i] = scores[i]+20;
    }else if(scores[i]>90){
        scores[i] = 90;
    }


if(scores[i]>=50){
    count++;
}
}

console.log(scores);
console.log(count);