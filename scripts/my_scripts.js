$(document).ready(function(){
	
	lightening_one();
	lightening_two();
	lightening_three();
	
	var headclix = 0,
		eyeclix = 0,
		noseclix = 0,
		mouthclix = 0;
		
		$("#head").click(
			function(){
				if(headclix<9){
					$(this).animate({left: "-=367px"},500);
					headclix+=1;
				}//end if
				else
				{
					$("#head").animate({left: "0px"},500);
					headclix=0;
				}//end else
			}//end anonymous functioon
		);// end click
		
		$("#eyes").click(
			function(){
				if(eyeclix < 9)
				{
					$(this).animate({left:"-=367px"},500);
					eyeclix +=1;
				}//end of if
				else
				{
					$("#eyes").animate({left:"0px"}, 500);
						eyeclix = 0;
				}//end of else
			}//end of anonymous function
		)//end of click function
		
		$("#nose").click(
			function(){
				if(noseclix <9){
					$(this).animate({left:"-=367px"},500);
					noseclix+=1;
				}//end of if
				else
				{
					$("#nose").animate({left: "0px"}, 500);
					noseclix = 0;
				}//end of else
			}//end of anonymous function
		)//end of click function
		
		$("#mouth").click(
			function(){
			if(mouthclix <9){
			$(this).animate({left: "-=367px"},500);
			mouthclix  +=1;
		  }//end of if
		  else
		  {
			  $("#mouth").animate({left:"0"}, 500);
			  mouthclix=0;
		  }//end of else
		 }//end of anonymous
		)//end of click function
	
 });//end doc onready function

function lightening_one(){
		$("#container #lightning1").fadeIn(250).fadeOut(250);
	}
	setTimeout("lightening_one()", 4000);
	
	function lightening_two(){
		$("#container #lightning2").fadeIn(300).fadeOut(300);
	}
	setTimeout("lightening_two()", 4250);
	
	function lightening_three(){
		$("#container #lightning3").fadeIn(400).fadeOut(400);
	}
	setTimeout("lightening_three()", 4500);