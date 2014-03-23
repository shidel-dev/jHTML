do ($)-> 
  $.extend
    jHtml:
      parse: (json,callback) ->
        domString = ""
        traverse = (obj) ->
          i = 0
          while i < obj.length
            domString += "<"
            domString += obj[i]
            domString += " "
            for attr,val of obj[i+1]
                domString += attr
                domString += "="
                domString += "'"
                domString += val
                domString += "' "
            domString += ">" 
            if obj[i+2] instanceof Array 
              traverse(obj[i+2])
            else 
              domString += obj[i+2]                
            domString += "</"
            domString += obj[i]
            domString += ">"
            i += 3 
        traverse(json)

        callback(domString) if callback
        domString   

      validate: (json) ->  
      fetch: (url,callback) -> 
        that = this
        $.ajax
            method:"get"
            url:url
            contentType: "application/json"
            success:(res)->
              callback(that.parse(res)) 


      # Javascript template engine, variant of John Resig's micro templating (http://ejohn.org/blog/javascript-micro-templating/)
      # https://github.com/evandvlad/tmpl/ 
      template: `(function(){
          'use strict';
          var SPACE_RE = /[\r\t\n]/g,
              QUOTE_RE = /'/g,
              ESC_QUOTE_RE = /\\'/g,
              proc = function(all, g1){
                  var s = g1.replace(ESC_QUOTE_RE, "'");
                  return s.charAt(0) === '=' ? ("'+" + s.slice(1) + "+'") : ("';" + s + "s+='");
              };

          function tmpl(str,varName){
              varName = varName || "data";

              return new Function(varName, "var s='" +
                  str.replace(SPACE_RE, " ").replace(QUOTE_RE, "\\'").replace(tmpl.procRe, proc) + "';return s;");
          }

          tmpl.procRe = /{{(.+?)}}/g;

          return tmpl;
      }())`          

    
                 
          


    