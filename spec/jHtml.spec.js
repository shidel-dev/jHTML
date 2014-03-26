describe("jHtml",function(){
	it("extends dollar namespace", function(){
		expect($.jHtml.parse).toBeDefined();
	});
})

describe("jHtml parse", function(){
	it("generates correct markup for a hello world div", function(){
		 var header = 
 [
  "div",
    {"class":"holder"},[
      "p",{"id":"example"},"hello"
    ]
 ];

		expect($.jHtml.parse(header)).toBe("<div class='holder' ><p id='example' >hello</p></div>")
	})

	it("generates deeply nested dom", function(){
		var deepDom =
		[
		 "div",
		 		{"id":"outer"},[
		 			"div",{"id":"inner"},[],
		 			"div",{"id":"inner"},[
		 				"p",{"id":"deep"},[
		 					"a",{"href":"http://google.com"},"google"
		 				]
		 			]
		 		]	
		]

		expect($.jHtml.parse(deepDom)).toBe("<div id='outer' ><div id='inner' ></div><div id='inner' ><p id='deep' ><a href='http://google.com' >google</a></p></div></div>")
	})

	it("can generate a more complex piece of DOM", function(){
		var options = 
[
"h1",{},"Post 2",
	"p",{},"I've always had a keen interest in implementing security in webapps. I implemented container-managed authentication (CMA) in AppFuse in 2002, watched Tomcat improve it's implementation in 2003 and implemented Remember Me with CMA in 2004. In 2005, I switched from CMA to Acegi Security (now Spring Security) and never looked back. I've been very happy with Spring Security over the years, but also hope to learn more about Apache Shiro and implementing OAuth to protect JavaScript APIs in the near future.  I was recently re-inspired to learn more about security when working on a new feature at Overstock.com. The feature hasn't been released yet, but basically boils down to allowing users to login without leaving a page. For example, if they want to leave a review on a product, they would click a link, be prompted to login, enter their credentials, then continue to leave their review. The login prompt and subsequent review would likely be implemented using a lightbox. While lightboxes are often seen in webapps these days because they look good, it's also possible Lightbox UIs provide a poor user experience. User experience aside, I think it's interesting to see what's required to implement such a feature.  To demonstrate how we did it, I whipped up an example using AppFuse Light, jQuery and Spring Security. The source is available in my ajax-login project on GitHub. To begin, I wanted to accomplish a number of things to replicate the Overstock environment:",
	"p",{},[
		"a",{"href":"http://shidel.com"},[]
	],
	"br",{},[],
	"form",{},[
			"input" ,{"list":"browsers", "name":"browser"},[],
			"datalist", {"id":"browsers"},[
			  "option",{ "value":"Internet Explorer"},[],
			  "option",{ "value":"Chrome"},[],
			  "option",{ "value":"Safari"},[],
			  "option",{ "value":"Firefox"},[],
			  "option",{ "value":"Opera"},[]
			],
			"button",{"id":"submit"},"submit"
	],

	"p",{},"by Joe Shidel"
]

  expect($("<div></div>").html($.jHtml.parse(options)).find("option").length).toBe(5);
  expect($("<div></div>").html($.jHtml.parse(options)).find("button").attr("id")).toBe("submit")
	})

  it("triggers callback function if provided", function(){
   var post = 
[
  "h1",{},"Post 1",
	"p",{},"Often recursive techniques require helper functions to handle some of the recursive logic for the main method. Most of the time these method are given not so great names like 'fooHelper' which make the code less readable, and pollutes the name-space.",

	"p",{},"Anonymous functions are a great way to have unnamed functions, and are a great tool in many cases. However since they are unnamed it may not be so intuitive how to use an anonymous function recursively.",

	"p",{},"Thankfully javaScript makes this quite simple.",

	"p",{},"The arguments object has a property called 'callee' which refers to the currently executing function. This can be used to make recursive calls. Of course you could also use named functions as long as they are not in the global scope, and this would not be a problem.",

	"p",{},"I will show both of these techniques by creating functions to test if two numbers are co-prime (their greatest common divisor is one).",
	
	"pre",{},"Number.prototype.isCoprimeTo = function(num) {\r\n \r\n  if (this>num) var small = num, big = this;\r\n  else var small = this, big = num; \r\n \r\n    return (function(a, b) {\r\n        if (b == 0) return a;\r\n        return arguments.callee(b, a % b);\r\n    })(small, big) == 1\r\n}\r\n \r\n \r\n \r\n\/\/======example two=======\r\n \r\nfunction isCoprimeTo(num1, num2){\r\n \r\n  if (num1>num2) var small = num2, big = num1;\r\n  else var small = num1, big = num2;\r\n \r\n  return (function gcd(a,b){\r\n    if (b == 0) return a;\r\n    return gcd(b, a % b);\r\n  })(small,big) == 1\r\n}\r\n \r\n\/\/===tests==\r\nvar myNum = 35;\r\nconsole.log(myNum.isCoprimeTo(64) == true)\r\nconsole.log(isCoprimeTo(64,35) == true)",
	
	"p",{},[
		"a",{"href":"http://shidel.com"},[]
	],

	"br",{},[],
	
	"p",{},"by Joe Shidel"
]
  var div = $("<div></div>")
   $.jHtml.parse(post,function(result){
   	div.html(result)
   })
   expect(div.children().length).toBe(11);

  })
});

