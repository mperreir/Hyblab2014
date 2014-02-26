# coding: utf-8
import sys, codecs
import csv
import json


csvfile = codecs.open(sys.argv[1], 'rU')
jsonfile = codecs.open(sys.argv[1][:-3]+'js', 'w')

# fieldnames = ("région","Code Insee","Commune","Latitude","Longitude","nb_etab2008","nb_etab2009","nb_etab2010","nb_etab2011","nb_etab2012","eff2008","eff2009","eff2010","eff2011","eff2012","v étab 2008-2009","v étab 2008-2010","v étab 2008-2011","v étab 2008-2012","v eff 2008-2009","v eff 2008-2010","v eff 2008-2011","v eff 2008-2012")
reader = csv.DictReader( csvfile)
jsonfile.write('var dpt' + sys.argv[1][:-4] + '=')


out = "[\n\t" + ",\n\t".join([json.dumps(row) for row in reader]) + "\n]"
jsonfile.write(out)

