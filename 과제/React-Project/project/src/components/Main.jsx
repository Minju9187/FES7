import React from 'react'
import styles from "./Main.css";

export default function Main() {
  return (
    <>
        <p className = "main-p1">나는 <label><input className = "main-input" placeholder='예)프로그래밍'></input></label> 전문가가 될 것이다.<br/>그래서 앞으로 매일 하루에 <label><input className = "main-input" placeholder='예)5시간'></input></label> 시간씩 훈련할 것이다.</p>
        <div className = "container-btnClick">
          <button className="btn">나는 며칠 동안 훈련을 해야 1만 시간이 될까?</button>
          <img className="click-img" src = "imgs/Frame 11.svg" alt="클릭사진"></img>
        </div>
        <p className="main-p2">당신은 <span className="main-span">프로그래밍</span> 전문가가 되기 위해서<br/>대략 <span className="main-span">5110</span>일 이상 훈련하셔야 합니다! :)</p>
        <div className = "btn-flex">
          <button className="btn">훈련하러 가기 GO!GO!</button>
          <button className="btn btn-share">공유하기</button>
        </div>
    </>
  )
}
