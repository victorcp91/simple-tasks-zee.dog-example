$('#signUpForm').submit(function(event){
	event.preventDefault();
	var nome = $('#inputNome').val();
	var email = $('#inputEmail').val();

	var emailFilter=/^.+@.+\..{2,}$/;
	var illegalChars= /[\(\)\<\>\,\;\:\\\/\"\[\]]/;

	if(nome==''){
		$('.signUpForm__feedback').addClass('signUpForm__feedback--wrong');
		$('.signUpForm__feedback').html('Você esqueceu de preencher seu nome     : |');
	}else if(nome.length<5){
		$('.signUpForm__feedback').addClass('signUpForm__feedback--wrong');
		$('.signUpForm__feedback').html('Preencha seu nome completo    : |');
	}else if(email==''){
		$('.signUpForm__feedback').addClass('signUpForm__feedback--wrong');
		$('.signUpForm__feedback').html('Você esqueceu de preencher seu email     : |');
	}else if(!(emailFilter.test(email))||email.match(illegalChars)){
		$('.signUpForm__feedback').addClass('signUpForm__feedback--wrong');
		$('.signUpForm__feedback').html('O email não é válido : (');
	}else{
		$('.signUpForm__feedback').removeClass('signUpForm__feedback--wrong');
		$('.signUpForm__feedback').addClass('signUpForm__feedback--right');
		$('.signUpForm__feedback').html('Assinatura realizada :)');
		$('#inputNome').val("");
		$('#inputEmail').val("");

		setTimeout(function(){ 
			$('.signUpForm__feedback').removeClass('signUpForm__feedback--right');
		}, 4000);
	}	
});