var score=0
				$("#getvalue").on('keyup', function (e) {
				    if (e.keyCode == 13) {
				        var inputValue=$('#getvalue').val();
				        $('.wordsscreen span').each(function (){
                  if(inputValue === $(this).text()){
                      $('#getvalue').val('');
                      $(this).remove();
                      $('.score-board b').text(score+=1);
                  }
							else{
								$('.error').show().delay(1000).fadeOut();
							}
							});
				    }
				});
				

			(function(){
				$('#getvalue').focus();
			    var words = [
			        "awesome",
			        "judge",
			        "cool",
			        "fan",
			        "foo", 
			        "bar", 
			        "baz", 
			        "chuck", 
			        "apple", 
			        "mango", 
			        "boy", 
			        "toy", 
			        "basic",
			        "enclose",
					'fiji',
					'unwear',
					'dardic',
					'leadier',
					'blow',
					'cry',
					'alexandrian',
					'allentown',
					'idolist',
					'convexedness',
					'handshake',
					'cooner',
					'thessalus',
					'in'
			        ], i = 0;
			    setInterval( function(){
			    	// generatign new span element
			    	 var elem = $("<span />", {
					    "class": "quote"
					  });
					  $('.wordsscreen').append(elem);
			        elem.slideDown(function(){
			            $(this).html(words[i=(i+1)%words.length]).animate({
			            	top:'100%'
			            }, 4000);
			        })
			        var position = $('span').position()
				    if(position.top > 280){
				    	$('.gameover').fadeIn();
				    }

			    }, 2000);
			        
			})();