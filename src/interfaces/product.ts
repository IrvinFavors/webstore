export interface product {
    name: string;
    description: string;
    id: number;
    image: string;
    rating: number; //rating from 1 to 5
    category: string;
    admin_id: number; //id belonging to the admin who created the product
    price: number;
    units_instock: number;
}

export default product;
