export const orders = [
    {
        order_number: "1001",
        date: "2023-03-23",
        customer: {
            name: "Juan Pérez",
            shippingAddress: {
                street: "Calle del Paseo, 456",
                city: "Sevilla",
                state: "Andalucía",
                country: "España",
                postalCode: "41001"
            },
            phone: "555-123-4567",
            email: "juanperez@example.com"
        },
        items: [
            {
                name: "Camisa de algodón",
                price: 29.99,
                quantity: 2,
                subtotal: 59.98
            },
            {
                name: "Pantalones vaqueros",
                price: 39.99,
                quantity: 1,
                subtotal: 39.99
            }
        ],
        payment_method: "credit card",
        status: "pending",
        comments: "Please ship to my work address.",
        total: 99.97
    },
    {
        order_number: "1002",
        date: "2023-03-22",
        customer: {
            name: "Maria Lopez",
            shippingAddress: {
                street: "Calle de la Rosa, 123",
                city: "Madrid",
                state: "Madrid",
                country: "España",
                postalCode: "28001"
            },
            phone: "555-987-6543",
            email: "marialopez@example.com"
        },
        items: [
            {
                name: "Chaqueta de cuero",
                price: 129.99,
                quantity: 1,
                subtotal: 129.99
            },
            {
                name: "Botas de invierno",
                price: 59.99,
                quantity: 1,
                subtotal: 59.99
            }
        ],
        payment_method: "debit card",
        status: "shipped",
        comments: "",
        total: 189.98
    },
    {
        order_number: "1003",
        date: "2023-03-21",
        customer: {
            name: "Robert Johnson",
            shippingAddress: {
                street: "123 Main St",
                city: "Anytown",
                state: "CA",
                country: "US",
                postalCode: "12345"
            },
            phone: "555-555-1212",
            email: "robertjohnson@example.com"
        },
        items: [
            {
                name: "T-shirt",
                price: 19.99,
                quantity: 3,
                subtotal: 59.97
            },
            {
                name: "Jeans",
                price: 49.99,
                quantity: 1,
                subtotal: 49.99
            }
        ],
        payment_method: "paypal",
        status: "delivered",
        comments: "Leave package on porch.",
        total: 109.96
    },
    {
        order_number: "1004",
        date: '2023-03-23',
        customer: {
            name: "Maria Gomez",
            shippingAddress: {
                street: 'Avenida de la Libertad, 789',
                city: 'Barcelona',
                state: 'Cataluña',
                country: 'España',
                postalCode: '08001'
            },
            phone: "555-987-6543",
            email: "mariagomez@example.com"
        },
        items: [
            {
                name: "Camiseta deportiva",
                price: 19.99,
                quantity: 3,
                subtotal: 59.97
            },
            {
                name: "Calcetines",
                price: 5.99,
                quantity: 2,
                subtotal: 11.98
            },
        ],
        payment_method: 'debit card',
        status: 'processing',
        comments: "Please add gift wrapping.",
        total: 71.95,
    },
    {
        order_number: "1005",
        date: '2023-03-24',
        customer: {
            name: "David Rodriguez",
            shippingAddress: {
                street: 'Calle Mayor, 234',
                city: 'Valencia',
                state: 'Valencia',
                country: 'España',
                postalCode: '46001'
            },
            phone: "555-456-7890",
            email: "davidrodriguez@example.com"
        },
        items: [
            {
                name: "Camisa de cuadros",
                price: 34.99,
                quantity: 1,
                subtotal: 34.99
            },
            {
                name: "Zapatos de cuero",
                price: 79.99,
                quantity: 1,
                subtotal: 79.99
            },
        ],
        payment_method: 'paypal',
        status: 'shipped',
        comments: "Please deliver before 5pm.",
        total: 114.98,
    },
    {
        order_number: "1006",
        date: '2023-03-24',
        customer: {
            name: "Laura Fernandez",
            shippingAddress: {
                street: 'Plaza Mayor, 56',
                city: 'Salamanca',
                state: 'Castilla y León',
                country: 'España',
                postalCode: '37001'
            },
            phone: "555-234-5678",
            email: "laurafernandez@example.com"
        },
        items: [
            {
                name: "Vestido de verano",
                price: 49.99,
                quantity: 1,
                subtotal: 49.99
            },
            {
                name: "Sombrero de playa",
                price: 14.99,
                quantity: 1,
                subtotal: 14.99
            },
        ],
        payment_method: 'cash on delivery',
        status: 'delivered',
        comments: "Please leave at front desk.",
        total: 64.98,
    },
    {
        order_number: "1007",
        date: '2023-03-23',
        customer: {
            name: "Maria Rodriguez",
            shippingAddress: {
                street: 'Calle de la Marina, 34',
                city: 'Barcelona',
                state: 'Cataluña',
                country: 'España',
                postalCode: '08005'
            },
            phone: "555-456-7890",
            email: "mariarodriguez@example.com"
        },
        items: [
            {
                name: "Zapatos de cuero",
                price: 89.99,
                quantity: 1,
                subtotal: 89.99
            },
            {
                name: "Bufanda de lana",
                price: 19.99,
                quantity: 1,
                subtotal: 19.99
            },
        ],
        payment_method: 'debit card',
        status: 'processing',
        comments: "Please include a gift receipt.",
        total: 109.98,
    },
    {
        order_number: "1008",
        date: '2023-03-23',
        customer: {
            name: "John Smith",
            shippingAddress: {
                street: '123 Main St',
                city: 'New York',
                state: 'New York',
                country: 'United States',
                postalCode: '10001'
            },
            phone: "555-555-5555",
            email: "johnsmith@example.com"
        },
        items: [
            {
                name: "T-shirt",
                price: 19.99,
                quantity: 2,
                subtotal: 39.98
            },
            {
                name: "Jeans",
                price: 59.99,
                quantity: 1,
                subtotal: 59.99
            },
        ],
        payment_method: 'paypal',
        status: 'shipped',
        comments: "Please leave package at the front door.",
        total: 99.97,
    },
    {
        order_number: "1009",
        date: '2023-03-23',
        customer: {
            name: "Sophie Martin",
            shippingAddress: {
                street: 'Rue du Faubourg Saint-Honoré, 77',
                city: 'Paris',
                state: 'Île-de-France',
                country: 'France',
                postalCode: '75008'
            },
            phone: "+33 1 23 45 67 89",
            email: "sophiemartin@example.com"
        },
        items: [
            {
                name: "Dress",
                price: 129.99,
                quantity: 1,
                subtotal: 129.99
            },
            {
                name: "Sunglasses",
                price: 49.99,
                quantity: 1,
                subtotal: 49.99
            },
        ],
        payment_method: 'credit card',
        status: 'delivered',
        comments: "Please deliver to the concierge.",
        total: 179.98,
    },
    {
        order_number: "1010",
        date: '2023-03-23',
        customer: {
            name: "María Fernández",
            shippingAddress: {
                street: 'Avenida de la Constitución, 789',
                city: 'Málaga',
                state: 'Andalucía',
                country: 'España',
                postalCode: '29001'
            },
            phone: "555-987-6543",
            email: "mariafernandez@example.com"
        },
        items: [
            {
                name: "Camiseta blanca",
                price: 19.99,
                quantity: 3,
                subtotal: 59.97
            },
            {
                name: "Jeans ajustados",
                price: 49.99,
                quantity: 1,
                subtotal: 49.99
            },
            {
                name: "Zapatos de cuero",
                price: 79.99,
                quantity: 2,
                subtotal: 159.98
            }
        ],
        payment_method: 'debit card',
        status: 'processing',
        comments: "",
        total: 269.94,
    },
    {
        order_number: "1011",
        date: '2023-03-22',
        customer: {
            name: "José Rodríguez",
            shippingAddress: {
                street: 'Calle del Sol, 456',
                city: 'Barcelona',
                state: 'Cataluña',
                country: 'España',
                postalCode: '08001'
            },
            phone: "555-765-4321",
            email: "joserodriguez@example.com"
        },
        items: [
            {
                name: "Chaqueta de cuero",
                price: 129.99,
                quantity: 1,
                subtotal: 129.99
            }
        ],
        payment_method: 'paypal',
        status: 'shipped',
        comments: "",
        total: 129.99,
    },
    {
        order_number: "1012",
        date: '2023-03-22',
        customer: {
            name: "Lucía González",
            shippingAddress: {
                street: 'Calle de la Luna, 123',
                city: 'Valencia',
                state: 'Valencia',
                country: 'España',
                postalCode: '46001'
            },
            phone: "555-111-2222",
            email: "luciagonzalez@example.com"
        },
        items: [
            {
                name: "Camisa de seda",
                price: 69.99,
                quantity: 4,
                subtotal: 279.96
            },
            {
                name: "Pantalones de lino",
                price: 49.99,
                quantity: 2,
                subtotal: 99.98
            }
        ],
        payment_method: 'credit card',
        status: 'delivered',
        comments: "Please leave package at front door.",
        total: 379.94,
    },
    {
        order_number: "1013",
        date: '2023-03-21',
        customer: {
            name: "Maria López",
            shippingAddress: {
                street: 'Calle de la Luna, 456',
                city: 'Madrid',
                state: 'Madrid',
                country: 'España',
                postalCode: '28001'
            },
            phone: "555-111-2222",
            email: "marialopez@example.com"
        },
        items: [
            {
                name: "Gafas de sol",
                price: 49.99,
                quantity: 1,
                subtotal: 49.99
            },
            {
                name: "Sombrero de paja",
                price: 29.99,
                quantity: 1,
                subtotal: 29.99
            },
        ],
        payment_method: 'credit card',
        status: 'processing',
        comments: "Please ship to my home address.",
        total: 79.98,
    },
    {
        order_number: "1014",
        date: '2023-03-22',
        customer: {
            name: "David González",
            shippingAddress: {
                street: 'Calle del Sol, 789',
                city: 'Barcelona',
                state: 'Cataluña',
                country: 'España',
                postalCode: '08001'
            },
            phone: "555-555-5555",
            email: "davidgonzalez@example.com"
        },
        items: [
            {
                name: "Camiseta deportiva",
                price: 39.99,
                quantity: 4,
                subtotal: 159.96
            }
        ],
        payment_method: 'paypal',
        status: 'delivered',
        comments: "",
        total: 159.96,
    },
    {
        order_number: "1015",
        date: '2023-03-23',
        customer: {
            name: "Ana García",
            shippingAddress: {
                street: 'Avenida de la Playa, 789',
                city: 'Valencia',
                state: 'Valencia',
                country: 'España',
                postalCode: '46001'
            },
            phone: "555-987-6543",
            email: "anagarcia@example.com"
        },
        items: [
            {
                name: "Vestido de seda",
                price: 129.99,
                quantity: 1,
                subtotal: 129.99
            },
            {
                name: "Zapatos de tacón",
                price: 79.99,
                quantity: 1,
                subtotal: 79.99
            },
            {
                name: "Bolso de piel",
                price: 89.99,
                quantity: 1,
                subtotal: 89.99
            },
        ],
        payment_method: 'debit card',
        status: 'shipped',
        comments: "Please leave package at front desk.",
        total: 299.97,
    },
    {
        order_number: "1016",
        date: '2023-03-23',
        customer: {
            name: "María López",
            shippingAddress: {
                street: 'Calle de la Luna, 789',
                city: 'Valencia',
                state: 'Comunidad Valenciana',
                country: 'España',
                postalCode: '46001'
            },
            phone: "555-987-6543",
            email: "marialopez@example.com"
        },
        items: [
            {
                name: "Camisa de lino",
                price: 39.99,
                quantity: 3,
                subtotal: 119.97
            },
            {
                name: "Pantalones chinos",
                price: 49.99,
                quantity: 1,
                subtotal: 49.99
            },
        ],
        payment_method: 'paypal',
        status: 'processing',
        comments: "Please include a gift receipt.",
        total: 169.96,
    },
    {
        order_number: "1017",
        date: '2023-03-22',
        customer: {
            name: "Lucas García",
            shippingAddress: {
                street: 'Calle de la Estrella, 456',
                city: 'Málaga',
                state: 'Andalucía',
                country: 'España',
                postalCode: '29001'
            },
            phone: "555-234-5678",
            email: "lucasgarcia@example.com"
        },
        items: [
            {
                name: "Camiseta de rayas",
                price: 19.99,
                quantity: 4,
                subtotal: 79.96
            },
            {
                name: "Vaqueros ajustados",
                price: 59.99,
                quantity: 2,
                subtotal: 119.98
            },
        ],
        payment_method: 'credit card',
        status: 'shipped',
        comments: "",
        total: 199.94,
    },
    {
        order_number: "1018",
        date: '2023-03-21',
        customer: {
            name: "Pablo Martínez",
            shippingAddress: {
                street: 'Calle de la Fuente, 123',
                city: 'Toledo',
                state: 'Castilla-La Mancha',
                country: 'España',
                postalCode: '45001'
            },
            phone: "555-876-5432",
            email: "pablomartinez@example.com"
        },
        items: [
            {
                name: "Jersey de lana",
                price: 79.99,
                quantity: 1,
                subtotal: 79.99
            },
        ],
        payment_method: 'bank transfer',
        status: 'delivered',
        comments: "Thank you for the prompt delivery.",
        total: 79.99,
    },
    {
        order_number: "1019",
        date: '2023-03-23',
        customer: {
            name: "Maria Rodriguez",
            shippingAddress: {
                street: 'Calle de la Luna, 789',
                city: 'Barcelona',
                state: 'Cataluña',
                country: 'España',
                postalCode: '08001'
            },
            phone: "555-456-7890",
            email: "maria@example.com"
        },
        items: [
            {
                name: "Vestido de verano",
                price: 49.99,
                quantity: 1,
                subtotal: 49.99
            },
            {
                name: "Sandalias de cuero",
                price: 79.99,
                quantity: 1,
                subtotal: 79.99
            },
        ],
        payment_method: 'paypal',
        status: 'shipped',
        comments: "Please leave package at front door.",
        total: 129.98,
    },
    {
        order_number: "1020",
        date: '2023-03-24',
        customer: {
            name: "David Garcia",
            shippingAddress: {
                street: 'Avenida de la Playa, 456',
                city: 'Valencia',
                state: 'Valencia',
                country: 'España',
                postalCode: '46001'
            },
            phone: "555-789-1234",
            email: "david@example.com"
        },
        items: [
            {
                name: "Sudadera con capucha",
                price: 59.99,
                quantity: 3,
                subtotal: 179.97
            },
        ],
        payment_method: 'credit card',
        status: 'delivered',
        comments: "Please include a gift receipt.",
        total: 179.97,
    },
    {
        order_number: "1021",
        date: '2023-03-25',
        customer: {
            name: "Laura Martinez",
            shippingAddress: {
                street: 'Calle de la Palma, 345',
                city: 'Sevilla',
                state: 'Andalucía',
                country: 'España',
                postalCode: '41002'
            },
            phone: "555-234-5678",
            email: "laura@example.com"
        },
        items: [
            {
                name: "Camiseta de algodón",
                price: 19.99,
                quantity: 4,
                subtotal: 79.96
            },
            {
                name: "Shorts deportivos",
                price: 29.99,
                quantity: 2,
                subtotal: 59.98
            },
        ],
        payment_method: 'paypal',
        status: 'processing',
        comments: "Please expedite my order if possible.",
        total: 139.94,
    },
]