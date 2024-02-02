const clock = document.querySelector("h2#clock");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000);

// 날짜 정보를 표시하는 함수
function displayDate() {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1; // getMonth()는 0부터 시작하므로 1을 더합니다.
  const day = date.getDate();

  // HTML 요소에 날짜 정보 설정
  document.getElementById("year").textContent = year;
  document.getElementById("month").textContent = month;
  document.getElementById("day").textContent = day;
}

// 날짜 정보를 최초 1회 표시하고 매일 자정에 업데이트합니다.
displayDate();
setInterval(displayDate, 24 * 60 * 60 * 1000); // 24시간마다 업데이트
