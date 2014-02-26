#!/usr/bin/python3.3
# licence : GPL
# author : Florent guillemot
# mail : florent(dot)guillemot[at]gmail{dot}com
# Permet de parser le dump de data.gouv.fr
import csv
import ast
import json
import sys

param = [1, # _id;--
   0, # author;
   0, # author_email;
   0, # ckan_url;
   0, # extras;
   1, # frequency;--
   1, # groups;--
   0, # id;
   0, # license_id;
   0, # maintainer;
   0, # maintainer_email;
   1, # metadata_created;--
   1, # metadata_modified;--
   0, # name;
   0, # notes;
   1, # organization;--
   0, # owner_org;
   0, # relationships_as_object;
   0, # relationships_as_subject;
   1, # resources; --
   0, # revision_timestamp;
   0, # supplier;
   0, # supplier_id;
   0, # tags;
   1, # temporal_coverage_from;--
   1, # temporal_coverage_to;--
   1, # territorial_coverage;--
   1, # territorial_coverage_granularity;--
   1, # title;--
   0, # type;
   0, # url;
   0] # version;
   
DELIMITEURCSV = ";"
# n'exécute pas le script sur tout le csv mettre à -1 pour tout le fichier
LIMITEEXECUTION = -1
   
formatEchanges = []

if param[19]:
   with open('data.csv',newline='', encoding='utf-8') as f2:
      reader = csv.reader(f2)
      
      #récupération des formats de distributions
      nbrow =0
      for row in reader:
         nbcol = 0
         for col in row:
            if nbcol == 19 and col and nbrow >=1: # resources
               for form in ast.literal_eval(col):
                  if 'format' in form and not(form["format"] in formatEchanges):
                     formatEchanges.append(form["format"])
            nbcol+=1
            
         if nbrow == LIMITEEXECUTION:
            break
         nbrow+=1
         
nbFormatEchanges = {}
for x in formatEchanges:
   nbFormatEchanges[x] = 0

with open('data.csv',newline='', encoding='utf-8') as f:
   reader = csv.reader(f)
   nbrow = 0
   # génération du csv
   for row in reader:

      nbcol = 0
      add = True
      ligne = ""

      for col in row:
      
         if col and param[nbcol]:
            #resources
            if nbcol == 19:
               if nbrow >= 1:
                  # comptage des formats
                  for form in ast.literal_eval(col):
                     if 'format' in form:
                        nbFormatEchanges[form["format"]]+= 1
            #organization
            elif nbcol == 15 and nbrow >= 1:
               ligne+= ast.literal_eval(col)['name']
            #groups
            elif nbcol == 6 and nbrow >= 1:
               ligne+= ast.literal_eval(col)[0]['title']
               # suppression du theme International et Europe et des vides
               if not(ast.literal_eval(col)[0]['title']) or ast.literal_eval(col)[0]['title'] == "International et Europe":
                  add = False
            else:
               ligne+= col
            
            if nbcol != 19:
               ligne+=DELIMITEURCSV
            
         elif param[nbcol]:
            ligne+=DELIMITEURCSV

         nbcol+= 1
         
      if add:
         sys.stdout.write(ligne)
         # formats d'échanges
         if param[19]:
            if nbrow == 0:#entete
               sys.stdout.write(DELIMITEURCSV.join(formatEchanges))
            else:
               sys.stdout.write(DELIMITEURCSV.join(str(nbFormatEchanges[x]) for x in formatEchanges))
         
         sys.stdout.write("\n")

      for x in formatEchanges:
         nbFormatEchanges[x]=0

      if nbrow == LIMITEEXECUTION:
         break

      nbrow+= 1
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
