import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { buyMobile } from './MobileAction'

const MobileContainer = (props) => {
    const [outofstock, setOutOfstock] = useState(false);

    useEffect(() => {
        if (props.noOfMobiles === 0) {
            setOutOfstock(true)
        }
    })
    return (
        <div className=' container p-5'>
            <h2>No Of Mobiles : {props.noOfMobiles} </h2>
            <p> {props.noOfMobiles > 5 ? "Available" : props.noOfMobiles === 0 ? "Out of Stock" : "Limited Stock"}</p>
            <button disabled={outofstock} onClick={props.buyMobile}>Buy Mobile</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        noOfMobiles: state.noOfMobiles
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        buyMobile: () => dispatch(buyMobile())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MobileContainer)