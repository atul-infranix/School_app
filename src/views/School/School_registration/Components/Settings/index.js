import { FormItem, Input, Select } from 'components/ui'
import React, { useEffect } from 'react'
import useMediaQuery from '@mui/material/useMediaQuery';
import { BiTimeFive } from "react-icons/bi";
import { HiOutlinePlusCircle, HiOutlineXCircle } from 'react-icons/hi';
import { useState } from 'react';

const Settings = (props) => {
    const { touched, values, errors } = props;
    const weekDays = [
        { value: "Monday", value: "Monday" },
        { value: "Tuesday", label: "Tuesday" },
        { value: "Wednesday", label: "Wednesday" },
        { value: "Thursday", label: "Thursday" },
        { value: "Friday", label: "Friday" },
        { value: "Saturday", label: "Saturday" },
        { value: "Sunday", label: "Sunday" }
    ]
    const matches = useMediaQuery('(min-width:1220px)');

    let shift_object = { from: '', to: "", period: "", interval: "", break_after: "" };
    const [shift_settings, setshift_settings] = useState([shift_object])

    const updateContactList = () => {
        values.shift_settings = shift_settings;
        return;
    }

    const changeData = (key, data, data_item) => {
        // console.log(key + ',' + data + ',' + data_item);
        setshift_settings(shift_settings.map((item, index) => {
            if (index == shift_settings.indexOf(data_item)) {
                if (key == 'from') {
                    item.from = data
                }
                if (key == 'to') {
                    item.to = data
                }
                if (key == 'period') {
                    item.period = data
                }
                if (key == 'interval') {
                    item.interval = data
                }
                if (key == 'break_after') {
                    item.break_after = data
                }
                return item;
            }
            else {
                return item;
            }
        }));
        updateContactList();
    }

    const deleteData = (data_item) => {
        setshift_settings(shift_settings.filter((item, index) => {
            return index != shift_settings.indexOf(data_item);
        }).map((item, index) => {
            return item;
        }));
        updateContactList();
    }

    useEffect(() => {
        setshift_settings(values.shift_settings);
    }, []);
    return (
        <div>
            <div className='grid grid-cols-5 mt-5'>
                <div className={matches ? "col-span-1" : "col-span-5"} style={{ paddingRight: matches ? "20px" : "" }}>
                    <FormItem
                        label="Week Off"
                        style={{ fontSize: "13px", height: "5px" }}
                    >
                        <Select options={weekDays} size="sm" />
                    </FormItem>
                </div>
                <div className={matches ? "col-span-1" : "col-span-5"} style={{ paddingRight: matches ? "20px" : "" }}>
                    <FormItem
                        label="Week Off"
                        style={{ fontSize: "13px", height: "5px" }}
                    >
                        <Select options={weekDays} size="sm" />
                    </FormItem>
                </div>
            </div>
            {
                shift_settings.map((item, index) => {
                    return (
                        <div key={index} className="mb-5">
                            <fieldset className='relative' style={{ border: "2px dashed #c9c9c9", borderRadius: "10px", padding: "20px 15px 0px 15px", marginTop: "-10px" }}>
                                <legend style={{ display: "flex", justifyContent: 'center', alignItems: 'center', fontSize: "16px" }}>
                                    <BiTimeFive size={35} />&nbsp; <span>Shift Timings</span>
                                </legend>
                                {
                                    shift_settings.length > 1 &&
                                    <div className='absolute' style={{ zIndex: "1", top: '-30px', right: '-10px' }}>
                                        <HiOutlineXCircle style={{ width: '25px', height: "25px", cursor: 'pointer', backgroundColor: "#fff" }} onClick={() => {
                                            deleteData(item);
                                        }} />
                                    </div>
                                }
                                <div className='grid grid-cols-4'>
                                    <div className={matches ? 'col-span-1' : 'col-span-2'}>
                                        <FormItem
                                            label="Shift Time"
                                            style={{ fontSize: "13px", height: "5px" }}
                                        >
                                            <div style={{ display: "flex", alignItems: "center" }}>
                                                <Input placeholder="From" size="sm" type="time" value={item.from} onChange={(e) => {
                                                    changeData('from', e.target.value, item);
                                                }} />&nbsp;&nbsp;To&nbsp;&nbsp;
                                                <Input placeholder="To" size="sm" type="time" value={item.to} onChange={(e) => {
                                                    changeData('to', e.target.value, item);
                                                }} />
                                            </div>
                                        </FormItem>
                                    </div>
                                    <div className={matches ? 'col-span-1' : 'col-span-2'} style={{ paddingLeft: "10px" }}>
                                        <FormItem
                                            label="Period (min)"
                                            style={{ fontSize: "13px", height: "5px" }}
                                        >
                                            <Input type="text" size="sm" value={item.period} onChange={(e) => {
                                                changeData('period', e.target.value, item);
                                            }} />
                                        </FormItem>
                                    </div>
                                    <div className={matches ? 'col-span-1' : 'col-span-2'} style={{ paddingLeft: matches ? "10px" : "" }}>
                                        <FormItem
                                            label="Interval (min)"
                                            style={{ fontSize: "13px", height: "5px" }}
                                        >
                                            <Input type="text" size="sm" value={item.interval} onChange={(e) => {
                                                changeData('interval', e.target.value, item);
                                            }} />
                                        </FormItem>
                                    </div>
                                    <div className={matches ? 'col-span-1' : 'col-span-2'} style={{ paddingLeft: "10px" }}>
                                        <FormItem
                                            label="Break After"
                                            style={{ fontSize: "13px", height: "5px" }}
                                        >
                                            <Input type="text" size="sm" value={item.break_after} onChange={(e) => {
                                                changeData('break_after', e.target.value, item);
                                            }} />
                                        </FormItem>
                                    </div>
                                </div>
                            </fieldset>
                            {
                                (index == shift_settings.length - 1) &&
                                <div className='flex justify-end mt-1'>
                                    <div className='flex items-center' onClick={() => {
                                        setshift_settings([...shift_settings, shift_object])
                                    }}>
                                        <HiOutlinePlusCircle size={20} />&nbsp;<span className="hover:underline cursor-pointer">Add more shifts</span>
                                    </div>
                                </div>
                            }
                        </div>
                    )
                })
            }

        </div>
    )
}

export default Settings