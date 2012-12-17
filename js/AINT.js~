///
///Interactive Amahi Network Troubleshooter
///
$("input[type='submit']").click(function() { return false; });
///Welcome
$(document).ready(function() {   	
    $('#go-inter').click(begin); 
});

//Variables
amahiIp = "";
gatewayIp = "";
amahiDomain = "";


function begin() {
    $('#welcome').collapse('hide');  	
    $('#step1').toggleClass('hidden');
};

///
///Step One
///
$('#ip-address').click(stepOne);

function stepOne() {
    amahiIp = ipAddress.value;
    if ((ipAddress.value).length < 6 ) {
	$('#step1').append("<div class=\"alert alert-block\" ><button type=\"button\" class=\"close\" data-dismiss=\"alert\">×</button><span class=\"label label-important\">Important</span>  Please enter the IP Address in the form of x.x.x.x (ex.  192.168.1.10).</div>");	
    } else {
	//$('#step1').toggleClass('hidden');
	$('#step1').collapse('hide');
	$('#progress').toggleClass('hidden');
	$('#insertHere').append("<p><i class='icon-ok'></i> Step 1: Your HDA IP address is <span class=\"highlight\"> " +ipAddress.value+ "</span>.</p>");
	$('#step2').toggleClass('hidden');	
    }
};

///
///Step 2
///
$('#domain-id').click(stepTwo);

function stepTwo() {
    amahiDomain = domain.value;
    if ((domain.value).length < 4) {
	$('#step2').append("<div class=\"alert alert-block\"><button type=\"button\" class=\"close\" data-dismiss=\"alert\">×</button><span class=\"label label-important\">Important</span>  Please enter your HDA home domain in the form of name.tld (ex.  amahi.net).</div>");	
    } else {
	/*$('#domain-id').detach();*/
	$('#step2').collapse('hide');
	$('#insertHere').append("<p><i class='icon-ok'></i> Step 2: Your HDA domain name is <span class=\"highlight\">  " +domain.value+ "</span>.</p>");
	$('.amdom').append(amahiDomain);
	$('#step3').toggleClass('hidden');
    };

};

///
///Step 3
///  $("a.test").live('click', function() {
$('#gateway-id').on('click', function() {
    gatewayIp = gatewayIP.value;
    if ((gatewayIP.value).length < 6) {
	$('#step3').append("<div class=\"alert alert-block\"><button type=\"button\" class=\"close\" data-dismiss=\"alert\">×</button><span class=\"label label-important\">Important</span>  Please enter your IP of your router.</div>");	
    } else {
	$('#step3').collapse('hide');
	$('#insertHere').append("<p><i class='icon-ok'></i> Step 3: Your router IP address is <span class=\"highlight\"> " +gatewayIP.value+ "</span>.</p>");
	$('#step4').toggleClass('hidden');
    //$('#gateIp').append(gatewayIp);
	
	
    };
});


///Makes Bootstrap Radio Groups Behave like radio buttons, almost
jQuery.fn.getParent = function(num) {
    var last = this[0];
    for (var i = 0; i < num; i++) {
        last = last.parentNode;
    }
    return jQuery(last);
};


$(".yesBtn").click(function (event) {
    event.preventDefault();
    var ParId = $(this).parent(1).attr("id");
    ParId = ParId.slice(0, -1)
    $("#"+ParId).val('yes');  
    //console.log(ParId);//for testing
});

$(".noBtn").click(function (event) {
    event.preventDefault();
    var ParId = $(this).parent(1).attr("id");
    ParId = ParId.slice(0, -1)
    $("#"+ParId).val('no');
});

///
///Step 4
///

$('#dnsYesNo').on('click', function() {
    if ((dnsFour.value) != "yes" && dnsFour.value != "no") {
	$('#step4').append("<div class=\"alert alert-block\"><button type=\"button\" class=\"close\" data-dismiss=\"alert\">×</button><span class=\"label label-important\">Important</span>  Please select Yes or No. </div>");	
    } else if ((dnsFour.value) == "no") {
		$('#insertHere').append('<p><i class="icon-flag"></i>  Step 4: Your HDA DNS server is <strong class="text-error">NOT</strong> working for <strong class="highlight">local hostnames</strong>.');
		$('#step4').collapse('hide');
		$('#step4TS').toggleClass('hidden');
    } else {
	$('#step4').collapse('hide');
	$('#insertHere').append("<p><i class='icon-ok'></i> Step 4: Your HDA DNS server is working fine for <span class='highlight'>local hostnames</span>.</p>");
	$('#step5').toggleClass('hidden');	
     $('.gateIp').append(gatewayIp);
	//$('#amdom2').append(amahiDomain);
     //$('#amdom3').append(amahiDomain);
     //$('#gateIp2').append(gatewayIp);
     //$('#amdom4').append(amahiDomain);
    };

}) ;

///
///Step 5
///

$('#gatewayYesNo').click(stepFive);

function stepFive () {
    if ((gatewayFive.value) != "yes" && gatewayFive.value != "no") {
	$('#step5').append("<div class=\"alert alert-block\"><button type=\"button\" class=\"close\" data-dismiss=\"alert\">×</button><span class=\"label label-important\">Important</span>  Please select Yes or No. </div>");	
    } else if ((gatewayFive.value) == "no") {
		$('#insertHere').append('<p><i class="icon-flag"></i>  Step 5: Your <span class="highlight">router</span> is <span class= "text-error" >NOT</span> accessible from your HDA server.</p>');
		$('#step5').collapse('hide');
		$('#step5TS').toggleClass('hidden');
    } else {
	$('#step5').collapse('hide');
	$('#insertHere').append("<p><i class='icon-ok'></i> Step 5: Your <span class='highlight'>router</span> is accessible from your HDA server.</p>"); 
	//$('#step6').toggleClass('hidden');	
    };

};








///
///Step 6
///

///
///Step 7
///

///
///Step 8
///

///
///Step 9
///

///
///Step 10
///

///
///Step 11
///

///
///Step 12
///

///
///Step 13
///

///
///Step 14
///

///
///Step 15
///

///
///Step 16
///
