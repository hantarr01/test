$(start).click(function(){
	$(left).animate({
		width: '-50vw',
	});  
});

$(start).click(function(){
	$(right).animate({
		width: '-50vw',
	});  
});



$(back).click(function(){
	$(left).animate({
		width: '50vh', 
	});
});

$(back).click(function(){
	$(right).animate({
		width: '50vh', 
	});
});
