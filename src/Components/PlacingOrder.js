import React from 'react'
import { useNavigate } from 'react-router-dom'

const PlacingOrder = () => {
    const navigate = useNavigate()
    return (
        <>
            <div>Order success</div>
            <button onClick={() => navigate(-1)}>GO BACK</button>
        </>
    )
}

export default PlacingOrder