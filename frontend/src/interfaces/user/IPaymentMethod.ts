export default interface IPaymentMethod {
    pmId: string;                   
    type: 'stripe' | 'razorpay' | 'cod'; 
    provider: string; 
    cardDetails:{
        cardHolderName: string;   
        last4: string;       
        expiry: string;      
    };      
    upiId: string;
    codConfirmation: boolean;
}
