import React, { useEffect, useState } from 'react'
import axios from 'axios';


export default function CustomizedTables() {
    const [apiData, setApiData] = useState([]);
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const allAccounts = await axios.get(`https://coral-kitten-kit.cyclic.app/api/v1/user`);
                console.log(allAccounts.data);
                setApiData(allAccounts.data)
            } catch (error) {
                console.log(`Error: ${error}`);
            }
        }
        fetchUsers()
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
                            <th>Column 3</th>
                            <th>Column 3</th>

                        </tr>
                    </thead>

                    <tbody>
                        {apiData.map((row) => (
                            <tr>
                                <td>{row.name}</td>
                                <td>{row.name}</td>
                                <td>{row.name}</td>
                                <td>{row.name}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>
        </div>
    );
}


