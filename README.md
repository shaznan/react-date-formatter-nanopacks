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

## License (MIT)

Copyright (c) 2022 Shaznan Fairoze

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


