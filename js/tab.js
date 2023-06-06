$(function() {
	var tab = $('#tabs .tabs-items > div'); 
	tab.hide().filter(':first').show(); 
	
	// Клики по вкладкам.
	$('#tabs .tabs-nav a').click(function(){
		tab.hide(); 
		tab.filter(this.hash).show(); 
		$('#tabs .tabs-nav a').removeClass('active');
		$(this).addClass('active');
		return false;
	}).filter(':first').click();
 
	// Клики по якорным ссылкам.
	$('.tabs-target').click(function(){
		$('#tabs .tabs-nav a[href=' + $(this).attr('href')+ ']').click();
	});
	
	// Отрытие вкладки из хеша URL
	if(window.location.hash){
		$('#tabs-nav a[href=' + window.location.hash + ']').click();
		window.scrollTo(0, $("#" . window.location.hash).offset().top);
	}
});

function ButtonActive(){
    var elem = document.getElementById('tab1').value;
    var elem = elem + 1;
    document.getElementById('tab1').value = elem;
    var e1 = document.getElementById('tab1').value;
    var e2 = document.getElementById('tab2').value;
    var e3 = document.getElementById('tab3').value;
    var e4 = document.getElementById('tab4').value;
    if(e1 > 0 && e2 >0 && e3> 0 && e4>0){
        const button = document.getElementById('next');
        button.removeAttribute('disabled','');
    }
}
function ButtonActive1(){
    var elem = document.getElementById('tab2').value;
    var elem = elem + 1;
    document.getElementById('tab2').value = elem;
    var e1 = document.getElementById('tab1').value;
    var e2 = document.getElementById('tab2').value;
    var e3 = document.getElementById('tab3').value;
    var e4 = document.getElementById('tab4').value;
    if(e1 > 0 && e2 >0 && e3> 0 && e4>0){
        const button = document.getElementById('next');
        button.removeAttribute('disabled','');
    }
}
function ButtonActive2(){
    var elem = document.getElementById('tab3').value;
    var elem = elem + 1;
    document.getElementById('tab3').value = elem;
    var e1 = document.getElementById('tab1').value;
    var e2 = document.getElementById('tab2').value;
    var e3 = document.getElementById('tab3').value;
    var e4 = document.getElementById('tab4').value;
    if(e1 > 0 && e2 >0 && e3> 0 && e4>0){
        document.getElementById('next').removeAttribute("disabled");
    }
}
function ButtonActive3(){
    var elem = document.getElementById('tab4').value;
    var elem = elem + 1;
    document.getElementById('tab4').value = elem;
    var e1 = document.getElementById('tab1').value;
    var e2 = document.getElementById('tab2').value;
    var e3 = document.getElementById('tab3').value;
    var e4 = document.getElementById('tab4').value;
    if(e1 > 0 && e2 >0 && e3> 0 && e4>0){
        const button = document.getElementById('next');
        button.removeAttribute('disabled','');
    }
}
