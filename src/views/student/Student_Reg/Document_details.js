import React, { useState } from 'react'
import { Form, Formik } from 'formik'
import { HiOutlinePlus, HiMinus } from 'react-icons/hi'
import { Button, FormItem, FormContainer, Select, Avatar, Upload, toast, Notification, } from 'components/ui'
import { formLabelStyle } from './style'
const documentOptions = [
    { value: '1', label: 'Adhaar Card', color: '#00B8D9' },
    { value: '2', label: 'Pan Card', color: '#0052CC' },
    { value: '3', label: 'Transfer certificate', color: '#5243AA' },
    { value: '4', label: 'Character Certificate', color: '#FF5630' },
    { value: '5', label: 'Cast Certificate', color: '#FF8B00' },
    { value: '6', label: 'Birth Certificate', color: '#FFC400' },

]

const Document_details = () => {


    const [avatarImg, setAvatarImg] = useState(null)
    const [docu_obj, setdocu_obj] = useState({ type: 0, src: '' })
    const [document_arr, setdocument_arr] = useState([]);


    const onFileUpload = file => {
        // console.log(file[0]);
        // console.log(URL.createObjectURL(file[0]));
        // setAvatarImg(URL.createObjectURL(file[0]));
        if (docu_obj.type > 0) {
            const type = docu_obj.type;
            setdocu_obj({ type: type, src: URL.createObjectURL(file[0]) })
        }
        else {
            toast.push(
                <Notification title={"Error"} type="danger" duration={2500}>
                    Please select document type
                </Notification>
                , {
                    placement: 'top-center'
                }
            )
        }

        // console.log(document_arr.length>0 && document_arr.filter((item,index) => { return item.type == 1 }));
        // setdocument_arr(document_arr.map((item, index) => {
        //     if (index == (document_arr.length - 1)) {
        //         item.src = URL.createObjectURL(file[0]);
        //         return item;
        //     }
        //     else{
        //         return item;
        //     }
        // }))
    }

    const beforeUpload = files => {
        let valid = true

        const allowedFileType = ['image/jpeg', 'image/png']

        for (let file of files) {
            if (!allowedFileType.includes(file.type)) {
                valid = 'Please upload a .jpeg or .png file!'
            }
        }

        return valid
    }


    function countInArray(array, what) {
        var count = 0;
        for (var i = 0; i < array.length; i++) {
            if (array[i] == what) {
                count++;
            }
        }
        return count;
    }

    const deleteDocument = (doc_item) => {
        setdocument_arr(document_arr.filter((item, index) => {
            if (document_arr.indexOf(doc_item) != index) {
                return item
            }
            else {
                return;
            }
        }))
    }

    return (
        <div className=''>
            <FormContainer className=" grid grid-cols-5 lg:grid-cols-5 xl:grid-cols-5 gap-10  mb-0">
                <FormItem
                    className="mx-1  m-0 mt-1 whitespace-nowrap col-span-2"
                    label="Document Type"
                    style={formLabelStyle}
                    errorFontSize="13px"
                >
                    <Select placeholder="Choose  document" options={documentOptions} onChange={(e) => {
                        console.log(document_arr);
                        if ((e.value == 1 && countInArray(document_arr.map(item => { return item.type }), 1) == 2) || (e.value == 2 && countInArray(document_arr.map(item => { return item.type }), 2) == 2) ) {
                            toast.push(
                                <Notification title={"Error"} type="danger" duration={2500}>
                                    Both documents of adhaar are already selected
                                </Notification>
                                , {
                                    placement: 'top-center'
                                }
                            )
                        }
                        else if (e.value != 1 && e.value != 2 && document_arr.map(item => { return item.type }).includes(e.value)) {
                            toast.push(
                                <Notification title={"Error"} type="danger" duration={2500}>
                                    Document already selected
                                </Notification>
                                , {
                                    placement: 'top-center'
                                }
                            )
                        }
                        else {
                            // document_arr.push(e.value);
                            // setdocument_arr([...document_arr, { type: e.value, src: "" }])
                            setdocu_obj({ type: e.value, src: "" });
                        }
                    }}></Select>
                </FormItem>
                <FormItem
                    className="mx-1  m-0 mt-3 whitespace-nowrap col-span-2"
                    label="Upload"
                    style={formLabelStyle}
                    errorFontSize="13px"
                >
                    <Upload
                        className="cursor-pointer w-full"
                        onChange={onFileUpload}
                        showList={false}
                        uploadLimit={1}
                        beforeUpload={beforeUpload}
                    >
                        <Button variant="twoTone" color="blue-600" type="button" block>Choose File</Button>
                    </Upload>
                </FormItem>

                <div className='h-full  flex flex-col-reverse col-span-1'>
                    <Button
                        className="mb-1 bg-grey-300"
                        shape="circle"
                        size="sm"
                        type="button"
                        onClick={() => {
                            // console.log(document_arr);
                            if (document_arr.includes(docu_obj)) {
                                toast.push(
                                    <Notification title={"Error"} type="danger" duration={2500}>
                                        Document already added
                                    </Notification>
                                    , {
                                        placement: 'top-center'
                                    }
                                )
                            }
                            else {
                                // console.log(documentOptions.filter(list=>{return (list.value == item.type)})[0].label);
                                if (docu_obj.src != '') {
                                    setdocument_arr([...document_arr, docu_obj]);
                                    setdocu_obj({ type: docu_obj.type, src: '' });
                                }
                                else {
                                    toast.push(
                                        <Notification title={"Error"} type="danger" duration={2500}>
                                            Please select document image
                                        </Notification>
                                        , {
                                            placement: 'top-center'
                                        }
                                    )
                                }
                            }
                        }}
                        icon={<HiOutlinePlus />}
                    />

                </div>
            </FormContainer>
            <FormContainer className="mt-5">
                <div className='flex ml-1'>
                    {
                        document_arr.length > 0 &&
                        document_arr.filter((item) => { return item.type == 1 }).map((item, index) => {
                            return (
                                <div className='flex ml-5' key={index}>
                                    <FormItem
                                        className="  m-0 mt-3 whitespace-nowrap  "
                                        layout={"vertical"}
                                        label={documentOptions.filter(list => { return (list.value == item.type) })[0].label}

                                    >
                                        <div className=' w-fit relative '>
                                            <Button
                                                className=" bg-red-300 absolute"
                                                style={{ width: '25px', height: '25px', top: '-10px', zIndex: '1', right: '-10px' }}
                                                shape="circle"
                                                type="button"
                                                // size="sm"
                                                onClick={() => { deleteDocument(item) }}
                                                icon={<HiMinus />}
                                            />
                                            <Avatar size={130} src={item.src} icon={<HiOutlinePlus />} />

                                        </div>
                                    </FormItem>
                                </div>
                            )
                        })
                    }
                </div>
                <div className='flex ml-1'>
                    {
                        document_arr.length > 0 &&
                        document_arr.filter((item) => { return item.type == 2 }).map((item, index) => {
                            return (

                                <div className='flex ml-5' key={index}>
                                    <FormItem
                                        className="  m-0 mt-3 whitespace-nowrap  "
                                        layout={"vertical"}
                                        label={documentOptions.filter(list => { return (list.value == item.type) })[0].label}

                                    >
                                        <div className=' w-fit relative '>
                                            <Button
                                                className=" bg-red-300 absolute"
                                                style={{ width: '25px', height: '25px', top: '-10px', zIndex: '1', right: '-10px' }}
                                                shape="circle"
                                                type="button"
                                                // size="sm"
                                                onClick={() => { deleteDocument(item) }}
                                                icon={<HiMinus />}
                                            />
                                            <Avatar size={130} src={item.src} icon={<HiOutlinePlus />} />

                                        </div>
                                    </FormItem>
                                </div>

                            )
                        })
                    }
                </div>
                {
                    document_arr.length > 0 &&
                    document_arr.filter((item) => { return (item.type != 2 && item.type != 1) }).map((item, index) => {
                        return (
                            <div className='flex' key={index}>
                                <div className='flex'>
                                    <p className='font-semibold' style={{ fontSize: '20px', margin: '9px 12px' }}></p>
                                    <FormItem
                                        className="  m-0 mt-3 whitespace-nowrap  "
                                        layout={"vertical"}
                                        label={documentOptions.filter(list => { return (list.value == item.type) })[0].label}
                                    >
                                        <div className=' w-fit relative '>
                                            <Button
                                                className=" bg-red-300 absolute"
                                                style={{ width: '25px', height: '25px', top: '-10px', zIndex: '1', right: '-10px' }}
                                                shape="circle"
                                                type="button"
                                                // size="sm"
                                                onClick={() => { deleteDocument(item) }}
                                                icon={<HiMinus />}
                                            />
                                            <Avatar size={130} src={item.src} icon={<HiOutlinePlus />} />
                                        </div>
                                    </FormItem>
                                </div>
                            </div>
                        )
                    })
                }

            </FormContainer>
        </div>

    )
}
export default Document_details;