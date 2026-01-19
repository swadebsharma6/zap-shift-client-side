import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";


const PaymentForm = () => {
      
       const stripe = useStripe();
  const elements = useElements();
  const [error,  setError] = useState("");
  const [success, setSuccess] = useState("");
  const price = 200;

  const handleSubmit = async(e)=>{
      e.preventDefault();

      if(!stripe || !elements){
            return;
      }

      const card = elements.getElement(CardElement);
      if(card == null){
            return;
      }

      const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card,
      });
      if(error){
            console.log(error);
            setError(error);
      }else{
            setError("");
            setSuccess("Payment Successful 🎉");
            console.log('paymentMethod', paymentMethod)
      }
  }



      return (
            <div className="max-w-md mx-auto p-6 bg-base-100 shadow rounded">
      <h2 className="text-xl font-bold mb-4">Pay ${price}</h2>

      <form onSubmit={handleSubmit}>
        <CardElement className="p-3 border rounded" />

        <button
          className="btn btn-primary w-full mt-4"
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