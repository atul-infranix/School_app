import React, { useState, useMemo } from 'react'
import { Field, Form, Formik } from 'formik'
import { HiOutlinePlus, HiMinus, HiOutlinePencil, HiOutlineXCircle, HiPencilAlt, HiTrash } from 'react-icons/hi'
import { Input, Button, FormItem, FormContainer, Table, Select } from 'components/ui'
import { margin } from '@mui/system';
import NavHeading from "utilities/NavHeading";
import { borderColors } from 'utilities/color';
const { Tr, Th, Td, THead, TBody } = Table

const colourOptions = [
    { value: 'ocean', label: 'Ocean', color: '#00B8D9' },
    { value: 'blue', label: 'Blue', color: '#0052CC' },
    { value: 'purple', label: 'Purple', color: '#5243AA' },
    { value: 'red', label: 'Red', color: '#FF5630' },
    { value: 'orange', label: 'Orange', color: '#FF8B00' },
    { value: 'yellow', label: 'Yellow', color: '#FFC400' },
    { value: 'green', label: 'Green', color: '#36B37E' },
    { value: 'forest', label: 'Forest', color: '#00875A' },
    { value: 'slate', label: 'Slate', color: '#253858' },
    { value: 'silver', label: 'Silver', color: '#666666' },
]

const Section_class = () => {
    const [sectiontest, setSectionTest] = useState(1)
    const options = [];

    const test = (e) => {
        setSectionTest(e.target.value)


    }



    const sectionItem = useMemo(() => {


        for (let i = 0; i < sectiontest; i++) {

            options.push(


                <Input type="text" autoComplete="off" name="hello" placeholder="" style={{ width: '2.75rem', margin: '2px' }
                } />

            );

        }
        return options

    }, [sectiontest]);

    const dataArr = [{
        class: "XII (PCM)",
        sections: "A1,A2,A3,A4,"
    }, {
        class: "XII (PCB)",
        sections: "B1,B2,B3,B4,"
    }, {
        class: "XII (PCMB)",
        sections: "C1,C2,C3,C4,"
    }, {
        class: "XII (Commerce)",
        sections: "D1,D2,D3,D4,"
    }, {
        class: "XII (PCM)",
        sections: "A1,A2,A3,A4,"
    }, {
        class: "XII (PCB)",
        sections: "B1,B2,B3,B4,"
    }, {
        class: "XII (PCMB)",
        sections: "C1,C2,C3,C4,"
    }, {
        class: "XII (Commerce)",
        sections: "D1,D2,D3,D4,"
    }, {
        class: "XII (PCM)",
        sections: "A1,A2,A3,A4,"
    }, {
        class: "XII (PCB)",
        sections: "B1,B2,B3,B4,"
    }, {
        class: "XII (PCMB)",
        sections: "C1,C2,C3,C4,"
    }, {
        class: "XII (Commerce)",
        sections: "D1,D2,D3,D4,"
    }]

    return (
        <>
            <NavHeading heading="ADD SECTIONS" />
            <div className='grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-10 xl:gap-10 lg:gap-8 gap-2  mb-0 '>
                <div className='relative col-span-2 lg:col-span-1 xl:col-span-3 lg:pr-3' >
                    <div className='absolute' style={{ height: "60vh", borderRight: "1px dashed " + borderColors.gray, right: "-15px", top: "-10px", zIndex: "20" }}></div>
                    <Formik>
                        <Form>
                            <FormContainer className=" grid grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-2  mb-0">
                                <FormItem
                                    className="  m-0  whitespace-nowrap col-span-2"
                                    style={{ height: "15px" }}
                                    asterisk
                                    label="Class"
                                >
                                    <Select options={colourOptions} />
                                </FormItem>
                                <FormItem
                                    className="  m-0 mt-3 whitespace-nowrap col-span-2"
                                    // layout={matches ? "vertical" : "horizontal"}
                                    asterisk
                                    label="Section Number"
                                    style={{ height: "15px" }}
                                >
                                    <Field type="text" autoComplete="off" name="name" placeholder="Enter Section" onChange={test} value={sectiontest} component={Input} />
                                </FormItem>
                            </FormContainer>
                            <FormContainer >
                                <FormItem
                                    className="  m-0 mt-5  w-full  "
                                    style={options.length >= 1 ? {} : { display: 'none', }}
                                    asterisk
                                    label="Enter Section"
                                    style={{ height: "15px" }}
                                >
                                    <div className=' flex flex-wrap pl-2 py-1 ' style={options.length >= 1 ? { maxHeight: '28vh', border: '1px dashed #c7c9cd', overflowY: 'auto', borderRadius: '8px' } : { display: 'none', }}>
                                        {
                                            sectionItem
                                        }
                                    </div>
                                </FormItem>
                                <div className='h-full pt-3  flex justify-end ' style={options.length >= 1 ? {} : { display: 'none', }}>
                                    <Button variant="solid" type="button" size={"sm"}>Add</Button>
                                </div>
                            </FormContainer>
                        </Form>
                    </Formik>
                </div>
                <div className='col-span-2 lg:col-span-2 xl:col-span-7 border' style={{ maxHeight: '57vh', overflowY: 'auto' }}>
                    <Table className="">
                        <THead >
                            <Tr >
                                <Th style={{ textAlign: "center", width: "10px" }}>#</Th>
                                <Th style={{ textAlign: "start", width: "140px" }} ><span></span>Class</Th>
                                <Th style={{ textAlign: "center" }}> Section</Th>
                                <Th style={{ textAlign: "center", width: "80px" }} > Action</Th>
                            </Tr>
                        </THead>
                        <TBody >
                            {
                                dataArr.map((item, index) => {
                                    return (
                                        <Tr key={index}>
                                            <Td style={{ margin: '0px', padding: '10px 0px', textAlign: "center" }}>{index + 1}</Td>
                                            <Td style={{ margin: '0px', padding: '0px', textAlign: "start" }}>{item.class}</Td>
                                            <Td className="" style={{ margin: '0px', padding: '0px', }}>
                                                <p className='' style={{ maxWidth: '130px', margin: '0px auto', textAlign: 'center' }}>
                                                    {item.sections}
                                                </p>
                                            </Td>
                                            <Td style={{ margin: '0px', padding: '0px', textAlign: "center" }}>
                                                <Button
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
                                                />
                                            </Td>
                                        </Tr>
                                    )
                                })
                            }
                        </TBody>
                    </Table>
                </div>
            </div >
        </>
    )
}

export default Section_class