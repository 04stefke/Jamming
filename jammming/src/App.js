//import logo from './logo.svg';
import './App.css';
import Playlist from './Components/Playlist/playlist';
import Bar from './util/bar';
import SearchResults from './Components/SearchResults/searchResults';
function App() {
  return (
    <div className="App app">
      <Bar></Bar>
        <div className='center'>
          <SearchResults></SearchResults>
          <Playlist></Playlist>
        </div>
    </div>
  );
}

export default App;
