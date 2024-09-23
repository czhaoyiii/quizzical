export default function GetFunction(props) {
  let categoryParam = "";
  let difficultyParam = "";
  let typeParam = "";

  if (props.category !== "") {
    categoryParam = `&category=${props.category}`;
  }
  if (props.difficulty !== "") {
    difficultyParam = `&difficulty=${props.difficulty}`;
  }
  if (props.type !== "") {
    typeParam = `&type=${props.type}`;
  }

  let apiURL = `https://opentdb.com/api.php?amount=5${categoryParam}${difficultyParam}${typeParam}`;

  return fetch(apiURL)
    .then((res) => res.json())
    .then((data) => data.results);
}
