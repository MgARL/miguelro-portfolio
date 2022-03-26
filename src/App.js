import './App.css';
import Info from './components/Info'
import MyInfo from './components/MyInfo'
import Box from '@mui/material/Box'

function App() {
  return (
    <Box component="span" sx={{ display: 'block', display: 'flex', flexDirection: 'column', alignItems:'center' }} className="App">
      <MyInfo />
      <Info />
    </Box>
  );
}

export default App;
