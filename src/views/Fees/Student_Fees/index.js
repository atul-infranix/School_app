import React, { useState } from 'react'
import { Card } from 'components/ui'
import { Input, Button, Checkbox, FormItem, FormContainer, Select, Avatar, Upload, Radio, Table } from 'components/ui'
import { Formik, Form, Field } from 'formik'
import { HiOutlineTable, HiPhone } from 'react-icons/hi'
import { HiOutlinePlus, HiMinus } from 'react-icons/hi'
import { borderRadius, width } from '@mui/system'
import { ImTable } from "react-icons/im"
import { IoChevronBack, IoChevronBackCircleSharp } from "react-icons/io5"
import useMediaQuery from '@mui/material/useMediaQuery';
import AddFinePopup from './Components/PopUps/addFinePopup'
import ExtraFee from './Components/PopUps/extraFeepopup'
import FeeExemptionPopup from './Components/PopUps/feeExemptionPopup'
import FeeStrcturePopup from './Components/PopUps/feesStructurePopup'
import Student_table_poppup from './Components/PopUps/student_table_popup'
import Student_Profile from './Components/Student_Profile';
import Fee_Form from './Components/Fee_Form'
import Fee_Table from './Components/Fee_Table';

const Feestransction = () => {
    const matches = useMediaQuery('(min-width:1220px)');

    return (
        <div style={{ marginTop: "-15px" }}>
            <div style={{ display: "flex", alignItems: "center", position: matches ? "relative" : "" }}>&nbsp;<IoChevronBack size={25} />
                <p style={{ fontSize: matches ? '23px' : "18px", paddingLeft: matches ? "" : "7px", fontWeight: 'bold', position: matches ? 'fixed' : "", left: matches ? "50%" : "", top: matches ? "18px" : "", zIndex: matches ? "20" : "" }}>
                    FEE COLLECTION
                </p>
            </div>
            <Student_table_poppup matches={matches} />
            <Student_Profile matches={matches} />
            <hr className="ml-3 mt-1" style={{ border: '1px dashed  black' }} />
            <div className="grid grid-cols-5 lg:grid-cols-9 xl:grid-cols-9 xl:gap-14 lg:gap-3 mb-0 mt-4">
                <div className='col-span-5 lg:col-span-3 xl:col-span-4 ' style={{ paddingLeft: "10px" }} >
                    <Fee_Form />
                </div>
                <div className="col-span-5 lg:col-span-6 xl:col-span-5 relative">
                    <Fee_Table matches={matches} />
                </div>
            </div>
            <div className='flex ml-2 items-center' style={{ padding: "8px 0px 8px 8px", marginTop: matches ? "" : "15px", fontSize: "14px", fontWeight: "bold", backgroundColor: "#696969", color: "#fff" }}>
                <span style={{ fontSize: "16px" }}>Net Payabale Amount : <span style={{ fontSize: "20px" }}>$7854.00</span></span>
                <Button size="sm" variant="solid" style={{ marginLeft: matches ? "120px" : "60px", fontSize: "14px", backgroundColor: "#000" }}>PAY NOW</Button>
            </div>
        </div>
    )
}
export default Feestransction