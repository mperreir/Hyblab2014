
/**
 * Convert data in CSV (comma separated value) format to a javascript array.
 *
 * Values are separated by a comma, or by a custom one character delimeter.
 * Rows are separated by a new-line character.
 *
 * Leading and trailing spaces and tabs are ignored.
 * Values may optionally be enclosed by double quotes.
 * Values containing a special character (comma's, double-quotes, or new-lines)
 *   must be enclosed by double-quotes.
 * Embedded double-quotes must be represented by a pair of consecutive 
 * double-quotes.
 *
 * Example usage:
 *   var csv = '"x", "y", "z"\n12.3, 2.3, 8.7\n4.5, 1.2, -5.6\n';
 *   var array = csv2array(csv);
 *  
 * Author: Jos de Jong, 2010
 * 
 * @param {string} data      The data in CSV format.
 * @param {string} delimeter [optional] a custom delimeter. Comma ',' by default
 *                           The Delimeter must be a single character.
 * @return {Array} array     A two dimensional array containing the data
 * @throw {String} error     The method throws an error when there is an
 *                           error in the provided data.
 */ 
function csv2array(data, delimeter) {
  // Retrieve the delimeter
  if (delimeter == undefined) 
    delimeter = ',';
  if (delimeter && delimeter.length > 1)
    delimeter = ',';

  // initialize variables
  var newline = '\n';
  var eof = '';
  var i = 0;
  var c = data.charAt(i);
  var row = 0;
  var col = 0;
  var array = new Array();

  while (c != eof) {
    // skip whitespaces
    while (c == ' ' || c == '\t' || c == '\r') {
      c = data.charAt(++i); // read next char
    }
    
    // get value
    var value = "";
    if (c == '\"') {
      // value enclosed by double-quotes
      c = data.charAt(++i);
      
      do {
        if (c != '\"') {
          // read a regular character and go to the next character
          value += c;
          c = data.charAt(++i);
        }
        
        if (c == '\"') {
          // check for escaped double-quote
          var cnext = data.charAt(i+1);
          if (cnext == '\"') {
            // this is an escaped double-quote. 
            // Add a double-quote to the value, and move two characters ahead.
            value += '\"';
            i += 2;
            c = data.charAt(i);
          }
        }
      }
      while (c != eof && c != '\"');
      
      if (c == eof) {
        throw "Unexpected end of data, double-quote expected";
      }

      c = data.charAt(++i);
    }
    else {
      // value without quotes
      while (c != eof && c != delimeter && c!= newline && c != ' ' && c != '\t' && c != '\r') {
        value += c;
        c = data.charAt(++i);
      }
    }

    // add the value to the array
    if (array.length <= row) 
      array.push(new Array());
    array[row].push(value);
    
    // skip whitespaces
    while (c == ' ' || c == '\t' || c == '\r') {
      c = data.charAt(++i);
    }

    // go to the next row or column
    if (c == delimeter) {
      // to the next column
      col++;
    }
    else if (c == newline) {
      // to the next row
      col = 0;
      row++;
    }
    else if (c != eof) {
      // unexpected character
      throw "Delimiter expected after character " + i;
    }
    
    // go to the next character
    c = data.charAt(++i);
  }  
  
  return array;
}

/*
function affichertab(data)
{
	document.write("<table border>");
	for(var ligne=0; ligne<data.length; ++ligne)
	{
		document.write("<TR>");
		for(var colonne=0; colonne<data[ligne].length; ++colonne)
		{
			document.write("<TD>");
			document.write(data[ligne][colonne]);
			document.write("</TD>");
		}
		document.write("</TR>");
		document.write("<br/>");
	}
	document.write("</table>");
}*/

function actualise(v1,v2) {
   $.ajax( "data/theme.csv" )
    .done(function(csv) {
      montab = csv2array(csv);
      genererdataviz(montab, v1, v2);
   });
}

function genererdataviz(data, idville1, idville2)
{
   var i=0;
	var coul= new Array("#8dc1bd", "#eae9e4", "#bf8a82", "#f6e59d");
	var arrayLignes = document.getElementById("tableau-match").rows;
	
	while(arrayLignes.length < data.length)
	{
      var tmp = document.getElementById("tableau-match").insertRow(-1);
      tmp.insertCell(0);
      tmp.insertCell(1);
      tmp.insertCell(2);
	}
	

	//Affichage nom des villes
   var listville1='<a data-dropdown="drop1" class="small secondary radius button dropdown">'+data[0][idville1]+'</a><ul align="left" id="drop1" data-dropdown-content class="f-dropdown">';
   var listville2='<a data-dropdown="drop2" class="small secondary radius button dropdown">'+data[0][idville2]+'</a><ul align="left" id="drop2" data-dropdown-content class="f-dropdown">';

   i=1;
   while(i< data[0].length)
   {
	   if(i!=idville1 && i!=idville2)
	   {
	   listville1=listville1+'<li style="text-align:left;"><a onclick="actualise('+i+', '+idville2+');">'+data[0][i]+'</a></li>';
	   listville2=listville2+'<li><a onclick="actualise('+idville1+', '+i+');">'+data[0][i]+'</a></li>';
	   }
	   i++;
   }
   listville1=listville1+'</ul>';
   listville2=listville2+'</ul>';
	
	arrayLignes[0].cells[0].innerHTML=listville1;
	arrayLignes[0].cells[1].innerHTML='<button class="small secondary radius" onclick="genererdataviz(montab, '+idville2+', '+idville1+');">inverser</button>';
	arrayLignes[0].cells[2].innerHTML=listville2;
	
	i=1;
	while(i<arrayLignes.length)
	{
	
	// right
	arrayLignes[i].cells[0].innerHTML='<div id="dataviz-'+idville1+'-cr'+i+'" style="background: '+coul[(i-1)%4]+' right; height:100%; width:0%; ">.</div>';
	arrayLignes[i].cells[0].align = "right";

	
	// middle
	arrayLignes[i].cells[1].innerHTML="<h4>"+data[i][0]+"</h4>";
	arrayLignes[i].cells[1].align = "middle";
	
	// left
	arrayLignes[i].cells[2].innerHTML='<div id="dataviz-'+idville2+'-cr'+i+'" style="background: '+coul[(i-1)%4]+' right; height:100%; width:0%; ">.</div>';
	
	
	$('#dataviz-'+idville1+'-cr'+i).animate({'width': data[i][idville1]+'%'},750);
	$('#dataviz-'+idville2+'-cr'+i).animate({'width': data[i][idville2]+'%'},750);

	i++;
	}
}

