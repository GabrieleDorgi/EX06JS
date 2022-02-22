var m= -Infinity, mn=Infinity, num

for(var i=1; i<=5;i++ ){
    num=parseFloat(prompt("informe um número:"))
    if(num>=m){
       m=num;
    }
    if(num<=mn){
        mn=num;
     }
}
if(m != -Infinity && mn!= Infinity){
    alert("o maior é:"+ m)
    alert("o menor é:"+ mn)
}