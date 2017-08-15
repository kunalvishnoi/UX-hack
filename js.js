document.getElementById("d2").addEventListener("click", function(){
    alert("Please enter in format username@abc.com")

});


document.getElementById("d3").addEventListener("click", function(){
    alert("Please enter in format https://www.google.com");
});

 function myFunction(){
 	var x=document.getElementById("d1").value;

 	document.getElementById("a1").innerHTML=x;

 	var y=document.getElementById("d2").value;
 	if(y.indexOf("@")>0&&y.indexOf(".com")>0&&y.indexOf("@")<y.indexOf(".com"))
 	{

 	


 	document.getElementById("a2").innerHTML=y;
}
else{
	document.getElementById("d2").style.color="red"; 
}
var z=document.getElementById("d3").value;

if( (z.indexOf("https://")>=0||z.indexOf("http://")>=0)&&z.indexOf(".")>0)
{
document.getElementById("a3").innerHTML=z;

}
else{



document.getElementById("d3").style.color="red";

 }
 document.getElementById("a0").style.display="block";
}