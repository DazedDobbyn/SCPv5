import {Link} from 'react-router-dom';
import './Nav.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


function Nav({data})
{
    return(
        <nav className='navbar navbar-expand-lg bg-body-tertiary'>
            <div className='container-fluid'>
            <button id="navbtn" class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
                <div className='collapse navbar-collapse' id='navbarSupportedContent'>
                    <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                        <li className='formatting'>
                            <Link to={"Home"} className='active nav-link link'>Home</Link>
                        </li>
                        {
                            data.map(
                                truck => (
                                    <li className='nav-item formatting' key={truck.Item}>
                                        <Link to={`${truck.Item}`} className='active nav-link link'>{truck.Item}</Link>
                                    </li>
                                )
                            )
                        }
                    </ul>
                </div>
            </div>
        </nav>
    );
    
}

export default Nav;