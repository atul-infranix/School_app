
import React, { useState } from 'react'
import { Avatar, Button, Dialog } from 'components/ui'
import mapImg from '../../../assets/map.png'
import Map_Body from './Map'

const Map_Modal = (props) => {
    const { values } = props;

    const [dialogIsOpen, setIsOpen] = useState(false)

    const openDialog = () => {
        setIsOpen(true)
    }

    const onDialogClose = (e) => {
        console.log('onDialogClose', e)
        setIsOpen(false)
    }

    const onDialogOk = (e) => {
        console.log('onDialogOk', e)
        setIsOpen(false)
    }

    return (
        <div>
            {/* <Button type='button' variant="solid" onClick={() => {openDialog()}}>
                Open Dialog
            </Button>
           */}
            <Avatar className="cursor-pointer" size={30} src={mapImg} onClick={() => { openDialog() }}></Avatar>

            <Dialog
                isOpen={dialogIsOpen}
                onClose={onDialogClose}
                onRequestClose={onDialogClose}
                width={1100}
            >
                <div className="grid grid-cols-2 ">


                    <div className='col-start-1 col-span-8 '>
                        <h5 className="mb-4">Google Map</h5>

                        {/* <Map_1/> */}
                        <Map_Body values={values} />

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
                    </div>
                </div>
            </Dialog>

        </div>
    )
}

export default Map_Modal

