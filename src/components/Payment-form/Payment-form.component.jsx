import { CardElement,useStripe,useElements } from "@stripe/react-stripe-js";
import { useState } from "react";
import { useSelector } from "react-redux";
import Button ,{Button_Type_Classes}from "../Button/Button.component"
import {PaymentFormContainer,FormContainer,PaymentButton} from "./Payment-form.styles"
import {selectCartTotal} from "../../store/cart/cart.selector"
import {selectCurrentUser} from "../../store/user/user.selector"
const PaymentForm =()=>{
const element = useElements();
const stripe = useStripe()
const currentUser = useSelector(selectCurrentUser)
    const cartTotal = useSelector(selectCartTotal)
    const [isPaymentProcessing,setIsPaymentProcessing]  = useState(false)
    const paymentHandler = async(e)=>{
        e.preventDefault()
        if(!stripe||!element){
            return
        }

        const res = await fetch("/.netlify/functions/create-payment-intent",{
            method:'post',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({amount:cartTotal*100})
        }).then(res=>res.json())
console.log(res,"response")


const {paymentIntent:{client_secret}} = res;

console.log(client_secret,"client scret if")

const paymentResult = await stripe.confirmCardPayment(client_secret,{
    payment_method:{
        card:element.getElement(CardElement),
        billing_details:{
            name:currentUser ? currentUser :"guest",
        }
    }
})

if(paymentResult.error){
    alert(paymentResult.error)
}else{
    if(paymentResult.paymentIntent.status==='succeeded'){
        alert('payment successfull')
    }
}
    }

    
    return(
        <PaymentFormContainer>
        <FormContainer onSubmit={paymentHandler}>
          <h2>Credit Card Payment:</h2>
          <CardElement />
          <Button
            buttonType={Button_Type_Classes.inverted}
          disabled={isPaymentProcessing}
          >
            Pay Now
          </Button>
        </FormContainer>
      </PaymentFormContainer>
    )
}

export default PaymentForm