//auth urls
export const LOGIN_USER = "user/password-less-login";
export const VERRIFY_VERIFICATION_CODE = "user/verifyAccount";
export const RESEND_VERIFICATION_CODE = "user/resendSmsOnMobile";
export const REGISTER_USER = "auth/register";

//brand urls
export const GET_BRAND_SETTINGS = "branding/getBrandSettings";
export const GET_BRAND_MENU = "items/getBrandMenu";
export const GET_BRAND_ACTIVE_SERVICES = "brands/get-brand-active-services";
export const GET_BRAND_DELIVERY_AREAS = "store/getBrandDeliveryAreas";

//store urls
export const GET_STORES_BY_AREA_ID = "store/getStoresByDeliveryArea";
export const GET_STORE_MENU = "items/getStoreMenu";
export const GET_STORE_INFO_POPULATED = "store/getStoreInfoPopulated";

//user urls
export const GET_USER_ADDRESSES_WITH_AREAID =
  "user/getCurrentUserAddressesWithAreaId";
export const ADD_USER_ADDRESSES = "user/addUserAddress";

//order urls
export const PLACE_ORDER = "order/placeOrder";
export const GET_MY_ORDERS = "order/getCustomerOrders";
export const GET_ORDER_INFO_POPULATED = "order/get-order-tracking-info/";

//discount urls
export const GET_DISCOUNTS = "discounts/";
export const VALIDATE_DISCOUNT = "discounts/validate-discount";
