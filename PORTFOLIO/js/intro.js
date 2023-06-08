const $text = document.querySelector(".text");

// 글자 모음
const letters = [ 
  { word: "GROWING", colors: ["#c889ff", "#ff95ca", "#73eaff", "#8eff81", "#ff9dff", "#ffaf71", "#8ebfff",] },
  { word: "SHINING", colors: ["#ff95ca", "#73eaff", "#c889ff", "#8eff81", "#8ebfff", "#ff9dff", "#ffaf71",] },
  { word: "COLORFUL", colors: ["#8eff81", "#ff9dff", "#ffaf71", "#73eaff", "#ff95ca",  "#8ebfff", "#c889ff" ] }
];

// 한 글자씩 입력되는 속도
const speed = 150;
let letterIndex = 0;
let charIndex = 0;

// 타이핑 효과
const typing = async() => {
  const letter = letters[letterIndex].word[charIndex];
  const color = letters[letterIndex].colors[charIndex % letters[letterIndex].colors.length];

  const span = document.createElement("span");
  span.style.color = color;
  $text.appendChild(span);

  await typeLetter(span, letter);

  charIndex++;

  if (charIndex === letters[letterIndex].word.length) {
    await wait(800);
    remove();
  } else {
    typing();
  }
};

const typeLetter = async (span, letter) => {
  return new Promise(async (resolve) => {
    for (let i = 0; i < letter.length; i++) {
      await wait(speed);
      span.textContent += letter[i];
    }
    resolve();
  });
}

// 글자 지우는 효과
const remove = async() => {
  const spans = Array.from($text.querySelectorAll("span"));

  while (spans.length) {
    await wait(speed);

    spans[spans.length - 1].remove();
    spans.splice(spans.length - 1, 1);

    if (spans.length === 0) {
      letterIndex = (letterIndex + 1) % letters.length;
      charIndex = 0;
      typing();
    }
  }
}

// 지연 함수 (마이크로초)
function wait(ms) {
  return new Promise(res => setTimeout(res, ms));
}

// 초기 실행
typing();
