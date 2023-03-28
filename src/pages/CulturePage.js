import React from 'react'
import BillComponent from '../components/BillComponent'
import NavbarSearch from '../components/NavbarSearch'
import TraditionalFoods from '../components/TraditionalFoods'
const CulturePage = () => {
    return (
        <div>
            <NavbarSearch />
            <BillComponent />
            <TraditionalFoods />
        </div>
    )
}

export default CulturePage