export type Product = {
    name: string;
    price: number | string;
    url: string;
    image: string;
}

export interface SearchResult {
    provider: string,
    products: Product[]
}