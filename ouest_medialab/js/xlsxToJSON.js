var rABS = typeof FileReader !== "undefined" && typeof FileReader.prototype !== "undefined" && typeof FileReader.prototype.readAsBinaryString !== "undefined";
var jsonContent;

function parseXLSX() {
   // var video = document.getElementsByTagName("video")[0];
   // var screenHeight = window.screen.height;
   // var screenWidth = window.screen.width;    
    //video.width = screenWidth * 0.5;
    //video.height = screenHeight * 0.5;

    var xhr = new XMLHttpRequest();
    xhr.open("GET", "../breveMedias2004_2013_v14.xlsx", true);
    xhr.overrideMimeType("text/plain; charset=x-user-defined");
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var data = xhr.responseText;
            var output = "";
            var wb;

            if (rABS) {
                wb = XLSX.read(data, {type: 'binary'});
            } else {
                //console.log(data);
                var arr = String.fromCharCode.apply(null, new Uint8Array(data));
                wb = XLSX.read(btoa(arr), {type: 'base64'});
                console.log(wb);
            }

            output = JSON.stringify(to_json(wb), 2, 2);
            jsonContent = output;
            displayTimeLine(jsonContent);
            displayColumnsChart1(jsonContent);
            displayPieChart(jsonContent);
            displayPieChart2(jsonContent);
        }
    };
    xhr.send(null);
}

function to_json(workbook) {
    var result = {};
    workbook.SheetNames.forEach(function(sheetName) {
        var roa = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheetName]);
        if (roa.length > 0) {
            result[sheetName] = roa;
        }
    });
    return result;
}