export interface Category {
  id: string;
  type: string;
  name: string;
}

export type ApiCategory = Omit<Category, 'id'>;

export interface ApiCategories {
  [id: string]: ApiCategory;
}