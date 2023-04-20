import { Select, Table, Button } from 'components/ui'
import { HiPencilAlt, HiTrash } from 'react-icons/hi'
import React from 'react'
const { Tr, Th, Td, THead, TBody } = Table
const FeeProfileTable = () => {
    return (
        <div className=''>
            <div className=' mt-5 border' style={{ maxHeight: '255px', overflowY: 'auto' }}>
                <Table className="">
                    <THead >
                        <Tr >
                            <Th style={{ textAlign: "center" }}>#</Th>
                            <Th style={{ textAlign: "center" }} >Installments</Th>
                            <Th style={{ textAlign: "center" }}>Months</Th>
                        </Tr>
                    </THead>
                    <TBody >
                        <Tr>
                            <Td style={{ margin: '0px', padding: '10px 0px', textAlign: "center" }}>Tuition</Td>
                            <Td style={{ margin: '0px', padding: '0px', textAlign: "center" }}>2000</Td>
                            <Td style={{ margin: '0px', padding: '0px', textAlign: "center" }}>Apr-Mar</Td>
                        </Tr>

                        <Tr>
                            <Td style={{ margin: '0px', padding: '10px 0px', textAlign: "center" }}>Computer</Td>
                            <Td style={{ margin: '0px', padding: '0px', textAlign: "center" }}>5000</Td>
                            <Td style={{ margin: '0px', padding: '0px', textAlign: "center" }}>Jan-Mar</Td>
                        </Tr>
                        <Tr>
                            <Td style={{ margin: '0px', padding: '10px 0px', textAlign: "center" }}>Lab</Td>
                            <Td style={{ margin: '0px', padding: '0px', textAlign: "center" }}>3000</Td>
                            <Td style={{ margin: '0px', padding: '0px', textAlign: "center" }}>may-Jun</Td>
                        </Tr>

                        <Tr>
                            <Td style={{ margin: '0px', padding: '10px 0px', textAlign: "center" }}>Admission</Td>
                            <Td style={{ margin: '0px', padding: '0px', textAlign: "center" }}>30000</Td>
                            <Td style={{ margin: '0px', padding: '0px', textAlign: "center" }}>June</Td>
                        </Tr>
                        <Tr>
                            <Td style={{ margin: '0px', padding: '10px 0px', textAlign: "center" }}>Exam</Td>
                            <Td style={{ margin: '0px', padding: '0px', textAlign: "center" }}>6000</Td>
                            <Td style={{ margin: '0px', padding: '0px', textAlign: "center" }}>may-Jun</Td>
                        </Tr>


                    </TBody>
                </Table>
            </div>
        </div>
    )
}
export default FeeProfileTable