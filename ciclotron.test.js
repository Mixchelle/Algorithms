const { ciclotron } = require('./ciclotron');

describe('Testes para o ciclotron', () => {
  test('Ciclotron sem partículas', () => {
    const particula = "x"; 
    const N = 4;
    const matrizResultado = ciclotron(particula, N);
    const matrizEsperada = [
        [1, 1, 1, 1],
        [1, 1, 1, 1],
        [1, 1, 1, 1],
        [1, 1, 1, 1]
      ];
    expect(matrizResultado).toEqual(matrizEsperada);
  });

  test('Acelerando um elétron', () => {
    const particula = "e";
    const N = 4;
    const matrizResultado = ciclotron(particula, N);
    const matrizEsperada = [
      ["e", "e", "e", "e"],
      [1, 1, 1, "e"],
      [1, 1, 1, "e"],
      [1, 1, 1, "e"]
    ];
    expect(matrizResultado).toEqual(matrizEsperada);
  });

  test('Acelerando um próton em uma matriz 4x4', () => {
    const particula = "p";
    const N = 4;
    const matrizResultado = ciclotron(particula, N);
    const matrizEsperada = [
      ["p", "p", "p", "p"],
      ["p", 1, 1, "p"],
      ["p", 1, "p", "p"],
      ["p", "p", "p", 1]
    ];
    expect(matrizResultado).toEqual(matrizEsperada);
  });

  test('Acelerando um próton em uma matriz 6x6', () => {
    const particula = "p";
    const N = 6;
    const matrizResultado = ciclotron(particula, N);
    const matrizEsperada = [
      ["p", "p", "p", "p", "p", "p"],
      ["p", 1, 1, 1, 1, "p"],
      ["p", 1, 1, 1, 1, "p"],
      ["p", 1, 1, 1, 1, "p"],
      ["p", 1, 1, 1, "p", "p"],
      ["p", "p", "p", "p", "p", 1]
    ];
    expect(matrizResultado).toEqual(matrizEsperada);
  });

  test('Acelerando um nêutron', () => {
    const particula = "n";
    const N = 4;
    const matrizResultado = ciclotron(particula, N);
    const matrizEsperada = [
      ["n", "n", "n", "n"],
      [1, 1, 1, 1],
      [1, 1, 1, 1],
      [1, 1, 1, 1]
    ];
    expect(matrizResultado).toEqual(matrizEsperada);
  });
});
