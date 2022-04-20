
import UserInput from "./components/UserInput";
import UserOutput from "./components/UserOutput";
import { useEffect, useState } from 'react'; 

function App() {

  const [ userName, setUserName ] = useState("User Name");
  const [ numberOfParagraphs, setNumberOfParagraphs ] = useState(0);
  const handleUserNameChange = (e)=>{setUserName(e.target.value)};
  const handleNumberOfParagraphsChange = (e)=>{setNumberOfParagraphs(e.target.value)};
  const handleSubmit = (e) => {e.preventDefault()};
  const [ iterate, setIterate ] = useState([])
  
  useEffect(()=>{
    setIterate([])
    for(let i = 0; i < numberOfParagraphs; i++){
      setIterate( arr => [...arr, <UserOutput key={i} userName={userName}/>])
    }
  },[numberOfParagraphs,userName])


  return (
  <>
    <UserInput 
      userName={userName}
      numberOfParagraphs={numberOfParagraphs}
      handleUserNameChange={handleUserNameChange}
      handleNumberOfParagraphsChange={handleNumberOfParagraphsChange}
      handleSubmit={handleSubmit}
    />
    {
      iterate
    }
    

  </>
  );
}

export default App;
