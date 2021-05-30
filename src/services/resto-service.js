export default class RestoService {

    getResource = async (url) => {
        const res = await fetch(`http://localhost:3000${url}`);

        if(!res.ok) {
            throw new Error(`Could not fetch ${url}` +
            `, received ${res.status}`); 
        }

        return await res.json();
    }

    getMenuItems = async () => {
        const res = await this.getResource('/menu/');
        return res;
    }

    postResource = async (url, data) => {
        const res = await fetch(`http://localhost:3000${url}`, {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if(!res.ok) {
            throw new Error(`Could not fetch ${url}` +
            `, received ${res.status}`); 
        }

        return await res.json();
    }

    postOrders = async (data) => {
        const res = await this.postResource('/orders', data);
        return res;
    }
}