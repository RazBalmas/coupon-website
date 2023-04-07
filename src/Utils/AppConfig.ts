class AppConfig {

    public loginUrl="http://8080/auth/login/";
}

class DevelopmentConfig {
    public ProductsUrl = "http://localhost:3030/api/products/";
    public ProductsImagesUrl = "http://localhost:3030/api/products/images/";
    public loginUrl="http://8080/auth/login/";
    
}

class ProductionConfig {
    public ProductsUrl = "http://northwind.com/api/products/";
    public ProductsImagesUrl = "http://northwind.com/api/products/images/";
    public loginUrl="http://Coupon4U.com/auth/login/";

}

const appConfig = process.env.NODE_ENV === "development" 
? new DevelopmentConfig() : new ProductionConfig();

export default appConfig;