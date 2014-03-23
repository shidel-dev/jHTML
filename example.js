$(function(){
	$("button").click(function(e){
		$.jHtml.fetch("./res/json/"+e.target.id + ".json",render);
		function render(res){
			$("#container").html(res)
		}
	})
})
