// All API endpoints

export const root_api_endpoint = '/api/';

export const rest_auth_base_endpoint = root_api_endpoint + 'rest-auth/';

export const auth_api_endpoints = { 
    login: rest_auth_base_endpoint + 'login/',
    logout: rest_auth_base_endpoint + 'logout/',
    user: rest_auth_base_endpoint + 'user/'
};

export const root_api_app_endpoint = root_api_endpoint + 'app/';

export const menu_api_endpoint = root_api_app_endpoint + 'menu/';

export const menu_api_endpoints = {
    menu_all: menu_api_endpoint + 'all/',
    menu: menu_api_endpoint,
}

export const bill_api_endpoint = root_api_app_endpoint + 'bill/';

export const bill_api_endpoints = {
    bill_all: bill_api_endpoint + 'all/',
    bill: bill_api_endpoint,
    bill_data: bill_api_endpoint + 'data/'
}
