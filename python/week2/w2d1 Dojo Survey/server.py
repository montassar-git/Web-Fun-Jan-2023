from flask import Flask, render_template, request, redirect,session  # added render_template!
app = Flask(__name__)

app.secret_key ="hhhhhh my secter key"

        
@app.route('/')
def index():

    return render_template('index.html')  


@app.route('/create',methods=['POST'])
def create():

    # print("Request Object ", request.form, "*"*25)
    session['name'] = request.form['text']
    session['location'] = request.form['location']
    session['langauage'] = request.form['language']
    session['comment'] = request.form['comment']
    return redirect('/result')

@app.route('/result')
def affiche():

    return render_template('affiche.html')  
if __name__=="__main__":
    app.run(debug=True)

