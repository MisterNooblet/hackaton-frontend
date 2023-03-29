import React, { useState } from 'react'
import BillComponent from '../components/BillComponent'
import NavbarSearch from '../components/NavbarSearch'
import TraditionalFoods from '../components/TraditionalFoods'
import flags from '../assest/set-different-garlands-with-true-1814524-removebg-preview (2).png'

const CulturePage = ({ user }) => {
    const [selected, setSelected] = useState(null)
    return (
        <div>
            <img src={flags} className='flags-container' alt="flags" />
            <div className='culture-page-container'>

                <NavbarSearch selected={selected} setSelected={setSelected} />
                {selected &&
                    <div className='culture-page-flex'>
                        <BillComponent />
                        <TraditionalFoods user={user} selected={selected} />
                    </div>

                }
            </div>
        </div>
    )
}

export default CulturePage