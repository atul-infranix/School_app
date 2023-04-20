
import React, { useState } from 'react'
import { Button, Dialog, FormContainer, Input, FormItem } from 'components/ui'

import { HiOutlinePencilAlt, HiOutlinePlusCircle } from 'react-icons/hi'

const NewChapterPop = ({ chapName, stateTemp }) => {
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

            <HiOutlinePencilAlt size={16} onClick={() => openDialog()} className="mx-1 cursor-pointer" />

            <Dialog
                isOpen={dialogIsOpen}
                onClose={onDialogClose}
                onRequestClose={onDialogClose}
                shouldCloseOnOverlayClick={false}
                shouldCloseOnEsc={false}
            >
                <div ><span style={{ fontSize: '18px', fontWeight: 800 }}>Update:</span></div>
                <div>
                    <FormContainer className="mt-2">
                        <FormItem label="Chapter Name" className="mb-2"
                            style={{ margin: '0px', padding: '3px 0px' }}
                        >
                            <Input
                                size={"sm"}
                                type="text"
                                name="name"
                                placeholder="Enter Chapter Name "
                                value={chapName}
                                onChange={(e) => { stateTemp(e.target.value) }}
                            />
                        </FormItem>


                    </FormContainer>
                </div>
                <div className="text-right mt-4">
                    <Button size={"sm"} className="ltr:mr-2 rtl:ml-2" variant="plain" onClick={onDialogClose}>Cancel</Button>
                    <Button size={"sm"} variant="solid" onClick={onDialogOk}>Update</Button>
                </div>
            </Dialog>
        </div>
    )
}

export default NewChapterPop