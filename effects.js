// JavaScript 

$(document).ready(function(){
	$("#home").mouseover(function(){
		$("#home").clearQueue();
		$("#gallery").clearQueue();
		$("#techsoc").clearQueue();
		$("#hostel").clearQueue();
		$("#alumni").clearQueue();
		$("#literary").clearQueue();
		$("#schroeter").clearQueue();
		$("#home").animate({top:0, left:0,width:540, height:310 ,opacity:1},"slow");
		$("#gallery").animate({top:0, left:550, width:160, height:280 ,opacity:0.5},"slow");
		$("#techsoc").animate({top:0, left:720, width:120, height:130 ,opacity:0.5},"slow");
		$("#hostel").animate({top:320, left:0, width:210, height:120 ,opacity:0.5},"slow");
		$("#alumni").animate({top:320, left:220, width:320, height:120 ,opacity:0.5},"slow");
		$("#literary").animate({top:140, left:720, width:120, height:140 ,opacity:0.5},"slow");
		$("#schroeter").animate({top:290, left:550, width:290, height:150 ,opacity:0.5},"slow");
		$("#details").animate({opacity:0},"fast", function(){
			document.getElementById("comment").innerHTML="see the history of this hostel, and legacy that surrounds it..";
			$("#details").animate({opacity:1},"fast");
			})
		});
	$("#gallery").mouseover(function(){
		$("#home").clearQueue();
		$("#gallery").clearQueue();
		$("#techsoc").clearQueue();
		$("#hostel").clearQueue();
		$("#alumni").clearQueue();
		$("#literary").clearQueue();
		$("#schroeter").clearQueue();
		$("#home").animate({top:0, left:0,width:110, height:310 ,opacity:0.5},"slow");
		$("#gallery").animate({top:0, left:120, width:590, height:310 ,opacity:1},"slow");
		$("#techsoc").animate({top:0, left:720, width:120, height:150 ,opacity:0.5},"slow");
		$("#hostel").animate({top:320, left:0, width:210, height:120 ,opacity:0.5},"slow");
		$("#alumni").animate({top:320, left:220, width:330, height:120 ,opacity:0.5},"slow");
		$("#literary").animate({top:160, left:720, width:120, height:150 ,opacity:0.5},"slow");
		$("#schroeter").animate({top:320, left:560, width:280, height:120 ,opacity:0.5},"slow");
		$("#details").animate({opacity:0},"fast", function(){
			document.getElementById("comment").innerHTML="watch recent happenings caught on camera ";
			$("#details").animate({opacity:1},"fast");
			})
		});
	$("#techsoc").mouseover(function(){
		$("#home").clearQueue();
		$("#gallery").clearQueue();
		$("#techsoc").clearQueue();
		$("#hostel").clearQueue();
		$("#alumni").clearQueue();
		$("#literary").clearQueue();
		$("#schroeter").clearQueue();
		$("#home").animate({top:0, left:0,width:110, height:310 ,opacity:0.5},"slow");
		$("#gallery").animate({top:0, left:120, width:120, height:310 ,opacity:0.5},"slow");
		$("#techsoc").animate({top:0, left:250, width:590, height:310 ,opacity:1},"slow");
		$("#hostel").animate({top:320, left:0, width:210, height:120 ,opacity:0.5},"slow");
		$("#alumni").animate({top:320, left:220, width:240, height:120 ,opacity:0.5},"slow");
		$("#literary").animate({top:320, left:720, width:120, height:120 ,opacity:0.5},"slow");
		$("#schroeter").animate({top:320, left:470, width:240, height:120 ,opacity:0.5},"slow");
		$("#details").clearQueue();
		$("#details").animate({opacity:0},"fast", function(){
			document.getElementById("comment").innerHTML="see what to expect this sem from our taz, techsoc calender etc.... ";
			$("#details").animate({opacity:1},"fast");
			})
		});
	$("#hostel").mouseover(function(){
		$("#home").animate({top:0, left:0,width:530, height:110 ,opacity:0.5},"slow");
		$("#gallery").animate({top:0, left:540, width:170, height:280 ,opacity:0.5},"slow");
		$("#techsoc").animate({top:0, left:720, width:120, height:130 ,opacity:0.5},"slow");
		$("#hostel").animate({top:120, left:0, width:530, height:320 ,opacity:1},"slow");
		$("#alumni").animate({top:290, left:540, width:170, height:150 ,opacity:0.5},"slow");
		$("#literary").animate({top:140, left:720, width:120, height:140 ,opacity:0.5},"slow");
		$("#schroeter").animate({top:290, left:720, width:120, height:150 ,opacity:0.5},"slow");
		$("#details").clearQueue();
		$("#details").animate({opacity:0},"fast", function(){
			document.getElementById("comment").innerHTML="It is the most interactive hostel students list ever created thanks to Ravikanth(aaah..!), check out who is hiding where in your hostel";
			$("#details").animate({opacity:1},"fast");
			})
		});
	$("#alumni").mouseover(function(){
		$("#home").clearQueue();
		$("#gallery").clearQueue();
		$("#techsoc").clearQueue();
		$("#hostel").clearQueue();
		$("#alumni").clearQueue();
		$("#literary").clearQueue();
		$("#schroeter").clearQueue();
		$("#home").animate({top:0, left:0,width:530, height:110 ,opacity:0.5},"slow");
		$("#gallery").animate({top:0, left:540, width:170, height:110 ,opacity:0.5},"slow");
		$("#techsoc").animate({top:0, left:720, width:120, height:130 ,opacity:0.5},"slow");
		$("#hostel").animate({top:120, left:0, width:130, height:320 ,opacity:0.5},"slow");
		$("#alumni").animate({top:120, left:140, width:570, height:320 ,opacity:1},"slow");
		$("#literary").animate({top:140, left:720, width:120, height:140 ,opacity:0.5},"slow");
		$("#schroeter").animate({top:290, left:720, width:120, height:150 ,opacity:0.5},"slow");
		$("#details").clearQueue();
		$("#details").animate({opacity:0},"fast", function(){
			document.getElementById("comment").innerHTML="Mandak is blessed with one of the most talended alumni ... see where they are now..<br><br><br> for new alumni visiting please see our contacts list";
			$("#details").animate({opacity:1},"fast");
			})
		});
	$("#schroeter").mouseover(function(){
		$("#home").clearQueue();
		$("#gallery").clearQueue();
		$("#techsoc").clearQueue();
		$("#hostel").clearQueue();
		$("#alumni").clearQueue();
		$("#literary").clearQueue();
		$("#schroeter").clearQueue();
		$("#home").animate({top:0, left:0,width:400, height:110 ,opacity:0.5},"slow");
		$("#gallery").animate({top:0, left:410, width:170, height:110 ,opacity:0.5},"slow");
		$("#techsoc").animate({top:0, left:590, width:120, height:110 ,opacity:0.5},"slow");
		$("#hostel").animate({top:120, left:0, width:130, height:320 ,opacity:0.5},"slow");
		$("#alumni").animate({top:120, left:140, width:130, height:320 ,opacity:0.5},"slow");
		$("#literary").animate({top:0, left:720, width:120, height:110 ,opacity:0.5},"slow");
		$("#schroeter").animate({top:120, left:280, width:560, height:320 ,opacity:1},"slow");
		$("#details").clearQueue();
		$("#details").animate({opacity:0},"fast", function(){
		document.getElementById("comment").innerHTML="the most exciting part... see wing records, points, schroeter ratings, straight from our sports sec";
			$("#details").animate({opacity:1},"fast");
			})
		});
	$("#literary").mouseover(function(){
		$("#home").clearQueue();
		$("#gallery").clearQueue();
		$("#techsoc").clearQueue();
		$("#hostel").clearQueue();
		$("#alumni").clearQueue();
		$("#literary").clearQueue();
		$("#schroeter").clearQueue();
		$("#home").animate({top:0, left:0,width:110, height:310 ,opacity:0.5},"slow");
		$("#gallery").animate({top:160, left:120, width:120, height:150 ,opacity:1},"slow");
		$("#techsoc").animate({top:0, left:120, width:120, height:150 ,opacity:0.5},"slow");
		$("#hostel").animate({top:320, left:0, width:210, height:120 ,opacity:0.5},"slow");
		$("#alumni").animate({top:320, left:220, width:330, height:120 ,opacity:0.5},"slow");
		$("#literary").animate({top:0, left:250, width:590, height:310 ,opacity:1},"slow");
		$("#schroeter").animate({top:320, left:560, width:280, height:120 ,opacity:0.5},"slow");
		$("#details").clearQueue();
		$("#details").animate({opacity:0},"fast", function(){
		document.getElementById("comment").innerHTML="see what our lit-sec is upto, upcoming events, lit-soc ratings etc.... ";
			$("#details").animate({opacity:1},"fast");
			})
		});
// moveout easy and no interloching..	
	$("#home").mouseout(function(){
		$("#home").animate({top:0, left:0,width:210, height:210 ,opacity:1},"fast");
		$("#gallery").animate({top:0, left:220, width:380, height:280 ,opacity:1},"fast");
		$("#techsoc").animate({top:0, left:610, width:230, height:130 ,opacity:1},"fast");
		$("#hostel").animate({top:220, left:0, width:210, height:220 ,opacity:1},"fast");
		$("#alumni").animate({top:290, left:220, width:330, height:150 ,opacity:1},"fast");
		$("#literary").animate({top:140, left:610, width:230, height:140 ,opacity:1},"fast");
		$("#schroeter").animate({top:290, left:560, width:280, height:150 ,opacity:1},"fast");
		$("#details").animate({opacity:0},"fast");
		});
	$("#gallery").mouseout(function(){
		$("#home").animate({top:0, left:0,width:210, height:210 ,opacity:1},"fast");
		$("#gallery").animate({top:0, left:220, width:380, height:280 ,opacity:1},"fast");
		$("#techsoc").animate({top:0, left:610, width:230, height:130 ,opacity:1},"fast");
		$("#hostel").animate({top:220, left:0, width:210, height:220 ,opacity:1},"fast");
		$("#alumni").animate({top:290, left:220, width:330, height:150 ,opacity:1},"fast");
		$("#literary").animate({top:140, left:610, width:230, height:140 ,opacity:1},"fast");
		$("#schroeter").animate({top:290, left:560, width:280, height:150 ,opacity:1},"fast");
		$("#details").animate({opacity:0},"fast");
		});
	$("#techsoc").mouseout(function(){
		$("#home").animate({top:0, left:0,width:210, height:210 ,opacity:1},"fast");
		$("#gallery").animate({top:0, left:220, width:380, height:280 ,opacity:1},"fast");
		$("#techsoc").animate({top:0, left:610, width:230, height:130 ,opacity:1},"fast");
		$("#hostel").animate({top:220, left:0, width:210, height:220 ,opacity:1},"fast");
		$("#alumni").animate({top:290, left:220, width:330, height:150 ,opacity:1},"fast");
		$("#literary").animate({top:140, left:610, width:230, height:140 ,opacity:1},"fast");
		$("#schroeter").animate({top:290, left:560, width:280, height:150 ,opacity:1},"fast");
		$("#details").animate({opacity:0},"fast");
		});
	$("#literary").mouseout(function(){
		$("#home").animate({top:0, left:0,width:210, height:210 ,opacity:1},"fast");
		$("#gallery").animate({top:0, left:220, width:380, height:280 ,opacity:1},"fast");
		$("#techsoc").animate({top:0, left:610, width:230, height:130 ,opacity:1},"fast");
		$("#hostel").animate({top:220, left:0, width:210, height:220 ,opacity:1},"fast");
		$("#alumni").animate({top:290, left:220, width:330, height:150 ,opacity:1},"fast");
		$("#literary").animate({top:140, left:610, width:230, height:140 ,opacity:1},"fast");
		$("#schroeter").animate({top:290, left:560, width:280, height:150 ,opacity:1},"fast");
		$("#details").animate({opacity:0},"fast");
		});
	$("#schroeter").mouseout(function(){
		$("#home").animate({top:0, left:0,width:210, height:210 ,opacity:1},"fast");
		$("#gallery").animate({top:0, left:220, width:380, height:280 ,opacity:1},"fast");
		$("#techsoc").animate({top:0, left:610, width:230, height:130 ,opacity:1},"fast");
		$("#hostel").animate({top:220, left:0, width:210, height:220 ,opacity:1},"fast");
		$("#alumni").animate({top:290, left:220, width:330, height:150 ,opacity:1},"fast");
		$("#literary").animate({top:140, left:610, width:230, height:140 ,opacity:1},"fast");
		$("#schroeter").animate({top:290, left:560, width:280, height:150 ,opacity:1},"fast");
		$("#details").animate({opacity:0},"fast");
		
		});
	$("#alumni").mouseout(function(){
		$("#home").animate({top:0, left:0,width:210, height:210 ,opacity:1},"fast");
		$("#gallery").animate({top:0, left:220, width:380, height:280 ,opacity:1},"fast");
		$("#techsoc").animate({top:0, left:610, width:230, height:130 ,opacity:1},"fast");
		$("#hostel").animate({top:220, left:0, width:210, height:220 ,opacity:1},"fast");
		$("#alumni").animate({top:290, left:220, width:330, height:150 ,opacity:1},"fast");
		$("#literary").animate({top:140, left:610, width:230, height:140 ,opacity:1},"fast");
		$("#schroeter").animate({top:290, left:560, width:280, height:150 ,opacity:1},"fast");$("#details").animate({opacity:0},"fast");
		$("#details").animate({opacity:0},"fast");
		});
	$("#hostel").mouseout(function(){
		$("#home").animate({top:0, left:0,width:210, height:210 ,opacity:1},"fast");
		$("#gallery").animate({top:0, left:220, width:380, height:280 ,opacity:1},"fast");
		$("#techsoc").animate({top:0, left:610, width:230, height:130 ,opacity:1},"fast");
		$("#hostel").animate({top:220, left:0, width:210, height:220 ,opacity:1},"fast");
		$("#alumni").animate({top:290, left:220, width:330, height:150 ,opacity:1},"fast");
		$("#literary").animate({top:140, left:610, width:230, height:140 ,opacity:1},"fast");
		$("#schroeter").animate({top:290, left:560, width:280, height:150 ,opacity:1},"fast");
		$("#details").animate({opacity:0},"fast");
		});
	
	$("#mandakini").mouseover(function(){
		$("#home").clearQueue();
		$("#gallery").clearQueue();
		$("#techsoc").clearQueue();
		$("#hostel").clearQueue();
		$("#alumni").clearQueue();
		$("#literary").clearQueue();
		$("#schroeter").clearQueue();
		});
	
	$("#dock1").mouseover(function(){
		$("#dock1").clearQueue();
		$("#dock2").clearQueue();
		$("#dock3").clearQueue();
		$("#dock4").clearQueue();
		$("#dock5").clearQueue();
		$("#calender").clearQueue();
		$("#polls").clearQueue();
		$("#library").clearQueue();
		$("#utilities").clearQueue();
		$("#contact").clearQueue();
		$("#dock1").animate({width:100, height:100}, "fast");
		$("#dock2").animate({width:70, height:70}, "fast");
		$("#dock3").animate({width:50, height:50}, "fast");
		$("#dock4").animate({width:50, height:50}, "fast");
		$("#dock5").animate({width:50, height:50}, "fast");
		$("#calender").animate({height:100}, "fast");
		$("#polls").animate({height:70}, "fast");
		$("#library").animate({height:50}, "fast");
		$("#utilities").animate({height:50}, "fast");
		$("#contact").animate({height:50}, "fast");
		$("#details").clearQueue();
		$("#details").animate({opacity:0},"fast", function(){
			document.getElementById("comment").innerHTML="Mandak Calendar, use this to plan ahead.... ";
			$("#details").animate({opacity:1},"fast");
			})
		});
	$("#dock2").mouseover(function(){
		$("#dock1").clearQueue();
		$("#dock2").clearQueue();
		$("#dock3").clearQueue();
		$("#dock4").clearQueue();
		$("#dock5").clearQueue();
		$("#calender").clearQueue();
		$("#polls").clearQueue();
		$("#library").clearQueue();
		$("#utilities").clearQueue();
		$("#contact").clearQueue();
		$("#dock2").animate({width:100, height:100}, "fast");
		$("#dock3").animate({width:70, height:70}, "fast");
		$("#dock1").animate({width:70, height:70}, "fast");
		$("#dock4").animate({width:50, height:50}, "fast");
		$("#dock5").animate({width:50, height:50}, "fast");
		$("#calender").animate({height:70}, "fast");
		$("#polls").animate({height:100}, "fast");
		$("#library").animate({height:70}, "fast");
		$("#utilities").animate({height:50}, "fast");
		$("#contact").animate({height:50}, "fast");
		$("#details").clearQueue();
		$("#details").animate({opacity:0},"fast", function(){
			document.getElementById("comment").innerHTML="Vote for your fav tshirt, jersey, logos etc...";
			$("#details").animate({opacity:1},"fast");
			})
		});
	$("#dock3").mouseover(function(){
		$("#dock1").clearQueue();
		$("#dock2").clearQueue();
		$("#dock3").clearQueue();
		$("#dock4").clearQueue();
		$("#dock5").clearQueue();
		$("#calender").clearQueue();
		$("#polls").clearQueue();
		$("#library").clearQueue();
		$("#utilities").clearQueue();
		$("#contact").clearQueue();
		$("#dock3").animate({width:100, height:100}, "fast");
		$("#dock2").animate({width:70, height:70}, "fast");
		$("#dock4").animate({width:70, height:70}, "fast");
		$("#dock1").animate({width:50, height:50}, "fast");
		$("#dock5").animate({width:50, height:50}, "fast");
		$("#calender").animate({height:50}, "fast");
		$("#polls").animate({height:70}, "fast");
		$("#library").animate({height:100}, "fast");
		$("#utilities").animate({height:70}, "fast");
		$("#contact").animate({height:50}, "fast");
		$("#details").clearQueue();
		$("#details").animate({opacity:0},"fast", function(){
			document.getElementById("comment").innerHTML="Hostel Library, see what books are available for grasp....!";
			$("#details").animate({opacity:1},"fast");
			})
		});
	$("#dock4").mouseover(function(){
		$("#dock1").clearQueue();
		$("#dock2").clearQueue();
		$("#dock3").clearQueue();
		$("#dock4").clearQueue();
		$("#dock5").clearQueue();
		$("#calender").clearQueue();
		$("#polls").clearQueue();
		$("#library").clearQueue();
		$("#utilities").clearQueue();
		$("#contact").clearQueue();
		$("#dock4").animate({width:100, height:100}, "fast");
		$("#dock3").animate({width:70, height:70}, "fast");
		$("#dock5").animate({width:70, height:70}, "fast");
		$("#dock1").animate({width:50, height:50}, "fast");
		$("#dock2").animate({width:50, height:50}, "fast");
		$("#calender").animate({height:50}, "fast");
		$("#polls").animate({height:50}, "fast");
		$("#library").animate({height:70}, "fast");
		$("#utilities").animate({height:100}, "fast");
		$("#contact").animate({height:70}, "fast");	
		$("#details").clearQueue();
		$("#details").animate({opacity:0},"fast", function(){
			document.getElementById("comment").innerHTML="Utilities, MRTS timmigs, Bus routes and more....";
			$("#details").animate({opacity:1},"fast");
			})
		});
	$("#dock5").mouseover(function(){
		$("#dock1").clearQueue();
		$("#dock2").clearQueue();
		$("#dock3").clearQueue();
		$("#dock4").clearQueue();
		$("#dock5").clearQueue();
		$("#calender").clearQueue();
		$("#polls").clearQueue();
		$("#library").clearQueue();
		$("#utilities").clearQueue();
		$("#contact").clearQueue();
		$("#dock5").animate({width:100, height:100}, "fast");
		$("#dock4").animate({width:70, height:70}, "fast");
		$("#dock1").animate({width:50, height:50}, "fast");
		$("#dock2").animate({width:50, height:50}, "fast");
		$("#dock3").animate({width:50, height:50}, "fast");
		$("#calender").animate({height:50}, "fast");
		$("#polls").animate({height:50}, "fast");
		$("#library").animate({height:50}, "fast");
		$("#utilities").animate({height:70}, "fast");
		$("#contact").animate({height:100}, "fast");
		$("#details").clearQueue();
		$("#details").animate({opacity:0},"fast", function(){
			document.getElementById("comment").innerHTML="Contact us:-<br/>Ranjith J N<br/>Alumni Secretary 2012-13";
			$("#details").animate({opacity:1},"fast");
			})
		});
	
	$("#dock5").mouseout(function(){
		$("#dock1").clearQueue();
		$("#dock2").clearQueue();
		$("#dock3").clearQueue();
		$("#dock4").clearQueue();
		$("#dock5").clearQueue();
		$("#calender").clearQueue();
		$("#polls").clearQueue();
		$("#library").clearQueue();
		$("#utilities").clearQueue();
		$("#contact").clearQueue();
		$("#dock5").animate({width:50, height:50}, "fast");
		$("#dock4").animate({width:50, height:50}, "fast");
		$("#dock1").animate({width:50, height:50}, "fast");
		$("#dock2").animate({width:50, height:50}, "fast");
		$("#dock3").animate({width:50, height:50}, "fast")
		$("#calender").animate({height:50}, "fast");
		$("#polls").animate({height:50}, "fast");
		$("#library").animate({height:50}, "fast");
		$("#utilities").animate({height:50}, "fast");
		$("#contact").animate({height:50}, "fast");
		$("#details").animate({opacity:0},"fast");
		});
	$("#dock1").mouseout(function(){
		$("#dock5").animate({width:50, height:50}, "fast");
		$("#dock4").animate({width:50, height:50}, "fast");
		$("#dock1").animate({width:50, height:50}, "fast");
		$("#dock2").animate({width:50, height:50}, "fast");
		$("#dock3").animate({width:50, height:50}, "fast")
		$("#calender").animate({height:50}, "fast");
		$("#polls").animate({height:50}, "fast");
		$("#library").animate({height:50}, "fast");
		$("#utilities").animate({height:50}, "fast");
		$("#contact").animate({height:50}, "fast");
		$("#details").animate({opacity:0},"fast");
		});
	$("#dock2").mouseout(function(){
		$("#dock5").animate({width:50, height:50}, "fast");
		$("#dock4").animate({width:50, height:50}, "fast");
		$("#dock1").animate({width:50, height:50}, "fast");
		$("#dock2").animate({width:50, height:50}, "fast");
		$("#dock3").animate({width:50, height:50}, "fast")
		$("#calender").animate({height:50}, "fast");
		$("#polls").animate({height:50}, "fast");
		$("#library").animate({height:50}, "fast");
		$("#utilities").animate({height:50}, "fast");
		$("#contact").animate({height:50}, "fast");
		$("#details").animate({opacity:0},"fast");
		});
	$("#dock3").mouseout(function(){
		$("#dock5").animate({width:50, height:50}, "fast");
		$("#dock4").animate({width:50, height:50}, "fast");
		$("#dock1").animate({width:50, height:50}, "fast");
		$("#dock2").animate({width:50, height:50}, "fast");
		$("#dock3").animate({width:50, height:50}, "fast");
		$("#calender").animate({height:50}, "fast");
		$("#polls").animate({height:50}, "fast");
		$("#library").animate({height:50}, "fast");
		$("#utilities").animate({height:50}, "fast");
		$("#contact").animate({height:50}, "fast");
		$("#details").animate({opacity:0},"fast");
		});
	$("#dock4").mouseout(function(){
		$("#dock5").animate({width:50, height:50}, "fast");
		$("#dock4").animate({width:50, height:50}, "fast");
		$("#dock1").animate({width:50, height:50}, "fast");
		$("#dock2").animate({width:50, height:50}, "fast");
		$("#dock3").animate({width:50, height:50}, "fast")
		$("#calender").animate({height:50}, "fast");
		$("#polls").animate({height:50}, "fast");
		$("#library").animate({height:50}, "fast");
		$("#utilities").animate({height:50}, "fast");
		$("#contact").animate({height:50}, "fast");
		$("#details").animate({opacity:0},"fast");
		});
	$("#lowbar").mouseover(function(){
		$("#credits").animate({opacity:1}, "fast");
		});
	$("#lowbar").mouseout(function(){
		$("#credits").animate({opacity:0}, "fast");
		});
	
	
// trying to make top links also show text
	});
	$("#picasa").mouseover(function(){
		$("#details").clearQueue();
		$("#details").animate({opacity:0},"fast", function(){
		document.getElementById("comment").innerHTML="follow us at....";
			$("#details").animate({opacity:1},"fast");
			})
	 });
	
	
	
// tech tab(when clicked tech imaage)	
	$(document).ready(function(){
			$("#aboutback").click(function(){	
						$("#frame").show();
						$("#details").show();
						$("#about").hide();
						});
		});	
	$(document).ready(function(){
			$("#home").click(function(){	
						$("#frame").hide();
						$("#details").hide();
						$("#about").show();
						$("#about").animate({opacity:1},"slow");
						});
			$("#contactback").click(function(){	
						$("#frame").show();
						$("#details").show();
						$("#allcontact").hide();
						});

		});