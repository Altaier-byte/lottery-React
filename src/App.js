import Ball from './Ball';
import './App.css';
import Lottery from './Lottery';

function App() {
  return (
    <div className="App">
      <Lottery />
      <Lottery title = 'Mini Lottery' maxNum={10} maxBalls={4} />
    </div>
  );
}

export default App;
