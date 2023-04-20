import CreateExam from './CreateExam'
import { Dialog } from 'components/ui'
import React, { useState } from 'react'
import { HiOutlinePlus } from 'react-icons/hi'
import useMediaQuery from '@mui/material/useMediaQuery';


const PopUpForm = () => {
    const matches = useMediaQuery('(min-width:1023px)');
    const [dialogIsOpen, setIsOpen] = useState(false)

    const openDialog = () => {
        setIsOpen(true)
    }

    const onDialogClose = (e) => {
        console.log('onDialogClose', e)
        setIsOpen(false)
    }

    const onDialogOk = (e) => {
        console.log('onDialogOk', e)
        setIsOpen(false)
    }

    return (
        <>
            <div className="flex items-center">
                <div className="rounded-full cursor-pointer" onClick={openDialog} style={{ padding: "5px", border: "1px solid #D1D5DB" }} >
                    <HiOutlinePlus size={25} />
                </div>
            </div>
            <Dialog
                isOpen={dialogIsOpen}
                onClose={onDialogClose}
                onRequestClose={onDialogClose}
                width={matches?1000:500}
            >
            <h4 className="mb-4 ml-3">Add Exam</h4>
            <CreateExam/>
            </Dialog>
        </>
    )
}

export default PopUpForm