function setup() {
  createCanvas(500, 400);
  somTrilha.loop();
}

function draw() {
  background(imagemEstrada);
  mostraAtor();
  mostraCarro();
  moveAtor();
  moveCarro();
  voltaCarro();
  verificaColisao();
  incluiPontos();
  marcaPontos();
  
  

}



