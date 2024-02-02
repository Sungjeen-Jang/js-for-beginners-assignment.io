const quotes = [
  {
    quoteE: "If you're too nice when leaving, they'll take you for granted.",
    quoteK: "가는 말이 고우면 얕본다.",
  },
  {
    quoteE: "Hardship eventually leads to aches and pains.",
    quoteK: "고생 끝에 골병난다.",
  },
  {
    quoteE: "No need to do today what you can comfortably do tomorrow.",
    quoteK: "내일도 할 수 있는 일을 굳이 오늘 할 필요가 없다.",
  },
  {
    quoteE: "When you think it's late, it's really too late.",
    quoteK: "늦었다고 생각할 때가 정말 늦은 때다.",
  },
  {
    quoteE: "If you want to sympathize, do it with money.",
    quoteK: "동정할꺼면 돈으로 줘라.",
  },
  {
    quoteE: "I can tolerate insults to my parents, but not to myself.",
    quoteK: "부모 욕 하는 건 참아도 내 욕하는 건 참을 수 없다.",
  },
  {
    quoteE: "A senior should keep their mouth shut and their wallet open.",
    quoteK: "선배라면 입은 닫고 지갑은 열어라.",
  },
  {
    quoteE: "Starting is not half the journey; it's merely the beginning.",
    quoteK: "시작은 반이 아니다. 시작일 뿐이다.",
  },
  {
    quoteE: "Beer and chicken at dawn have zero calories.",
    quoteK: "새벽에 먹는 맥주와 치킨은 0칼로리",
  },
  {
    quoteE: "A path with hardships is not truly a path.",
    quoteK: "어려운 길은 길이 아니다.",
  },
  {
    quoteE: "The early bird is just tired.",
    quoteK: "일찍 일어나는 새가 피곤하다.",
  },
  {
    quoteE: "The longer you can postpone death and marriage, the better.",
    quoteK: "죽음과 결혼은 뒤로 미룰수록 좋다.",
  },
  {
    quoteE: "If you can't enjoy it, avoid it.",
    quoteK: "즐길 수 없으면 피하라.",
  },
  {
    quoteE: "If you endure three times, you're a pushover.",
    quoteK: "참을 인 세번이면 호구이다.",
  },
];

const quoteText = document.getElementById("quote-text");
const quoteTranslation = document.getElementById("quote-translation");
const quoteImg = document.getElementById("quote-img");

function showQuote() {
  const quoteIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[quoteIndex];

  // 텍스트와 이미지 설정
  quoteText.textContent = quote.quoteE;
  quoteTranslation.textContent = quote.quoteK; // 한글 명언 설정
  quoteImg.src = `img_for_quotes/q${quoteIndex}.png`;

  // 영어 명언을 fade-in
  quoteText.classList.remove("fade-out");
  quoteText.classList.add("fade-in");

  // 일정 시간 후에 영어 명언을 fade-out하고 한글 명언을 fade-in
  setTimeout(() => {
    quoteText.classList.remove("fade-in");
    quoteText.classList.add("fade-out");

    quoteTranslation.classList.remove("fade-out"); // 한글 명언이 사라지지 않도록 수정 (필요한 경우)
    quoteTranslation.classList.add("fade-in");

    // 이미지를 fade-in
    quoteImg.style.opacity = "0.5";
  }, 6000);

  // 또 다른 일정 시간 후에 한글 명언을 fade-out하고 이미지를 fade-out
  setTimeout(() => {
    quoteTranslation.classList.remove("fade-in");
    quoteTranslation.classList.add("fade-out");

    // 이미지를 fade-out
    quoteImg.style.opacity = "0";
  }, 12000);

  // 전체 사이클을 반복
  setTimeout(showQuote, 18000);
}

showQuote(); // 최초 호출
