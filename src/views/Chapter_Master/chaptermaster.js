import React from 'react'
import SubjectTable from './subjectTable'
import { Button, Select } from 'components/ui'

const Chaptermaster = () => {
    return (
        <div className='grid grid-cols-10'>
            <div className='col-span-10'>

                <div className="  flex justify-between items-center my-3">

                    <div>
                        <Select size="sm" placeholder="Select Class" ></Select>
                    </div>
                    <div>
                        <Button size="sm" variant="solid">Save</Button>
                    </div >
                </div >

                <div className='border ' style={{
                    overflowX: 'auto'
                }}>
                    <SubjectTable />
                </div>
            </div>


        </div >
    )
}
export default Chaptermaster
