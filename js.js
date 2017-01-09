function string(a,n){
    var star=a*2-1;
    var st="";
    var space=(n-star)/2;
    for(var i=0;i<space;i++){
        st+=" ";
    }
    for(var i=0;i<star;i++){
        st+="*";
    }
    for(var i=0;i<space;i++){
        st+=" ";
    }
    console.log(st);
}

function star(n){
    for(var i=1;i<n/2+1;i++){
        string(i,n);
    }
    for(var i=n/2+0.5;i<n;i++){
        string(n-i,n);
    }
}
