import React from 'react'
import userAPI from '../utils/UserApi';

const TraditionalFoods = ({ selected, user }) => {
    console.log(selected);
    console.log(user);
    const handleSubmit = async (e) => {
        e.preventDefault()
        let dataToSubmit = []
        for (let i = 0; i < selected.cuisines.length; i++) {
            let checkbox = e.target[i]
            if (checkbox.checked) {
                dataToSubmit.push(selected.data[0].cuisines[i])
            }
        }
        const response = await userAPI.insertFoods(user.id, dataToSubmit)
        console.log(response);
    }

    if (selected) {
        return (

            <div className='traditional-Food-container'>
                <h1 className='traditional-Food-h1'> {selected.data[0].name}</h1>
                <h3>Traditional Cuisines</h3>
                <h4>{user && user.fullname}</h4>
                <h4>What did you eat?</h4>
                <form onSubmit={(e) => { handleSubmit(e) }}>
                    <div className="traditional-div">
                        {selected.cuisines.map((data, idx) => {
                            return (

                                <>
                                    <input type="checkbox" name={`i${idx}`} />
                                    <h3 className='data'>{data}</h3>
                                </>
                            )


                        })}</div>
                    <button className='button-LoginPage'>Submit</button>
                </form>

            </div>
        )
    }
}

export default TraditionalFoods