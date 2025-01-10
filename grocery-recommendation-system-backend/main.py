from flask import  Flask, jsonify, request
from flask_cors import CORS
import psycopg2

app = Flask(__name__)
CORS(app)

@app.route('/', methods = ['GET'])
def getProducts():
	con = psycopg2.connect(host="localhost", database="postgres", user="postgres", password="aRch26")
	cursor = con.cursor()
	cursor.execute("SELECT itema, freqab, idd FROM final_rules ORDER BY random() LIMIT 30;")
	rows = cursor.fetchall()
	con.close()
	if len(rows) <= 0:
		return jsonify({'success': False})		
	return jsonify({'success': True, 'result': rows})

@app.route('/recommend', methods = ['POST'])
def getRecommend():
	reqBody = request.json
	itemTitle = reqBody['item']
	con = psycopg2.connect(host="localhost", database="postgres", user="postgres", password="aRch26")
	cursor = con.cursor()
	cursor.execute("SELECT itemb, freqab, idd FROM final_rules WHERE itema LIKE '%' || '"+ itemTitle +"'|| '%' ORDER BY lift DESC LIMIT 10;")
	rows = cursor.fetchall()
	con.close()
	if len(rows) <= 0:
		return jsonify({'success': False})
		
	return jsonify({'success': True, 'result': rows})

if __name__ == "__main__":
	app.run()


# self.cursor.execute("SELECT itemB FROM rules WHERE itemA = '"+selected_item+"' ORDER BY lift DESC LIMIT "+no_items+"")
# select * from final_ules order by random() limit 3;