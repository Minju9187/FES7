import React from 'react'
import "./Modal.css";



export default function Modal() {
  return (
    <article className ="modal">
        <h2 className="modal-h2">화이팅!!♥♥♥</h2>
        <p>당신의 꿈을 응원합니다!</p>
        <img src='imgs/라이캣.svg' alt="라이캣"></img>
        <button className="btn">종료하고 진짜 훈련하러 가기 GO!GO!</button>
    </article>
  )
}