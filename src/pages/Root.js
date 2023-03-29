import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import MainNavigation from '../components/MainNavigation'
import classes from '../styles/Root.moudle.css'

const RootLayout = () => {

    return (
        <>
            <MainNavigation user={user} setUser={setUser} />

            <main className={classes.content}>
                <Outlet setUser={setUser} />
            </main>
        </>
    )
}

export default RootLayout