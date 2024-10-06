export interface ShopType {
  currentFruitTypeFilter: string;
  popularityFilterActive: boolean;
  priceHighToLowFilterActive: boolean;
  priceLowToHighFilterActive: boolean;
  reviewsFilterActive: boolean;
  filterPanelActive: boolean;
}

export interface ProductDetailsProps {
  prd_name: string;
  prd_image: string;
  prd_price: number;
  prd_description: string;
  prd_id: number;
  prd_reviewCount: number;
  prd_orderCount: number;
}

export interface Products {
  id: number;
  name: string;
  price: number;
  image: string;
  type: string;
  orderCount: number;
  reviewCount: number;
  description: string;
}
