describe("jHtml parse", function(){
	it("extends dollar namespace", function(){
		expect($.jHtml.parse).toBeDefined();
	});

	it("generates correct markup for a hello world h1", function(){
		 var header = {
				"h1" : {
					"class" : "greeting",
					"content" : "Hello World"
				}
			};
		expect($.jHtml.parse(header)).toBe("<h1 class='greeting' >Hello World</h1>")
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

describe("jHtml CONST", function(){
	it("adds constants under jHtml namespace", function(){
		expect($.jHtml.CONST).toBeDefined();
	});
});	