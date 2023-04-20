import { Avatar } from 'components/ui'
import React, { useState } from 'react'
import { HiOutlinePlus } from 'react-icons/hi'

const Student_Profile = (props) => {
    const { matches } = props;
    const [deposited, setDeposited] = useState(false);

    const HandleDeposited = () => {
        // alert("dfhj")
        if (!deposited) {
            setDeposited(true)
        }
        else {
            setDeposited(false)
        }
    }
    return (
        <div>
            <div className='flex justify-between flex-col lg:flex-row xl:flex-row mb-0 ml-1'>
                <div style={{ flex: '6' }}>
                    <div className='flex px-2'>
                        <div className=''>
                            <Avatar style={{ height: '100px', width: '100px' }} src="https://cdn.pixabay.com/photo/2012/04/14/17/04/boy-34619_960_720.png" icon={<HiOutlinePlus />} />
                        </div>
                        <div className=' ml-4 pt-1.5' >
                            <div className='flex justify-between  whitespace-nowrap  '>
                                <p className='flex justify-between' style={{ fontSize: '15px', fontWeight: 'bold', width: '170px' }}>
                                    <span>Name</span>
                                    <span>:</span>
                                </p>&nbsp;&nbsp;
                                <p className=' w-full' style={{ fontSize: "14px" }}> Amit kumar yadav </p>
                            </div>
                            <div className='flex justify-between  whitespace-nowrap  '>
                                <p className='flex justify-between' style={{ fontSize: '15px', fontWeight: '600', width: '170px' }}><span>Father Name</span>
                                    <span>:</span>
                                </p>&nbsp;&nbsp;
                                <p className=' w-full ' style={{ fontSize: "14px" }}> Amit kumar yadav </p></div>
                            <div className='flex justify-between  whitespace-nowrap  '>
                                <p className='flex justify-between' style={{ fontSize: '15px', fontWeight: '600', width: '170px' }}><span>Class</span>
                                    <span>:</span>
                                </p>&nbsp;&nbsp;
                                <p className='  w-full' style={{ fontSize: "14px" }}> xyz stnrder </p></div>
                            <div className='flex justify-between  whitespace-nowrap'>
                                <p className='flex justify-between' style={{ fontSize: '15px', fontWeight: '600', width: '170px' }}>
                                    <span>Last diposit</span>
                                    <span>:</span>
                                </p>&nbsp;&nbsp;
                                <p className='  w-full ' style={{ fontSize: "14px" }}>
                                    02-Feb-2023
                                </p>
                            </div>
                        </div>
                        <div>

                        </div>
                    </div>
                </div>
                <div className='relative mb-3' style={{ flex: '9', position: "relative" }} >
                    <div style={{ display: "flex", justifyContent: matches ? "start" : "center", bottom: matches ? "0px" : "", position: matches ? "absolute" : "" }}>
                        <p className='whitespace-nowrap ml-3 mt-1' style={{ fontSize: '14px' }}><b>Session</b>&nbsp;2022-2023</p>
                    </div>
                    {
                        deposited ?
                            <div style={{ width: "100%", display: "flex", justifyContent: matches ? "end" : "start",position:matches?"":"absolute",zIndex:"20",bottom:matches?"":"25px",backgroundColor:"#fff" }}>
                                <div className='grid grid-cols-6 gap-2 xl:gap-2 mt-2' style={{ width: matches ? "45%" : "70%", marginLeft: matches ? "-80px" : "" }}>
                                    <div className='col-span-1 border' style={{ textAlign: 'center', borderRadius: '5px' }}>Jan</div>
                                    <div className='col-span-1 border' style={{ textAlign: 'center', borderRadius: '5px' }}>Feb</div>
                                    <div className='col-span-1 border' style={{ textAlign: 'center', borderRadius: '5px' }}>Mar</div>
                                    <div className='col-span-1 border' style={{ textAlign: 'center', borderRadius: '5px' }}>jun</div>
                                    <div className='col-span-1 border' style={{ textAlign: 'center', borderRadius: '5px' }}>hec</div>
                                    <div className='col-span-1 border' style={{ textAlign: 'center', borderRadius: '5px' }}>ttt</div>
                                    <div className='col-span-1 border' style={{ textAlign: 'center', borderRadius: '5px' }}>hel</div>
                                    <div className='col-span-1 border' style={{ textAlign: 'center', borderRadius: '5px' }}>hel</div>
                                    <div className='col-span-1 border' style={{ textAlign: 'center', borderRadius: '5px' }}>hel</div>
                                    <div className='col-span-1 border' style={{ textAlign: 'center', borderRadius: '5px' }}>hel</div>
                                    <div className='col-span-1 border' style={{ textAlign: 'center', borderRadius: '5px' }}>hel</div>
                                    <div className='col-span-1 border' style={{ textAlign: 'center', borderRadius: '5px' }}>hel</div>
                                </div>
                            </div>
                            :
                            ''
                    }
                    <div className={matches ? "absolute" : ""} style={{ display: "flex", justifyContent: matches ? "end" : "start", bottom: "0px", right: matches ? "0px" : "", width: matches ? "" : "100%" }}>
                        <p onClick={HandleDeposited} className='whitespace-nowrap' style={{ fontSize: '14px', cursor: 'pointer' }}>Deposited upto <u className="hover:text-black">Oct-2022</u></p>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Student_Profile