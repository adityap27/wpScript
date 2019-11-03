var name="zz";//PUT "zz" or anything you want
var obj = document.getElementsByClassName("_3xdMj")[0].getElementsByClassName("_3NWy8");
var CSV='';
var data = [];
var src;
var j=0;

for (var i = 0; i < obj.length; i++) {
	


	var num = obj[i].getElementsByClassName("_19RFN")[0].title; //Mobile Number
	if(num.includes("+"))
	{

	
CSV+='BEGIN:VCARD\r\n';
CSV+='VERSION:2.1\r\n'
CSV+='N:'+name+(j+1)+';;;;\r\n'
CSV+='TEL;CELL:'+num+'\r\n'
CSV+='END:VCARD\r\n';
	j++;
	}}


var fileName = "WAGroup_";

fileName += document.getElementsByClassName("_3u328 copyable-text selectable-text")[0].innerText;

var uri = 'data:text/vcf;charset=utf-8,' + escape(CSV);

var link = document.createElement("a");    
link.href = uri;

link.style = "visibility:hidden";
link.download = fileName + ".vcf";
    

document.body.appendChild(link);
link.click();
document.body.removeChild(link);

document.documentElement.style.width="100%";
document.documentElement.style.height="100%";
document.getElementsByTagName("BODY")[0].style.width="100%";
document.getElementsByTagName("BODY")[0].style.height="100%";
document.getElementById("app").style.width="100%";
document.getElementById("app").style.height="100%";
