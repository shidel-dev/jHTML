$(function(){
	$("button").click(function(e){
		$.jHtml.fetch("./res/json/"+e.target.id + ".json",render);
		function render(res){
			$("#container").html(res)
			$("#submit").click(function(e){
				e.preventDefault()
				$(this).parent("form").find("input").val()
			})
		}
	})
})
