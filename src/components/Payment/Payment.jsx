
import {useStripe, useElements,  CardElement} from '@stripe/react-stripe-js';

import './payment.css'
import { useEffect, useState } from 'react';
import useAxiosIntercepter from '../../hooks/useAxiosIntercepter';
import useAuth from '../../hooks/useAuth';
import { toast } from 'react-toastify';
const Payment = ({amount,donate,handleAfterPayment}) => {
    const stripe=useStripe()
    const AxiosCustomSecure= useAxiosIntercepter()
    const elements=useElements()
let [error,SetError]=useState()
const [clientSecret, setClientSecret] = useState("");

const{user}=useAuth()


useEffect(()=>{
    AxiosCustomSecure.post('/create-payment-intent',{price:amount})
    .then(data=>{
        setClientSecret(data.data.clientSecret)
    })
},[AxiosCustomSecure,amount])

const handleSubmit=async(e)=>{
    e.preventDefault();

    if(!stripe||!elements) {
        return
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    const {error, paymentMethod} = await stripe.createPaymentMethod({
        type: 'card',
        card,
      });
      if (error) {
        console.log('[error]', error);
        SetError(error.message)
      } else {
        console.log('[PaymentMethod]', paymentMethod);
        SetError('')
      }
    //   Payment COnfirmation

    const {paymentIntent,error:confirmError}=await stripe.confirmCardPayment(clientSecret,{
        payment_method:{
            card:card,
            billing_details:{
                name:user?.displayName||'Anonymous',
                email:user?.email||'Anonymous'
                        }
        }
    })
  if(confirmError){
    console.error(confirmError)
  }  else {
  
    if (paymentIntent.status === 'succeeded') {
        console.log('transaction id', paymentIntent);
      

        const payment = {
            email: user.email,
            price: amount,
            transactionId: paymentIntent.id,
            donationCampaign: donate
        }

        const result = await AxiosCustomSecure.post('/donations', payment);
        console.log('payment saved', result.data);
     
        if (result.data?.data) {
           toast.success('donation Success')
           handleAfterPayment()
        }
    }
}

    };
   

    
    return (
     <>
    
        <form onSubmit={handleSubmit} id="paymentSect" >


<CardElement
options={{
style: {
base: {
  fontSize: '16px',
  color: '#424770',
  '::placeholder': {
    color: '#aab7c4',
  },
},
invalid: {
  color: '#9e2146',
},
},
}}
/>


<button type="submit" disabled={!stripe || !clientSecret}>
Pay
</button>


<p style={{color:'red', paddingTop:'10px'}}>
    {error}
</p>
</form>
     
     </>
    );
};

export default Payment;