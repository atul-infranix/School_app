import React, { useState } from 'react'
import { Button, Dialog, FormContainer, FormItem, Select, Input, Table, InputGroup } from 'components/ui'
import { Field, Formik, Form } from 'formik'
import useMediaQuery from '@mui/material/useMediaQuery';
import { HiOutlinePlus, HiOutlineSearch, HiPhone } from 'react-icons/hi'
import { ImTable } from 'react-icons/im';
import Fees_Expetion_Table from './Tables/Fees_Expetion_Table';
const { Tr, Th, Td, THead, TBody } = Table
const FeeExemptionPopup = (props) => {
    const { widthPop } = props;
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
        <div>
            <Button size="sm" variant="solid" style={{ fontSize: "13px", width: widthPop }} onClick={() => openDialog()}>FEE EXEMPTION</Button>
            <Dialog
                isOpen={dialogIsOpen}
                onClose={onDialogClose}
                onRequestClose={onDialogClose}
                width={550}
            >
                <h5 className="mb-4">Fee Exemption</h5>
                <div>
                    <div>
                        <div className='flex justify-around items-center'>
                            <div className=' '>
                                <Select placeholder="Choose Fee Type" size={"sm"} />
                            </div>
                            <div cclassName=' '>
                                <Input size={"sm"} placeholder="Enter Exempt %"></Input>
                            </div>
                            <div className='' >

                                <Button size={"sm"} icon={<HiOutlinePlus />} />
                            </div>
                        </div>
                    </div>
                    <Fees_Expetion_Table />
                </div>

                <div className="text-right mt-6">
                    <Button className="ltr:mr-2 rtl:ml-2" variant="plain" onClick={onDialogClose}>Cancel</Button>
                    {/* <Button variant="solid" onClick={onDialogOk}>Save</Button> */}
                </div>
            </Dialog>
        </div>
    )
}

export default FeeExemptionPopup