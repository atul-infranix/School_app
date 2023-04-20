import { Dialog } from 'components/ui'
import React from 'react'
import { HiOutlineSearch } from 'react-icons/hi'

const ResponsiveTool = () => {
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
            <div className="rounded-md cursor-pointer ml-4" onClick={openDialog} style={{ padding: "5px", border: "1px solid #D1D5DB" }} >
                <HiOutlineSearch size={25} />
            </div>
            <Dialog
                isOpen={dialogIsOpen}
                onClose={onDialogClose}
                onRequestClose={onDialogClose}
                width={500}
            >
                <div className="flex">
                    <ClassFilter />
                    <SectionFilter />
                    <ExamTypeFilter />
                    <SubjectFilter />
                    <MinMaxFilter />
                    <SearchButton />
                </div>
            </Dialog>
        </>
    )
}

export default ResponsiveTool