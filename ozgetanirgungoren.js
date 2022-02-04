 window.onload = function(){}
 var kButon = document.querySelectorAll(".kkaydir");
 var gkutu = document.querySelectorAll(".gkutu");
 var ykutu = document.querySelectorAll(".ykutu");
 var ykapat = document.querySelectorAll(".ykapat");
 var menu = document.getElementById("menu");
 var spb = document.getElementById("spb");
 var spi = document.getElementById("spi");
 var spu = document.getElementById("spu");
 var say = 0;
 menu.addEventListener("click",function(){
	say++;
	if(say == 2){
		spb.classList.remove("spb");
		spi.classList.remove("spi");
		document.getElementById("acilanmenu").style.display = "none"
	}else{
		spb.classList.add("spb");
		spi.classList.add("spi");
		document.getElementById("acilanmenu").style.display = "flex";
		say = 1;
	}
})
 var yazi = ["Özel Eğitim","ve","Rehabilitasyon Merkezi"];
 let y=-1;
 setInterval(function(){
 y++;
 if(y > yazi.length-1){y=0}
 document.getElementById("aniyazi").innerHTML = yazi[y];
 document.getElementById("logoyazi").innerHTML = yazi[y]
 },2000)
 
 for(let i=0;i<kButon.length;i++){
	kButon[i].addEventListener("click",()=>{
		gkutu[i].classList.add("ssolakaydir")
		ykutu[i].classList.add("solakaydir")
	})
	ykapat[i].addEventListener("click",()=>{
		gkutu[i].classList.remove("ssolakaydir")
		ykutu[i].classList.remove("solakaydir")
	})
 }
 window.addEventListener("scroll", function(){
	if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100){
	document.querySelectorAll("nav")[0].style.background = "#fff";
	document.getElementById("navlogo").classList.remove("gizli");
	document.getElementById("menu").classList.remove("gizli");
	document.getElementById("linkler").classList.add("gizli");
	document.getElementById("ozgelogo").style.opacity = "0";
	document.querySelector("nav").style.boxShadow = "0px 1px 5px 1px rgba(0,0,0,0.25)";
	document.querySelector("nav").style.justifyContent = "space-between";
	document.getElementById("logoyazi").style.display = "block";
	}else{
	document.querySelectorAll("nav")[0].style.background = "transparent"
	document.getElementById("navlogo").classList.add("gizli");
	document.getElementById("menu").classList.add("gizli");
	document.getElementById("linkler").classList.remove("gizli");
	document.getElementById("ozgelogo").style.opacity = "1";
	document.querySelector("nav").style.boxShadow = "0px 1px 5px 1px rgba(0,0,0,0)";
	document.querySelector("nav").style.justifyContent = "center";
	document.getElementById("logoyazi").style.display = "none";
	}
 })