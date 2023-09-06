import './truck.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


function Truck({truck})
{
    return(

        <div className='text-bg-dark p-3 component container'>
            <div className="logocontainer">
                <img className="indexlogo" class="img-fluid" src="/images/SCP_Logo_4.png" alt="SCP Foundation Logo"/>
            </div>
            <h1><b>Item #:</b> {truck.Item}</h1>
            <h2><b>Object Class:</b> {truck.Class}</h2>
            <hr></hr><h1 className='header'><span className='headertext'>Special Containment Procedures</span></h1><hr></hr>
            <p className='maintext'>{truck.Containment}</p>
            <hr></hr><h1 className='header'><span className='headertext'>Description</span></h1><hr></hr>
            <p className='maintext'>{truck.Description}</p>
            <img src={truck.image} />
        </div>
    );
}

export default Truck;