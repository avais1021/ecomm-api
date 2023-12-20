const express = require('express');
var cors = require('cors');
const { v4: uuidv4 } = require('uuid');
const app = express();

app.use(cors());
const port = 3000;

// Sample tech products data

const products = [
    {
        "id": uuidv4(),
        "name": "iphone x",
        "company": "apple",
        "price": 600000,
        "colors": [
            "#ff0000",
            "#000000",
            "#CDD0D0"
        ],
        "description": "The mobile is compact with its 6.2-inch OLED screen and far lighter at 168g. It perfectly captures the design, looks, and feel of the expensive one. It comes with a snapdragon processor with a 5n chip in it. It has a 200mp camera in the rear 100mp in front perfect for selfie lovers. It also support HDR content means you can watch 4K content on it.",
        "category": "mobile",
        "featured": true,
        "stock": 5,
        "reviews": 58,
        "stars": 4.8,
        "image": [
            {
                "id": uuidv4(),
                "width": 1080,
                "height": 650,
                "url": " https://images.pexels.com/photos/1275229/pexels-photo-1275229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                "filename": "prod-1.png",
                "size": 1080,
                "type": "image/png"
            },
            {
                "id": uuidv4(),
                "width": 1080,
                "height": 650,
                "url": " https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                "filename": "prod-2.png",
                "size": 1080,
                "type": "image/png"
            },
            {
                "id": uuidv4(),
                "width": 1080,
                "height": 650,
                "url": " https://images.pexels.com/photos/4224099/pexels-photo-4224099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                "filename": "prod-3.png",
                "size": 1080,
                "type": "image/png"
            },
            {
                "id": uuidv4(),
                "width": 1080,
                "height": 650,
                "url": "https://images.pexels.com/photos/1619651/pexels-photo-1619651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                "filename": "prod-4.png",
                "size": 1080,
                "type": "image/png"
            }
        ]
    },
    {
        "id": uuidv4(),
        "name": "samsung s20",
        "company": "samsung",
        "price": 500000,
        "colors": [
            "#000",
            "#22D3EF"
        ],
        "description": "The mobile is compact with its 6.2-inch OLED screen and far lighter at 168g. It perfectly captures the design, looks, and feel of the expensive one. It comes with a snapdragon processor with a 5n chip in it. It has a 200mp camera in the rear 100mp in front perfect for selfie lovers. It also support HDR content means you can watch 4K content on it.",
        "category": "mobile",
        "shipping": true,
        "stock": 10,
        "reviews": 28,
        "stars": 4.4,
        "image": [
            {
                "id": uuidv4(),
                "width": 1080,
                "height": 650,
                "url": " https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                "filename": "prod-1.png",
                "size": 1080,
                "type": "image/png"
            },
            {
                "id": uuidv4(),
                "width": 1080,
                "height": 650,
                "url": " https://images.pexels.com/photos/1275229/pexels-photo-1275229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                "filename": "prod-2.png",
                "size": 1080,
                "type": "image/png"
            },
            {
                "id": uuidv4(),
                "width": 1080,
                "height": 650,
                "url": " https://images.pexels.com/photos/4224099/pexels-photo-4224099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                "filename": "prod-3.png",
                "size": 1080,
                "type": "image/png"
            },
            {
                "id": uuidv4(),
                "width": 1080,
                "height": 650,
                "url": "https://images.pexels.com/photos/1619651/pexels-photo-1619651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                "filename": "prod-4.png",
                "size": 1080,
                "type": "image/png"
            }
        ]
    },
    {
        "id": uuidv4(),
        "name": "Dell Series",
        "company": "dell",
        "price": 702899,
        "colors": [
            "#22D3EF",
            "#CDD0D0"
        ],
        "description": "The Laptop is compact with its 6.2-inch OLED screen and far lighter at 168g. It perfectly captures the design, looks, and feel of the expensive one. It comes with a snapdragon processor with a 5n chip in it. It has a 200mp camera in the rear 100mp in front perfect for selfie lovers. It also support HDR content means you can watch 4K content on it.",
        "category": "laptop",
        "stock": 12,
        "reviews": 28,
        "stars": 4.2,
        "image": [
            {
                "id": uuidv4(),
                "width": 1080,
                "height": 650,
                "url": "https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                "filename": "prod-1.png",
                "size": 1080,
                "type": "image/png"
            },
            {
                "id": uuidv4(),
                "width": 1080,
                "height": 650,
                "url": " https://images.pexels.com/photos/1275229/pexels-photo-1275229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                "filename": "prod-2.png",
                "size": 1080,
                "type": "image/png"
            },
            {
                "id": uuidv4(),
                "width": 1080,
                "height": 650,
                "url": " https://images.pexels.com/photos/4224099/pexels-photo-4224099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                "filename": "prod-3.png",
                "size": 1080,
                "type": "image/png"
            },
            {
                "id": uuidv4(),
                "width": 1080,
                "height": 650,
                "url": "https://images.pexels.com/photos/1619651/pexels-photo-1619651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                "filename": "prod-4.png",
                "size": 1080,
                "type": "image/png"
            }
        ]
    },
    {
        "id": uuidv4(),
        "name": "Nokia 420",
        "company": "nokia",
        "price": 102999,
        "colors": [
            "#000000",
            "#CDD0D0"
        ],
        "description": "The mobile is compact with its 6.2-inch OLED screen and far lighter at 168g. It perfectly captures the design, looks, and feel of the expensive one. It comes with a snapdragon processor with a 5n chip in it. It has a 200mp camera in the rear 100mp in front perfect for selfie lovers. It also support HDR content means you can watch 4K content on it.",
        "category": "mobile",
        "shipping": true,
        "stock": 6,
        "reviews": 28,
        "stars": 3.8,
        "image": [
            {
                "id": uuidv4(),
                "width": 1080,
                "height": 650,
                "url": "https://images.pexels.com/photos/4224099/pexels-photo-4224099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                "filename": "prod-1.png",
                "size": 1080,
                "type": "image/png"
            },
            {
                "id": uuidv4(),
                "width": 1080,
                "height": 650,
                "url": " https://images.pexels.com/photos/1275229/pexels-photo-1275229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                "filename": "prod-2.png",
                "size": 1080,
                "type": "image/png"
            },
            {
                "id": uuidv4(),
                "width": 1080,
                "height": 650,
                "url": " https://images.pexels.com/photos/4224099/pexels-photo-4224099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                "filename": "prod-3.png",
                "size": 1080,
                "type": "image/png"
            },
            {
                "id": uuidv4(),
                "width": 1080,
                "height": 650,
                "url": "https://images.pexels.com/photos/1619651/pexels-photo-1619651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                "filename": "prod-4.png",
                "size": 1080,
                "type": "image/png"
            }
        ]
    },
    {
        "id": uuidv4(),
        "name": "Mac Pc",
        "company": "apple",
        "price": 200999,
        "colors": [
            "#000",
            "#CDD0D0"
        ],
        "description": "The Computer is compact with its 6.2-inch OLED screen and far lighter at 168g. It perfectly captures the design, looks, and feel of the expensive one. It comes with a snapdragon processor with a 5n chip in it. It has a 200mp camera in the rear 100mp in front perfect for selfie lovers. It also support HDR content means you can watch 4K content on it.",
        "category": "computer",
        "shipping": true,
        "stock": 4,
        "reviews": 28,
        "stars": 2.8,
        "image": [
            {
                "id": uuidv4(),
                "width": 1080,
                "height": 650,
                "url": "https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                "filename": "prod-1.png",
                "size": 1080,
                "type": "image/png"
            },
            {
                "id": uuidv4(),
                "width": 1080,
                "height": 650,
                "url": " https://images.pexels.com/photos/1275229/pexels-photo-1275229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                "filename": "prod-2.png",
                "size": 1080,
                "type": "image/png"
            },
            {
                "id": uuidv4(),
                "width": 1080,
                "height": 650,
                "url": " https://images.pexels.com/photos/4224099/pexels-photo-4224099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                "filename": "prod-3.png",
                "size": 1080,
                "type": "image/png"
            },
            {
                "id": uuidv4(),
                "width": 1080,
                "height": 650,
                "url": "https://images.pexels.com/photos/1619651/pexels-photo-1619651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                "filename": "prod-4.png",
                "size": 1080,
                "type": "image/png"
            }
        ]
    },
    {
        "id": uuidv4(),
        "name": "Macbook Pro",
        "company": "apple",
        "price": 699999,
        "colors": [
            "#000000",
            "#CDD0D0"
        ],
        "description": "The Laptop is compact with its 6.2-inch OLED screen and far lighter at 168g. It perfectly captures the design, looks, and feel of the expensive one. It comes with a snapdragon processor with a 5n chip in it. It has a 200mp camera in the rear 100mp in front perfect for selfie lovers. It also support HDR content means you can watch 4K content on it.",
        "category": "laptop",
        "shipping": true,
        "stock": 6,
        "reviews": 12,
        "stars": 4.1,
        "image": [
            {
                "id": uuidv4(),
                "width": 1080,
                "height": 650,
                "url": "https://images.pexels.com/photos/303383/pexels-photo-303383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                "filename": "prod-1.png",
                "size": 1080,
                "type": "image/png"
            },
            {
                "id": uuidv4(),
                "width": 1080,
                "height": 650,
                "url": " https://images.pexels.com/photos/1275229/pexels-photo-1275229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                "filename": "prod-2.png",
                "size": 1080,
                "type": "image/png"
            },
            {
                "id": uuidv4(),
                "width": 1080,
                "height": 650,
                "url": " https://images.pexels.com/photos/4224099/pexels-photo-4224099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                "filename": "prod-3.png",
                "size": 1080,
                "type": "image/png"
            },
            {
                "id": uuidv4(),
                "width": 1080,
                "height": 650,
                "url": "https://images.pexels.com/photos/1619651/pexels-photo-1619651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                "filename": "prod-4.png",
                "size": 1080,
                "type": "image/png"
            }
        ]
    },
    {
        "id": uuidv4(),
        "name": "Asus gseries",
        "company": "asus",
        "price": 509999,
        "colors": [
            "#CDD0D0",
            "#000"
        ],
        "description": "The laptop is compact with its 6.2-inch OLED screen and far lighter at 168g. It perfectly captures the design, looks, and feel of the expensive one. It comes with a snapdragon processor with a 5n chip in it. It has a 200mp camera in the rear 100mp in front perfect for selfie lovers. It also support HDR content means you can watch 4K content on it.",
        "category": "laptop",
        "shipping": true,
        "stock": 6,
        "reviews": 23,
        "stars": 3.7,
        "image": [
            {
                "id": uuidv4(),
                "width": 1080,
                "height": 650,
                "url": "https://images.pexels.com/photos/261662/pexels-photo-261662.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                "filename": "prod-1.png",
                "size": 1080,
                "type": "image/png"
            },
            {
                "id": uuidv4(),
                "width": 1080,
                "height": 650,
                "url": " https://images.pexels.com/photos/1275229/pexels-photo-1275229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                "filename": "prod-2.png",
                "size": 1080,
                "type": "image/png"
            },
            {
                "id": uuidv4(),
                "width": 1080,
                "height": 650,
                "url": " https://images.pexels.com/photos/4224099/pexels-photo-4224099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                "filename": "prod-3.png",
                "size": 1080,
                "type": "image/png"
            },
            {
                "id": uuidv4(),
                "width": 1080,
                "height": 650,
                "url": "https://images.pexels.com/photos/1619651/pexels-photo-1619651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                "filename": "prod-4.png",
                "size": 1080,
                "type": "image/png"
            }
        ]
    },
    {
        "id": uuidv4(),
        "name": "accessories",
        "price": 409999,
        "company": "lenova",
        "colors": [
            "#000",
            "#CDD0D0"
        ],
        "description": "The accessories is compact with its 6.2-inch OLED screen and far lighter at 168g. It perfectly captures the design, looks, and feel of the expensive one. It comes with a snapdragon processor with a 5n chip in it. It has a 200mp camera in the rear 100mp in front perfect for selfie lovers. It also support HDR content means you can watch 4K content on it.",
        "category": "accessories",
        "featured": true,
        "shipping": true,
        "stock": 6,
        "reviews": 23,
        "stars": 4.2,
        "image": [
            {
                "id": uuidv4(),
                "width": 1080,
                "height": 650,
                "url": "https://images.pexels.com/photos/3178938/pexels-photo-3178938.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                "filename": "prod-1.png",
                "size": 1080,
                "type": "image/png"
            },
            {
                "id": uuidv4(),
                "width": 1080,
                "height": 650,
                "url": " https://images.pexels.com/photos/1275229/pexels-photo-1275229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                "filename": "prod-2.png",
                "size": 1080,
                "type": "image/png"
            },
            {
                "id": uuidv4(),
                "width": 1080,
                "height": 650,
                "url": " https://images.pexels.com/photos/4224099/pexels-photo-4224099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                "filename": "prod-3.png",
                "size": 1080,
                "type": "image/png"
            },
            {
                "id": uuidv4(),
                "width": 1080,
                "height": 650,
                "url": "https://images.pexels.com/photos/1619651/pexels-photo-1619651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                "filename": "prod-4.png",
                "size": 1080,
                "type": "image/png"
            }
        ]
    },
    {
        "id": uuidv4(),
        "name": "Iwatch",
        "price": 109999,
        "company": "apple",
        "colors": [
            "#000000"
        ],
        "description": "This watch is compact with its 6.2-inch OLED screen and far lighter at 168g. It perfectly captures the design, looks, and feel of the expensive one. It comes with a snapdragon processor with a 5n chip in it. It has a 200mp camera in the rear 100mp in front perfect for selfie lovers. It also support HDR content means you can watch 4K content on it.",
        "category": "watch",
        "shipping": true,
        "stock": 6,
        "reviews": 23,
        "stars": 4.6,
        "image": [
            {
                "id": uuidv4(),
                "width": 1080,
                "height": 650,
                "url": "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                "filename": "prod-1.png",
                "size": 1080,
                "type": "image/png"
            },
            {
                "id": uuidv4(),
                "width": 1080,
                "height": 650,
                "url": " https://images.pexels.com/photos/1275229/pexels-photo-1275229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                "filename": "prod-2.png",
                "size": 1080,
                "type": "image/png"
            },
            {
                "id": uuidv4(),
                "width": 1080,
                "height": 650,
                "url": " https://images.pexels.com/photos/4224099/pexels-photo-4224099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                "filename": "prod-3.png",
                "size": 1080,
                "type": "image/png"
            },
            {
                "id": uuidv4(),
                "width": 1080,
                "height": 650,
                "url": "https://images.pexels.com/photos/1619651/pexels-photo-1619651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                "filename": "prod-4.png",
                "size": 1080,
                "type": "image/png"
            }
        ]
    },
    {
        "id": uuidv4(),
        "name": "user need",
        "company": "apple",
        "price": 300099,
        "colors": [
            "#ff0000",
            "#22D3EF",
            "#000000"
        ],
        "description": "The mobile is compact with its 6.2-inch OLED screen and far lighter at 168g. It perfectly captures the design, looks, and feel of the expensive one. It comes with a snapdragon processor with a 5n chip in it. It has a 200mp camera in the rear 100mp in front perfect for selfie lovers. It also support HDR content means you can watch 4K content on it.",
        "category": "accessories",
        "stock": 6,
        "reviews": 23,
        "stars": 4.2,
        "image": [
            {
                "id": uuidv4(),
                "width": 1080,
                "height": 650,
                "url": "https://images.pexels.com/photos/1619651/pexels-photo-1619651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                "filename": "prod-1.png",
                "size": 1080,
                "type": "image/png"
            },
            {
                "id": uuidv4(),
                "width": 1080,
                "height": 650,
                "url": " https://images.pexels.com/photos/1275229/pexels-photo-1275229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                "filename": "prod-2.png",
                "size": 1080,
                "type": "image/png"
            },
            {
                "id": uuidv4(),
                "width": 1080,
                "height": 650,
                "url": " https://images.pexels.com/photos/4224099/pexels-photo-4224099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                "filename": "prod-3.png",
                "size": 1080,
                "type": "image/png"
            },
            {
                "id": uuidv4(),
                "width": 1080,
                "height": 650,
                "url": "https://images.pexels.com/photos/1619651/pexels-photo-1619651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                "filename": "prod-4.png",
                "size": 1080,
                "type": "image/png"
            }
        ]
    },
    {
        "id": uuidv4(),
        "name": "rolex premium",
        "company": "rolex",
        "price": 99999,
        "colors": [
            "#000000",
            "#CDD0D0"
        ],
        "description": "This watch is compact with its 6.2-inch OLED screen and far lighter at 168g. It perfectly captures the design, looks, and feel of the expensive one. It comes with a snapdragon processor with a 5n chip in it. It has a 200mp camera in the rear 100mp in front perfect for selfie lovers. It also support HDR content means you can watch 4K content on it.",
        "category": "watch",
        "stock": 6,
        "reviews": 60,
        "stars": 4.8,
        "image": [
            {
                "id": uuidv4(),
                "width": 1080,
                "height": 650,
                "url": "https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                "filename": "prod-1.png",
                "size": 1080,
                "type": "image/png"
            },
            {
                "id": uuidv4(),
                "width": 1080,
                "height": 650,
                "url": " https://images.pexels.com/photos/1275229/pexels-photo-1275229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                "filename": "prod-2.png",
                "size": 1080,
                "type": "image/png"
            },
            {
                "id": uuidv4(),
                "width": 1080,
                "height": 650,
                "url": " https://images.pexels.com/photos/4224099/pexels-photo-4224099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                "filename": "prod-3.png",
                "size": 1080,
                "type": "image/png"
            },
            {
                "id": uuidv4(),
                "width": 1080,
                "height": 650,
                "url": "https://images.pexels.com/photos/1619651/pexels-photo-1619651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                "filename": "prod-4.png",
                "size": 1080,
                "type": "image/png"
            }
        ]
    },
    {
        "id": uuidv4(),
        "name": "galaxy w20",
        "price": 311999,
        "company": "samsung",
        "colors": [
            "#22D3EF",
            "#ff0000",
            "#000000"
        ],
        "description": "This watch is compact with its 6.2-inch OLED screen and far lighter at 168g. It perfectly captures the design, looks, and feel of the expensive one. It comes with a snapdragon processor with a 5n chip in it. It has a 200mp camera in the rear 100mp in front perfect for selfie lovers. It also support HDR content means you can watch 4K content on it.",
        "category": "watch",
        "featured": true,
        "stock": 6,
        "reviews": 60,
        "stars": 4.4,
        "image": [
            {
                "id": uuidv4(),
                "width": 1080,
                "height": 650,
                "url": "https://images.pexels.com/photos/51011/pexels-photo-51011.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                "filename": "prod-1.png",
                "size": 1080,
                "type": "image/png"
            },
            {
                "id": uuidv4(),
                "width": 1080,
                "height": 650,
                "url": " https://images.pexels.com/photos/1275229/pexels-photo-1275229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                "filename": "prod-2.png",
                "size": 1080,
                "type": "image/png"
            },
            {
                "id": uuidv4(),
                "width": 1080,
                "height": 650,
                "url": " https://images.pexels.com/photos/4224099/pexels-photo-4224099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                "filename": "prod-3.png",
                "size": 1080,
                "type": "image/png"
            },
            {
                "id": uuidv4(),
                "width": 1080,
                "height": 650,
                "url": "https://images.pexels.com/photos/1619651/pexels-photo-1619651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                "filename": "prod-4.png",
                "size": 1080,
                "type": "image/png"
            }
        ]
    }
]

// API endpoint to get tech products
app.get('/api/products', (req, res) => {
    let p = products.map(x => {
        return {
            id: x.id,
            name: x.name,
            company: x.company,
            price: x.price,
            colors: x.colors,
            image: x.image[0].url,
            description: x.description,
            category: x.category,
            featured: x.featured
        }
    });
    

    res.json(p);
});

// API endpoint to get details of a specific product by ID
app.get('/api/products/:id', (req, res) => {
    const productId = req.params.id;
    const product = products.find(item => item.id === productId);

    if (product) {
        res.json(product);
    } else {
        res.status(404).json({ error: 'Product not found' });
    }
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
