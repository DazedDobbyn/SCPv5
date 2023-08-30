import data from './data.json';
import Truck from './Truck.js';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './Nav';

function App() {
  return (
    <Router>
      <Nav data={data} />

      <Routes>
        <Route path={"HOME"} element={<Default />} />
        {
          data.map(
            truck => (
              <Route key={truck.model}
              path={`${truck.model}`}
              element={<Truck truck={truck} />} 
              />
            )
          )
        }
      </Routes>

    </Router>
  );
}


/*function Default()
{
  return(
    <div>
      <h1>Welcome to Kenworth</h1>
      <p>Use the menu above to navigate this application.</p>
    </div>
  )
}*/

export default App;

function Default()
{
  return(
    <div class="container component">
      <h1>Welcome to the COMP.6210 Practise React Application</h1>
      <p>Use the menu above to navigate the app.</p>
    </div>
  )
}