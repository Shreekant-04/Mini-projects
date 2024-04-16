let btns = document.querySelectorAll("button");

let str = "";

btns.forEach((buttons) => {
  buttons.addEventListener("click", () => {
    let input = document.querySelector(".inputVal input");
    let result = document.querySelector(".result");
    let rawResult = "";

    if (buttons.innerText === "AC") {
      str = "";
      input.value = str;
      rawResult = str;
      result.innerText = rawResult;
    } else if (buttons.innerText === "C") {
      str = str.slice(0, -1);
      input.value = str;
      // rawResult = eval(str);
      // result.innerText = rawResult;
      if (str.length == 0) {
        rawResult = "";
        result.innerText = rawResult;
      }
    } else if (buttons.innerText === "=") {
      console.log(str);
      let value = eval(str);
      str = String(value);
      rawResult = "";
      input.value = value;
      result.innerText = rawResult;
    } else {
      str += buttons.innerText;
      input.value = str;
      rawResult = eval(str);
      result.innerText = rawResult;
    }
    // rawResult = eval(str);
    // result.innerText = rawResult;
  });
});

