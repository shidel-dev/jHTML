describe("jHtml parse", function(){
	it("extends dollar namespace", function(){
		expect($.jHtml.parse).toBeDefined();
	});
});

descript("jHtml fetch", function(){
	it("is defined under jHtml namespace", function(){
		expect($.jhtml.fetch).toBeDefined();
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