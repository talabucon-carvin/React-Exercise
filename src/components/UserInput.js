import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const UserInput = ({
    userName,
    numberOfParagraphs,
    handleUserNameChange,
    handleNumberOfParagraphsChange,
    handleSubmit
}) => {
    return (
        <>
        <form onSubmit={handleSubmit} style={{
            display: 'flex',
            
            }}>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <Item>
                            <TextField
                            type="text"
                            label="User Name: "
                            value={userName}
                            onChange={handleUserNameChange}
                            />
            
                        </Item>
                    </Grid>
                    <Grid item xs={6}>
                        <Item>
                        <TextField
                        id="outlined-number"
                        label="Multipler"
                        type="number"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        value={numberOfParagraphs}
                        onChange={handleNumberOfParagraphsChange}
                        min="0"
                        max="3000"
                        />
                        </Item>
                    </Grid>
                   
                </Grid>
            </Box>   
         </form>
        </>
    )
};

export default UserInput;