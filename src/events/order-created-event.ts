import { OrderStatus } from '..'
import { Subjects } from './subjects'

export interface OrderCreatedEvent {
    subject: Subjects.OrderCreated
    data: {
        id: string
        userId: string
        status: OrderStatus
        expiresAt: string
        ticket: {
            id: string
            price: number
        }
    }
}
