function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5jzAN46DELx":
        Script1();
        break;
      case "6DcP9cDKr2K":
        Script2();
        break;
      case "6DrWpPpPD7g":
        Script3();
        break;
  }
}

function Script1()
{
  var head = document.getElementsByTagName('head')[0];
var script = document.createElement('script');
script.src = '//code.jquery.com/jquery-1.11.0.min.js';
script.type = 'text/javascript';
head.appendChild(script)
}

function Script2()
{
  var player = GetPlayer();
 
//PLACE YOUR WEB APP URL
WEB_APP_URL = "https://script.google.com/macros/s/AKfycbzd2bQk6YJBI6pTGmafqtU5OGKGkshSCpRHt1Ql0q8G3WRxiAVm/exec";
 
// STORE ARTICULATE STORYLINE VARIABLES
// "Columnname_Google_Spreadsheet" : player.GetVar("Name_Storyline_Variable")
// ATTENTION: Use a comma if you use multiple Storyline variables
storyline =
{
 "FECHA" : new Date().toJSON().slice(0,10), //STORE DATE
 "NOMBRE" : player.GetVar("Nombre"),
 "MATRICULA" : player.GetVar("Matricula"),
 "NIVEL DE ESTUDIO" : player.GetVar("NivelEstudios"),
 "INSTITUCION" : player.GetVar("Institucion"),
 "CALIFICACION" : player.GetVar("cal")
}
}

function Script3()
{
  //DELAY SO JQUERY LIBRARY IS LOADED
setTimeout(function (){
 
//Export to Google
$.ajax({
url: WEB_APP_URL,
type: "POST",
data : storyline,
success: function(data)
{
console.log(data);
},
error: function(err) {
console.log('Error:', err);
}
});
return false;
}, 1000);
}

