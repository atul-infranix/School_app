

import React, { useState } from 'react'
import { Button, Dialog, FormContainer, Input, FormItem } from 'components/ui'

import { HiOutlinePlusCircle } from 'react-icons/hi'

const NewTopicPop = () => {
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

            <HiOutlinePlusCircle onClick={() => openDialog()} style={{ fontSize: '22px', cursor: 'pointer' }} />
            <Dialog
                isOpen={dialogIsOpen}
                onClose={onDialogClose}
                onRequestClose={onDialogClose}
                shouldCloseOnOverlayClick={false}
                shouldCloseOnEsc={false}
            >
                <div ><span style={{ fontSize: '18px', fontWeight: 800 }}> Add Chapter</span></div>
                <div>
                    <FormContainer className="mt-2">
                        <FormItem label="Chapter" className="mb-2"
                            style={{ margin: '0px', padding: '3px 0px' }}
                        >
                            <Input

                                type="text"
                                name="name"
                                placeholder=" Enter Chapter"


                            />
                        </FormItem>
                        <FormItem label="Topic" className="mb-2"
                            style={{ margin: '0px', padding: '3px 0px' }}
                        >
                            <Input

                                type="text"
                                name="name"
                                placeholder=" Enter Topic"


                            />
                        </FormItem>
                        <FormItem label="Description" className="mb-0" style={{ margin: '0px', padding: '3px 0px ' }}>
                            <Input
                                className="my-0 "
                                type="text"
                                name="name"
                                placeholder=" Enter Description..."
                                textArea
                            />
                        </FormItem>
                    </FormContainer>
                </div>
                <div className="text-right mt-4">
                    <Button size={"sm"} className="ltr:mr-2 rtl:ml-2" variant="plain" onClick={onDialogClose}>Cancel</Button>
                    <Button size={"sm"} variant="solid" onClick={onDialogOk}>Add</Button>
                </div>
            </Dialog>
        </div>
    )
}

export default NewTopicPop