import { useState, useEffect} from 'react';
import * as ManagerProductsServer from '../ManagerProductsServer'
import { useParams } from 'react-router-dom';


export const EditProducts=()=>{
    const [products, setProducts]= useState([]);

    // peticion a la API
    const listProducts= async () => {
        try{
            const res = await ManagerProductsServer.listProducts();
            const data = await res.json();
            // console.log(data)
            console.log('gol')
            
            setProducts(data.products)
            
        }catch(err){
            
            console.log(err)
        }
    }
    useEffect(() => {
        listProducts();
    }, [])
    // add products
    const initialState={
        id: "",
        pro_name: "",
        pro_provider: "",
        pro_existences: "",
        pro_date: "",
        pro_description: "",
        pro_category: "",
    }
    const [addProducts, setAddProducts]=useState(initialState)
    const handleInputChangue = e=>{
        // console.log(e.target.name)
        // console.log(e.target.value)
        setAddProducts({ ...addProducts,[e.target.name]: e.target.value})
    }

    const getProduct= async(productId)=>{
        try{
            const res = await ManagerProductsServer.getProducts(productId);
            const data = await res.json();
            // console.log('')
            const {pro_name,pro_provider,pro_existences,pro_date,pro_description,pro_category}= data.products;
            setProducts({pro_name,pro_provider,pro_existences,pro_date,pro_description,pro_category})
        }catch(err){
            console.log(err)
        }
    }
    const params =useParams();
    console.log(params)
    
    useEffect(() => {
        if(params.id){
            getProduct(params.id)
        }
    }, [])

 

    return(
        <div className="container">
             {/* edit product */}
            
        
                <div>
                    <h3>Editar Producto</h3>
                </div>
               
            <form className="form-group">
                <label>ID</label>
                <input className="form-control" readOnly type="text" name="id" onChange={handleInputChangue}/>
                <br />
                <label>Nombre</label>
                <input className="form-control" type="text" name="pro_name" value={addProducts.pro_name} onChange={handleInputChangue} />
                <br />
                <label>Proveedor</label>
                <input className="form-control" type="text" name="pro_provider" value={addProducts.pro_provider} onChange={handleInputChangue}/>
                <br />
                <label>Existencia</label>
                <input className="form-control" type="text" name="pro_existences" value={addProducts.pro_existences} onChange={handleInputChangue}/>
                <br />
                <label>Fecha</label>
                <input className="form-control" type="pro_datetime-local" 
                name="pro_date" value={addProducts.pro_date} onChange={handleInputChangue}/>
                <br />
        
                <label>Descripción</label>
                <input
                className="form-control" type="text" name="pro_description" value={addProducts.pro_description} onChange={handleInputChangue}/>
                <br />

            <label>Categoria</label>
            <input className="form-control" type="text" name="pro_category" value={addProducts.pro_category} onChange={handleInputChangue}/>
                <br />
        </form>
            
     
        <button className="btn btn-primary" onClick={function(){getProduct()}}>Actualizar</button>
        <button className="btn btn-danger" > cancelar </button>
            
        </div>
    )
}

export default EditProducts