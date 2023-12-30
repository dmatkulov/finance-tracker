export interface Category {
  id: string;
  type: string;
  name: string;
}

export type ApiCategory = Omit<Category, 'id'>;

export interface ApiCategories {
  [id: string]: ApiCategory;
}

export type CategoryMutation = Omit<Category, 'type'>

export interface ApiTransaction {
  category: string;
  amount: number;
  createdAt: string;
}

export interface Transaction extends ApiCategory{
  id: string;
  amount: number;
}

export interface ApiTransactions {
  [id: string]: ApiTransaction;
}