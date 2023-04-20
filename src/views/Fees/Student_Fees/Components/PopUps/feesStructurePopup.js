import React, { useState } from 'react'

import { InputGroup, Button, Dialog, FormContainer, FormItem, Select, Input, Table, DatePicker } from 'components/ui'
import { Field, Formik, Form } from 'formik'
import useMediaQuery from '@mui/material/useMediaQuery';
import FeeStructureTable from './Tables/feesStructureTable';
const { Addon } = InputGroup
const { Tr, Th, Td, THead, TBody } = Table
const FeeStrcturePopup = (props) => {
    const { widthPop, classPop } = props;
    const [dialogIsOpen, setIsOpen] = useState(false)
    const matches = useMediaQuery('(max-width:1023px)');
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
        <div >
            <Button size="sm" className={classPop} variant="solid" style={{ fontSize: "13px", width: widthPop }} onClick={() => openDialog()}>FEE STRUCTURE</Button>
            <Dialog
                isOpen={dialogIsOpen}
                onClose={onDialogClose}
                onRequestClose={onDialogClose}
                width={500}

            >
                <div className='flex items-center  justify-center '><h5 >Fee Structure</h5><span className='h6 mx-2'>-</span><p ><span className='h6'> Class-12 </span></p></div>
                <hr style={{ border: '1px dashed  gray' }}></hr>
                <div className='flex justify-center  mt-2 '>
                    <div className='flex'>
                        <div style={{ borderRight: '0.1px solid #acadb0 ' }}><p className='mx-2' ><span style={{ fontSize: '15px', }}>Session:</span><span>2020-2023</span></p></div>

                        <div style={{ borderLeft: '0.1px solid #acadb0' }}><p className='mx-2' ><span style={{ fontSize: '15px', }}> Annual fee:</span><span>10000000</span></p></div>
                    </div>

                </div>
                <div>


                </div>
                <div className='mt-2 '>
                    <div className='flex w-full justify-center mb-3'>
                        <div className='flex items-center'>
                            <p className='mx-1' style={{ fontSize: '15px', }}>From</p>
                            <Select size={"sm"}></Select>
                        </div>
                        <div className='flex items-center '>
                            <p className='mx-1' style={{ fontSize: '15px', }}>To</p>
                            <Select size={"sm"}></Select>
                        </div>
                    </div>
                    <div className='border mt-5' style={{ height: '300px', width: '100%', overflowY: 'auto' }}>
                        <FeeStructureTable />
                    </div>


                </div>

                <div className="text-right mt-6">
                    <Button className="ltr:mr-2 rtl:ml-2" variant="plain" onClick={onDialogClose}>Cancel</Button>
                    {/* <Button variant="solid" onClick={onDialogOk}>Save</Button> */}
                </div>
            </Dialog >
        </div >
    )
}

export default FeeStrcturePopup