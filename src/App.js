import './App.css';
import ErrorPage from './components/ErrorPage/ErrorPage';
function App() {
  return (
    <div className="App">
      <ErrorPage errorCode="404" description="Sorry, but page not found :("/>
    </div>
  );
}

export default App;
