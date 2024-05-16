export const API_BASE_URL = 'http://185.231.115.153:4040';
export enum BrandAPI {
    CREATE = '/api/v1/CreateBrand',
    GET_LIST = '/api/v1/GetBrands',
    DELETE = '/api/v1/DeleteBrand',
    UPDATE= '/api/v1/UpdateBrand'
}
export enum CourierAPI {
    CREATE = '/api/v1/CreateCourierOrder',
    GET_LIST = '/api/v1/GetCourierOrdersWithPagination',
    DELETE = '/api/v1/DeleteCourierOrder',
    UPDATE= '/api/v1/UpdateCourierOrder'
}
export enum CustomerAPI {
    CREATE = '/api/v1/CreateCustomer',
    DELETE = '/api/v1/DeleteCustomer',
    GET_LIST = '/api/v1/GetCustomersWithPagination',
    UPDATE = '/api/v1/UpdateCustomer'
}
export enum HubAPI {
    CREATE = '/api/v1/CreateHub',
    GET_LIST = '/api/v1/GetHubs',
    DELETE = '/api/v1/DeleteHub',
    EDIT = '/api/v1/UpdateHub',
    EDIT_MANAGER = '/api/v1/UpdateUserHub',
    GET_MANAGER = '/api/v1/GetUserHub'
}

export enum HubPageAPI {
    CREATE = '/api/v1/CreateHubPage',
    CREATE_UNIT_PAGE_PROPERTY = '/api/v1/CreateUnitPageProperty',
    DELETE = '/api/v1/DeleteHubPageProperty',
    GET_PROPERTIES = '/api/v1/GetPageProperties',
    UPDATE_PAGE_PROPERTY = '/api/v1/UpdatePageProperty',
}
export enum HubProductCategoryAPI {
    CREATE = '/api/v1/CreateHubProductCategory',
    DELETE = '/api/v1/DeleteHubProductCategory',
    GET_LIST = '/api/v1/GetHubProductCategories',
    UPDATE = '/api/v1/GetHubProductCategories'
}
export enum HubProductLabelAPI {
    CREATE = '/api/v1/CreateHubProductLabel',
    MANAGER_CREATE = '/api/v1/CreateHubUserProductLabel',
    DELETE = '/api/v1/CreateHubUserProductLabel',
    MANAGER_DELETE = '/api/v1/DeleteHubUserProductLabel',
    GET_LIST = '/api/v1/GetHubProductLabels',
    MANAGER_GET_LIST = '/api/v1/GetHubUserProductLabels',
    UPDATE = '/api/v1/GetHubProductCategories',
    MANAGER_UPDATE = '/api/v1/UpdateHubUserProductLabel',
}
export enum InvoiceAPI {
    GET_LIST = '/api/v1/UpdateHubUserProductLabel'
}
export enum OrderAPI {
    CREATE = '/api/v1/CreateOrder',
    DELETE = '/api/v1/DeleteOrder',
    GET_LIST = '/api/v1/GetOrdersWithPagination',
    UPDATE = '/api/v1/UpdateOrder'
}
export enum OrderItemAPI {
    CREATE = '/api/v1/CreateOrderItem',
    DELETE = '/api/v1/DeleteOrderItem',
    GET_LIST = '/api/v1/GetOrderItems',
    UPDATE = '/api/v1/UpdateOrderItem'
}
export enum OrderStatusAPI {
    CREATE = '/api/v1/CreateOrderStatus',
    DELETE = '/api/v1/DeleteOrderStatus',
    GET_LIST = '/api/v1/GetOrderStatuses',
    UPDATE = '/api/v1/UpdateOrderStatus'
}
export enum ProductAPI {
    CREATE = '/api/v1/CreateProduct',
    DELETE = '/api/v1/DeleteProduct',
    GET_LIST = '/api/v1/GetProductsWithPagination',
    UPDATE = '/api/v1/GetProductsWithPagination'
}
export enum ProductPropertyAPI {
    MANAGER_CREATE = '/api/v1/CreateProductProperty',
    MANAGER_CREATE_UNIT = '/api/v1/CreateUnitProductProperty',
    DELETE = '/api/v1/DeleteProductProperty',
    GET_LIST = '/api/v1/GetProductsWithPagination',
}
export enum ProductTagAPI {
    CREATE_PRODUCT_TAG = '/api/v1/CreateProductTags',
    DELETE_PRODUCT_TAG = '/api/v1/DeleteProductTag',
    PRODUCT_TAGS = '/api/v1/GetProductTags'
}

export enum UserAPI {
    LOGIN = API_BASE_URL + '/api/v1/User/Authenticate',
    CREATE_USER = '/api/v1/CreateUser',
    DELETE_USER = '/api/v1/DeleteUser',
    GET_USER_ROLES = '/api/v1/GetUserRoles',
    BULK_USER_IMPORT = '/api/v1/ExcelUserImport',
    GET_LIST = '/api/v1/GetUsers',
    REFRESH_TOKEN = '/api/v1/User/RefToken'
}