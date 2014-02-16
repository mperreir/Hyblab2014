
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
}

function genererdataviz(data, idville1, idville2)
{

	var arrayLignes = document.getElementById("monTableau").rows;
	
	while(arrayLignes.length < data.length)
	{
	 var tmp = document.getElementById("monTableau").insertRow(-1);
	 tmp.insertCell(0);
 	 tmp.insertCell(1);
 	 tmp.insertCell(2);
	}
	
	
	var i=1;

	while(i<arrayLignes.length)
	{
	arrayLignes[i].cells[0].innerHTML='<div id="dataviz-'+idville1+'-cr'+i+'" style="background: red right; height:16px; width:'+data[i][idville1]+'%; ">' + data[i][idville1] + '</div>';
	arrayLignes[i].cells[0].align = "right";
	arrayLignes[i].cells[0].style="width:40%";
	
	arrayLignes[i].cells[1].innerHTML=data[i][0];
	arrayLignes[i].cells[1].align = "middle";
	arrayLignes[i].cells[1].style="width:20%";
	
	arrayLignes[i].cells[2].innerHTML='<div id="dataviz-'+idville2+'-cr'+i+'" style="background: red right; height:16px; width:'+data[i][idville2]+'%; ">' + data[i][idville2] + '</div>';
	arrayLignes[i].cells[2].align = "left";
	arrayLignes[i].cells[2].style="width:40%";
	
	

	i++;
	}
}

/*
	for(var ligne=1; ligne<data.length; ++ligne)
	{
		document.write(data[ligne][idville1]);
		document.write(data[ligne][0]);	
		document.write(data[ligne][idville2]);
		document.write("<BR>");
	
	}
		//arrayLignes[i].cells[2].style.backgroundColor = "#bdcb15";
*/




//var csv = '"x", "y", "z"\n12.3, 2.3, 8.7\n4.5, 1.2, -5.6\n';
//var marray = csv2array(csv);
//affichertab(marray);

