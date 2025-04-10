import { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {

  const [posts, setPosts] = useState([]);

  useEffect(async() => {
    // 방법 1.
    // axios({
    //   method:'GET',
    //   url:'https://jsonplaceholder.typicode.com/photos'
    // }).then(response => setPosts(response.data))

    // 방법 2.
    // axios.get('https://jsonplaceholder.typicode.com/photos')
    //      .then(respose => setPosts(respose.data))

    // 방법 3.

    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/photos');
      setPosts(response.data);
    } catch (error) {
      console.log(error)
    }    
  })

  return (
    <ul>
      {posts.map(post => (
        <li key={post.id}>
          <div>{post.title}</div>
          <div><img src={post.thumbnailUrl}/></div>
        </li>
      ))}
    </ul>
  )
}

export default App;








/*

- input 태그 ( 수정/완료 )

const App = () => {

  const [text, setText] = useState("11");
  const [edit, setEdit] = useState(false);

  let content = <div>
    {text}
    <button onClick={() => setEdit(true)}>수정</button>
    </div>

  if(edit) {
    content = <div>
    <input type="text"
      value={text}
      onChange={(e) => {
        setText(e.target.value);
        console.log(e.target.value);
      }}
    />
    <button onClick={() => setEdit(false)}>수정</button>
  </div>
  }

  return (
    <>
      {content}
    </>
  );
}

export default App;

----------------------------------------------------------------------------


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

- React Style 적용 방법, useState 사용 방식

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