describe("jHtml fetch", function(){
	it("is defined under jHtml namespace", function(){
		expect($.jHtml.fetch).toBeDefined();
	})
})

describe("jHtml validate", function(){
	it("is defined under jHTml namespace", function(){
		expect($.jHtml.validate).toBeDefined();
	});

	it("can pass good code", function(){
	var post = 
[
  "h1",{},"Post 1",
	"p",{},"Often recursive techniques require helper functions to handle some of the recursive logic for the main method. Most of the time these method are given not so great names like 'fooHelper' which make the code less readable, and pollutes the name-space.",

	"p",{},"Anonymous functions are a great way to have unnamed functions, and are a great tool in many cases. However since they are unnamed it may not be so intuitive how to use an anonymous function recursively.",

	"p",{},"Thankfully javaScript makes this quite simple.",

	"p",{},"The arguments object has a property called 'callee' which refers to the currently executing function. This can be used to make recursive calls. Of course you could also use named functions as long as they are not in the global scope, and this would not be a problem.",

	"p",{},"I will show both of these techniques by creating functions to test if two numbers are co-prime (their greatest common divisor is one).",
	
	"pre",{},"Number.prototype.isCoprimeTo = function(num) {\r\n \r\n  if (this>num) var small = num, big = this;\r\n  else var small = this, big = num; \r\n \r\n    return (function(a, b) {\r\n        if (b == 0) return a;\r\n        return arguments.callee(b, a % b);\r\n    })(small, big) == 1\r\n}\r\n \r\n \r\n \r\n\/\/======example two=======\r\n \r\nfunction isCoprimeTo(num1, num2){\r\n \r\n  if (num1>num2) var small = num2, big = num1;\r\n  else var small = num1, big = num2;\r\n \r\n  return (function gcd(a,b){\r\n    if (b == 0) return a;\r\n    return gcd(b, a % b);\r\n  })(small,big) == 1\r\n}\r\n \r\n\/\/===tests==\r\nvar myNum = 35;\r\nconsole.log(myNum.isCoprimeTo(64) == true)\r\nconsole.log(isCoprimeTo(64,35) == true)",
	
	"p",{},[
		"a",{"href":"http://shidel.com"},[]
	],

	"br",{},[],
	
	"p",{},"by Joe Shidel"
]
		expect($.jHtml.validate(post)).not.toThrow()
	})



	it("catches a mistake in jHtml",function(){
		var mistake = ["div",[],{}]
		expect($.jHtml.validate(mistake)).toThrow();
	})

  it("catches nested mistakes", function(){
		var options = 
[
"h1",{},"Post 2",
	"p",{},"I've always had a keen interest in implementing security in webapps. I implemented container-managed authentication (CMA) in AppFuse in 2002, watched Tomcat improve it's implementation in 2003 and implemented Remember Me with CMA in 2004. In 2005, I switched from CMA to Acegi Security (now Spring Security) and never looked back. I've been very happy with Spring Security over the years, but also hope to learn more about Apache Shiro and implementing OAuth to protect JavaScript APIs in the near future.  I was recently re-inspired to learn more about security when working on a new feature at Overstock.com. The feature hasn't been released yet, but basically boils down to allowing users to login without leaving a page. For example, if they want to leave a review on a product, they would click a link, be prompted to login, enter their credentials, then continue to leave their review. The login prompt and subsequent review would likely be implemented using a lightbox. While lightboxes are often seen in webapps these days because they look good, it's also possible Lightbox UIs provide a poor user experience. User experience aside, I think it's interesting to see what's required to implement such a feature.  To demonstrate how we did it, I whipped up an example using AppFuse Light, jQuery and Spring Security. The source is available in my ajax-login project on GitHub. To begin, I wanted to accomplish a number of things to replicate the Overstock environment:",
	"p",{},[
		"a",{"href":"http://shidel.com"},[]
	],
	"br",{},[],
	"form",{},[
			"input" ,{"list":"browsers", "name":"browser"},[],
			"datalist", {"id":"browsers"},[
			  "option",{ "value":"Internet Explorer"},[],
			  "option",{ "value":"Chrome"},[{},{},[]],//the bad part!
			  "option",{ "value":"Safari"},[],
			  "option",{ "value":"Firefox"},[],
			  "option",{ "value":"Opera"},[]
			],
			"button",{"id":"submit"},"submit"
	],

	"p",{},"by Joe Shidel"
]

expect($.jHtml.validate(options)).toThrow();  	
  })
});

describe("jHtml template",function(){
	it("can make a basic dom string from template data", function(){
		expect($.jHtml.template("<p>{{=data.name}}</p>")({name:"joe"})).toBe("<p>joe</p>");
	})

	it("can have named objects",function(){
		expect($.jHtml.template("<p>{{=user.name}}</p>", "user")({name:"joe"})).toBe("<p>joe</p>");
	})

	it("can do javaScript", function(){
		var templStr = "<div>{{  for(var i = 0; i < 4; i++){ }}<p>{{= i }}</p>{{ } }}</div>"

		expect($.jHtml.template(templStr)()).toBe('<div><p>0</p><p>1</p><p>2</p><p>3</p></div>');								
	})
})

	