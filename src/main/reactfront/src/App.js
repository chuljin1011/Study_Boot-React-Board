import './App.css';
import { useState } from 'react';



const App = () => {

  return (
    <div>
      
    </div>
  );
}

export default App;










/*

- 함수 분리

const RecordForm = ({numList, setNumList}) => {

  const [num, setNum] = useState(0);

  return (
    <div>
      <div>현재 숫자 : {num}</div>
      <button onClick={() => setNum(num + 1)}>숫자 증가</button>
      <button onClick={() => setNum(num - 1)}>숫자 감소</button>
      <button onClick={() => setNum(0)}>숫자 초기화</button>
      <hr/>
      <button onClick={() => setNumList([...numList, num])}>숫자 기록</button>
      <button onClick={() => setNumList([])}>기록 초기화</button>
    </div>
  )
}

const RecordList = ({numList}) => {
  return (
    <div>
      <h2>기록된 숫자</h2>
      {numList.length > 0 ? <div>기록 있음</div> : <div>기록 없음</div> }
    </div>
  )
}

const App = () => {

  const [numList, setNumList] = useState([]);

  return (
    <div style={{margin : "40px auto",
                 width : "800px",
                 textAlign : "center",
                 }}>
      <RecordForm numList={numList} setNumList={setNumList}/>
      <RecordList numList={numList}/>
    </div>
  )  
}

export default App;

----------------------------------------------------------------------------

- List 만들기 기본 구성

function App() {

  const [num, setNum] = useState(0);

  const [numList, setNumList] = useState([]);

  function numRecording() {
    setNumList([...numList, num]);

    setNum(0);
  }


  return (
    <div className="App">
      <div>현재 숫자 : {num}</div>
      <button onClick={() => setNum(num + 1)}>숫자 증가</button>
      <button onClick={() => setNum(num - 1)}>숫자 감소</button>
      <button onClick={numRecording}>숫자 기록</button>
      <h1>저장된 숫자</h1>
      <ul>
        {numList.map((num) => (
          <li>{num}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;

----------------------------------------------------------------------------

- React Style 적용 방법

function App() {

  let [num, setNum] = useState(1); // 이 방식은 바로 실행 금지

  // 바로 실행 예시
  // setNum(2); 무한 랜더링으로 에러 발생

  //setTimeout(()=>{setNum(num = num + 1)}, 1000) 1초 마다 증가


  return (
    <div className="App">
      <header className="App-header">
        { <div style={{color : "red"}}> {num}</div> }
        <div className="number"> {num}</div>
        
        { <button onClick={() => {setNum(num = num +1)}}>버튼</button> }
      </header>
    </div>
  );
}

export default App;

*/