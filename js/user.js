$(document).ready(function(){
	$("#cart_page #cart #payment_info #card_number input").keyup(function(){

		if ($("#cart_page #cart #payment_info #card_show img").length == 0) {
			$("#cart_page #cart #payment_info #card_show").html('<img src="">');
		}

		if ($("#cart_page #cart #payment_info #card_number input").val()[0] == "4") {
			$("#cart_page #cart #payment_info #card_show img").attr("src", "img/visa_card.png");
		}else if ($("#cart_page #cart #payment_info #card_number input").val()[0] == "5"){
			$("#cart_page #cart #payment_info #card_show img").attr("src", "img/master_card.png");
		}else{
			$("#cart_page #cart #payment_info #card_show").html('');
		}
	})
});