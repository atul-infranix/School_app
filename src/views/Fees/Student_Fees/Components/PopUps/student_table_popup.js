import React, { useState } from 'react'
import { Button, Dialog, FormContainer, FormItem, Select, Input, Table, InputGroup } from 'components/ui'
import { Field, Formik, Form } from 'formik'
import useMediaQuery from '@mui/material/useMediaQuery';
import { HiOutlineSearch, HiPhone } from 'react-icons/hi'
import { ImTable } from 'react-icons/im';
import Student_table from './Tables/student_table'
const { Tr, Th, Td, THead, TBody } = Table
const Student_table_poppup = (props) => {
    const { widthPop, matches } = props;
    const [dialogIsOpen, setIsOpen] = useState(false)
    const openDialog = () => {
        setIsOpen(true)
    }

    const onDialogClose = e => {
        console.log('onDialogClose', e)
        setIsOpen(false)
    }

    const onDialogOk = e => {
        console.log('onDialogOk', e)
        setIsOpen(false)
    }

    return (
        <div>
            <div className={"ml-3 items-center " + (matches ? " flex justify-between mt-3 mb-4" : "my-3")}>
                <div className="flex" style={{ width: "300px" }}>
                    <Input size='sm' placeholder="Reg No." className="border border-gray-400" style={{ boxShadow: 'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px' }} />&nbsp;
                    <Button size="sm" className="border border-gray-400" style={{ boxShadow: 'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px' }} icon={<ImTable size={20} />} onClick={() => openDialog()}></Button>
                </div>
                <p style={{ fontWeight: 'bold', marginTop: matches ? "" : "10px" }}> Deposit Date : 02-Feb-2023</p>
            </div>
            <Dialog
                isOpen={dialogIsOpen}
                onClose={onDialogClose}
                onRequestClose={onDialogClose}
                width={900}
            >
                <h5 className="mb-4">Student Table</h5>
                <div>
                    <div>
                        <div className='flex justify-around items-center'>
                            <div className='lg:mx-0 xl:mx-0 mx-1 flex flex-col '>
                                <p>Reg No.</p>
                                <Input size={"sm"}></Input>
                            </div>
                            <div cclassName='lg:mx-0 xl:mx-0 mx-1 flex flex-col '>
                                <p>Name</p>
                                <Input size={"sm"}></Input>
                            </div>
                            <div className='lg:mx-0 xl:mx-0 mx-1 flex flex-col '>
                                <p>Class/Section</p>
                                <InputGroup className="">
                                    <Select placeholder="Select" size={"sm"} />
                                    <Select placeholder="Select" size={"sm"} />
                                </InputGroup>
                            </div>
                            <div className='lg:mx-0 xl:mx-0 mx-1 flex flex-col pt-5' >

                                <Button size={"sm"} icon={<HiOutlineSearch />} />
                            </div>
                        </div>
                    </div>
                    <Student_table />
                </div>

                <div className="text-right mt-6">
                    <Button className="ltr:mr-2 rtl:ml-2" variant="plain" onClick={onDialogClose}>Cancel</Button>
                    {/* <Button variant="solid" onClick={onDialogOk}>Save</Button> */}
                </div>
            </Dialog>
        </div>
    )
}

export default Student_table_poppup