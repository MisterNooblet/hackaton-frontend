import React from 'react'
import BillComponent from '../components/BillComponent'
import NavbarSearch from '../components/NavbarSearch'
import TraditionalFoods from '../components/TraditionalFoods'
import flags from '../assest/set-different-garlands-with-true-1814524-removebg-preview (2).png'

const CulturePage = ({ selected, setSelected }) => {
    return (
        <div>
            <img src={flags} className='flags-container' alt="flags" />
            <NavbarSearch />
            {!selected &&
                <div className='culture-page-flex'>
                    <BillComponent />
                    <TraditionalFoods />
                </div>

            }
        </div>
    )
}

export default CulturePage