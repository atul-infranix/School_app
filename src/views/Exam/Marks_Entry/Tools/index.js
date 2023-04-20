import React, { useState } from 'react'
import { HiOutlineFilter } from 'react-icons/hi'
import ClassFilter from './ClassFilter'
import ExamTypeFilter from './ExamTypeFilter'
import MinMaxFilter from './MinMax'
import SearchButton from './SearchButton'
import SectionFilter from './SectionFilter'
import SubjectFilter from './SubjectFilter'
import useMediaQuery from '@mui/material/useMediaQuery';
import { AiTwotoneDatabase } from 'react-icons/ai'
import { Dialog } from 'components/ui'

const Tools = () => {
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
        <div className="flex mb-4">
            {matches &&
                <div className="flex items-center justify-center">
                    <ClassFilter />
                    <SectionFilter />
                    <ExamTypeFilter marginLeft={true} />
                    <SubjectFilter />
                    <MinMaxFilter marginLeft={true} />
                    <SearchButton searchIcon={true} />
                </div>
            }
            {
                !matches &&
                <div>
                    <div className="rounded-md cursor-pointer ml-4" onClick={openDialog} style={{ padding: "5px", border: "1px solid #D1D5DB" }} >
                        <AiTwotoneDatabase size={25} />
                    </div>
                    <Dialog
                        isOpen={dialogIsOpen}
                        onClose={onDialogClose}
                        onRequestClose={onDialogClose}
                        width={500}>
                        <h5 className="mb-4">Marks Entry</h5>
                        <div className="flex grid grid-cols-2 w-full">
                            <ClassFilter />
                            <SectionFilter />
                        </div><div className="flex grid grid-cols-2 w-full mt-3">
                            <ExamTypeFilter />
                            <SubjectFilter />
                        </div><div className="flex grid grid-cols-2 w-full mt-3">
                            <MinMaxFilter />
                            <SearchButton />
                        </div>
                    </Dialog>
                </div>
            }
        </div>
    )
}

export default Tools