window.onload=function(){
    var btn=document.getElementsByTagName("button");
    var inp=document.getElementById("input");
    var oup=document.getElementById("output");
    var exp="";
    var res="0";
    oup.value=res;
    for(var i=9;i<btn.length-1;i++){
        (function(i){
        btn[i].onclick=function(){
            exp+=btn[i].innerText;
            inp.value=exp;
        }
    })(i);
    }
    btn[5].onclick=function(){
        exp="";
        inp.value=exp;
    }
    btn[btn.length-1].onclick=function(){
        var mul=new Array();
        var add=new Array();
        var from=new Array();
        var div=new Array();
        var sig=new Array();
        for(var i=0;i<exp.length;i++){
            if(exp[i]=='X')
            {
                mul.push(i);
            }
            if(exp[i]=='÷'){
                div.push(i);
            }
            if(exp[i]=='+'){
                add.push(i);
            }
            if(exp[i]=='-'){
                from.push(i);
            }
            if(exp[i]=='X'||exp[i]=='÷'||exp[i]=='+'||exp[i]=='-'){
                sig.push(i);
            }
        }
        alert(parseFloat(exp));
        }
};