
$(document).ready(function(){   

      //Experience See More / Less button
      $('.SeeMore').click(function(){
        var $this = $(this);
        var $text = this.text
        console.log($text);
		$this.toggleClass('SeeMore');
		if($this.hasClass('SeeMore')){
            console.log(this)
			$this.html('Show More   ').append('<i class="fa fa-angle-double-down" aria-hidden="true"></i>');	
		} else {
            console.log(this)
            $this.html('Less   ').append('<i class="fa fa-angle-double-up" aria-hidden="true"></i>');;		
		}
	});
 });




