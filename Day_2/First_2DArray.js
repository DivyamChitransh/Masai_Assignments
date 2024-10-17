let N = 3;
let M = 2;
let arr = [[1,2],[3,4],[5,6]];
function twodArray(array,rows,colms){
    for(let i=0;i<rows;i++){
    let line = '';
        for(let j=0;j<colms;j++){
            line += array[i][j] + ' ';

        }
        console.log(line.trim());
    }
}

twodArray(arr,N,M);