import React, { useState } from 'react'
import { Button, Dialog, FormContainer, FormItem, Select, Input } from 'components/ui'
import { Field, Formik, Form } from 'formik'
import useMediaQuery from '@mui/material/useMediaQuery';
const AddFinePopup = (props) => {
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
            <Button size="sm" className={classPop} variant="solid" style={{ fontSize: "13px", width: widthPop  }} onClick={() => openDialog()}>ADD FINE</Button>
            <Dialog
                isOpen={dialogIsOpen}
                onClose={onDialogClose}
                onRequestClose={onDialogClose}
            >
                <h5 className="mb-4">Fine/Charges</h5>
                <div>
                    <Formik>
                        <Form>
                            <FormContainer className="grid grid-cols-3 lg:grid-cols-3 xl:grid-cols-3  gap-3 mb-0 ">
                                <FormItem
                                    className="mx-1 col-span-2  m-0 mt-3 whitespace-nowrap "
                                    // layout={matches ? "vertical" : "horizontal"}
                                    // style={!matches ? { alignItems: 'normal' } : {}}
                                    asterisk
                                    label="Purpose"

                                >
                                    <Select placeholder="Choose Purpose" ></Select>
                                </FormItem>

                                <FormItem
                                    className="mx-1 col-span-1  m-0 mt-3 whitespace-nowrap  "
                                    // layout={matches ? "vertical" : "horizontal"}
                                    // style={!matches ? { alignItems: 'normal' } : {}}
                                    asterisk
                                    label="Days"


                                >
                                    <Field type="text" autoComplete="off" name="name" placeholder="Days" component={Input} />
                                </FormItem>
                            </FormContainer>
                            <FormContainer >


                                <FormItem
                                    className="mx-1  m-0 mt-3 whitespace-nowrap "
                                    // layout={matches ? "vertical" : "horizontal"}
                                    // style={!matches ? { alignItems: 'normal' } : { width: 'fit-content' }}
                                    asterisk
                                    label="Amount"
                                // labelMinWidth="0px"


                                >
                                    <Field type="text" autoComplete="off" name="name" placeholder="Enter Amount" component={Input} />
                                </FormItem>

                                <FormItem
                                    className="mx-1  m-0 mt-3 whitespace-nowrap col-span-2"
                                    // layout={matches ? "vertical" : "horizontal"}
                                    // style={!matches ? { alignItems: 'normal' } : {}}
                                    asterisk
                                    label="Description"


                                >
                                    <Input placeholder="Enter Description" textArea />
                                </FormItem>
                            </FormContainer>
                        </Form>
                    </Formik>
                </div>

                <div className="text-right mt-6">
                    <Button className="ltr:mr-2 rtl:ml-2" variant="plain" onClick={onDialogClose}>Cancel</Button>
                    <Button variant="solid" onClick={onDialogOk}>Save</Button>
                </div>
            </Dialog>
        </div>
    )
}

export default AddFinePopup