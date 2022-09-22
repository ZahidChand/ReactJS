import React, { useEffect, useState } from 'react'  
import "./StateWise.css"
export const StateWise = () => {

    const [data, setData] = useState([]);

    const getCovidData = async () => {

        const res = await fetch('https://data.covid19india.org/data.json');
        const covidData = await res.json();
        console.log(covidData);
        setData(covidData.statewise)
    }
    useEffect(() => {

        getCovidData();

    }, []);


    return (
        <div>

            <div className='container-fluid mt-5' >
                <div className='main-heading'>
                    <h1 className='mb-5 text-center'><span className='font-weidth-bold'> INDIA</span> Covid-19 Dashboard</h1>
                </div>
                <div className='table-responsive'>
                    <table className='table table-hover'>
                        <thead className='thead-dark'>
                            <tr>
                                <th>State</th>
                                <th>Confirmed</th>
                                <th>Recovered</th>
                                <th>Death</th>
                                <th>Active</th>
                                <th>Updated</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                data.map((currentVal, index) => {
                                    return (
                                        <tr key={index}>
                                            <th>{currentVal.state}</th>
                                            <td>{currentVal.confirmed}</td>
                                            <td>{currentVal.recovered}</td>
                                            <td>{currentVal.deaths}</td>
                                            <td>{currentVal.active}</td>
                                            <td>{currentVal.lastupdatedtime}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>

            </div>

        </div >
    )
}
export default StateWise;
