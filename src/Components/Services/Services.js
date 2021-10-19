import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import ADoctor from './Doctor/ADoctor';
import './Services.css';






const Services = () => {


    const {id}  = useParams();
    const [data, setData] = useState([]);
  


        useEffect(()=>{

            fetch('/data.json')
            .then(res=> res.json())
            .then(data=>setData(data.find(info=>info.id == id)))

        },[])







console.log(data);



    return (
        <div>

            <div className="service-header-image">
                <div className="service-h-image">
                    <img src={data?.imageUrl}  alt="" />
                    <div className="service-name">
                    <h2>{data?.serviceName}</h2>
                </div>
                </div>
            
               


            </div>
                    <div className="services-section">
                        
            <div className="services-main-container">
                <div className="service-image-container">
                    <img src={data?.imageUrl} alt="" />
                </div>


                <div className="service-info">

                <div className="service-name">
                    <h3>{data?.serviceName}</h3>
                </div>

                <div className="service-description">
                {data?.serviceDescription}
                </div>




                <div className="service-check-button">

                    <button>VIEW SCHEDIUL</button>


                    <span><span className='service-fee'>Fee: </span><span className='fee-value'>{data?.serviceFee}</span></span>



                </div>








                </div>




            </div>
         </div>




         <div className="doctors-container">

             <h4>Team Member</h4>


            <div className="service-doctor">

            {data?.teamMember?.map(teamInfo=><ADoctor tInfo ={teamInfo}></ADoctor>)}
           














            </div>






         </div>



            
        </div>
    );
};

export default Services;