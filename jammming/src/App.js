//import logo from './logo.svg';
import './App.css';
import Playlist from './Components/Playlist/playlist';
import Bar from './util/bar';
function App() {
  return (
    <div className="App app">
      <Playlist></Playlist>
      <Bar></Bar>
    </div>
  );
}

export default App;
