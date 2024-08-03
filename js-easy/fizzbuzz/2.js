for (let i = 1; i < 21; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

let i = 0;

const shoNum = document.getElementById("showNum");
shoNum.innerHTML = i;

const fizzBtn = function () {
  i += 1;
  if (i % 3 === 0) {
    shoNum.innerHTML = "fizz";
  } else {
    alert("ぶっぶーですわ");
    location.reload();
  }
};

const buzzBtn = function () {
  i += 1;
  if (i % 5 === 0) {
    shoNum.innerHTML = "buzz";
  } else {
    alert("ぶっぶーですわ");
    location.reload();
  }
};

const fizzbuzzBtn = function () {
  i += 1;
  if (i % 3 === 0 && i + 5 === 0) {
    shoNum.innerHTML = "fizzbuzz";
  } else {
    alert("ぶっぶーですわ");
    location.reload();
  }
};

const numBtn = function () {
  i += 1;
  if (i % 3 === 0 || i % 5 === 0) {
    alert("ぶっぶーですわ");
    location.reload();
  }
  shoNum.innerHTML = i;
};
