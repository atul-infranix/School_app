import { Button, Dialog, Notification, toast } from 'components/ui';
import React, { useState } from 'react'

export const notificationSuccess = (message, placement) => {
    toast.push(
        <Notification title={'Success'} type='success' duration={2500}>
            {message}
        </Notification>
        , {
            placement: placement ? placement : 'top-center'
        }
    )
}

export const notificationError = (message, placement) => {
    toast.push(
        <Notification title={'Error'} type='danger' duration={2500}>
            {message}
        </Notification>
        , {
            placement: placement ? placement : 'top-center'
        }
    )
}

export const confirmAlert = (dialogIsOpen, setIsOpen, message, func) => {
    // const [dialogIsOpen, setIsOpen] = useState(true);
    // let dialogIsOpen = true;

    const onDialogClose = (e) => {
        console.log('onDialogClose', e)
        setIsOpen(false)
    }

    const onDialogOk = (e) => {
        console.log('onDialogOk', e)
        setIsOpen(false);
        func();
    }
    toast.push(
        <Dialog
            isOpen={dialogIsOpen}
            onClose={onDialogClose}
            onRequestClose={onDialogClose}
        >
            <h5 className="mb-4">Alert</h5>
            <p>
                {dialogIsOpen?'true':'false'}
            </p>
            <div className="text-right mt-6">
                <Button
                    className="ltr:mr-2 rtl:ml-2"
                    variant="plain"
                    onClick={onDialogClose}
                >
                    Cancel
                </Button>
                <Button variant="solid" onClick={onDialogOk}>
                    Okay
                </Button>
            </div>
        </Dialog>
        , {
            placement: 'top-center'
        }
    )
}

