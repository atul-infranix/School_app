import { Table } from 'components/ui'
import React from 'react'
const { Tr, Th, Td, THead, TBody } = Table

const VehicalDetailModal = () => {
    return (
        <div>
            <h5 className="mb-4">Vehical Details</h5>
            <div className='flex items-center'>
                <div className="flex justify-between" style={{ width: "105px" }}>
                    <b>Vehical Num.</b><b>:</b>
                </div>
                <div className="flex justify-start pl-3" >
                    <span>UP32LU1234</span>
                </div>
            </div>
            <div className='flex items-center'>
                <div className="flex justify-between" style={{ width: "105px" }}>
                    <b>Type</b><b>:</b>
                </div>
                <div className="flex justify-start pl-3" >
                    <span>Bus</span>
                </div>
            </div>
            <div className='flex items-center'>
                <div className="flex justify-between" style={{ width: "105px" }}>
                    <b>Location</b><b>:</b>
                </div>
                <div className="flex justify-start pl-3" >
                    <span>Indira Nagar</span>
                </div>
            </div>
            <div className='flex items-center'>
                <div className="flex justify-between" style={{ width: "105px" }}>
                    <b>Driver</b><b>:</b>
                </div>
                <div className="flex justify-start pl-3" >
                    <span>Shah Rukh Khan</span>
                </div>
            </div>
            <div className='flex items-center'>
                <div className="flex justify-between" style={{ width: "105px" }}>
                    <b>Conductor</b><b>:</b>
                </div>
                <div className="flex justify-start pl-3" >
                    <span>Salman Khan</span>
                </div>
            </div>
            <div className='flex items-center'>
                <div className="flex justify-between" style={{ width: "105px" }}>
                    <b>GPS Id</b><b>:</b>
                </div>
                <div className="flex justify-start pl-3" >
                    <span>EY674545</span>
                </div>
            </div>
        </div>
    )
}

export default VehicalDetailModal