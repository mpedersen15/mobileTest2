$(document).on("pageinit",function(){
	var pageDisplayed = "welcome"; //Keep track of which page is displayed
	$('#signup').hide();
	$('#login').hide();
	$('#survey1').hide();
	$('#survey2').hide();
	$('#survey3').hide();
	
	$('#toSignup').click(function(){
		$('#'+pageDisplayed).hide(500,function(){
			$('#signup').show(500);
		});
		pageDisplayed = "signup";
	});
	
	$('#toLogin').click(function(){
		$('#'+pageDisplayed).hide(500,function(){
			$('#login').show(500);
		});
		pageDisplayed = "login";
	});
	$('.toWelcome').click(function(){
		$('#'+pageDisplayed).hide(500,function(){
			$('#welcome').show(500);
		});
		pageDisplayed = "welcome";
	});
	
	$('#loginform').validate({
			rules: {
				email: {
					required: true
				},
				password: {
					required: true
				}
			}
			
		});
		
	$('#signupform').validate({
		rules: {
				email2: {
					equalTo: '#email'
				},
				password2: {
					equalTo: '#password'
				}
			},
		messages: {
			email2: {
				equalTo: 'Entered emails do not match!'
			},
			password2: {
				equalTo: 'Entered passwords do not match!'
			}
		},
		submitHandler: function(form) {
			   $data = $(form).formSerialize();
			   $(form).ajaxSubmit({
					url:"./insert.php",
					data: $data,
					type:"POST",
					success: function(){
						$('#signup').hide(500,function(){
							$('#survey1').show(500);
						});
					},
				})
		}
	});
	
});
 
 $("#formID").validate({
    submitHandler: function(form) {
      //my logic
      alert('here');
    }
  });

