import React from 'react'
import styles from "./Header.css";

export default function Header() {
  return (
    <>
    <h1 className="a11y-hidden">1만 시간의 법칙</h1>
    <div className = "header-img">
      <img className = "header-mainImg"src = "imgs/Frame.svg" alt="1만 시간의 법칙사진"></img>
      <img className = "header-backImg" src = "imgs/Vector.svg" alt="1만 시간의 법칙사진"></img>
    </div>
    <p className="header-p1">"연습은 어제의 당신보다 당신을 더 낫게 만든다."</p>
    <p className="header-p2"><span className="header-span">1만 시간의 법칙</span>은<br/>어떤 분야의 전문자가 되기 위해서는<br/> 최소한 1만 시간의 훈련이 필요하다는 법칙이다.</p>
    </>
  )
}
