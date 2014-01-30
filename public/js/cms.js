var post = {}

$(document).ready(function() {
    var type = $('#type'),
        content = $('#content');

    $('#submit').click(function() {
    		post["title"] = $("#title").val()
        $.ajax({
            type: "POST",
            url: "/add",
            data: post,
            success:function(res){
            	console.log(res)
            }
        })

    });

    $('#add').click(function() {
        post[_.keys(post).length] = {
            tag: type.val(),
            content: content.val()
        }
        content.val("")
        console.log(post)
    })
});



