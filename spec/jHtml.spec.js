describe("jHtml parse", function(){
	it("extends dollar namespace", function(){
		expect($.jHtml.parse).toBeDefined();
	});
})


describe("jHtml CONST", function(){
	it("adds constants under jHtml namespace", function(){
		expect($.jHtml.CONST).toBeDefined();
	})
})	