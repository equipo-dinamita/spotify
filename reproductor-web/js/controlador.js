$(document).ready(function() {
  reproducir();
});

window.onload=function(){
 
  // creamos el objeto audio
  var audioElement = document.createElement('audio');

  // indicamos el archivo de audio a cargar
  audioElement.setAttribute('src', 'data/glorioso.mp3');

  // Si deseamos que una vez cargado empieze a sonar...
  //audioElement.setAttribute('autoplay', 'autoplay');

  document.getElementById("play").addEventListener("click", function() {
    // Si deseamos que inicie siempre desde el principio
    //audioElement.currentTime = 0;

    // iniciamos el audio
    audioElement.play();
  });

  document.getElementById("pause").addEventListener("click", function() {
    // hacemos pausa
    audioElement.pause();
  });
};