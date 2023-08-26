// Algoritmo para o Ciclotron:

// Crie uma função chamada "ciclotron" que aceita dois parâmetros: "particle" e "N".
// Verifique qual é o tipo de partícula fornecida (e, p ou n).
// Se a partícula for um elétron (e), execute o seguinte código:
// Crie uma matriz NxN preenchida com o valor 1 em cada posição.
// Substitua os valores da última linha da matriz pela letra "e".
// Substitua os valores da última coluna da matriz pela letra "e".
// Se a partícula for um próton (p), execute o seguinte código:
// Crie uma matriz NxN preenchida com o valor 1 em cada posição.
// Substitua os valores da primeira linha da matriz pela letra "p".
// Substitua os valores da primeira coluna da matriz pela letra "p".
// Substitua os valores da última linha da matriz pela letra "p".
// Substitua os valores da última coluna da matriz pela letra "p".
// Se a partícula for um nêutron (n), execute o seguinte código:
// Crie uma matriz NxN preenchida com o valor 1 em cada posição.
// Deixe a matriz inalterada.
// Retorne a matriz resultante.

function generateCyclotronMatrix(N) {
  let matrix = [];
  for (let i = 0; i < N; i++) {
    let row = [];
    for (let j = 0; j < N; j++) {
      row.push(1);
    }
    matrix.push(row);
  }
  return matrix;
}

function accelerateParticle(particle, matrix) {
  let acceleratedMatrix = [...matrix]; 
  console.log(matrix.length)
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (particle === "e") {
        if (j === matrix[i].length - 1 || i === 0) {
          acceleratedMatrix[i][j] = particle;
        }
      } else if (particle === "p") {
        if (
          (j === matrix[i].length - 1 || i === 0 || j === 0) && !(i === matrix.length - 1 && j === matrix[i].length - 1) ||
          (i === matrix.length - 1 && j === 0) || 
          (i === matrix.length - 1 && j !== matrix[i].length - 1)  ||
          (i >= matrix.length - 2 && j >= matrix[i].length - 2 && !(i === matrix.length - 1 && j === matrix[i].length - 1)) 
          ) {
          acceleratedMatrix[i][j] = particle;
        }
        
      } else if (particle === "n") {
        if (i === 0) {
          acceleratedMatrix[i][j] = particle;
        }
      }
     else {
      acceleratedMatrix[i][j] = 1; 
    }
    }
  }
  return acceleratedMatrix;
}

function ciclotron(particle, N) {
  let matrix = generateCyclotronMatrix(N);
  if (particle !== "e" && particle !== "p" && particle !== "n") {
    return matrix; 
  }
  let acceleratedMatrix = accelerateParticle(particle, matrix);
  return acceleratedMatrix;
}



console.log("Cyclotron without particles:");
console.log(ciclotron('a', ));

console.log("Accelerating an electron:");
console.log(ciclotron('p', 4));

console.log("Accelerating a proton:");
console.log(ciclotron('p', 10));


console.log("Accelerating a neutron:");
console.log(ciclotron('n', 6));

module.exports = {
  ciclotron
};
