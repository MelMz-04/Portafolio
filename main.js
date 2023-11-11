let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('Apasionada por la programación y la creación de contenido visual impactante a través de infografías.')
  .pauseFor(200)
  .deleteChars(10)
  .start();
