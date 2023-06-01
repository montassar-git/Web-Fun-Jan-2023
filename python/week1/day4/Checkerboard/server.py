from flask import Flask, render_template  # added render_template!
app = Flask(__name__)                     
    
@app.route('/<int:x>')                           
def repeat(x):
    return render_template("index.html",x=x)
    
if __name__=="__main__":
    app.run(debug=True)                   

