import React, { useState } from 'react'
import { Input, Button, Checkbox, FormItem, FormContainer, Select, Avatar, Upload, Radio, Table } from 'components/ui'
import { HiOutlinePlus, HiMinus, HiCheckCircle, HiOutlineUser, HiOutlinePlusCircle, HiOutlineUserCircle, HiPencil, HiOutlinePencil, HiOutlinePhone, HiOutlineMail, HiOutlineMap, HiOutlineUserGroup, HiOutlineDocumentText, HiPhone } from 'react-icons/hi'
import { Field, Form, Formik } from 'formik'
import { AdaptableCard } from "components/shared";
import RLBLogo from "assets/images/rlblogo.png";
import useMediaQuery from '@mui/material/useMediaQuery';
import { BiMap } from "react-icons/bi"

import PhoneIcon from "assets/images/phoen_icon.png"

import { RiGroup2Fill } from "react-icons/ri"
import { FaPhoneSquareAlt } from "react-icons/fa"
const Preview = (props) => {
    const { touched, errors, values,setstep } = props;
    const headerExtraContent = (
        <span className="flex items-center">
            Date of Admission: &nbsp;<span className="mr-1 font-semibold"> 20-May-2022</span>
        </span>
    )
    const matches = useMediaQuery('(min-width:1220px)');
    const { Tr, Th, Td, THead, TBody } = Table
    return (

        <AdaptableCard divider header="Student Profile" align="center" headerExtra={headerExtraContent} style={{ marginTop: "-20px" }}>
            <div className="grid grid-flow-row-dense grid-cols-4 gap-4 mb-4" style={{ width: "100%", paddingTop: "10px" }}>
                <div className={matches ? 'col-span-3' : 'col-span-4'}>
                    <div className="grid grid-flow-row-dense grid-cols-6" style={{ paddingTop: matches ? "10px" : "" }}>
                        <div><Avatar src={RLBLogo} size={100} className="bg-white" /></div>
                        <div className={"col-span-5"} style={{ textAlign: matches ? "left" : "center", paddingTop: "12px" }}>
                            <h2>RLB, Indira Nagar</h2>
                            <p>
                                Sector-14,Indira Nagar, Lucknow<br />
                                Affiliated to CBSE, New Delhi
                            </p>
                        </div>
                    </div>
                </div>
                <div className={'col-span-1'}>
                    <div style={{ width: "100%" }} >
                        <div className="mb-2" style={{ textAlign: "left", paddingLeft: matches ? "30px" : "0px" }}>
                            <b>Reg #:&nbsp;</b> 1234(534)
                        </div>
                        <div style={{ textAlign: "left", paddingLeft: matches ? "30px" : "0px" }}>
                            <div><Avatar size={100} className="bg-red" icon={<HiOutlineUser />} /></div>
                        </div>

                    </div>
                </div>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", width: "82%", fontWeight: "700" }}>
                <span>CLASS - 12th(PCM)</span><span> RANK - 1st</span>  <span>SESSION - 2022-2023</span>
            </div>

            <hr className="mt-2" style={{ border: "1px solid grey", borderStyle: "dashed" }} />
            <div className="mt-3" style={{ padding: matches ? "0px 15px" : "" }}>
                <fieldset className='mb-4' style={{ border: "1px solid #D8D8D8", position: "relative" }}>
                    <legend>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%", boxSizing: "border-box" }}>
                            <div style={{ display: "flex", alignItems: "center" }}>
                                <HiOutlineUserCircle size={40} /><hr style={{ color: "#D8D8D8", width: "10px" }} /><span style={{ fontSize: "20px", color: "black", fontWeight: "500" }}>Candidate Peronal Details</span>
                            </div>
                        </div>
                    </legend>
                    <div onClick={()=> setstep(0)} style={{ display: "flex", alignItems: "center", cursor: "pointer", position: "absolute", top: "-31px", backgroundColor: "#fff", right: "-15px", zIndex: "1" }}>
                        <span style={{ fontSize: "16px" }}>Edit</span>&nbsp;<HiOutlinePencil size={17} />
                    </div>
                    <div className='grid grid-flow-row-dense grid-cols-6 mb-2 ml-4 mr-4 mt-2'>
                        <div className={'mb-2 ' + (matches ? 'col-span-2 mb-2' : 'col-span-6')} style={{ display: "flex" }}>
                            <div style={{ paddingRight: "10px" }}>
                                <div style={{ display: "flex", width: "115px", justifyContent: "space-between" }}>
                                    <b>Student Name</b>&nbsp;<b>:</b>
                                </div>
                                <div style={{ display: "flex", width: "115px", justifyContent: "space-between" }}>
                                    <b>DOB</b>&nbsp;<b>:</b>
                                </div>
                                <div style={{ display: "flex", width: "115px", justifyContent: "space-between" }}>
                                    <b>Gender</b>&nbsp;<b>:</b>
                                </div>
                            </div>
                            <div>
                                <div style={{ display: "flex", justifyContent: "start" }}>
                                    Steve Harrington
                                </div>
                                <div style={{ display: "flex", justifyContent: "start" }}>
                                    26-05-2001
                                </div>
                                <div style={{ display: "flex", justifyContent: "start" }}>
                                    Male
                                </div>
                            </div>
                        </div>
                        <div className={'mb-2 ' + (matches ? 'col-span-2' : 'col-span-6')} style={{ display: "flex" }}>

                            <div style={{ paddingRight: "10px" }}>
                                <div style={{ display: "flex", width: "115px", justifyContent: "space-between" }}>
                                    <b>Blood Group</b>&nbsp;<b>:</b>
                                </div>
                                <div style={{ display: "flex", width: "115px", justifyContent: "space-between" }}>
                                    <b>Religion</b>&nbsp;<b>:</b>
                                </div>
                                <div style={{ display: "flex", width: "115px", justifyContent: "space-between" }}>
                                    <b>Nationality</b>&nbsp;<b>:</b>
                                </div>
                            </div>
                            <div >
                                <div style={{ display: "flex", justifyContent: "start" }}>
                                    B+
                                </div>
                                <div style={{ display: "flex", justifyContent: "start" }}>
                                    Athiest (OBC)
                                </div>
                                <div style={{ display: "flex", justifyContent: "start" }}>
                                    Indian
                                </div>
                            </div>
                        </div>
                        <div className={'mb-2 ' + (matches ? 'col-span-2' : 'col-span-6')} style={{ display: "flex" }}>

                            <div style={{ paddingRight: "10px" }}>
                                <div style={{ display: "flex", width: "115px", justifyContent: "space-between" }}>
                                    <b>Adhaar No.</b>&nbsp;<b>:</b>
                                </div>
                                <div style={{ display: "flex", width: "115px", justifyContent: "space-between" }}>
                                    <b>Prev. School</b>&nbsp;<b>:</b>
                                </div>
                            </div>
                            <div >
                                <div style={{ display: "flex", justifyContent: "start" }}>
                                    475943789
                                </div>
                                <div style={{ display: "flex", justifyContent: "start" }}>
                                    CMS(12th PCM)
                                </div>
                            </div>
                        </div>
                    </div>
                </fieldset>
                <fieldset className="mb-4" style={{ border: "1px solid #D8D8D8", position: "relative" }}>
                    <legend>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingLeft: "3px", width: "100%", boxSizing: "border-box" }}>
                            <div style={{ display: "flex", alignItems: "center" }}>
                                <RiGroup2Fill size={40} /><hr style={{ color: "#D8D8D8", width: "10px" }} /><span style={{ fontSize: "20px", color: "black", fontWeight: "500" }}>Parent Information</span>
                            </div>
                        </div>
                    </legend>
                    <div onClick={()=> setstep(1)} style={{ display: "flex", alignItems: "center", cursor: "pointer", position: "absolute", top: "-31px", backgroundColor: "#fff", right: "-15px", zIndex: "1" }}>
                        <span style={{ fontSize: "16px" }}>Edit</span>&nbsp;<HiOutlinePencil size={17} />
                    </div>
                    <div className='grid grid-flow-row-dense grid-cols-2 ml-4 mr-4 mt-2 mb-4'>
                        <div className={matches ? "col-span-1" : 'col-span-2 mb-2'} style={{ display: "flex" }}>
                            <div style={{ paddingRight: "10px" }}>
                                <div style={{ display: "flex", width: "115px", justifyContent: "space-between" }}>
                                    <b>Father Name</b>&nbsp;<b>:</b>
                                </div>
                                <div style={{ display: "flex", width: "115px", justifyContent: "space-between" }}>
                                    <b>Prof./Qual</b>&nbsp;<b>:</b>
                                </div>
                                <div style={{ justifyContent: "space-between" }}>

                                </div>
                            </div>
                            <div >
                                <div style={{ display: "flex", justifyContent: "start" }}>
                                    Elvis Harrington
                                </div>
                                <div style={{ display: "flex", justifyContent: "start" }}>
                                    Software Developer/Graduate
                                </div>
                                <div style={{ display: "flex", justifyContent: "start", alignItems: "center" }}>
                                    <HiOutlinePhone color="black" />&nbsp;9786547336 &nbsp; <HiOutlineMail color="black" />&nbsp;elvis@gmail.com
                                </div>
                            </div>
                        </div>
                        <div className={matches ? "col-span-1 mb-4" : 'col-span-2 mb-2'} style={{ display: "flex" }}>
                            <div style={{ paddingRight: "10px" }}>
                                <div style={{ display: "flex", width: "115px", justifyContent: "space-between" }}>
                                    <b>Mother Name</b>&nbsp;<b>:</b>
                                </div>
                                <div style={{ display: "flex", width: "115px", justifyContent: "space-between" }}>
                                    <b>Prof./Qual</b>&nbsp;<b>:</b>
                                </div>
                                <div style={{ display: "flex", justifyContent: "space-between" }}>

                                </div>
                            </div>
                            <div >
                                <div style={{ display: "flex", justifyContent: "start" }}>
                                    Prisscilla Presley
                                </div>
                                <div style={{ display: "flex", justifyContent: "start" }}>
                                    Software Developer/Graduate
                                </div>
                                <div style={{ display: "flex", justifyContent: "start", alignItems: "center" }}>
                                    <HiOutlinePhone color="black" />&nbsp;9786547336 &nbsp; <HiOutlineMail color="black" />&nbsp;elvis@gmail.com
                                </div>
                            </div>
                        </div>
                        <div className={matches ? "col-span-2 mb-2" : 'col-span-2 mb-2'} style={{ display: "flex" }}>
                            <div style={{ paddingRight: "10px" }}>
                                <div style={{ display: "flex", width: "115px", justifyContent: "space-between" }}>
                                    <b>Guardian</b>&nbsp;<b>:</b>
                                </div>
                                <div style={{ display: "flex", width: "115px", justifyContent: "space-between" }}>
                                    <b>Relation with</b>&nbsp;<b>:</b>
                                </div>
                                <div style={{ display: "flex", justifyContent: "space-between" }}>

                                </div>
                            </div>
                            <div >
                                <div style={{ display: "flex", justifyContent: "start" }}>
                                    Tony Montana
                                </div>
                                <div style={{ display: "flex", justifyContent: "start" }}>
                                    Godfather
                                </div>
                                <div style={{ display: "flex", justifyContent: "start", alignItems: "center" }}>

                                    <HiOutlinePhone color="black" />&nbsp;9786547336 &nbsp; <HiOutlineMail color="black" />&nbsp;elvis@gmail.com
                                </div>
                            </div>
                        </div>
                    </div>
                </fieldset>
                <fieldset className='mb-4' style={{ border: "1px solid #D8D8D8", position: "relative" }}>
                    <legend>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingLeft: "3px", width: "100%", boxSizing: "border-box" }}>
                            <div style={{ display: "flex", alignItems: "center" }}>
                                <HiPhone size={35} style={{ borderRadius: "50%", border: "3.9px solid grey" }} /><hr style={{ color: "#D8D8D8", width: "10px" }} /><span style={{ fontSize: "20px", color: "black", fontWeight: "500" }}>Contact Details</span>
                            </div>
                        </div>
                    </legend>
                    <div onClick={()=> setstep(2)} style={{ display: "flex", alignItems: "center", cursor: "pointer", position: "absolute", top: "-31px", backgroundColor: "#fff", right: "-15px", zIndex: "1" }}>
                        <span style={{ fontSize: "16px" }}>Edit</span>&nbsp;<HiOutlinePencil size={17} />
                    </div>
                    <div className='grid grid-flow-row-dense grid-cols-2 gap-4 mb-2 ml-4 mr-4 mt-2'>
                        <div className={matches ? 'col-span-1 mb-2' : 'col-span-2 mb-2'} style={{ textAlign: "left" }}>
                            <b>Correspondance Address:</b><br />
                            2573 Valley View Drive,Boston,Massachusetts,02199<br />
                            <span style={{ display: "flex", alignItems: "center" }}><BiMap /> &nbsp; Chicago, Memphis</span>
                        </div>
                        <div className={matches ? 'col-span-1' : 'col-span-2'} style={{ textAlign: "left" }}>
                            <b>Permanent Address:</b><br />
                            2573 Valley View Drive,Boston,Massachusetts,02199<br />
                            <span style={{ display: "flex", alignItems: "center" }}><BiMap />&nbsp; Chicago, Memphis</span>
                        </div>
                    </div>
                </fieldset>
                <fieldset className='mb-4' style={{ border: "1px solid #D8D8D8", position: "relative" }}>
                    <legend>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingLeft: "3px", width: "100%", boxSizing: "border-box" }}>
                            <div style={{ display: "flex", alignItems: "center" }}>
                                <HiOutlineDocumentText size={35} style={{ borderRadius: "50%", border: "3.9px solid grey" }} /><hr style={{ color: "#D8D8D8", width: "10px" }} /><span style={{ fontSize: "20px", color: "black", fontWeight: "500" }}>Document Details</span>
                            </div>
                        </div>
                    </legend>
                    <div onClick={()=> setstep(3)} style={{ display: "flex", alignItems: "center", cursor: "pointer", position: "absolute", top: "-31px", backgroundColor: "#fff", right: "-15px", zIndex: "1" }}>
                        <span style={{ fontSize: "16px" }}>Edit</span>&nbsp;<HiOutlinePencil size={17} />
                    </div>
                    <div className='grid grid-flow-row-dense grid-cols-3 gap-4 mb-2 ml-4 mr-4 mt-2'>
                        <div className={matches ? 'col-span-2' : 'col-span-3'} style={{ textAlign: "left" }}>
                            <b>Adhaar:</b><br />
                            45756768678967978987
                        </div>
                        <div className={matches ? 'col-span-1' : 'col-span-3'} style={{ display: "flex", justifyContent: "space-between" }}>
                            <Avatar size={80} icon={<HiCheckCircle />} />
                        </div>
                    </div>
                    <hr style={{ width: "95%" }} />
                    <div className='grid grid-flow-row-dense grid-cols-3 gap-4 mb-2 ml-4 mr-4 mt-2'>
                        <div className={matches ? 'col-span-2' : 'col-span-3'} style={{ textAlign: "left" }}>
                            <b>PAN:</b><br />
                            UP6754G3Y674
                        </div>
                        <div className={matches ? 'col-span-1' : 'col-span-3'} style={{ display: "flex", justifyContent: "space-between" }}>
                            <Avatar size={80} icon={<HiCheckCircle />} />
                        </div>
                    </div>
                </fieldset>

            </div>
        </AdaptableCard>


    )
}

export default Preview;