
//Hooks
import { useEffect, useState } from 'react'; 

//Components
import UserInput from "./components/UserInput";
import UserOutput from "./components/UserOutput";

//Material UI Components
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';

function App() {


  //States
  const [ userName, setUserName ] = useState("User Name");
  const [ numberOfParagraphs, setNumberOfParagraphs ] = useState(0);
  
  const [ userOutputContainer, setUserOutputContainer ] = useState([])
  const [ userOutputCollectionRender, setUserOutputCollectionRender ] = useState([])

  //Handler
  const handleUserNameChange = (e)=>{setUserName(e.target.value)};
  const handleNumberOfParagraphsChange = (e)=>{
    if(e.target.value >= 0 && e.target.value <= 5000) { 
    setNumberOfParagraphs(e.target.value)
    }
  };
  const handleSubmit = (e) => {e.preventDefault()};
  
  
  //Component UserOutput Collection
  useEffect(()=>{
    setUserOutputContainer([])
    for(let i = 0; i < numberOfParagraphs; i++){
      setUserOutputContainer( arr => [...arr, <UserOutput key={i} userName={userName}/>])
    }
  },[userOutputContainer, userName])

  //2 column render
  useEffect(()=>{
    setUserOutputCollectionRender([])
    for(let i = 0; i < userOutputContainer.length; i++){
        setUserOutputCollectionRender( arr => [...arr, <Grid item xs={6}><Card key={i}>{userOutputContainer[i]}</Card></Grid>])
                  
    }    
      
  },[userOutputContainer])

  return (
    <>
    <Container>
      <Box sx={{ mt: 3 }}>
        <UserInput 
        userName={userName}
        numberOfParagraphs={numberOfParagraphs}
        handleUserNameChange={handleUserNameChange}
        handleNumberOfParagraphsChange={handleNumberOfParagraphsChange}
        handleSubmit={handleSubmit}
        />
        <Typography  sx={{ my: 3 }} variant="h4" component="div" gutterBottom>
        Simple Cards
        </Typography>
        <Paper sx={{ mt: 3 }} elevation={3}>
          <Container>
            <Box sx={{ py: 1 }}>

            </Box>
            <Grid container spacing={2}>
              {
              userOutputCollectionRender
              }
            </Grid>
          </Container>
        </Paper>

      </Box>
    </Container>
    </>
  );
}

export default App;
