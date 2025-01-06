import { PayPalButtons } from "@paypal/react-paypal-js";

const PaypalButton = () => {
  // const handlePayment = (data: any, actions: any): Promise<string> => {
  //   return actions.subscription.create({
  //     plan_id: "YOUR_PLAN_ID", // Replace with your PayPal subscription plan ID
  //   });
  // };

  return (
    <PayPalButtons
      style={{ layout: "vertical", shape: "pill", color: "blue" }}
      // createSubscription={handlePayment}
    //   onApprove={(data, actions) => {
    //      console.log("Subscription approved!", data.subscriptionID);
    //   }}
      onError={(err) => {
        console.error("PayPal Checkout Error", err);
      }}
    />
  );
};

export default PaypalButton;



