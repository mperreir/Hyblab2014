/*jslint browser: true*/
/*global $, jQuery, jvm, alert, moduleDegrade, moduleCSV, coor, data, Highcharts, console, Array*/

var creerClassement, sortTable, desc, asc, modifierClassement;

creerClassement = function (taux, annee) {
    'use strict';
    var table, colonne1, colonne2, colonne3, colonne4, ligne, i, max, progress, col, couleur;
    switch (taux) {
    case 1:
        table = document.getElementById("tableau0");
        break;
    case 2:
        table = document.getElementById("tableau1");
        break;
    case 3:
        table = document.getElementById("tableau2");
        break;
    }
    max = 0;
    for (i = 0; i < data.length; i = i + 1) {
        switch (annee) {
        case "2002":
            switch (taux) {
            case 2:
                col = data[i].pro2002;
                break;
            case 3:
                col = data[i].foncier2002;
                break;
            }
            break;
        case "2003":
            switch (taux) {
            case 2:
                col = data[i].pro2003;
                break;
            case 3:
                col = data[i].foncier2003;
                break;
            }
            break;
        case "2004":
            switch (taux) {
            case 2:
                col = data[i].pro2004;
                break;
            case 3:
                col = data[i].foncier2004;
                break;
            }
            break;
        case "2005":
            switch (taux) {
            case 2:
                col = data[i].pro2005;
                break;
            case 3:
                col = data[i].foncier2005;
                break;
            }
            break;
        case "2006":
            switch (taux) {
            case 2:
                col = data[i].pro2006;
                break;
            case 3:
                col = data[i].foncier2006;
                break;
            }
            break;
        case "2007":
            switch (taux) {
            case 2:
                col = data[i].pro2007;
                break;
            case 3:
                col = data[i].foncier2007;
                break;
            }
            break;
        case "2008":
            switch (taux) {
            case 2:
                col = data[i].pro2008;
                break;
            case 3:
                col = data[i].foncier2008;
                break;
            }
            break;
        case "2009":
            switch (taux) {
            case 2:
                col = data[i].pro2009;
                break;
            case 3:
                col = data[i].foncier2009;
                break;
            }
            break;
        case "2010":
            switch (taux) {
            case 2:
                col = data[i].pro2010;
                break;
            case 3:
                col = data[i].foncier2010;
                break;
            }
            break;
        case "2011":
            switch (taux) {
            case 1:
                col = data[i].cfe2011;
                break;
            case 3:
                col = data[i].foncier2011;
                break;
            }
            break;
        case "2012":
            switch (taux) {
            case 1:
                col = data[i].cfe2012;
                break;
            case 3:
                col = data[i].foncier2012;
                break;
            }
            break;
        }
        if (col > max) {
            max = col;
        }
    }
    
    for (i = 0; i < data.length - 1; i = i + 1) {
        switch (annee) {
        case "2002":
            couleur = data[i].couleur2002;
            switch (taux) {
            case 2:
                col = data[i].pro2002;
                break;
            case 3:
                col = data[i].foncier2002;
                break;
            }
            break;
        case "2003":
            couleur = data[i].couleur2003;
            switch (taux) {
            case 2:
                col = data[i].pro2003;
                break;
            case 3:
                col = data[i].foncier2003;
                break;
            }
            break;
        case "2004":
            couleur = data[i].couleur2004;
            switch (taux) {
            case 2:
                col = data[i].pro2004;
                break;
            case 3:
                col = data[i].foncier2004;
                break;
            }
            break;
        case "2005":
            couleur = data[i].couleur2005;
            switch (taux) {
            case 2:
                col = data[i].pro2005;
                break;
            case 3:
                col = data[i].foncier2005;
                break;
            }
            break;
        case "2006":
            couleur = data[i].couleur2006;
            switch (taux) {
            case 2:
                col = data[i].pro2006;
                break;
            case 3:
                col = data[i].foncier2006;
                break;
            }
            break;
        case "2007":
            couleur = data[i].couleur2007;
            switch (taux) {
            case 2:
                col = data[i].pro2007;
                break;
            case 3:
                col = data[i].foncier2007;
                break;
            }
            break;
        case "2008":
            couleur = data[i].couleur2008;
            switch (taux) {
            case 2:
                col = data[i].pro2008;
                break;
            case 3:
                col = data[i].foncier2008;
                break;
            }
            break;
        case "2009":
            couleur = data[i].couleur2009;
            switch (taux) {
            case 2:
                col = data[i].pro2009;
                break;
            case 3:
                col = data[i].foncier2009;
                break;
            }
            break;
        case "2010":
            couleur = data[i].couleur2010;
            switch (taux) {
            case 2:
                col = data[i].pro2010;
                break;
            case 3:
                col = data[i].foncier2010;
                break;
            }
            break;
        case "2011":
            couleur = data[i].couleur2011;
            switch (taux) {
            case 1:
                col = data[i].cfe2011;
                break;
            case 3:
                col = data[i].foncier2011;
                break;
            }
            break;
        case "2012":
            couleur = data[i].couleur2012;
            switch (taux) {
            case 1:
                col = data[i].cfe2012;
                break;
            case 3:
                col = data[i].foncier2012;
                break;
            }
            break;
        }
        
        if (col === null) {
            col = 0;
        }
        
        ligne = table.insertRow(0);
        colonne1 = ligne.insertCell(0);
        colonne1.innerHTML += data[i].ville + " (" + couleur + ")";
        colonne2 = ligne.insertCell(1);
        progress = document.createElement("div");
        progress.setAttribute("style", "height: 10px; width:" + col * 2 + "px; background-color: #cf1315;");
        progress.setAttribute("class", "progress");
        colonne2.appendChild(progress);
        colonne3 = ligne.insertCell(2);
        if (col !== 0) {
            colonne3.innerHTML += col;
        } else {
            colonne3.innerHTML += "n.c";
        }
        colonne4 = ligne.insertCell(3);
        if (col !== 0) {
            colonne4.innerHTML += "%";
        }
    }
    
    sortTable(table, 2, desc);
   
};

desc = function (a, b) {
    'use strict';
    a = a[1];
    b = b[1];
    if (a === "n.c") {
        return b;
    } else if (b === "n.c") {
        return -a;
    }
    return b - a;
};

asc = function (a, b) {
    'use strict';
    a = a[1];
    b = b[1];
    if (a > b) {
        return 1;
    }
    if (a < b) {
        return -1;
    }
    return 0;
};

sortTable = function (tid, col, ord) {
    'use strict';
    var mybody, lines, sorter, i, j;
    mybody = tid;
    lines = mybody.getElementsByTagName('tr');
    sorter = [];
    sorter.length = 0;
    i = 0;
    while (lines[i] && lines[i].getElementsByTagName('td')[0].innerHTML !== "Moyenne") {
        sorter.push([lines[i], lines[i].getElementsByTagName('td')[col].innerHTML]);
        i = i + 1;
    }
    sorter.sort(desc);
    j = 0;
    while (sorter[j]) {
        mybody.appendChild(sorter[j][0]);
        j = j + 1;
    }
};

modifierClassement = function (taux, annee) {
    'use strict';
    var table;
    switch (taux) {
    case 1:
        table = document.getElementById("tableau0");
        break;
    case 2:
        table = document.getElementById("tableau1");
        break;
    case 3:
        table = document.getElementById("tableau2");
        break;
    }
    
    table.innerHTML = "";
    creerClassement(taux, annee);
};
 