import { Select, Table, Button } from 'components/ui'
import { HiPencilAlt, HiTrash } from 'react-icons/hi'
import React from 'react'
const { Tr, Th, Td, THead, TBody } = Table
const FeeProfileTable = () => {
    return (
        <div className=''>
            <div className='flex flex-col  '>

                <div className='xl:w-3/12 w-6/12 mt-2'>
                    <Select placeholder="Class" size={"sm"} />
                </div>
            </div>
            <div className=' mt-2 border' style={{ maxHeight: '255px', overflowY: 'auto' }}>
                <Table className="">
                    <THead >
                        <Tr >
                            <Th style={{ textAlign: "center" }}>Head</Th>
                            <Th style={{ textAlign: "center" }} >Amount</Th>
                            <Th style={{ textAlign: "center" }}>Months</Th>
                            <Th style={{ textAlign: "center" }} > S. type</Th>
                            <Th style={{ textAlign: "center" }} > Action</Th>
                        </Tr>
                    </THead>
                    <TBody >
                        <Tr>
                            <Td style={{ margin: '0px', padding: '10px 0px', textAlign: "center" }}>Tuition</Td>
                            <Td style={{ margin: '0px', padding: '0px', textAlign: "center" }}>2000</Td>
                            <Td style={{ margin: '0px', padding: '0px', textAlign: "center" }}>Apr-Mar</Td>
                            <Td style={{ margin: '0px', padding: '0px', textAlign: "center" }}>Both</Td>

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
                            <Td style={{ margin: '0px', padding: '10px 0px', textAlign: "center" }}>Computer</Td>
                            <Td style={{ margin: '0px', padding: '0px', textAlign: "center" }}>5000</Td>
                            <Td style={{ margin: '0px', padding: '0px', textAlign: "center" }}>Jan-Mar</Td>
                            <Td style={{ margin: '0px', padding: '0px', textAlign: "center" }}>New</Td>

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
                            <Td style={{ margin: '0px', padding: '10px 0px', textAlign: "center" }}>Lab</Td>
                            <Td style={{ margin: '0px', padding: '0px', textAlign: "center" }}>3000</Td>
                            <Td style={{ margin: '0px', padding: '0px', textAlign: "center" }}>may-Jun</Td>
                            <Td style={{ margin: '0px', padding: '0px', textAlign: "center" }}>Both</Td>

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
                            <Td style={{ margin: '0px', padding: '10px 0px', textAlign: "center" }}>Admission</Td>
                            <Td style={{ margin: '0px', padding: '0px', textAlign: "center" }}>30000</Td>
                            <Td style={{ margin: '0px', padding: '0px', textAlign: "center" }}>June</Td>
                            <Td style={{ margin: '0px', padding: '0px', textAlign: "center" }}>New</Td>

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
                            <Td style={{ margin: '0px', padding: '10px 0px', textAlign: "center" }}>Exam</Td>
                            <Td style={{ margin: '0px', padding: '0px', textAlign: "center" }}>6000</Td>
                            <Td style={{ margin: '0px', padding: '0px', textAlign: "center" }}>may-Jun</Td>
                            <Td style={{ margin: '0px', padding: '0px', textAlign: "center" }}>Both</Td>

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
export default FeeProfileTable