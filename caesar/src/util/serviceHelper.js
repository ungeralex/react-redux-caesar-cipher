export function requestOptions(method, key, payload = {}) {
    const requestOptions = {
        method
    };
    Object.assign(
        requestOptions,
        method === 'GET' ? undefined : { body: JSON.stringify({key:  payload}) }
    );
    return requestOptions;
}

export function handleResponse(response) {
    if (!response.ok) {
        return Promise.reject(response.statusText);
    }
    return response.json();
}

export const URL = '/api';