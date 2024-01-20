let input = document.querySelector("#input");
const $btn = document.querySelector("#btn");
let $word = document.querySelector("#word");
const $definition = document.querySelector("#definition");
const $synonym = document.querySelector("#synonym");
const api = "https://api.dictionaryapi.dev/api/v2/entries/en/";


$btn.addEventListener("click", async () => {
  const data = await fetch(api.concat(input.value));
  const res = await data.json();
  const searchedWord = await res[1].word;
  const firstMeaning = await res[1].meanings[0].definitions[0].definition;
  const secondMeaning = await res[1].meanings[0].definitions[1].definition;
  const cit = await res[1].meanings[0].definitions[1].definition;
  const wordExample = await res[1].meanings[0].definitions[1].example;

  console.log(cit);
  $word.textContent = searchedWord;
  $definition.textContent = firstMeaning;
  $synonym.textContent = wordExample;

  //   $word.textContent = await bit;
});
// const dictionary = async () => {
//   const data = await fetch(`${api}${search}`);
//   const res = await data.Response;
//   console.log(res);
// };
// dictionary();
