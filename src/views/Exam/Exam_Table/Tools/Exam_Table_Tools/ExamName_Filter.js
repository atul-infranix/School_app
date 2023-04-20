import { Input, Select } from 'components/ui'
import React from 'react'
import { HiOutlinePlus, HiOutlineSearch } from 'react-icons/hi'
import PopUpForm from '../PopUpForm'

const ExamName_Filter = () => {
    return (
        <div className="flex justify-between my-3">
            <div className="flex items-center">
                <Input placeholder="Exam Name" size="sm" style={{ width: "150px" }} />
                &nbsp;&nbsp;&nbsp;&nbsp;
                <Select placeholder="Select Class" size="sm" />
                &nbsp;&nbsp;&nbsp;&nbsp;
                <div className="rounded-md" style={{ padding: "5px", border: "1px solid #D1D5DB" }} >
                    <HiOutlineSearch size={25} />
                </div>
            </div>
            <PopUpForm />
        </div>
    )
}

export default ExamName_Filter