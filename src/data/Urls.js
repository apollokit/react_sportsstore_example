import { DataTypes } from "./Types";

const protocol = "http";
// const hostname = "localhost";
const hostname = "10.239.34.113";
const port = 3500;

export const RestUrls = {
    [DataTypes.PRODUCTS]: `${protocol}://${hostname}:${port}/api/products`,
    [DataTypes.CATEGORIES]: `${protocol}://${hostname}:${port}/api/categories`
}
