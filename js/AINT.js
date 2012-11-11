///
///Interactive Amahi Network Troubleshooter
///
$("input[type='submit']").click(function() { return false; });
///Welcome
$(document).ready(function() {   	
    $('#go-inter').click(begin); 
});


function begin() {
    $("#welcome").detach();    	
    $('#step1').toggleClass('hidden');
};
amahiDomain ="jamahi";

///
///Step One
///
$('#ip-address').click(stepOne);

function stepOne() {
    if ((ipAddress.value).length < 6 ) {
	$('#step1').append("<div class=\"alert alert-block\" ><button type=\"button\" class=\"close\" data-dismiss=\"alert\">×</button><span class=\"label label-important\">Important</span>  Please enter the IP Address in the form of x.x.x.x (ex.  192.168.1.10).</div>");	
    } else {
	$('#step1').toggleClass('hidden');
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
	$('#step2').toggleClass('hidden');
	$('#insertHere').append("<p><i class='icon-ok'></i> Step 2: Your HDA domain name is <span class=\"highlight\">  " +domain.value+ "</span>.</p>");
	$('#amdom').append(amahiDomain);
	$('#step3').toggleClass('hidden');
    };

};

///
///Step 3
///
$('#gateway-id').click(stepThree);
function stepThree() {
    if ((gatewayIP.value).length < 6) {
	$('#step3').append("<div class=\"alert alert-block\"><button type=\"button\" class=\"close\" data-dismiss=\"alert\">×</button><span class=\"label label-important\">Important</span>  Please enter your IP of your router.</div>");	
    } else {
	$('#step3').toggleClass('hidden');
	$('#insertHere').append("<p><i class='icon-ok'></i> Step 3: Your router IP address is <span class=\"highlight\"> " +gatewayIP.value+ "</span>.</p>");
	$('#step4').toggleClass('hidden');
	
	
    };
};
///
///Step 4
///

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

$('#dnsYesNo').click(stepFour);

function stepFour () {
    if ((dnsFour.value) != "yes" && dnsFour.value != "no") {
	$('#step4').append("<div class=\"alert alert-block\"><button type=\"button\" class=\"close\" data-dismiss=\"alert\">×</button><span class=\"label label-important\">Important</span>  Please select Yes or No. </div>");	
    } else {
	$('#step4').toggleClass('hidden');
	$('#insertHere').append("<p><i class='icon-ok'></i> Step 4: Your HDA DNS server is working fine for <span class='highlight'>local hostnames</span>.</p>");
	$('#step5').toggleClass('hidden');	
    };

};

///
///Step 5
///

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
