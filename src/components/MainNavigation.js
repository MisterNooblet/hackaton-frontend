import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from '../styles/MainNavigation.moudle.css'
const MainNavigation = ({ user, setUser }) => {
    return (
        <header className='header'>
            <nav>
                <ul className="list">

                    <li>
                        <NavLink className={({ isActive }) => isActive ? classes.active : undefined} to='/' > Home </NavLink>
                    </li>
                    {!user &&
                        <li> <NavLink className={({ isActive }) => isActive ? classes.active : undefined} to='/login'>
                            Login
                        </NavLink>
                        </li>
                    }
                    {user &&
                        <li> <NavLink className={({ isActive }) => isActive ? classes.active : undefined} to='/' onClick={() => { setUser(null) }}>
                            Logout
                        </NavLink>
                        </li>

                    }

                    <li> <NavLink className={({ isActive }) => isActive ? classes.active : undefined} to='/culture'>
                        Culture
                    </NavLink>
                    </li>

                    <li>
                        <NavLink className={({ isActive }) => isActive ? classes.active : undefined} to='/leaderboard'>Leadboard</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default MainNavigation