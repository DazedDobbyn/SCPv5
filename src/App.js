import data from './data.json';
import Truck from './Truck.js';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './Nav';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


document.body.style = 'background: #1e2c33;';

function App() {
  return (
    <Router>
      <Nav data={data} />

      <Routes>
        <Route path={"HOME"} element={<Default />} />
        {
          data.map(
            truck => (
              <Route key={truck.Item}
              path={`${truck.Item}`}
              element={<Truck truck={truck} />} 
              />
            )
          )
        }
      </Routes>

    </Router>
  );
}

export default App;

function Default()
{
  return(
    <div className='text-bg-dark p-3 component container'>

                <div className="logocontainer">
                    <img className="indexlogo" class="img-fluid" src="/images/SCP_Logo_4.png" alt="SCP Foundation Logo"/>
                </div>

      <div class="maintext">
    
      <div>

        <p>Operating clandestine and worldwide, the Foundation operates beyond jurisdiction, empowered and entrusted by every major national government with the task of containing anomalous objects, entities, and phenomena. Many of these anomalies pose a significant threat to global security by threatening either physical or psychological harm. All of them undermine the natural laws that the people of the world implicitly trust in.</p>

        <p>The Foundation maintains an extensive database of information regarding anomalies requiring Special Containment Procedures, commonly referred to as "SCPs". The primary database contains summaries of such anomalies and emergency procedures for maintaining or re-establishing safe containment in the case of a containment breach or other event.</p>

        <p>The Foundation operates to maintain normalcy, so that the worldwide civilian population can live and go on with their daily lives without fear, mistrust, or doubt in their personal beliefs, and to maintain human independence from extraterrestrial, extradimensional, and other extranormal influence.</p>

        <p>Our mission is three-fold:</p>
        
        <h2 class="textbold">Secure</h2>

        <p>The Foundation secures anomalies with the goal of preventing them from falling into the hands of civilian or rival agencies, through extensive observation and surveillance and by acting to intercept such anomalies at the earliest opportunity.</p>

        <h2 class="textbold">Contain</h2>

        <p>The Foundation contains anomalies with the goal of preventing their influence or effects from spreading, by either relocating, concealing, or dismantling such anomalies or by suppressing or preventing public dissemination of knowledge thereof.</p>

        <h2 class="textbold">Protect</h2>

        <p>The Foundation protects humanity from the effects of such anomalies as well as the anomalies themselves until such time that they are either fully understood or new theories of science can be devised based on their properties and behavior. The Foundation may also neutralize or destroy anomalies as an option of last resort, if they are determined to be too dangerous to be contained.</p>

      </div>
</div> 
    </div>
  )
}