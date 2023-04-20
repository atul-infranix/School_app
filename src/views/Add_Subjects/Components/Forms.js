import { ConfirmDialog } from 'components/shared';
import { Button, FormContainer, FormItem, Input, Menu, Tooltip } from 'components/ui'
import React, { useState } from 'react'
import { RiDeleteBin6Line } from 'react-icons/ri';
import { borderColors } from 'utilities/color';
import { confirmAlert, notificationError, notificationSuccess } from 'utilities/Notification_Alert';

const Add_Subjects_Form = () => {
    const [subject_arr, setsubject_arr] = useState([]);
    const [subject_name, setsubject_name] = useState("");
    const [subject_item, setsubject_item] = useState({})

    const onDialogClose = () => {
        setsubject_item({});
    }

    const addSubject = () => {
        if (subject_name == "") {
            notificationError('Please enter subject name!!');
        }
        else if (subject_arr.map((item) => { return item.subject }).includes(subject_name)) {
            notificationError('Subject already exists!!');
        }
        else {
            setsubject_arr([...subject_arr, { id: subject_arr.length, subject: subject_name }]);
            notificationSuccess('Subject added successfully!!');
        }
    }

    const deleteSubject = (subject_item) => {
        setsubject_arr(subject_arr.filter((item, index) => { return index != subject_arr.indexOf(subject_item) }));
        setsubject_item({});
        notificationSuccess('Successfully deleted subject!!');
    }

    return (
        <div>
            <div className='flex items-center gap-4'>
                <FormContainer>
                    <FormItem
                        label="Subject"
                    >
                        <Input size="sm" value={subject_name} onChange={(e) => {
                            setsubject_name(e.target.value);
                        }} />
                    </FormItem>
                </FormContainer>
                <Button variant="solid" size="sm" onClick={addSubject} >
                    Add
                </Button>
            </div>
            <div>
                {
                    subject_arr.length > 0 &&
                    <div className="rounded-md pt-0.5" style={{ maxWidth: 247, fontWeight: "bold", border: "solid " + borderColors.gray, borderWidth: "1px 1px 0px 1px" }}>
                        {
                            subject_arr.map((item, index) => {
                                return (
                                    <div className={"flex justify-between items-center " + (index == (subject_arr.length - 1) ? "rounded-md" : "")} style={{ padding: "5px 10px", borderBottom: "1px solid " + borderColors.gray }}>
                                        <p key={index}  >{item.subject}</p>
                                        <Tooltip title="Delete Subject">
                                            <RiDeleteBin6Line size={20} onClick={() => setsubject_item(item)} style={{ cursor: "pointer" }} />
                                        </Tooltip>
                                    </div>
                                )
                            })
                        }
                    </div>
                }
            </div>
            <ConfirmDialog
                isOpen={Object.keys(subject_item).length != 0}
                onClose={onDialogClose}
                onRequestClose={onDialogClose}
                type="success"
                title={'Change job status?'}
                onCancel={onDialogClose}
                onConfirm={() => deleteSubject(subject_item)}
                confirmButtonColor="blue-600" />
        </div>
    )
}

export default Add_Subjects_Form