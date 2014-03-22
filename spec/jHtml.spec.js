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

	