$(document).ready(function () {
        $('#slide4Show').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
            if (isInView) {
                // element is now visible in the viewport
                if (visiblePartY == 'top') {
                  // top part of element is visible
                }
                else if (visiblePartY == 'bottom') {
                  // bottom part of element is visible
                }
                else {
                    $("#carte,#carteImage").attr({"width":"716px", "height":"433px"}).show();
                     //choisir un point comme le point d'origine: ex. BEGARD:(48.633333,-3.3)
                    var pointOriginX = 578;
                    var pointOriginY = 228;                         //point d'origin: BEGARD (210, 122)
                    var pointOriginGPSX = -1.683333;
                    var pointOriginGPSY = 48.083333;     //point GPS :BEGARD (-3.3, 48.633333)
                    var coefficientH = 180;                         //coefficient horizontal
                    var coefficientV = -267;                        //coefficient vertical


                    //Transformation des coordonnées
                    var svg = Snap("#carte");
                    var carteImage = svg.select("#carteImage");
                    var ghelp = svg.select("#help");
                    carteImage.animate({
                        x:carteImage.attr("x")
                    }, 200, function(){
                        carteImage.animate({
                                    x: 0
                                }, 800, mina.elastic);

                        ghelp.animate({},780,function(){
                                    importDonnees(agros22,agros22total,"rectangle","dp22");
                                    importDonnees(agros29,agros29total,"rectangle","dp29");
                                    importDonnees(agros35,agros35total,"rectangle","dp35");
                                    importDonnees(agros56,agros56total,"rectangle","dp56");
                                    importDonnees(automobiles22,automobiles22total,"rond","dp22");
                                    importDonnees(automobiles29,automobiles29total,"rond","dp29");
                                    importDonnees(automobiles35,automobiles35total,"rond","dp35");
                                    importDonnees(automobiles56,automobiles56total,"rond","dp56");
                                    importDonnees(numeriques22,numeriques22total,"triangle","dp22");
                                    importDonnees(numeriques29,numeriques29total,"triangle","dp29");
                                    importDonnees(numeriques35,numeriques35total,"triangle","dp35");
                                    importDonnees(numeriques56,numeriques56total,"triangle","dp56");

                                    $(".departement g rect,circle,polygon").each(function(){
                                        $(this).mouseover(function(){
                                            tooltip.pop(this, $(this).attr("description"), {position:0});
                                        });
                                    });
                        });

                        // carteImage.animate({
                        //             x: 0
                        //         }, 800, mina.elastic,function(){
                        //         importDonnees(agros22,agros22total,"rectangle","dp22");
                        //         importDonnees(agros29,agros29total,"rectangle","dp29");
                        //         importDonnees(agros35,agros35total,"rectangle","dp35");
                        //         importDonnees(agros56,agros56total,"rectangle","dp56");
                        //         importDonnees(automobiles22,automobiles22total,"rond","dp22");
                        //         importDonnees(automobiles29,automobiles29total,"rond","dp29");
                        //         importDonnees(automobiles35,automobiles35total,"rond","dp35");
                        //         importDonnees(automobiles56,automobiles56total,"rond","dp56");
                        //         importDonnees(numeriques22,numeriques22total,"triangle","dp22");
                        //         importDonnees(numeriques29,numeriques29total,"triangle","dp29");
                        //         importDonnees(numeriques35,numeriques35total,"triangle","dp35");
                        //         importDonnees(numeriques56,numeriques56total,"triangle","dp56");

                        //         $(".departement g rect,circle,polygon").each(function(){
                        //             $(this).mouseover(function(){
                        //                 tooltip.pop(this, $(this).attr("description"), {position:0});
                        //             });
                        //         });
                        // });

                    });
                    
                    


                    

                    function importDonnees(coordonnees,dpttotal,form, id){
                        var dpid = '#'+id;
                        var gcible = svg.select(dpid + " ." + form);

                        var nomDpt = dpttotal[0]["Commune"];
                        var effTotal = dpttotal[0]["eff2012"];
                        var nb_etabTotal = dpttotal[0]["nb_etab2012"];
                        var descriptionDpt = "<p class='tooltipDpt' id="+'tooltip'+id+">"+nomDpt+"</br>"+ effTotal + " employés"+"</br>"+ nb_etabTotal+" établissements</p>";
                        if ($(dpid).children(".tooltipDpt").length <= 0)
                            var gdpt = $(dpid).append(descriptionDpt);

                        for (var i = 0; i < coordonnees.length; i++) {
                            var coordonnee = coordonnees[i];
                            var nom = coordonnee["Commune"];
                            var effectif2012 = coordonnee["eff2012"];
                            var nb_etab2012 = coordonnee["nb_etab2012"];
                            var description = "<p>"+nom+"</br>"+ effectif2012 + " employés"+"</br>"+ nb_etab2012+" établissements</p>";
                            var cX = (coordonnee["Longitude"] - pointOriginGPSX) * coefficientH + pointOriginX;
                            var cY = (coordonnee["Latitude"] - pointOriginGPSY) * coefficientV + pointOriginY;
                            /*Ajouter le point sur la carte*/
                            //Changer le rayon du point selon le nombre d'entreprise numérique
                            // var r = Math.log(effectif2012+1)/1.5;
                            // if (r >= 5) r = 5;
                            // if (r <= 1) r = 1;

                            var r = Math.sqrt(nb_etab2012)+1.5;
                            if (r >= 5) r = 5;
                            if (r <= 1) r = 2;

                            var random = parseInt(Math.random()*100);
                            var offsetAnimateY = 400;
                            cY = cY - random - offsetAnimateY;

                            // Draw ronds
                            if (form == "rond") {
                                // var grond = svg.select("#rond");
                                var circle = gcible.circle(cX, cY, r*2-1);

                                circle.animate({
                                    cy: cY-r/2 + offsetAnimateY + random
                                }, 1000+random*7, mina.easeinout);

                                circle.attr({
                                    id: nom,
                                    fill: "#EC6B6A",
                                    description: description
                                });
                                $(dpid + " .rond").hide();
                            }

                            //Draw rectangle
                            if (form == "rectangle") {
                                // var grectangle = svg.select("#rectangle");
                                r *= 2;
                                var rect = gcible.rect(cX-r/2, cY-r/2, r, r, 1, 1);

                                rect.animate({
                                    y: cY-r/2 + offsetAnimateY + random
                                }, 500+random*7, mina.easeinout);

                                rect.attr({
                                    id: nom,
                                    fill: "#6C85A3",
                                    description: description
                                });
                                $(dpid + " .rectangle").hide();
                            }

                            //Draw triangles
                            if (form == "triangle") {
                                // var gtriangle = svg.select("#triangle");
                                var triangle = gcible.polygon(calculTriangle(cX,cY,r*3+2));

                                triangle.animate({
                                    points: calculTriangle(cX, cY-r/2 + offsetAnimateY + random, r*3+2)
                                }, 1000+random*7, mina.easeinout);

                                triangle.attr({
                                    id: description,
                                    fill: "#2C3944",
                                    description: description
                                });
                                $(dpid + " .triangle").hide();
                                $(dpid + " .triangle").show();
                            }
                        }
                        $(dpid).hide();
                        $(dpid).show();

                    }
                    //Calculer 3 coordonnees de chaque triangle
                    function calculTriangle(cX,cY,r){
                        return [cX, cY-0.57735*r, cX-r/2, cY+0.28868*r, cX+r/2, cY+0.28868*r];
                    }



                    //Dessiner la frontière de chaque département
                    $("#departements .departement").each(function(){
                        var dpid = $(this).attr("id");
                        $(this).children(".regionPath").attr('d', contourDpts[dpid]);
                    });

                    //Cacher les autres départements quand un est sélectionné
                    $(".regionPath").each(function(){
                        $(this).mousedown(function(event){
                            var offsetX = this.getBBox().width;
                            var offsetY = this.getBBox().height/2;
                            tooltip.pop(this, 
                                '#tooltip'+$(this).parent().attr("id"),
                                {position:1, 
                                   smartPosition:false, 
                                   offsetX:offsetX, 
                                   offsetY:offsetY
                               });

                            if ($(this).siblings(".bgPath").length < 1){
                                var p = svg.paper.path("M10-5-10,15M15,0,0,15M0-5-20,15").attr({
                                    fill: "none",
                                    stroke: "#beceeb",
                                    strokeWidth: 5
                                }).pattern(0, 0, 10, 10);
                                var dp = svg.select('#' + $(this).parent().attr("id"));

                                dp.path($(this).attr("d") + contour).attr({
                                    class: "bgPath",
                                    fill: p,
                                    "fill-rule": "evenodd",
                                    opacity: 0.5
                                })
                            }
                                $(this).parent().siblings().show();
                                $(this).parent().siblings().hide();
                                $(this).parent().hide();
                                $(this).parent().show();
                                $(this).siblings(".bgPath").show();

                            

                            $(".bgPath").each(function(){
                                $(this).click(function(event){
                                    $(this).hide();
                                    $(this).parent().siblings().show()
                                });
                            });
                        });
                    });

                    //Chercher la commune
                    function searchCommune(node, pat) {
                        if (node.nodeType == 1 && node.childNodes) {
                            for (var i = 0; i < node.childNodes.length; ++i) {
                                var childNode = node.childNodes[i];
                                if(/(rect|circle|polygon)/i.test(childNode.tagName)){
                                    var pos = childNode.id.toUpperCase().indexOf(pat.toUpperCase());
                                    if (pos >= 0)
                                        tooltip.pop(childNode, $(childNode).attr("description"), {position:0});
                                }
                            }
                        }
                    }

                    $('#text-search').bind('keyup change', function(ev) {
                        var searchTerm = $(this).val();

                        if ( searchTerm ) {
                            $('#departements .rond,.rectangle,.triangle').each(function(){
                                if ($(this).attr("style").indexOf("display: inline") >= 0 && $(this).parent().attr("style").indexOf("display: inline") >= 0)
                                    searchCommune($(this)[0], searchTerm);
                            });
                        }
                    });
                    

                    //Choisir le form(rond, rectangle, triangle)
                    $(".select-form input").iCheck({
                        checkboxClass: 'icheckbox_flat-red',
                        radioClass: 'iradio_flat-red'
                    });
                    $(".select-form input").on('ifChecked', function(){
                        if ($(this)[0].id == "checkbox-1")
                            $(".rectangle").fadeIn(1000);
                        if ($(this)[0].id == "checkbox-2")
                            $(".rond").fadeIn(1000);
                        if ($(this)[0].id == "checkbox-3")
                            $(".triangle").fadeIn(1000);
                    });

                    $(".select-form input").on('ifUnchecked', function(){
                        if ($(this)[0].id == "checkbox-1")
                            $(".rectangle").fadeOut(1000);
                        if ($(this)[0].id == "checkbox-2")
                            $(".rond").fadeOut(1000);
                        if ($(this)[0].id == "checkbox-3")
                            $(".triangle").fadeOut(1000);
                    });
                } 
            } else {
                // element has gone out of viewport
                var svg = Snap("#carte");
                var carteImage = svg.select("#carteImage");
                carteImage.animate({
                    x: 1000
                }, 2000, mina.elastic);
                $("#carte").fadeOut();

                $(".departement .rectangle,.rond,.triangle").each(function(){
                    $(this).empty();
                });
                $(".departement .bgPath").remove();
				$("input#checkbox-1").iCheck("uncheck");
				$("input#checkbox-2").iCheck("uncheck");
				$("input#checkbox-3").iCheck("check");
            }
        });

    });