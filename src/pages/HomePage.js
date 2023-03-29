import React from 'react'
import tree from '../assest/trr.png'


const HomePage = () => {


    return (<>
        <div className='p-container'>
            {/* <img src={backGround} alt="img" className='img-homePage' /> */}
            <img className='treeImg' src={tree} alt="tree" />

            <div className='p-sec-container'>
                <p className='paragraph'>
                    Cuisine Crossroads is an application that allows users to explore different cultures through their traditional cuisine. Users can select any country and access a page that provides information about the most popular traditional dishes in that country. Additionally, the app features a tip calculator that helps users navigate cultural norms around tipping in different countries. One of the most exciting aspects of our application is the food experiences list, which allows users to track their culinary adventures and share them with others. This feature creates a sense of community and encourages users to step outside of their comfort zones and try new things. Finally, our platform includes a leaderboard that showcases the most adventurous user's competition among users.
                </p>

            </div>

        </div>

    </>
    )
}

export default HomePage