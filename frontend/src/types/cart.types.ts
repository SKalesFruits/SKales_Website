export interface CartType {
  cartItems: Array<CartItems>;
}

export interface CartItems {
  product_id: number;
  product_name: string;
  product_price: number;
  product_img: string;
  user_id: number;
  product_qty: number;
}
