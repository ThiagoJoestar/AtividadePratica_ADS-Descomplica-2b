let linhas = 4;
let colunas = 5;


let matriz = [];


for (let i = 0; i < linhas; i++) {
  matriz[i] = [];
  for (let j = 0; j < colunas; j++) {
    let numero = i + 2; 
    let multiplo = numero * (j + 1); 
    matriz[i][j] = multiplo; 
  }
}


for (let i = 0; i < linhas; i++) {
  console.log(matriz[i]);
}
