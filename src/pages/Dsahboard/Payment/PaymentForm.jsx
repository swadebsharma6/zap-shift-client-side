import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";
import useAxiosSecure from './../../../hooks/useAxiosSecure';
import { useParams } from "react-router";
import useAuth from './../../../hooks/useAuth';


const PaymentForm = () => {
  const axiosSecure = useAxiosSecure();
  const stripe = useStripe();
  const elements = useElements();
  const {user} = useAuth();
  console.log(user)
  
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const {id }= useParams();
 
  const price = 80;
  const amountInCense = price *100;
 

  const handleSubmit = async(e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      setSuccess("");
      setError(error.message);
    } else {
      setSuccess("Payment Successful 🎉");
      setError("");
      console.log("paymentMethod", paymentMethod);
    }

    // Create payment intent from here...
   const res = await axiosSecure.post('/create-payment-intent', {
    amountInCense,
    id
   });

   const clientSecret = res.data.clientSecret;

   const result = await stripe.confirmCardPayment(clientSecret, {
    payment_method:{
      card: elements.getElement(CardElement),
      billing_details:{
        name:user?.displayName,
        email: user?.email
      }
    }
   });

   if(result.error){
    setError(result.error.message)
   }else{
     setError('');
    if(result.paymentIntent.status === 'succeeded'){
      setSuccess('Payment succeeded !');
       console.log(result)
      // Step: 4 mark parcel paid also create payment history
     const paymentData ={
       parcelId: id,
      email: user.email,
      amount: price,
      paymentMethod: result.paymentIntent.payment_method_types,
      transactionId: result.paymentIntent.id,
     }

     const paymentRes = await axiosSecure.post('/payments', paymentData) ;
     if(paymentRes.data.insertedId){
      console.log('payment successfully')
     }

    }
   }


    
  };

  return (
    <div className=" p-6 bg-base-100 shadow rounded">
      <h2 className="text-xl font-bold mb-4">Pay ${price}</h2>

      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <CardElement className="p-3 border rounded" />

        <button
          className="btn btn-primary w-full mt-4 text-black"
          disabled={!stripe}
        >
          Pay Now
        </button>
      </form>

      {error && <p className="text-red-500 mt-2">{error}</p>}
      {success && <p className="text-green-500 mt-2">{success}</p>}
    </div>
  );
};

export default PaymentForm;
