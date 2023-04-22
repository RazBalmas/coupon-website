class AppConfig {

    public loginUrl="http://8080/auth/login/";
}

class DevelopmentConfig {
    public generalServiceUrl = "http://localhost:8080/api/general/";
    public adminServiceUrl = "http://localhost:8080/api/admin/";
    public companyServiceUrl = "http://localhost:8080/api/company/";
    public customerServiceUrl = "http://localhost:8080/api/customer/";
    public authUrl="http://localhost:8080/auth/";
    
    
}


class ProductionConfig {
    public generalServiceUrl = "http://localhost:8080/api/general/";
    public adminServiceUrl = "http://localhost:8080/api/admin/";
    public companyServiceUrl = "http://localhost:8080/api/company/";
    public customerServiceUrl = "http://localhost:8080/api/customer/";
    public authUrl="http://localhost:8080/auth/login/";
    // public ProductsUrl = "http://northwind.com/api/products/";
    // public ProductsImagesUrl = "http://northwind.com/api/products/images/";
   

}

const appConfig = process.env.NODE_ENV === "development" 
? new DevelopmentConfig() : new ProductionConfig();

export default appConfig;