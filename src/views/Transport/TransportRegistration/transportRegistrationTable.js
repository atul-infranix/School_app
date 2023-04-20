import React, { useState } from 'react'
import { Select, Table, Button, Dialog } from 'components/ui'
import { HiOutlinePlusCircle, HiPencilAlt, HiTrash } from 'react-icons/hi'
import useMediaQuery from '@mui/material/useMediaQuery';
import TransportRegistrationForm from './transportRegistrationForm';
import { vehicleArray } from './dummyData';
import VehicalDetailModal from './VehicalDetailModal';
const { Tr, Th, Td, THead, TBody } = Table
const TransportRegistrationTable = () => {
    const matches = useMediaQuery('(max-width:1023px)');

    const [dialogIsOpen, setIsOpen] = useState(false);
    const [vehicaldialogIsOpen, setvehicalIsOpen] = useState(false);

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

    const openvehicalDialog = () => {
        setvehicalIsOpen(true)
    }

    const onvehicalDialogClose = (e) => {
        console.log('onDialogClose', e)
        setvehicalIsOpen(false)
    }

    const onvehicalDialogOk = (e) => {
        console.log('onDialogOk', e)
        setvehicalIsOpen(false)
    }




    return (
        <div>
            <div className={"flex justify-end " + (matches ? "" : "mt-5")}>
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
                                <TransportRegistrationForm onDialogClose={onDialogClose} />
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
            <div className='border' style={{ maxHeight: '503px', overflow: 'auto' }}>
                <Table className="" selfdefine='amit'>
                    <THead >
                        <Tr >
                            <Th style={{ textAlign: "center", maxWidth: "1px" }}>#</Th>
                            <Th className="text-center whitespace-nowrap" style={{ maxWidth: "80px" }}><span >Vehicle</span></Th>
                            <Th className="text-center whitespace-nowrap" style={{ minWidth: "150px" }} ><span  >Location</span></Th>
                            <Th style={{ textAlign: "center", minWidth: "100px" }} >Driver</Th>
                            <Th style={{ textAlign: "center", maxWidth: "80px" }} > Type</Th>
                            {/* <Th style={{ textAlign: "center" }} >Conductor</Th>
                            <Th style={{ textAlign: "center" }} >GPS Id</Th> */}
                            <Th style={{ textAlign: "center" }} > Action</Th>
                        </Tr>
                    </THead>
                    <TBody >
                        {
                            vehicleArray.map((item, index) => {
                                return (
                                    <Tr style={{ cursor: "pointer" }} onClick={() => openvehicalDialog()} >
                                        <Td style={{ margin: '0px', padding: '10px 0px', textAlign: "center" }}>{index + 1}</Td>
                                        <Td style={{ margin: '0px', padding: '0px', textAlign: "center" }}>{item.vehical_num.slice(-4)}</Td>
                                        <Td style={{ margin: '0px', padding: '0px', textAlign: "start", paddingLeft: "8px" }}>{item.location}</Td>
                                        <Td style={{ margin: '0px', padding: '0px', textAlign: "center" }}>{item.driver}</Td>
                                        <Td style={{ margin: '0px', padding: '0px', textAlign: "center" }}>{item.type}</Td>
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
                                )
                            })
                        }
                        <Dialog
                            isOpen={vehicaldialogIsOpen}
                            onClose={onvehicalDialogClose}
                            onRequestClose={onvehicalDialogClose}>
                            <VehicalDetailModal />
                        </Dialog>

                        <Tr>
                            <Td style={{ margin: '0px', padding: '10px 0px', textAlign: "center" }}>2</Td>
                            <Td style={{ margin: '0px', padding: '0px', textAlign: "center" }}>1162</Td>
                            <Td style={{ margin: '0px', padding: '0px', textAlign: "start" }}>kanpur</Td>
                            <Td style={{ margin: '0px', padding: '0px', textAlign: "center" }}>kaleem</Td>
                            <Td style={{ margin: '0px', padding: '0px', textAlign: "center" }}>Van</Td>
                            {/* <Td style={{ margin: '0px', padding: '0px', textAlign: "center" }}>1</Td>
                        <Td style={{ margin: '0px', padding: '0px', textAlign: "center" }}>6632514htf</Td> */}

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
                            <Td style={{ margin: '0px', padding: '0px', textAlign: "center" }}>1632</Td>
                            <Td style={{ margin: '0px', padding: '0px', textAlign: "start" }}>tedipuliya</Td>
                            <Td style={{ margin: '0px', padding: '0px', textAlign: "center" }}>anil</Td>
                            <Td style={{ margin: '0px', padding: '0px', textAlign: "center" }}>	Bus</Td>
                            {/* <Td style={{ margin: '0px', padding: '0px', textAlign: "center" }}>2</Td>
                            <Td style={{ margin: '0px', padding: '0px', textAlign: "center" }}>66325632514htf</Td> */}

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
                            <Td style={{ margin: '0px', padding: '0px', textAlign: "center" }}>1362</Td>
                            <Td style={{ margin: '0px', padding: '0px', textAlign: "start" }}>tedipuliya</Td>
                            <Td style={{ margin: '0px', padding: '0px', textAlign: "center" }}>Xyz</Td>
                            <Td style={{ margin: '0px', padding: '0px', textAlign: "center" }}>Motor</Td>
                            {/* <Td style={{ margin: '0px', padding: '0px', textAlign: "center" }}>0</Td>
                            <Td style={{ margin: '0px', padding: '0px', textAlign: "center" }}>32514htf</Td> */}

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
                            <Td style={{ margin: '0px', padding: '0px', textAlign: "center" }}>1962</Td>
                            <Td style={{ margin: '0px', padding: '0px', textAlign: "start" }}>tedipuliya</Td>
                            <Td style={{ margin: '0px', padding: '0px', textAlign: "center" }}>test prasad</Td>
                            <Td style={{ margin: '0px', padding: '0px', textAlign: "center" }}>Van</Td>
                            {/* <Td style={{ margin: '0px', padding: '0px', textAlign: "center" }}>0</Td>
                            <Td style={{ margin: '0px', padding: '0px', textAlign: "center" }}>32514htf</Td> */}

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
                            <Td style={{ margin: '0px', padding: '10px 0px', textAlign: "center" }}>6</Td>
                            <Td style={{ margin: '0px', padding: '0px', textAlign: "center" }}>5632</Td>
                            <Td style={{ margin: '0px', padding: '0px', textAlign: "start" }}>tedipuliya</Td>
                            <Td style={{ margin: '0px', padding: '0px', textAlign: "center" }}>amit</Td>
                            <Td style={{ margin: '0px', padding: '0px', textAlign: "center" }}>	Bus</Td>
                            {/* <Td style={{ margin: '0px', padding: '0px', textAlign: "center" }}>2</Td>
                            <Td style={{ margin: '0px', padding: '0px', textAlign: "center" }}>66325632514htf</Td> */}

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
                            <Td style={{ margin: '0px', padding: '10px 0px', textAlign: "center" }}>7</Td>
                            <Td style={{ margin: '0px', padding: '0px', textAlign: "center" }}>5662</Td>
                            <Td style={{ margin: '0px', padding: '0px', textAlign: "start" }}>tedipuliya</Td>
                            <Td style={{ margin: '0px', padding: '0px', textAlign: "center" }}>wwww</Td>
                            <Td style={{ margin: '0px', padding: '0px', textAlign: "center" }}>	Bus</Td>
                            {/* <Td style={{ margin: '0px', padding: '0px', textAlign: "center" }}>2</Td>
                            <Td style={{ margin: '0px', padding: '0px', textAlign: "center" }}>66325632514htf</Td> */}

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
                            <Td style={{ margin: '0px', padding: '10px 0px', textAlign: "center" }}>8</Td>
                            <Td style={{ margin: '0px', padding: '0px', textAlign: "center" }}>5686</Td>
                            <Td style={{ margin: '0px', padding: '0px', textAlign: "start" }}>tedipuliya</Td>
                            <Td style={{ margin: '0px', padding: '0px', textAlign: "center" }}>devi prasad</Td>
                            <Td style={{ margin: '0px', padding: '0px', textAlign: "center" }}>	Bus</Td>
                            {/* <Td style={{ margin: '0px', padding: '0px', textAlign: "center" }}>2</Td>
                            <Td style={{ margin: '0px', padding: '0px', textAlign: "center" }}>66325632514htf</Td> */}

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
                            <Td style={{ margin: '0px', padding: '10px 0px', textAlign: "center" }}>9</Td>
                            <Td style={{ margin: '0px', padding: '0px', textAlign: "center" }}>1362</Td>
                            <Td style={{ margin: '0px', padding: '0px', textAlign: "start" }}>lucknow/khurram nagar</Td>
                            <Td style={{ margin: '0px', padding: '0px', textAlign: "center" }}>Raju Prasad</Td>
                            <Td style={{ margin: '0px', padding: '0px', textAlign: "center" }}>Rickshaw</Td>
                            {/* <Td style={{ margin: '0px', padding: '0px', textAlign: "center" }}>8</Td>
                            <Td style={{ margin: '0px', padding: '0px', textAlign: "center" }}>635214htf</Td> */}

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
                            <Td style={{ margin: '0px', padding: '10px 0px', textAlign: "center" }}>10</Td>
                            <Td style={{ margin: '0px', padding: '0px', textAlign: "center" }}>1362</Td>
                            <Td style={{ margin: '0px', padding: '0px', textAlign: "start" }}>lucknow/khurram nagar</Td>
                            <Td style={{ margin: '0px', padding: '0px', textAlign: "center" }}>Prasad</Td>
                            <Td style={{ margin: '0px', padding: '0px', textAlign: "center" }}>Van</Td>
                            {/* <Td style={{ margin: '0px', padding: '0px', textAlign: "center" }}>8</Td>
                            <Td style={{ margin: '0px', padding: '0px', textAlign: "center" }}>635214htf</Td> */}

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
                            <Td style={{ margin: '0px', padding: '10px 0px', textAlign: "center" }}>11</Td>
                            <Td style={{ margin: '0px', padding: '0px', textAlign: "center" }}>1332</Td>
                            <Td style={{ margin: '0px', padding: '0px', textAlign: "start" }}>tedipuliya</Td>
                            <Td style={{ margin: '0px', padding: '0px', textAlign: "center" }}>anil</Td>
                            <Td style={{ margin: '0px', padding: '0px', textAlign: "center" }}>	Bus</Td>
                            {/* <Td style={{ margin: '0px', padding: '0px', textAlign: "center" }}>2</Td>
                            <Td style={{ margin: '0px', padding: '0px', textAlign: "center" }}>66325632514htf</Td> */}

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

export default TransportRegistrationTable
