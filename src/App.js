import './App.css';
import Controls from './components/controls/Controls';
import ScreenView from './components/screenView/ScreenView';

function App() {
  return (
    <div className="App">
      <div>
        <ScreenView />
        <Controls />
      </div>
    </div>
  );
}

export default App;
