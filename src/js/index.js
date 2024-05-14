// El styles lo importamos aquí para que se encargue Vite de compilar todo
import "../scss/styles.scss";

const wordLarge = (word) => {
  if (word.length > 5) {
    console.log(word.toUpperCase());
  } else {
    console.log(word.toLowerCase());
  }
};
wordLarge("aviones");

const wordLargeTernary = (word) => {
  word.length > 5
    ? console.log(word.toUpperCase())
    : console.log(word.toLowerCase());
};
wordLargeTernary("casas");

const getConjugation = (verb) => {
  if (verb.endsWith("ar")) {
    return `verbo ${verb} es de la primera conjugación`;
  }
  if (verb.endsWith("er")) {
    return `verbo ${verb} es de la primera conjugación`;
  }
  if (verb.endsWith("ir")) {
    return `verbo ${verb} es de la primera conjugación`;
  }
};

const twoVerb = (verbA, verbB) => {
  const firstVerb = getConjugation(verbA);
  const secondVerb = getConjugation(verbB);
  console.log(`El ${firstVerb} y ${secondVerb}.`);
};
twoVerb("comer", "andar");

const extractTwoRandomLetters = (word) => {
  const randomNumberA = Math.floor(Math.random() * word.length);
  const randomLetterA = word.charAt(randomNumberA);
  const randomNumberB = Math.floor(Math.random() * word.length);
  const randomLetterB = word.charAt(randomNumberB);

  return randomLetterA + randomLetterB;
};

const generateWord = (wordA, wordB, wordC) => {
  const first = extractTwoRandomLetters(wordA);
  const second = extractTwoRandomLetters(wordB);
  const third = extractTwoRandomLetters(wordC);
  console.log(
    extractTwoRandomLetters(wordA) +
      extractTwoRandomLetters(wordB) +
      extractTwoRandomLetters(wordC)
  );
};
generateWord("Hola", "chao", "casa");
//- Crea una función que reciba una palabra e imprime por consola una letra aleatoria de esa palabra.
const randomLetter = (word) => {
  const randomNumber = Math.floor(Math.random() * word.length);
  const randomLetter = word.charAt(randomNumber);
  console.log(randomLetter);
};
randomLetter("palabra");

//- Crea una función que reciba un nombre y un apellido, y devuelva un nombre de usuario compuesto por la primera letra del nombre, el apellido completo, y un número aleatorio del 1 al 100. Por ejemplo, "Juan Perez" podría convertirse en "JPerez87".

const user = (nameA, nameB) => {
  const numberRandom = Math.floor(Math.random(101));
  nameA.charAt(0);
  console.log(nameA + nameB + numberRandom);
};
user("angel", "perez");
