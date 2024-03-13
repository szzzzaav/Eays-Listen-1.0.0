import WIDTH from "../features/audioPlayer/PlayerConfig";

export class lyricObject {
  id;
  len = WIDTH === 250 ? 8 : 4;
  //歌词原文件(text)
  lyricText;
  //时间戳
  lrcTime = [];
  //歌词内容
  lrcContent = [];

  //展示舞台
  lrcstageRef;
  lrcstage;
  last;
  //偏移量
  offset;
  ////////////
  constructor({ text, lyricStageRef, offset, id }) {
    this.lyricText = text.split("\n");
    this.lyricText.forEach((el) => {
      el = el.replace("[", "");
      el = el.split("]");
      let time = this.timeFormat(el[0]) / 1000;
      if (time && el[1]) {
        this.lrcTime.push(time);
        this.lrcContent.push(el[1]);
      }
    });
    this.lrcstageRef = lyricStageRef;
    this.lrcstage = lyricStageRef?.current;
    this.offset = offset ? offset : 0;
    this.last = null;
    this.id = id;
  }
  timeFormat(time) {
    if (time) {
      time = time.replace(".", ":");
      let timeArr = time.split(":");
      if (timeArr[2].length > 2) {
        timeArr[2] =
          Math.floor(Number(timeArr[2])) / Math.pow(10, timeArr[2].length - 2);
      }
      let totalTime =
        Number(timeArr[2]) +
        Number(timeArr[1]) * 1000 +
        Number(timeArr[0]) * 60 * 1000;
      return totalTime;
    }
  }
  binarySearch(time) {
    let ll = 0,
      rr = this.lrcTime.length - 1;
    while (ll < rr) {
      let mid = (ll + rr + 1) >> 1;
      if (this.lrcTime[mid] > time) rr = mid - 1;
      else ll = mid;
    }
    return ll;
  }
  showlryonlrcstage(time, className) {
    if (!this.lrcTime?.length) return;
    let index = this.binarySearch(time) + this.offset;
    if (!this.lrcstage.childNodes[index]?.classList?.contains(`${className}`)) {
      this.lrcstage.childNodes[index].classList.add(`${className}`);
      this.lrcstage.childNodes[index].scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
    for (let i = -this.len; i <= this.len; i++) {
      if (
        this.lrcstage.childNodes[index + i] &&
        !this.lrcstage.childNodes[index + i].style.animation
      ) {
        this.lrcstage.childNodes[
          index + i
        ].style.animation = `scrollAnimation ${
          (0.4 + i / 10) * 1.5
        }s cubic-bezier(0.315, 0.005, 0.000, 1.005) forwards`;
      }
    }
    for (let i = 0; i < this.lrcstage.childNodes.length; i++) {
      if (!this.lrcstage.childNodes[i] || !this.lrcstage.childNodes[i].style)
        continue;
      if (i === index) continue;
      let el = this.lrcstage.childNodes[i];
      if (el && el.classList.contains(`${className}`))
        el.classList.remove(`${className}`);
    }
    if (this.last !== index) {
      this.last = index;
      for (let i = -this.len; i <= this.len; i++) {
        if (this.lrcstage.childNodes[index + i]?.style.animation) {
          this.lrcstage.childNodes[index + i].style.animation = "";
        }
      }
    }
  }
}
