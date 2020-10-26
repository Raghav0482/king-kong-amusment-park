mybutton = document.getElementById("myBtn")
	// when the user scrolls down 20px  from top of the document, show the button
	window.onscroll=function() {scrollFunction()}
    function scrollFunction(){
    	if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100){
          mybutton.style.display  = "block";
      }else {
      	mybutton.style.display = "none"
      }

    }	

  // when user click on the button, scroll to the top of the document 
  function myFunction(){
  	 document.body.scrollTop = 0; // for safari
  	 document.documentElement.scrollTop = 0 ;// for chrome, firefox,opera,internet explorer
  }