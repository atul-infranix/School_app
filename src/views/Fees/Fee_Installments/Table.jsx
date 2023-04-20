
import React from 'react'
import { Table } from 'components/ui'

const { Tr, Th, Td, THead, TBody } = Table

const Simple = () => {
    return (

        <>


        <div >
            <Table >
                <THead style={{height:'10px'}}>
                    <Tr >
                        <Th style={{fontSize:'14px',fontWeight:600,padding: '0.6rem 1.5rem'}}>#</Th>
                        <Th style={{fontSize:'14px',fontWeight:600,padding: '0.6rem 1.5rem'}}>Installments</Th>
                        <Th style={{fontSize:'14px',fontWeight:600,padding: '0.6rem 1.5rem'}}>Months</Th>
                    </Tr>
                </THead>
                <TBody >
                    <Tr >
                        <Td style={{padding: '0.6rem 1.5rem',color: '#696969'}}>1.</Td>
                        <Td style={{padding: '0.6rem 1.5rem',color: '#696969'}}>I</Td>
                        <Td style={{padding: '0.6rem 1.5rem',color: '#696969'}}>January,Febuary</Td>
                    </Tr>
                    <Tr>
                        <Td style={{padding: '0.6rem 1.5rem',color: '#696969'}}>2.</Td>
                        <Td style={{padding: '0.6rem 1.5rem',color: '#696969'}}>II</Td>
                        <Td style={{padding: '0.6rem 1.5rem',color: '#696969'}}>March,April,May</Td>
                    </Tr>
                    <Tr>
                        <Td style={{padding: '0.6rem 1.5rem',color: '#696969'}}>3.</Td>
                        <Td style={{padding: '0.6rem 1.5rem',color: '#696969'}}>III</Td>
                        <Td style={{padding: '0.6rem 1.5rem',color: '#696969'}}>July,August</Td>
                    </Tr>
                </TBody>
            </Table>
            </div>

        </>
    )
}

export default Simple

