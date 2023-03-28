import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import MainNavigation from '../components/MainNavigation'
import classes from '../styles/Root.moudle.css'

const RootLayout = () => {
    const [user, setUser] = useState(null)
    return (
        <>
            <MainNavigation user={user} setUser={setUser} />

            <main className={classes.content}>
                <Outlet />
            </main>
        </>
    )
}

export default RootLayout