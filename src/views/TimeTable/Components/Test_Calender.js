import * as React from 'react';
import Paper from '@mui/material/Paper';
import { EditingState, ViewState } from '@devexpress/dx-react-scheduler';
import {
    Scheduler,
    DayView,
    Appointments,
    DragDropProvider,
    WeekView,
    AppointmentTooltip,
    AllDayPanel,
    AppointmentForm,
    EditRecurrenceMenu,
    ConfirmationDialog,
    DateNavigator,
    Toolbar,
    TodayButton,
} from '@devexpress/dx-react-scheduler-material-ui';
import { FormItem, Input } from 'components/ui';
import { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import EditEvent from './Modals/EditEvent';
import { HiOutlinePlus } from "react-icons/hi";
import moment from 'moment';



const schedulerData_Array = [
    {
        id: 0,
        title: 'Website Re-Design Plan',
        startDate: moment(new Date(2023, 2, 1, 8, 35)).add(330, 'm').toISOString().slice(0, 16),
        endDate: moment(new Date(2023, 2, 1, 11, 30)).add(330, 'm').toISOString().slice(0, 16),
    }, {
        id: 1,
        title: 'Book Flights',
        startDate: moment(new Date(2023, 2, 1, 12, 11)).add(330, 'm').toISOString().slice(0, 16),
        endDate: moment(new Date(2023, 2, 1, 13, 0)).add(330, 'm').toISOString().slice(0, 16),
    },
    {
        id: 2,
        startDate: '2023-02-15T09:45',
        endDate: '2023-02-15T11:00',
        title: 'Meeting'
    },
    {
        id: 3,
        startDate: '2023-02-16T08:00',
        endDate: '2023-02-16T10:30',
        title: 'Go to a gym'
    },
    {
        id: 4,
        startDate: '2023-02-08T09:00',
        endDate: '2023-02-08T11:30',
        title: 'Go to a gym'
    },
];

const Test_Calender = () => {


    const [schedularData, setschedularData] = React.useState(schedulerData_Array);
    const [form_visibility, setform_visibility] = useState(false);
    const [scheduler_Edit_Data, setscheduler_Edit_Data] = useState({});
    const [currentDate, setcurrentDate] = useState('2023-02-15');
    const [new_Event, setnew_Event] = useState(false);
    const commitChanges = ({ added, changed, deleted }) => {
        // console.log('');
        if (added) {

        }
        if (changed) {
            // console.log(form_visibility);
            setschedularData(schedularData.map(item => (
                changed[item.id] ? { ...item, ...changed[item.id] } : item
            )));
        }
        if (deleted != undefined) {
            setschedularData(schedularData.filter((item) => {
                return item.id != deleted
            }))
            console.log(deleted);
        }
    }

    const textEditorProps = field => ({
        onChange: ({ target: change }) => {
            // console.log(change.value);
            let data = scheduler_Edit_Data;
            setscheduler_Edit_Data({
                id: data.id,
                title: change.value,
                startDate: data.startDate,
                endDate: data.endDate,
            })
        },
        size: "sm"
    });

    const EditFormProps = {
        visibility: form_visibility,
        set_visibility: setform_visibility,
        textEditorProps: textEditorProps,
        scheduler_Edit_Data: scheduler_Edit_Data,
        setscheduler_Edit_Data: setscheduler_Edit_Data,
        schedularData: schedularData,
        setschedularData: setschedularData,
        new_Event: new_Event,
        setnew_Event: setnew_Event
    }

    const EditForm = (props) => {
        const { target, onHide, visible } = props;
        return (
            <AppointmentForm.Overlay
                visible={visible}
                target={target}
                fullSize
                onHide={onHide}
                style={{ marginBottom: "100px", overflow: "hidden", width: "0px" }}
            >
                <EditEvent formProps={EditFormProps} />

            </AppointmentForm.Overlay>
        )
    }

    const onEditingAppointmentChange = (editingAppointment) => {
        // console.log(editingAppointment);
        if (editingAppointment) {
            // console.log(form_visibility);
            // setform_visibility(true)
            setscheduler_Edit_Data(editingAppointment)
        } else {
            setscheduler_Edit_Data({});
        }
    }

    const onAddedAppointmentChange = (addedAppointment) => {
        // console.log(addedAppointment);
        if (addedAppointment) {
            // setform_visibility(true)
            setnew_Event(true);
            setscheduler_Edit_Data(addedAppointment)
        } else {
            setscheduler_Edit_Data({});
        }
    }

    const Appointment = ({
        children, style, ...restProps
    }) => (
        <Appointments.Appointment
            {...restProps}
            style={{
                ...style,
                backgroundColor: '#007fff',
                borderRadius: '8px',
            }}
        >
            {children}
        </Appointments.Appointment>
    );

    const currentDateChange = (date) => {
        setcurrentDate(date);
    }

    return (
        <div style={{ position: "relative" }}>
            <Paper>
                <Scheduler
                    data={schedularData}
                    height={600}
                >
                    <ViewState
                        currentDate={currentDate}
                        onCurrentDateChange={currentDateChange}
                    />
                    <EditingState
                        onCommitChanges={commitChanges}
                        onEditingAppointmentChange={onEditingAppointmentChange}
                        onAddedAppointmentChange={onAddedAppointmentChange}
                    />
                    <WeekView
                        startDayHour={7}
                        endDayHour={14}
                    />
                    <EditRecurrenceMenu />
                    <ConfirmationDialog />
                    <Toolbar />
                    <DateNavigator />
                    <TodayButton />
                    <Appointments />
                    <AppointmentTooltip
                        showOpenButton
                        showCloseButton
                        showDeleteButton />
                    <AppointmentForm
                        overlayComponent={EditForm}
                        visible={form_visibility}
                        onVisibilityChange={() => { setform_visibility(!form_visibility) }}
                    />
                    <AllDayPanel />
                    <DragDropProvider />
                </Scheduler>
            </Paper>
            <div
                style={{ position: "absolute", cursor: "pointer", bottom: "11px", right: "30px", height: "50px", width: "50px", borderRadius: "50%", backgroundColor: "#663399", padding: "0px 1px 1px 0px", display: "flex", justifyContent: "center", alignItems: "center" }}
                onClick={() => {
                    setform_visibility(true);
                    onEditingAppointmentChange(undefined);
                    onAddedAppointmentChange({
                        id: schedularData.length,
                        startDate: new Date().toISOString(),
                        endDate: new Date().toISOString(),
                        title: 'No Title'
                    })
                }}
            >
                <HiOutlinePlus size={35} color="#fff" />
            </div>
        </div>
    )
};

export default Test_Calender;