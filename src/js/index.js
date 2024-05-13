// El styles lo importamos aquí para que se encargue Vite de compilar todo
import '../scss/styles.scss';

const wordLarge = word => {
  if (word.length > 5) {
    console.log(word.toUpperCase());
  } else {
    console.log(word.toLowerCase());
  }
};
wordLarge('aviones');

const wordLargeTernary = word => {
  word.length > 5 ? console.log(word.toUpperCase()) : console.log(word.toLowerCase());
};
wordLargeTernary('casas');

const getConjugation = verb => {
  if (verb.endsWith('ar')) {
    return `verbo ${verb} es de la primera conjugación`;
  }
  if (verb.endsWith('er')) {
    return `verbo ${verb} es de la primera conjugación`;
  }
  if (verb.endsWith('ir')) {
    return `verbo ${verb} es de la primera conjugación`;
  }
};

const twoVerb = (verbA, verbB) => {
  const firstVerb = getConjugation(verbA);
  const secondVerb = getConjugation(verbB);
  console.log(`El ${firstVerb} y ${secondVerb}.`);
};
twoVerb('comer', 'andar');
