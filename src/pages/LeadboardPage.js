import React, { useEffect, useState } from 'react'
import userAPI from '../utils/UserApi';


export default function CustomizedTables() {
    const [apiData, setApiData] = useState([]);

    const getData = async () => {
        const response = await userAPI.getLeaders()
        setApiData(prev => prev = response)
    }
    useEffect(() => {
        getData()
    }, [])

    return (
        <div className="LeaderPage-countainer">
            <div className="image-container">
                <img
                    src="https://img.freepik.com/free-vector/happy-character-winning-prize-with-flat-design_23-2147895792.jpg?w=740&t=st=1680043399~exp=1680043999~hmac=4a0bdcfb4b5253ff53b9307f3d789267b8727b0b14833ccbedf30761ad778462"
                    alt="topone "
                    className='img-lead '
                />
            </div>
            <div className="table-countainer">
                <table>
                    <thead>
                        <tr>
                            <th>Top Number</th>
                            <th>Full Name</th>
                            <th>Foods tried!</th>


                        </tr>
                    </thead>

                    <tbody>
                        {apiData.map((row, idx) => (
                            <tr>
                                <td>{idx + 1}</td>
                                <td>{row.fullname}</td>
                                <td>{row.foods.length}</td>

                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>
        </div>
    );
}


