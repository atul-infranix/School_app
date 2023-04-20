import { Input, Select, Radio, Button, Checkbox, FormItem, FormContainer } from 'components/ui'
import React, { useState } from 'react'

const FeeProfile = () => {

    const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEPT", "OCT", "NOV", "DEC"]

    const [month_arr, setmonth_arr] = useState([]);

    const changeMonth = (month) => {
        if (month_arr.includes(month)) {
            setmonth_arr(month_arr.filter((item, index) => { return index != month_arr.indexOf(month) }));
        }
        else {
            setmonth_arr([...month_arr, month]);
        }
    }

    return (
        <div>
            <div className='flex justify-between gap-5'>
                <div className='flex-auto'>
                    <FormContainer className='my-2 '>
                        <FormItem
                            style={{ margin: '0px' }}
                            asterisk
                            label="Class"
                        >
                            <Select size={"sm"} />
                        </FormItem>
                    </FormContainer>
                    <FormContainer className='my-2 '>
                        <FormItem
                            style={{ margin: '0px' }}
                            asterisk
                            label="Fee Head"
                        >
                            <Select size={"sm"} />
                        </FormItem>
                    </FormContainer>
                    <FormContainer className='my-2'>
                        <FormItem
                            style={{ margin: '0px' }}
                            asterisk
                            label="Amount"
                        >
                            <Input type="text" size="sm" autoComplete="off" name="name" placeholder="Enter Exemption" />

                        </FormItem>
                    </FormContainer>
                    <FormContainer className=' my-2 '>
                        <FormItem
                            className=" m-0 whitespace-nowrap "
                            style={{ margin: '0px' }}
                            asterisk
                            label="Student"


                        >
                            <Radio.Group className=" md:py-0 flex-wrap xl:flex-nowrap  " style={{ height: '100%', width: '100%' }}>

                                <Radio value={'New'} className="py-1">New</Radio>
                                <Radio value={'Old'} className="py-1">Old</Radio>
                                <Radio value={'None'} className="py-1">Both</Radio>

                            </Radio.Group>

                        </FormItem>
                    </FormContainer>

                </div>
                <div>
                    <div className=' flex  items-center pl-4  mt-2 ' >
                        <Checkbox value="Month" className="m-0 p-0 " style={{ width: '17px', height: '17px', }} checked={month_arr.length == months.length} onClick={() => {
                            if (month_arr.length == months.length) {
                                setmonth_arr([]);
                            } else {
                                setmonth_arr(months);
                            }
                        }} ></Checkbox>
                        <p className='m-0 pl-2' style={{ fontWeight: '600', fontSize: '15px' }}>Month</p>
                    </div>
                    <div style={{ width: "150px" }} className="gap-y-0 border px-2">
                        <div className="pt-1 px-2" style={{ fontSize: '15px' }} >
                            {
                                months.map((item) => {
                                    return (
                                        <Checkbox className="items-center" value={item} style={{ width: '17px', height: '17px', }} onChange={() => changeMonth(item)} checked={month_arr.includes(item)}>{item}</Checkbox>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full flex justify-end py-3'>
                <Button variant="solid" size={"sm"}>Save</Button>
            </div>
        </div>
    )
}

export default FeeProfile