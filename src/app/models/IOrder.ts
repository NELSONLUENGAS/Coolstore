export interface IOrder {
    order_number: string
    date: string
    customer: ICustomer
    items: Item[]
    payment_method: string
    status: 'pending' | 'shipped' | 'delivered' | 'processing' 
    comments?: string
    total: number
}

interface ICustomer {
    name: string
    shippingAddress: IShippingAddress
    phone: string
    email: string
}

interface IShippingAddress {
    street: string
    city: string
    state?: string
    country: string
    postalCode?: string

}

interface Item {
    name: string
    price: number
    quantity: number
    subtotal: number
}