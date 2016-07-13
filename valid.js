function username()
{  if( document.reg.name.value == "" )
    {
    document.getElementById("un").innerHTML="please provide your name."
    document.reg.name.focus() ;

    }
    else
    {
    document.getElementById("un").innerHTML="";
    }
}
function dateVal(){
    if(document.reg.dat.value=="")
    {
        document.getElementById('dat').innerHTML="please provide your dob";
        document.reg.dat.focus() ;
    }
    else{
        document.getElementById("dat").innerHTML="";
    }

}
function cnVal()
{
    if(document.reg.cn.value.match(/\d\d\d\d\d\d\d\d\d\d/) && document.reg.cn.value.length==10)
    {
        document.getElementById("contact").innerHTML="";
    }
    else
    {
        document.getElementById("contact").innerHTML="provide a valid contact number";
        document.reg.cn.focus() ;

    }
}
function addrVal(){
    if(document.reg.Address.value==""){
        document.getElementById('adr').innerHTML="please provide ur current and valid address";
        document.reg.Address.focus() ;

    }
    else{
        document.getElementById("adr").innerHTML="";
    }
}
function emailVal(){
    if(document.reg.email.value.match(/\b\w+@\w[a-z]{2,4}\b/)){
        document.getElementById("email").innerHTML="";
    }
    else{
        document.getElementById('email').innerHTML="please provide your valid email address";
        document.reg.email.focus() ;
    }
}
function validate(){
    if( document.reg.name.value == "" )
    {
        document.getElementById("un").innerHTML="please provide your name."
        document.reg.name.focus() ;
        return false;
    }
    else
    {
        document.getElementById("un").innerHTML="";
    }
    if(document.reg.dat.value=="")
    {
        document.getElementById('dat').innerHTML="please provide your dob";
        document.reg.dat.focus() ;
        return false;
    }
    else{
        document.getElementById("dat").innerHTML="";
    }
    if(document.reg.cn.value.match(/\d\d\d\d\d\d\d\d\d\d/) && document.reg.cn.value.length==10)
    {
        document.getElementById("contact").innerHTML="";
    }
    else
    {
        document.getElementById("contact").innerHTML="provide a valid contact number";
        document.reg.cn.focus() ;
        return false;
    }
    if(document.reg.Address.value==""){
        document.getElementById('adr').innerHTML="please provide ur current and valid address";
        document.reg.Address.focus() ;
        return false;
    }
    else{
        document.getElementById("adr").innerHTML="";
    }

    if(document.reg.email.value.match(/\b\w+@\w[a-z]{2,4}\b/)){
        document.getElementById("email").innerHTML="";
    }
    else{
        document.getElementById('email').innerHTML="please provide your valid email address";
        document.reg.email.focus() ;
        return false;
        }
}


