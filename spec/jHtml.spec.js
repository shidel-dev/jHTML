describe("jHtml parse", function(){
	it("extends dollar namespace", function(){
		expect($.jHtml.parse).toBeDefined();
	});

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
});

	