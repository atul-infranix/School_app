
import { Avatar, Card } from 'components/ui'
import React from 'react'
import { HiOutlineUser, HiOutlinePhone, HiOutlineMail, HiOutlineGlobeAlt } from 'react-icons/hi'
import { FiMapPin } from "react-icons/fi"


import { useJsApiLoader, GoogleMap, MarkerF } from '@react-google-maps/api'

import School_slider from './school_slider'

const School_profile = (props) => {
    const { touched, errors, values } = props;
    const markercenter = {
        lat: 26.8919,
        lng: 80.9745
    }

    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: 'AIzaSyAbwv5P-iff_vVB7TpstiQ1RI1kvktza48'
    })

    if (!isLoaded) {
        return <div style={{ height: '100%', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '22px', fontWeight: 'bold' }}>Loading</div>
    }

    return (
        <div >
            <Card bodyClass="m-0 p-0 pt-14 lg:pt-5 " className=" flex flex-col-reverse mb-0 mt-5" style={{
                backgroundImage: `url(https://www.greatschools.org/gk/wp-content/uploads/2014/03/The-school-visit-what-to-look-for-what-to-ask-1.jpg)`,
                backgroundPosition: "center",
                backgroundRepeat: "no - repeat",
                backgroundSize: "cover",
                minHeight: '18vw'

            }} >
                <div className='flex flex-col-reverse' style={{ position: "relative", backgroundColor: "#00000069" }}>
                    <div style={{ top: '-20px', position: "absolute", left: '20px' }}>
                        <Avatar size={100} src="https://t4.ftcdn.net/jpg/04/36/79/45/360_F_436794552_SaNvV4tbyCP1SgUVVQioDksKFarqjev2.jpg" icon={<HiOutlineUser />} />
                    </div>

                    <div className='py-2 ' style={{ marginLeft: '140px' }} >


                        <div className=''>
                            <h2 style={{ color: "#fff", }} >C.M.S Mahanagar</h2>
                            <p style={{ color: "#fff", display: 'flex', alignItems: "center" }} ><span><FiMapPin fontSize={"12px"} /></span> &nbsp;C-304,maghanagar Lucknow-226026</p>
                            {/*  */}
                        </div>
                        <div className='flex justify-between flex-wrap pr-3' >
                            <div className='flex' style={{ color: "#fff", fontSize: "12px" }}>
                                <span className='flex' style={{ alignItems: "center" }} ><HiOutlinePhone />&nbsp;6388131984</span>
                                <span className=' flex mx-2' style={{ alignItems: "center" }}><HiOutlineMail />&nbsp;gmail.com</span>
                                <span className='flex' style={{ alignItems: "center" }}><HiOutlineGlobeAlt />&nbsp; www.xyz.com</span>
                            </div>
                            <div style={{ color: "#fff", fontSize: "14px" }}>
                                <b>Affiliated to CBSE-New Delhi</b>
                            </div>


                        </div>
                    </div>

                </div>

            </Card >


            <Card

                bodyClass=""

                className=" border-0"
            >
                <p style={{ fontSize: '20px', fontWeight: 'bold', }}> ABOUT SCHOOL</p>
                <p className="">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    It has survived not only five centuries, but also the leap into electronic typesetting,
                    remaining essentially unchanged. It was popularised in the 1960s with the release of
                    Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    It has survived not only five centuries, but also the leap into electronic typesetting,
                    remaining essentially unchanged.
                </p>
            </Card>
            <hr />
            <Card
                className=" border-0"
            >
                <School_slider />
            </Card>
            <hr />
            <Card
                bodyClass=""
                className=" border-0"
            >
                <p style={{ fontSize: '20px', fontWeight: 'bold', }}> GET DIRECTION</p>
                <div className='mt-3'>
                    <GoogleMap center={markercenter} zoom={15} mapContainerStyle={{ width: '100%', height: '25vw' }}

                    // onLoad={map => setMap(map)}
                    >
                        <MarkerF position={markercenter} />
                    </GoogleMap>
                </div>

            </Card>



        </div >
    )
}

export default School_profile