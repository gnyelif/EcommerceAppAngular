export class OrderCreateModel{

    CustomerOrderId!:string  
    SenderAddress : string |undefined 
    DestinationAddress : string |undefined
    Quantity : Number |undefined
    QuantityUnit : string |undefined
    Weight:Number |undefined
    WeightUnit:string |undefined
    MaterialName : string  |undefined
    MaterialCode : string |undefined
    Not : string|undefined
}