
/* Donnees */
getData = function() {
			var donnee= {
						    "General": {
								"description": "Part des structures dirigées par des femmes",
								"nbFemme": 91,
								"nbHomme": 259,
								"nbMixte": 0
						    },
								
							"ArtsDeLaScene": {
								"name": "Arts de la scène",
								"description": "Postes d'encadrement supérieur, répartition par genre",
								"Centre_dramatique": {
								  "name": "Centre dramatique",
								  "nbFemme": 31,
								  "nbHomme": 63,
								  "nbMixte": 3
								},
								"Scene_nationale": {
								  "name": "Scène nationale",
								  "nbFemme": 129,
								  "nbHomme": 188,
								  "nbMixte": 1
								},
								"Centre_graphique_nationaux": {
								  "name": "Centre graphique nationaux",
								  "nbFemme": 17,
								  "nbHomme": 37,
								  "nbMixte": 2
								},
								"Centre_de_developpement_choregraphiques": {
								  "name": "Centre de développement chorégraphiques",
								  "nbFemme": 11,
								  "nbHomme": 18,
								  "nbMixte": 1
								},
								"Pole_cirque": {
								  "name": "Pôle cirque",
								  "nbFemme": 5,
								  "nbHomme": 14,
								  "nbMixte": 1
								},
								"Centre_dart_de_la_rue": {
								  "name": "Centre d'art de la rue",
								  "nbFemme": 13,
								  "nbHomme": 16,
								  "nbMixte": 2
						    }
						  },
						  	"Oeuvres": {
						  		"name": "Oeuvres par genre",
								"description": "Oeuvres acquise et programmation spectacles, répartition par genre",

							     "Programmation": {
							          "name": "Part des spectacles mis en scène ou chorégraphiés par genre ",
							          "nbFemme": 804,
									  "nbHomme": 1762,
									  "nbMixte": 225
							      },

						  		"AcquisitionAnnuelleDesFRAC":{
						  			"name": "Acquisition annuelle des FRAC (Fonds régional d'Arts Contemporain) par genre",
									"nbFemme": 132,
									"nbHomme": 410,
									"nbMixte": 0
								}
						  },
							"Musique": {
								"name": "Musique",
								"description": "Postes d'encadrement supérieur, répartition par genre",
								"Centre_nationaux_de_creation_musicale": {
								  "name": "Centre nationaux de création musicale",
								  "nbFemme": 5,
								  "nbHomme": 6,
								  "nbMixte": 0
								},
								"Scene_de_musique_actuelle": {
								  "name": "Scène de musique actuelle",
								  "nbFemme": 10,
								  "nbHomme": 68,
								  "nbMixte": 0
								},
								"Operas": {
								  "name": "Opéras",
								  "nbFemme": 6,
								  "nbHomme": 32,
								  "nbMixte": 1
								},
								"Orchestre": {
								  "name": "Orchestre",
								  "nbFemme": 10,
								  "nbHomme": 61,
								  "nbMixte": 1
								},
								"Ensemble_de_musique_conventionnees": {
								  "name": "Ensemble de musique conventionnées",
								  "nbFemme": 13,
								  "nbHomme": 79,
								  "nbMixte": 1
								},
								"Ensemble_de_musique_structurees": {
								  "name": "Ensemble de musique structurée",
								  "nbFemme": 10,
								  "nbHomme": 46,
								  "nbMixte": 2
								}
						    },
							"BeauxArts": {
								"name": "Beaux Arts",
								"description": "Postes d'encadrement supérieur, répartition par genre",
								"FRAC": {
								  "name": "Fonds régional d'arts contemporain",
								  "nbFemme": 17,
								  "nbHomme": 29,
								  "nbMixte": 0
								},
								"Centres_dart": {
								  "name": "Centres d'art",
								  "nbFemme": 38,
								  "nbHomme": 58,
								  "nbMixte": 2
							}
						  },
						  "AudioVisuel": {
						      "name": "Audiovisuel",
						      "description": "Postes et comités de direction, répartition par genre",
						      "FranceTelevision": {
						          "name": "France Télévision",
						    	  "nbFemme": 21,
								  "nbHomme": 49,
								  "nbMixte": 0
						      },
						       "RadioFrance": {
						          "name": "Radio France",
						          "nbFemme": 5,
								  "nbHomme": 15,
								  "nbMixte": 0
						      },
						       "ArteFrance": {
						          "name": "Arte France",
						          "nbFemme": 13,
								  "nbHomme": 7,
								  "nbMixte": 0
						      },
						       "AudiovisuelExterieur": {
						          "name": "Audiovisuel extérieur de la France",
						          "nbFemme": 8,
								  "nbHomme": 7,
								  "nbMixte": 0
						       },
						        "INA": {
						          "name": "Institut nationale de l'audiovisuel",
						          "nbFemme": 2,
								  "nbHomme": 9,
								  "nbMixte": 0
						      }   
						  },
							"Jury": {
								"name": "Jury",
								"description": "Composition du jury des examens professionnels et concours du ministre de la culture et de la communication",
								"Presidence": {
								  "name": "Présidence du jury",
								  "nbFemme": 5,
								  "nbHomme": 28,
								  "nbMixte": 0
								},
								"Composition": {
								  "name": "Part du jury",
								  "nbFemme": 62,
								  "nbHomme": 97,
								  "nbMixte": 0
								}
							},
							
							"MinistereCulture": {
								"name": "Ministère de la Culture",
								"description": "Part des femmes dans les postes de direction et d'encadrements du Ministère de la Culture ",
								"Direction": {
								  "name": "Postes de direction",
								  "nbFemme": 3,
								  "nbHomme": 8,
								  "nbMixte": 0
								},
								"Encadrement": {
								  "name": "Postes d'encadrements",
								  "nbFemme": 9,
								  "nbHomme": 12,
								  "nbMixte": 0
								}
							},
						};
			return donnee;
		};