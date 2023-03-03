
import './App.css';
import HOC from './Component/HOC';
  import Counter from './Component/Counter';
function App() {
 
  return (
    <div className="App">
      <HOC data={Counter } />
    
    </div>
  );
}

export default App;
