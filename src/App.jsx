import "./App.css"
import Pages from "./component/Pages/Pages"
import { HashRouter } from 'react-router-dom';


function App() {
  return (
    <HashRouter>
      <Pages />
    </HashRouter>
  );
}

export default App;



