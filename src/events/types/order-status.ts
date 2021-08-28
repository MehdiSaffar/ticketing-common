export enum OrderStatus {
    // The order has been created but ticket has not been reserved.
    Created = 'created',

    // The ticket has already been reserved,
    // or the user has cancelled the order.
    // or the order expires before payment.
    Cancelled = 'cancelled',

    // The order has successfully reserved the ticket.
    AwaitingPayment = 'awaiting:payment',

    // The order has reserved the ticket
    // and the user has provided payment successfully.
    Complete = 'complete'
}
