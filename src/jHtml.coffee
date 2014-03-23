do ($)-> 
  $.extend
    jHtml:
      parse: (json) ->
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
        true 

      escapeStr:(val)->
        if (typeof(val)!="string") then return val
        return val
          .replace(/[\"]/g, '\\"')
          .replace(/[\\]/g, '\\\\')
          .replace(/[\/]/g, '\\/')
          .replace(/[\b]/g, '\\b')
          .replace(/[\f]/g, '\\f')
          .replace(/[\n]/g, '\\n')
          .replace(/[\r]/g, '\\r')
          .replace(/[\t]/g, '\\t')       
          


    