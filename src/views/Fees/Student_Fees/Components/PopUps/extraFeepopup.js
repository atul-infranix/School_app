import React, { useState } from 'react'
import { Button, Dialog, FormContainer, FormItem, Select, Input } from 'components/ui'
import { Field, Formik, Form } from 'formik'
import useMediaQuery from '@mui/material/useMediaQuery';
// import VirtualizedRows from './extrafeesTable';
import RowSelection from './Tables/extrafeesTable';
// import ExtraFeesTable from './extrafeesTable';

const ExtraFee = (props) => {
    const {widthPop,classPop} = props;
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
            <Button size="sm" className={classPop} variant="solid" style={{ fontSize: "13px", width: widthPop }} onClick={() => openDialog()}>EXTRA FEE</Button>
            <Dialog
                isOpen={dialogIsOpen}
                onClose={onDialogClose}
                onRequestClose={onDialogClose}
                width={700}

            >
                <h5 className="mb-4">Extra Fee</h5>
                <div className='border' style={{ height: '350px', overflowY: 'auto' }}>
                    <RowSelection />
                </div>

                <div className="text-right mt-6">
                    <Button className="ltr:mr-2 rtl:ml-2" variant="plain" onClick={onDialogClose}>Cancel</Button>
                    <Button variant="solid" onClick={onDialogOk}>Save</Button>
                </div>
            </Dialog>
        </div>
    )
}

export default ExtraFee