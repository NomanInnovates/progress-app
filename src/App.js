import {useSelector} from 'react-redux'
import './App.css';
function App() {
  const todofromRedux = useSelector(state => state.TodoReducer )
  return (
    <div className="App"> 
      <header>     <h1> Progress App </h1>
</header>
    </div>
  );
}

export default App;