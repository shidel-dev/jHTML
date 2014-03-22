do ($)-> 
  $.extend
    jHtml:
      CONST:{}

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
      fetch: (url) -> 

window.header = [
  "div",
    {"class":"holder"},[
      "p",{"id":"example"},"hello"
    ],
  "div",
    {"class":"holder"},[
      "p",{"id":"example"},"hello"
      ]  
 ]

    