const startBtn = document.getElementById("startTimer");
const slotViewers = Array.from(
  document.getElementsByClassName("slot")[0].children
);
const stopBtns = Array.from(
  document.getElementsByTagName("form")[0].children
).slice(0, -1);
const viewNums = [0, 0, 0];
const timers = Array(3);
slotViewers.forEach((slotViewer, index) => {
  slotViewer.textContent = viewNums[index];
});

startBtn.addEventListener("click", function () {
  stopBtns.forEach((stopBtn) => {
    stopBtn.disabled = false;
  });

  viewNums.forEach((viewNum, index) => {
    timers[index] = setInterval(() => {
      viewNum = viewNum + 1;
      slotViewers[index].textContent = viewNum;
      if (viewNum === 9) {
        viewNum = -1;
      }
    }, 100);
  });
});

stopBtns.forEach((stopBtn, index) => {
  stopBtn.addEventListener("click", () => {
    clearInterval(timers[index]);
    stopBtn.disabled = true;
    if (
      stopBtns.every((stopbtn) => stopbtn.disabled) &&
      slotViewers.every(
        (slotViewer) => slotViewers[0].textContent === slotViewer.textContent
      )
    ) {
      confirm("クリア");
    } else {
      confirm("再挑戦");
    }
  });
});
