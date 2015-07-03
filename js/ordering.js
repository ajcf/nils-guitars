$(document).ready(function(){

	//back
	$('input[name="backRadios"]').change(function(e) {
	    updateBuildSummary(this, "backMaterial");

	    var eventTarget = e.currentTarget;

	    var price = 0;
    	var rawPrice = eventTarget.dataset["price"];
    	if (rawPrice != undefined)
    	{
    		price = parseInt(rawPrice, 10);
    	}

	    // add correct text next to spruce top radio
	    if (price <= 0)
	    {
	    	message = "";
	    }
	    else
	    {
	    	price = price / 4;
	    	message = "(subtract $" + price + ")";
	    }

	    $("#spruceTopPriceAdjustment")[0].textContent = message;

	});

	//top
	$('input[name="topRadios"]').change(function(e) {
	    updateBuildSummary(this, "topMaterial");
	});



	//neck
	$('input[name="neckRadios"]').change(function(e) {
	    updateBuildSummary(this, "neckMaterial");
	});

	//fingerboard
	$('input[name="fingerboardRadios"]').change(function(e) {
	    updateBuildSummary(this, "fingerboardMaterial");    
	});

	//purfling
	$('input[name="purflingRadios"]').change(function(e) {
	    updateBuildSummary(this, "purflingMaterial");
	});

	//rosette
	$('input[name="rosetteRadios"]').change(function(e) {
	    updateBuildSummary(this, "rosetteMaterial");
	});

	//binding
	$('input[name="bindingRadios"]').change(function(e) {
	    updateBuildSummary(this, "bindingMaterial");
	});
	//electronics
	$('input[name="electronicsRadios"]').change(function(e) {
	    updateBuildSummary(this, "electronics");
	});

	selectDefaultOptions();
});

var updateBuildSummary = function(radioList, fieldIDToUpdate)
{
	var radioValue = $(radioList).val();
	$("#" + fieldIDToUpdate)[0].textContent = radioValue;
}

var selectDefaultOptions = function()
{
	$('.defaultUkeOption').each(function()
	{
		$(this).click();
	});
}
