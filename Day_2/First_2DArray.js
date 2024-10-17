function twodArray(arr,N,M){
    for(let i=0;i<N;i++){
    let line = '';
        for(let j=0;j<M;j++){
            line += arr[i][j] + ' ';

        }
        console.log(line.trim());
    }
}

twodArray([[1,2],[3,4],[5,6]],3,2);