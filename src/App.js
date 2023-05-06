import './App.css';
import SciFiScreen from './components/sci_fi_screen/SciFiScreen';

function App() {
  return (
    <div className="App flex-center">
      <SciFiScreen title="foxobyte" screenStack={6} />
    </div>
  );
}

export default App;
