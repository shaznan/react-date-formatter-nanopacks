# Welcome to react-date-formatter-nanopacks 👋

> A custom hook that let's you convert your date object to your prefered format

## Instalation

```
npm i react-date-formatter-nanopacks
```
## Usage

```c
import useDateFormatter from "react-date-formatter-nanopacks";

function WelcomeScreen() {
  const today = new Date();
  const [formatDate] = useDateFormatter();

  //basic usage
  console.log(formatDate(today, "dd/mm/yyyy")); //output => 17/2/2022

  //change format based on your preference
  console.log(formatDate(today, "mm/dd/yyyy")); //output => 2/17/2022
  console.log(formatDate(today, "yyyy/mm/dd")); //output => 2022/2/17

  //change seperators (introduce third argument)
  console.log(formatDate(today, "mm/dd/yyyy", "-")); //output => 17-2-2022
  console.log(formatDate(today, "mm/dd/yyyy", ".")); //output => 17.2.2022

  return (
    <div className="WelcomeScreen">
      <div>Welcome to react-date-formatter</div>{" "}
    </div>
  );
}

export default WelcomeScreen;
```
