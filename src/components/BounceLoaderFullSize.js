import React from 'react'
import { BounceLoader } from 'react-spinners';


const BounceLoaderFullSize = () => {
    return (
        <div style={{
            width: "100vw",
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"}}
        >
            <div>
                <BounceLoader />
            </div>
        </div>
    )
}

export default BounceLoaderFullSize
