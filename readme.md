jHmtl is a jQuery plugin for parsing jHtml.

jHtml uses the json format as markup.  

```javascript
 [
  "div",
    {"class":"holder"},[
      "p",{"id":"example"},"hello"
    ]
 ]
```	
jHtml is based on a set of three.

1: String which represents the tag name
2: Object which specifies the attributes of the tag ex. (class,id,src...)
3: Array which represents the innerHtml of the element ex. (child nodes,text..)


```javascript
[
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
	]
]
```

jHtml helps you write one page applications. It lets you have javaScript objects that represent parts of your UI, and you can store them is your applications javaScript, or on your server in a json file.  

It allows you to write your markup in a proven data exchange format, and lets you avoid having to write logic for the logic-less parts of your page.  

jHtml also comes with a modified micro templating language that is a variant of John Resig's micro templating (http://ejohn.org/blog/javascript-micro-templating/) and evandvlad's variant https://github.com/evandvlad/tmpl/ 

```javascript

$.jHtml.template("<p>{{=user.name}}</p>", "user")({name:"joe"})

```




