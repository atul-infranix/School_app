import React, { useState } from 'react'
import { Select, Table, Button, Dialog } from 'components/ui'
import { HiOutlinePlusCircle, HiPencilAlt, HiTrash } from 'react-icons/hi';
import useMediaQuery from '@mui/material/useMediaQuery';
import TransportProfileForm from './transportProfileForm';
const { Tr, Th, Td, THead, TBody } = Table
const TransportTable = () => {
    const matches = useMediaQuery('(max-width:1023px)');

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
            <div className="flex justify-end">
                {
                    matches &&
                    <div>
                        <HiOutlinePlusCircle size={35} className="mr-2" onClick={() => openDialog()} />
                        <Dialog
                            isOpen={dialogIsOpen}
                            onClose={onDialogClose}
                            onRequestClose={onDialogClose}
                        >
                            <h5 className="mb-4">Dialog Title</h5>
                            <p>
                                <TransportProfileForm onDialogClose={onDialogClose} />
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
            </div>
            <div className=' mt-2 border' style={{ maxHeight: '255px', overflow: 'auto' }}>
                <Table className="" selfdefine='amit'>
                    <THead >
                        <Tr >
                            <Th style={{ textAlign: "center", maxWidth: "1px" }}>#</Th>
                            <Th style={{ textAlign: "center", minWidth: "140px" }} >Location</Th>
                            <Th style={{ textAlign: "center" }}>Distance</Th>
                            <Th style={{ textAlign: "center" }} >Charge</Th>
                            <Th style={{ textAlign: "center" }} > Action</Th>
                        </Tr>
                    </THead>
                    <TBody >
                        <Tr>
                            <Td style={{ margin: '0px', padding: '10px 0px', textAlign: "center" }}>1</Td>
                            <Td style={{ margin: '0px', padding: '0px', textAlign: "center" }}>tedipuliya</Td>
                            <Td style={{ margin: '0px', padding: '0px', textAlign: "center" }}>5 km</Td>
                            <Td style={{ margin: '0px', padding: '0px', textAlign: "center" }}>2000</Td>

                            <Td style={{ margin: '0px', padding: '0px', textAlign: "center" }}><Button
                                className="mb-1 border-0 mx-1 "
                                style={{ width: '25px', height: '25px', color: '#a2a2a2' }}

                                // size="sm"
                                icon={<HiPencilAlt />}

                            />


                                <Button
                                    className="mb-1 border-0 mx-1"
                                    style={{ width: '25px', height: '25px', color: '#a2a2a2' }}

                                    // size="sm"
                                    icon={<HiTrash />}

                                /></Td>
                        </Tr>

                        <Tr>
                            <Td style={{ margin: '0px', padding: '10px 0px', textAlign: "center" }}>2</Td>
                            <Td style={{ margin: '0px', padding: '0px', textAlign: "center" }}>Integral </Td>
                            <Td style={{ margin: '0px', padding: '0px', textAlign: "center" }}>15 km</Td>
                            <Td style={{ margin: '0px', padding: '0px', textAlign: "center" }}>3000</Td>

                            <Td style={{ margin: '0px', padding: '0px', textAlign: "center" }}><Button
                                className="mb-1 border-0 mx-1 "
                                style={{ width: '25px', height: '25px', color: '#a2a2a2' }}

                                // size="sm"
                                icon={<HiPencilAlt />}

                            />


                                <Button
                                    className="mb-1 border-0 mx-1"
                                    style={{ width: '25px', height: '25px', color: '#a2a2a2' }}

                                    // size="sm"
                                    icon={<HiTrash />}

                                /></Td>
                        </Tr>
                        <Tr>
                            <Td style={{ margin: '0px', padding: '10px 0px', textAlign: "center" }}>3</Td>
                            <Td style={{ margin: '0px', padding: '0px', textAlign: "center" }}>Engineering College</Td>
                            <Td style={{ margin: '0px', padding: '0px', textAlign: "center" }}>20 km</Td>
                            <Td style={{ margin: '0px', padding: '0px', textAlign: "center" }}>50000</Td>

                            <Td style={{ margin: '0px', padding: '0px', textAlign: "center" }}><Button
                                className="mb-1 border-0 mx-1 "
                                style={{ width: '25px', height: '25px', color: '#a2a2a2' }}

                                // size="sm"
                                icon={<HiPencilAlt />}

                            />


                                <Button
                                    className="mb-1 border-0 mx-1"
                                    style={{ width: '25px', height: '25px', color: '#a2a2a2' }}

                                    // size="sm"
                                    icon={<HiTrash />}

                                /></Td>
                        </Tr>
                        <Tr>
                            <Td style={{ margin: '0px', padding: '10px 0px', textAlign: "center" }}>4</Td>
                            <Td style={{ margin: '0px', padding: '0px', textAlign: "center" }}>KGMU</Td>
                            <Td style={{ margin: '0px', padding: '0px', textAlign: "center" }}>15 km</Td>
                            <Td style={{ margin: '0px', padding: '0px', textAlign: "center" }}>10000</Td>

                            <Td style={{ margin: '0px', padding: '0px', textAlign: "center" }}><Button
                                className="mb-1 border-0 mx-1 "
                                style={{ width: '25px', height: '25px', color: '#a2a2a2' }}

                                // size="sm"
                                icon={<HiPencilAlt />}

                            />


                                <Button
                                    className="mb-1 border-0 mx-1"
                                    style={{ width: '25px', height: '25px', color: '#a2a2a2' }}

                                    // size="sm"
                                    icon={<HiTrash />}

                                /></Td>
                        </Tr>

                        <Tr>
                            <Td style={{ margin: '0px', padding: '10px 0px', textAlign: "center" }}>5</Td>
                            <Td style={{ margin: '0px', padding: '0px', textAlign: "center" }}>Khurram Nagar</Td>
                            <Td style={{ margin: '0px', padding: '0px', textAlign: "center" }}>15 km</Td>
                            <Td style={{ margin: '0px', padding: '0px', textAlign: "center" }}>10000</Td>

                            <Td style={{ margin: '0px', padding: '0px', textAlign: "center" }}><Button
                                className="mb-1 border-0 mx-1 "
                                style={{ width: '25px', height: '25px', color: '#a2a2a2' }}

                                // size="sm"
                                icon={<HiPencilAlt />}

                            />


                                <Button
                                    className="mb-1 border-0 mx-1"
                                    style={{ width: '25px', height: '25px', color: '#a2a2a2' }}

                                    // size="sm"
                                    icon={<HiTrash />}

                                /></Td>
                        </Tr>






                    </TBody>
                </Table>
            </div>
        </div>
    )
}

export default TransportTable
