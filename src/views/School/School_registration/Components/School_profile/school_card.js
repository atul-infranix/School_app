import { Card } from 'components/ui'
import React from 'react'
import { HiOutlineMail, HiOutlinePhone } from 'react-icons/hi'

const School_card = () => {
    return (
        <Card
            className="mt-0 border-0"
            bodyClass=" m-0  flex justify-center items-center  flex-col"

        >
            <div className='flex flex-col justify-center items-center pb-3' style={{ width: '250px', borderRadius: '10px', boxShadow: " rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px" }}>
                <div className='pt-3 relative ' style={{ width: '170px', height: '170px', }}>
                    <img src='https://media.istockphoto.com/id/826213524/photo/middle-aged-black-female-teacher-smiling-in-school-corridor.jpg?s=2048x2048&w=is&k=20&c=zIF4qDi49t_Lyt8sXmquFlQEL8NKJ3SunpYFU8a8XZM=' alt='' style={{ width: '100%', height: '100%', borderRadius: '5%', margin: '0 auto' }} />
                    <div className='absolute bottom-0 text-center  py-1' style={{ backgroundColor: "#00000069", width: "100%", borderBottomLeftRadius: '12px', borderBottomRightRadius: '12px' }}> <p style={{ color: "white" }}>PRINCIPAL</p></div>
                </div>

                <div className='text-center mt-1'>
                    <b>Amit kumar yadav</b><br />

                    <p><span className='flex justify-center ' style={{ alignItems: "center", fontSize: "12px" }}><HiOutlinePhone color="#333" />&nbsp;+91-6775656865</span></p>
                    <p className='flex ' style={{ fontSize: "12px", alignItems: "center" }}><span><HiOutlineMail color="#333" /></span>&nbsp;<span style={{ wordBreak: 'break-word' }}>yaduvanshiamit545@gmail.com</span></p>

                </div>
            </div>

        </Card >
    )
}
export default School_card