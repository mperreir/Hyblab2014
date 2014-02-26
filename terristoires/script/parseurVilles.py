#!/usr/bin/python3.3
# licence : GPL
# author : Florent guillemot
# mail : florent(dot)guillemot[at]gmail{dot}com
# Permet de parser le dump de data.gouv.fr
import csv
import ast
import json
import sys
param = [0, # _id;--
   0, # author;
   0, # author_email;
   0, # ckan_url;
   0, # extras;
   0, # frequency;--
   1, # groups;-- ----------
   0, # id;
   0, # license_id;
   0, # maintainer;
   0, # maintainer_email;
   0, # metadata_created;--
   0, # metadata_modified;--
   0, # name;
   0, # notes;
   1, # organization;-- -------
   0, # owner_org;
   0, # relationships_as_object;
   0, # relationships_as_subject;
   0, # resources; -- --------
   0, # revision_timestamp;
   0, # supplier;
   0, # supplier_id;
   0, # tags;
   0, # temporal_coverage_from;--
   0, # temporal_coverage_to;--
   0, # territorial_coverage;--
   0, # territorial_coverage_granularity;--
   0, # title;--
   0, # type;
   0, # url;
   0] # version;
   

idsVilles = ['ville-de-nantes',
'ville-de-rennes',
'ville-de-marseille',
'grand-lyon',
'marie-de-paris',
'communaute-urbaine-de-bordeaux',
'metropole-nice-cote-d-azur',
'toulouse-metrople',
'ville-de-montpellier']

theme = [
'Agriculture et Alimentation',
'Comptage et flux',
'Culture',
'Économie et Emploi',
'Éducation et Recherche',
'Égalité Femmes-Hommes',
'Horaires et itinéraires',
'Logement, Développement Durable et Énergie',
'Mobilité',
'Santé et Social',
'Société',
'Tarification',
'Territoires et Transports']

LIMITEEXECUTION = -1
   

nbPackage = {}

for x in idsVilles:
   nbPackage[x] = {}
   for y in theme:
      nbPackage[x][y] = 0

with open('data.csv',newline='', encoding='utf-8') as f:
   reader = csv.reader(f)
   nbrow = 0
   # génération du csv
   for row in reader:

      nbcol = 0

      name = ""
      typename = ""

      for col in row:
         if col and param[nbcol]:
         
            #organisation
            if nbcol == 15 and nbrow >= 1:
               name= ast.literal_eval(col)['name']
            #groups
            elif nbcol == 6 and nbrow >= 1:
               typename= ast.literal_eval(col)[0]['title']
               sys.stdout.write(ast.literal_eval(col)[0]['title'])

         nbcol+= 1

      #comptage des themes
      if name and typename and name in idsVilles:
         sys.stdout.write(typename)
         nbPackage[name][typename] += 1
      
      if nbrow == LIMITEEXECUTION:
         break

      nbrow+= 1

#affichage des themes
sys.stdout.write("\"critere\"")

for x in idsVilles:
   sys.stdout.write(",\""+x+"\"")
sys.stdout.write("\n")

for y in theme:
   sys.stdout.write("\""+y+"\"")
   for x in idsVilles:
      sys.stdout.write(","+ str(nbPackage[x][y]))
   sys.stdout.write("\n")




















