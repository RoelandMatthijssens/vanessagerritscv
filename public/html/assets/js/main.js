$(document).ready(function(){
	$(".cv_link").on("click", function(){
		openCv($(this));
	});
});

function openCv(object){
	var toggle = object.hasClass("active");
	$(".cv_link").removeClass("active");
	if(!toggle){
		object.addClass("active");
		openSideContent();
	}else{
		closeSideContent();
	}
	var container = $(".side_content");
	var cvNames = object.data("cv").split(",");
	container.html("");
	for(var i in cvNames){
		var cvName = cvNames[i];
		var cvPath = "assets/img/"+cvName+".jpg";
		var img = $("<img/>");
		img.attr("src", cvPath);
		$(".side_content").append(img);
	}
}

function openSideContent(){
	var sideContent = $(".side_content");
	var mainContent = $(".main_content");
	sideContent.css("height", mainContent.height());
	if(sideContent.hasClass("hidden")){
		mainContent.animate({
			marginLeft: "-=25%"
		}, 500, function(){
			sideContent.removeClass("hidden");
		});
		//mainContent.css("margin-left", "10%");
	}
}

function closeSideContent(){
	var sideContent = $(".side_content");
	var mainContent = $(".main_content");
	sideContent.addClass("hidden");
		mainContent.animate({
			marginLeft: "+=25%"
		}, 500);
}
