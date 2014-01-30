
var response;
$(document).ready(function() {
    $('.titles').click(function() {

        renderArticle(this.id)
    })
});

var renderArticle = function(id) {
    $.ajax({
        type: "POST",
        url: "/article",
        data: {id:id},
        success: function(res) {

        	response = jQuery.parseJSON(res)
        	  _.templateSettings.variable = "res";
            var template = _.template(

                $("script.template").html()

            );

            $(".container").html(template(jQuery.parseJSON(res)))

        }
    });



}