function PaymentMethod(props: any) {
    return (
        <div style={{
            border: "1px solid gray",
            width: "7.2em",
            color: 'gray',
            borderRadius:'10px',
            display:'flex',
            flexDirection:'column',
            alignItems:'center',
            padding:'5px'
        }}>
            <div>
                <img width={90} height={20} src={props.bankImage} alt={props.bankName} />
            </div>
            <div style={{display:'flex',alignItems:'center',gap:"0.5em",marginTop:'-5px'}}>
                <div>
                    <p>Monthly</p>
                    <p style={{textAlign:'end'}}>Rs</p>
                </div>
                <p style={{fontWeight:'bold'}}>{props.price}</p>
            </div>
        </div>
    )
}

export default PaymentMethod