import React,{useState} from 'react'
import Modal from './Modal'

export default function Homepage({setLogin}) {
  const [modalShow, setModalShow] = useState(true);

  return (
    <main>
      {modalShow && <Modal setModalShow={setModalShow} />}
      <h1>홈페이지에 오신것을 환영합니다!</h1>
      <button onClick={()=>{setLogin(false)}}>로그아웃</button>
    </main>
  )
}
