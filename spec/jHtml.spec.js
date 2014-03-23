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

	