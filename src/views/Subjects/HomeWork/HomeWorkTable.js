import { Select, Table, Button, Dialog } from 'components/ui'
import { HiOutlinePlusCircle, HiPencilAlt, HiTrash } from 'react-icons/hi'
import React, { useState } from 'react'
import { useMediaQuery } from '@mui/material'
import Home_Work_Form from './Home_Work_Form'
const { Tr, Th, Td, THead, TBody } = Table
const HomeWorkTable = () => {
    const matches1 = useMediaQuery(`(min-width:832px)`);

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
        <div>
            <div className='flex justify-end items-center'>
                {
                    !matches1 &&
                    <div>
                        <HiOutlinePlusCircle size={35} className="mr-2" onClick={() => openDialog()} />
                        <Dialog
                            isOpen={dialogIsOpen}
                            onClose={onDialogClose}
                            onRequestClose={onDialogClose}
                        >
                            <h5 className="mb-4">Dialog Title</h5>
                            <p>
                                <Home_Work_Form onDialogClose={onDialogClose} />
                            </p>
                            <div className="text-right mt-6">
                                <Button
                                    className="ltr:mr-2 rtl:ml-2"
                                    variant="plain"
                                    onClick={onDialogClose}
                                >
                                    Cancel
                                </Button>
                                <Button variant="solid" onClick={onDialogOk}>
                                    Save
                                </Button>
                            </div>
                        </Dialog>
                    </div>
                }
                <div>
                    <Select placeholder="Class.." size={"sm"} />
                </div>
            </div>
            <div className=' mt-2 border' style={{ maxHeight: '473px', overflowY: 'auto', overflowX: matches1 ? 'auto' : "scroll" }}>
                <Table >
                    <THead >
                        <Tr >
                            <Th style={{ textAlign: "center" }}>#</Th>
                            <Th style={{ textAlign: "center" }} >Class(sec)</Th>
                            <Th style={{ textAlign: "center" }}>Subject</Th>
                            <Th style={{ textAlign: "center" }}>Title</Th>
                            <Th style={{ textAlign: "center" }}>Action</Th>
                        </Tr>
                    </THead>
                    <TBody >
                        <Tr>
                            <Td style={{ margin: '0px', padding: '10px 0px', textAlign: "center" }}>1</Td>
                            <Td style={{ margin: '0px', padding: '0px', textAlign: "center" }}>I(A1)</Td>
                            <Td style={{ margin: '0px', padding: '0px', textAlign: "center" }}>Math</Td>
                            <Td style={{ margin: '0px', padding: '0px', textAlign: "center" }}>CSE</Td>
                            <Td style={{ margin: '0px', padding: '0px', textAlign: "center" }}>Apr</Td>
                        </Tr>

                        <Tr>
                            <Td style={{ margin: '0px', padding: '10px 0px', textAlign: "center" }}>2</Td>
                            <Td style={{ margin: '0px', padding: '0px', textAlign: "center" }}>II(A2)</Td>
                            <Td style={{ margin: '0px', padding: '0px', textAlign: "center" }}>English</Td>
                            <Td style={{ margin: '0px', padding: '0px', textAlign: "center" }}>CE</Td>
                            <Td style={{ margin: '0px', padding: '0px', textAlign: "center" }}>Jan</Td>
                        </Tr>
                        <Tr>
                            <Td style={{ margin: '0px', padding: '10px 0px', textAlign: "center" }}>3</Td>
                            <Td style={{ margin: '0px', padding: '0px', textAlign: "center" }}>III(A3)</Td>
                            <Td style={{ margin: '0px', padding: '0px', textAlign: "center" }}>Science</Td>
                            <Td style={{ margin: '0px', padding: '0px', textAlign: "center" }}>EE</Td>
                            <Td style={{ margin: '0px', padding: '0px', textAlign: "center" }}>may</Td>
                        </Tr>

                        <Tr>
                            <Td style={{ margin: '0px', padding: '10px 0px', textAlign: "center" }}>4</Td>
                            <Td style={{ margin: '0px', padding: '0px', textAlign: "center" }}>IV(A4)</Td>
                            <Td style={{ margin: '0px', padding: '0px', textAlign: "center" }}>Hindi</Td>
                            <Td style={{ margin: '0px', padding: '0px', textAlign: "center" }}>ME</Td>
                            <Td style={{ margin: '0px', padding: '0px', textAlign: "center" }}>June</Td>
                        </Tr>
                        <Tr>
                            <Td style={{ margin: '0px', padding: '10px 0px', textAlign: "center" }}>5</Td>
                            <Td style={{ margin: '0px', padding: '0px', textAlign: "center" }}>V(A5)</Td>
                            <Td style={{ margin: '0px', padding: '0px', textAlign: "center" }}>Urdu</Td>
                            <Td style={{ margin: '0px', padding: '0px', textAlign: "center" }}>ECE</Td>
                            <Td style={{ margin: '0px', padding: '0px', textAlign: "center" }}>may</Td>
                        </Tr>
                        <Tr>
                            <Td style={{ margin: '0px', padding: '10px 0px', textAlign: "center" }}>5</Td>
                            <Td style={{ margin: '0px', padding: '0px', textAlign: "center" }}>V(A6)</Td>
                            <Td style={{ margin: '0px', padding: '0px', textAlign: "center" }}>Urdu</Td>
                            <Td style={{ margin: '0px', padding: '0px', textAlign: "center" }}>ECE</Td>
                            <Td style={{ margin: '0px', padding: '0px', textAlign: "center" }}>may</Td>
                        </Tr>    <Tr>
                            <Td style={{ margin: '0px', padding: '10px 0px', textAlign: "center" }}>5</Td>
                            <Td style={{ margin: '0px', padding: '0px', textAlign: "center" }}>V(A7)</Td>
                            <Td style={{ margin: '0px', padding: '0px', textAlign: "center" }}>Urdu</Td>
                            <Td style={{ margin: '0px', padding: '0px', textAlign: "center" }}>ECE</Td>
                            <Td style={{ margin: '0px', padding: '0px', textAlign: "center" }}>may</Td>
                        </Tr>    <Tr>
                            <Td style={{ margin: '0px', padding: '10px 0px', textAlign: "center" }}>5</Td>
                            <Td style={{ margin: '0px', padding: '0px', textAlign: "center" }}>V(A8)</Td>
                            <Td style={{ margin: '0px', padding: '0px', textAlign: "center" }}>Urdu</Td>
                            <Td style={{ margin: '0px', padding: '0px', textAlign: "center" }}>ECE</Td>
                            <Td style={{ margin: '0px', padding: '0px', textAlign: "center" }}>may</Td>
                        </Tr>    <Tr>
                            <Td style={{ margin: '0px', padding: '10px 0px', textAlign: "center" }}>5</Td>
                            <Td style={{ margin: '0px', padding: '0px', textAlign: "center" }}>V(A9)</Td>
                            <Td style={{ margin: '0px', padding: '0px', textAlign: "center" }}>Urdu</Td>
                            <Td style={{ margin: '0px', padding: '0px', textAlign: "center" }}>ECE</Td>
                            <Td style={{ margin: '0px', padding: '0px', textAlign: "center" }}>may</Td>
                        </Tr>    <Tr>
                            <Td style={{ margin: '0px', padding: '10px 0px', textAlign: "center" }}>5</Td>
                            <Td style={{ margin: '0px', padding: '0px', textAlign: "center" }}>V(A10)</Td>
                            <Td style={{ margin: '0px', padding: '0px', textAlign: "center" }}>Urdu</Td>
                            <Td style={{ margin: '0px', padding: '0px', textAlign: "center" }}>ECE</Td>
                            <Td style={{ margin: '0px', padding: '0px', textAlign: "center" }}>may</Td>
                        </Tr>    <Tr>
                            <Td style={{ margin: '0px', padding: '10px 0px', textAlign: "center" }}>5</Td>
                            <Td style={{ margin: '0px', padding: '0px', textAlign: "center" }}>V(A11)</Td>
                            <Td style={{ margin: '0px', padding: '0px', textAlign: "center" }}>Urdu</Td>
                            <Td style={{ margin: '0px', padding: '0px', textAlign: "center" }}>ECE</Td>
                            <Td style={{ margin: '0px', padding: '0px', textAlign: "center" }}>may</Td>
                        </Tr>


                    </TBody>
                </Table>
            </div>
        </div>
    )
}
export default HomeWorkTable