const API_BASE = 'http://localhost:3000/';

export const useApi = () => {


    const call = async <R, P = object>(url: string, method: 'GET' | 'DELETE' | 'POST' | 'PUT', body?: P) => {

        const commonData = {
            method,
            headers: {
                'Content-Type': 'aplication/json',

            }
        }

        const reqData = body ? {
            ...commonData,
            body: JSON.stringify(body)
        } : commonData

        try {
            const response = await fetch(`${API_BASE}${url}`, reqData);

            if (response.ok) {
                const data: R = await response.json();
                return data
            } else {
                const apiError: string = await response.text();
                throw new Error(apiError);
            }


        } catch (e) {
            throw new Error('Error ocurred')
        } finally {
        }
    }

    const apiDelete = async <R>(url: string) => {
        return await call<R>(url, 'DELETE');
    }

    const apiGet = async <R>(url: string) => {
        return await call<R>(url, 'GET');
    }

    const apiPost = async<R, P>(url: string, data: P) => {
        return await call<R, P>(url, 'POST', data);
    }

    const apiEdit = async <R, P>(url: string, data: P) => {
        return await call<R, P>(url, 'PUT', data);
    }

    return {
        apiGet, apiDelete, apiPost, apiEdit
    }
};