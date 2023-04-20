import React, { useState } from 'react'
import { useJsApiLoader, GoogleMap, MarkerF } from '@react-google-maps/api'

const Map_Body = (props) => {
    const { values } = props;
    const markercenter = {
        lat: 26.889879,
        lng: 80.9745
    }

    const [map, setMap] = useState(null)

    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: 'AIzaSyAbwv5P-iff_vVB7TpstiQ1RI1kvktza48'
    })
    if (!isLoaded) {
        return <div style={{ height: '100%', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '22px', fontWeight: 'bold' }}>Loading</div>
    }
    return (
        <div >
            <GoogleMap center={markercenter} zoom={12} mapContainerStyle={{ width: '100%', height: '25vw' }}
                onLoad={map => setMap(map)}
            >
                <MarkerF position={markercenter} draggable={true} clickable={true} onDragEnd={(coord) => {
                    const { latLng } = coord;
                    values.lat = latLng.lat();
                    values.lng = latLng.lng();
                }
                }

                    onClickableChanged={(e) => {
                        console.log("lationclickablechange = ", e.latLng.lat());
                        console.log("longtitudeclickablechange = ", e.latLng.lng());
                    }}

                />
            </GoogleMap>
        </div>
    )
}

export default Map_Body



