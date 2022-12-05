
document.getElementById("btnSubmit").onclick = function(){
   var ajax = new XMLHttpRequest();
   ajax.open("GET", "randomNumber.php");
   ajax.responseType = "json";
   ajax.send();
   ajax.addEventListener("readystatechange", function(){
      if(ajax.readyState == 4 && ajax.status == 200){
         var valorRecebidoNoCampo = parseInt(document.getElementById("campo1").value, 10);
         if(valorRecebidoNoCampo == ajax.response){
            document.getElementById("resultado").innerHTML = "<p style='color: green;'>Acertou! Está com sorte</p>";
         }
         else{
            document.getElementById("resultado").innerHTML = "<p style='color: red;'>Errou! O número que pensei foi " + ajax.response + "</p>";
         }
         console.log(ajax.response);
         console.log(valorRecebidoNoCampo);
      }
   });
}