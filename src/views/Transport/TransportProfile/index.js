//Amit

import React from 'react'
import TransportProfileForm from './transportProfileForm'
import TransportTable from './transportTable'
import useMediaQuery from '@mui/material/useMediaQuery';
import NavHeading from 'utilities/NavHeading';
import { Button } from 'components/ui';

const TransportProfile = () => {
    const matches = useMediaQuery('(max-width:1023px)');
    return (
        <>
            <NavHeading heading="TRANSPORT PROFILE" />
            <div className='grid grid-cols-2 lg:grid-cols-5 xl:grid-cols-10 mb-5  ' style={{marginTop:"-2px"}} >
                {!matches &&
                    <div className='lg:col-span-2 xl:col-span-4 col-span-2  lg:pr-5 xl:pr-14 pr-0' style={!matches ? { borderRight: '2px dashed  #e5e7eb' } : {}} >
                        <TransportProfileForm />
                        <div className='flex w-full justify-end pt-3'>
                            <Button type="submit" variant="solid" size={"sm"}>Save</Button>
                        </div>
                    </div>
                }
                <div className='xl:col-span-6 lg:col-span-3 col-span-2 lg:pl-5 xl:pl-14 pl-0' style={!matches ? {} : {}}>
                    <div>
                        <TransportTable />
                    </div>
                </div>
            </div>
        </>
    )
}
export default TransportProfile
