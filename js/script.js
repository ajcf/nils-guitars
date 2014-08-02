var ukulele_images = [
	"ukulele/lightbox/africanmahogfront.jpg",
	"ukulele/lightbox/africanmahogback.jpg",
	"ukulele/lightbox/blackwalnutsprucefront.jpg",
	"ukulele/lightbox/blackwalnutspruceback.jpg",
	"ukulele/lightbox/sapelefront.jpg",
	"ukulele/lightbox/sapeleback.jpg"
]
var mandolin_images = [
	"mandolins/lightbox/rosewoodmandofront.jpg",
	"mandolins/lightbox/rosewoodmandoback.jpg"
]
var auditorium_images = [
	"guitars/auditorium/lightbox/mahogfront.jpg",
	"guitars/auditorium/lightbox/mahogback.jpg"
]
var concertii_images = [
	"guitars/concert/lightbox/2front.jpg",
	"guitars/concert/lightbox/2back.jpg"
]
var concert_images = [
	"guitars/concert/lightbox/1front.jpg",
	"guitars/concert/lightbox/1back.jpg"
]
var parlor_images = [
	"guitars/parlor/lightbox/1front.jpg",
	"guitars/parlor/lightbox/1back.jpg",
	"guitars/parlor/lightbox/2front.jpg",
	"guitars/parlor/lightbox/2back.jpg"
]


var switchTo = function(objectId)
{
	var obj = $('#'+objectId);
	obj.siblings().hide();
	obj.show();
	$('.nav-pills .active').removeClass('active');
	$('#'+objectId+'-link').addClass('active');
}

var openLightbox = function(obj)
{
	$('#modal-image').attr('src', obj.src);
	$('#lightbox').modal('show');
}

var closeLightbox = function()
{
	$('#lightbox').modal('hide');
}

var switchLightbox = function(imageId)
{
	var source = $('#'+imageId)[0].src;
	if(source.indexOf("back") > 1)
	{
		source = source.replace('back', 'front');
	}
	else
	{
		source = source.replace('front', 'back');
	}	
	$('#' + imageId).attr('src', source);
}

var lightboxChange = function(instrument, step)
{
	var srcStart = "../../images/instruments/";
	var images;
	switch(instrument)
	{
		case "ukulele":
			images = ukulele_images;
			break;
		case "mandolin":
			images = mandolin_images;
			break;
		case "auditorium":
			images = auditorium_images;
			break;
		case "concert":
			images = concert_images;
			break;
		case "concertii":
			images = concertii_images;
			break;
		case "parlor":
			images = parlor_images;
			break;
	}
	var curIndex = 0;
	var sourceStr = $('#modal-image')[0].src;
	for(var i = 0; i < images.length; i++)
	{
		if(sourceStr.indexOf(images[i]) > -1)
		{
			curIndex = i;
			break;
		}
	}
	var newIndex = curIndex + step;
	if(newIndex < 0)
	{
		newIndex = images.length - 1;
	}
	else if(newIndex > images.length - 1)
	{
		newIndex = 0;
	}
	var srcString = srcStart + images[newIndex];
	$('#modal-image').attr('src', srcString);
}