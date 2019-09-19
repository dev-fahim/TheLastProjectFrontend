// All API endpoints

export const root_api_endpoint = 'http://127.0.0.1:8000/api/';

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
