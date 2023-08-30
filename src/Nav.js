import {Link} from 'react-router-dom';
import './Nav.css';

function Nav({data})
{
    return(
        <nav>
            <ul>
                <li>
                    <Link to={"Home"} className='link'>Home</Link>
                </li>
                {
                    data.map(
                        truck => (
                            <li key={truck.model}>
                                <Link to={`${truck.model}`} className='link'>{truck.model}</Link>
                            </li>
                        )
                    )
                }
            </ul>
        </nav>
    );
    
}

export default Nav;