$('.squareBox__img--box1').click(function(){
	$('.modal').addClass('modal--active');
	$('.modal__img').addClass('modal__img--active');
});

$('.modal').click(function(e){
	if(!$('.modal__img').is(e.target)){
		$('.modal').removeClass('modal--active');
		$('.modal__img').removeClass('modal__img--active');
	}
});
