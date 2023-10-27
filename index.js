const axios = require('axios');
const { data } = require('./datos');

baseURL = 'https://moneyedwren.backendless.app/api/data/';

const getProducts = async () => {
    const response = await axios.get(`${baseURL}products`);
    return response.data;

}

const getProduct = async (id) => {
    const response = await axios.get(`${baseURL}products/${id}`);
    return response.data;
}

const createProduct = async (product) => {
    const response = await axios.post(`${baseURL}products`, product);
    return response.data;
}

const updateProduct = async (id, product) => {
    const response = await axios.put(`${baseURL}products/${id}`, product);
    return response.data;
}

const deleteProduct = async (id) => {
    const response = await axios.delete(`${baseURL}products/${id}`);
    return response.data;
}


//CRUD   Create, Read, Update, Delete

//crea los registros del archivo datos.js
/* (async () => {
    console.log("total de datos a grabar: ", data.length);
    const products = await getProducts();
    data.map(async (product, index) => {
        const result = await createProduct(product);
        console.log(`${index} - producto creado ${product.objectId}  result:${JSON.stringify(result, null, 4)}`);
    });
})(); */

//consulta todos los registros
/* (async () => {
    console.log("total de datos a grabar: ", data.length);
    const products = await getProducts();
    products.map((product, index) => {
        console.log({ index: index, objectId: product.objectId, name: product.name, apr: product.apr, type: product.type });
    });
    console.log(`Total de registros: ${products.length} `);

})(); */

//actualiza el registro 0 del backendless
/* (async () => {
    const products = await getProducts();
    const result = await updateProduct(products[0].objectId, { apr: 0.0 });
    console.log(`result:${JSON.stringify(result, null, 4)}`);

})(); */


//borra todos los registros
/* (async () => {
    const products = await getProducts();
    products.map(async (product, index) => {
        const result = await deleteProduct(product.objectId);
        console.log(`${index} - producto borrado ${product.objectId}  result:${JSON.stringify(result, null, 4)}`);
    });
})(); */








