import React, { useState } from 'react'
import { Button, Dialog, FormContainer, FormItem, Select, Input } from 'components/ui'
import { Field, Formik, Form } from 'formik'
import useMediaQuery from '@mui/material/useMediaQuery';
import DateTimepicker from 'components/ui/DatePicker/DateTimepicker';
import moment from 'moment';
const EditEvent = (props) => {
    const { formProps } = props;
    const { visibility, set_visibility, textEditorProps, scheduler_Edit_Data, setscheduler_Edit_Data, schedularData, setschedularData, new_Event, setnew_Event } = formProps;
    const [dialogIsOpen, setIsOpen] = useState(false)
    const matches = useMediaQuery('(max-width:1023px)');
    const [title, settitle] = useState(scheduler_Edit_Data.title);
    const [startDate, setstartDate] = useState(new Date(scheduler_Edit_Data.startDate));
    const [endDate, setendDate] = useState(new Date(scheduler_Edit_Data.endDate))
    const openDialog = () => {
        setIsOpen(true)
    }

    const onDialogClose = e => {
        console.log('onDialogClose', e);
        setnew_Event(false);
        set_visibility(false)
    }

    const onDialogOk = e => {
        if (startDate >= endDate) {
            alert('Incorrect Date&Time')
        } else {
            let data = {
                id: scheduler_Edit_Data.id,
                title: title,
                endDate: moment(endDate).add(330, 'm').toDate().toISOString().slice(0, 16),
                startDate: moment(startDate).add(330, 'm').toDate().toISOString().slice(0, 16)
            }
            console.log(data);
            if (new_Event) {
                setschedularData([...schedularData, data]);
                setnew_Event(false);
            } else {
                setschedularData(schedularData.map((item, index) => {
                    if (index == schedularData.indexOf(scheduler_Edit_Data)) {
                        return data
                    } else {
                        return item;
                    }
                }));
            }
            set_visibility(false)
        }
    }


    return (
        <div style={{ zIndex: "20" }}>
            <Dialog
                isOpen={visibility}
                onClose={onDialogClose}
                onRequestClose={onDialogClose}
            >
                <h5 className="mb-4">Edit Event </h5>
                <div>
                    <FormContainer className="grid mb-0">
                        <FormItem
                            className="mx-1 m-0 mt-3 whitespace-nowrap  "
                            // layout={matches ? "vertical" : "horizontal"}
                            // style={!matches ? { alignItems: 'normal' } : {}}
                            asterisk
                            label="Title"
                        >
                            <Input value={title} onChange={(e) => {
                                settitle(e.target.value);
                            }} />
                        </FormItem>
                    </FormContainer>
                    <FormContainer className="grid grid-cols-2" >
                        <FormItem
                            className="mx-1 col-span-1 m-0 mt-3 whitespace-nowrap "
                            asterisk
                            label="Start Date"
                        >
                            <DateTimepicker value={startDate} onChange={(e) => {
                                setstartDate(e);
                                // console.log(e.toISOString().slice(0, 16).toLocaleString());
                            }} />
                        </FormItem>
                        <FormItem
                            className="mx-1 col-span-1 m-0 mt-3 whitespace-nowrap "
                            asterisk
                            label="End Date"
                        >
                            <DateTimepicker value={endDate} onChange={(e) => {
                                setendDate(e);
                                // console.log(moment(e).add(330, 'm').toDate().toISOString().slice(0, 16));
                            }} />
                        </FormItem>
                        <FormItem
                            className="mx-1  m-0 mt-3 whitespace-nowrap col-span-2"
                            // layout={matches ? "vertical" : "horizontal"}
                            // style={!matches ? { alignItems: 'normal' } : {}}
                            asterisk
                            label="Description"


                        >
                            <Input placeholder="Enter Description" textArea />
                        </FormItem>
                    </FormContainer>



                </div>

                <div className="text-right mt-6">
                    <Button className="ltr:mr-2 rtl:ml-2" variant="plain" onClick={onDialogClose}>Cancel</Button>
                    <Button variant="solid" onClick={onDialogOk}>Save</Button>
                </div>
            </Dialog>
        </div>
    )
}

export default EditEvent