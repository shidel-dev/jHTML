describe("jHtml", function(){
	it("extends dollar namespace", function(){
		expect($.jHtml.parse).toBeDefined();
	});
	it("adds constants under jHtml namespace", function(){
		expect($.jHtml.CONST).toBeDefined();
	})
})