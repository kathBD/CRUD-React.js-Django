const  API_URL='http://127.0.0.1:8000/apiC/products/';

export const listProducts= async ()=>{
    return await fetch(API_URL);
}
export const getProducts= async (productId)=>{
    return await fetch(`${API_URL}${productId}`)
}


export const registerProduct= async (newProduct)=>{
    return await fetch(API_URL,{
        method:'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body:JSON.stringify({
            "pro_name": String(newProduct.pro_name),
            "pro_provider": String(newProduct.pro_provider),
            "pro_existences": parseInt(newProduct.pro_existences),
            "pro_date": parseInt(newProduct.pro_date),
            "pro_description": String(newProduct.pro_description),
            "pro_category": String(newProduct.pro_category),
        })
    });
}
export const deleteProduct = async (productId) => {
    return await fetch(`${API_URL}${productId}`, {
        method: 'DELETE'
    });
};