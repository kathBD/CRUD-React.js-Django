import React, { useContext, useEffect, useState } from 'react'
import prodcss from "./ProductsList.module.css";
import * as FaIcons from 'react-icons/fa';
import { Modal, ModalBody, ModalHeader, ModalFooter } from "reactstrap";

import * as ManagerProductsServer from './ManagerProductsServer'
import { UserContext } from '../../App';
import { useHistory, useParams } from 'react-router-dom';


const ManagerProducts = () => {
    const [products, setProducts]= useState([]);
    const value = useContext(UserContext)
    const [modalAdd, setModalAdd]=value.modalAdd;

    const history = useHistory();
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
    // open y close modal
    const openmodalAdd=()=>{
        setModalAdd(!modalAdd);

    }
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
    const handleSubmit= async e=>{
        e.preventDefault();
        // console.log(addProducts)
        try{
            let res;
            res= await ManagerProductsServer.registerProduct(addProducts)
            const data = await res.json();
            if(data.message === "Success"){
                setAddProducts(initialState)
                listProducts();
            }
            console.log(data)
        }catch(err){
            console.log(err)
        }
    }

    // eliminar fila de la tabla
    const handleDelete = async (productId)=>{
        await ManagerProductsServer.deleteProduct(productId);
        listProducts();
    }

    //editar iuna tabla
    const [modalEdit, setModalEdit] = useState(false);
    const edit=()=>{

        console.log(modalEdit)
        setModalEdit(!modalEdit);
        console.log(modalEdit)
    }
    const params = useParams();
    console.log(params);
    
    const modalsAdds=()=>{
        history.push();
        edit();
    }
    return (
        <div className="container">
        <div className={prodcss.title}>
        <h5>Lista de Productos</h5>
        <div className={prodcss.searh}>
    

        </div>

        </div>
    {/* table of the products */}
        <button type="button"  className="btn btn-primary" class="btn btn-primary" onClick={openmodalAdd}> + Agregar </button>
        <table className="table table-bordered table-sm table-hover table-responsive " id="content" >
        <thead className="active table-dark">
            <tr className="text-center">
                <th className="col ">ID</th>
                <th className="col">Nombre</th>
                <th scope="col">Proveedor</th>
                <th scope="col">Existencia</th>
                <th scope="col">Fecha de Llegada</th>
                <th scope="col">Descripción</th>
                <th scope="col">Categoría</th>
                <th scope="col">Acciones</th>
            </tr>
        </thead>
        <tbody className="text-center">
            {/* renderizado de la base de datos de los productos */}
            {products.map((product) => (
                <tr className={prodcss.table} key={product.id}>
                    <td className="col-md-1 ">{product.id}</td>
                    <td className="col-md-1">{product.pro_name}</td>
                    <td className="col-md-1">{product.pro_provider}</td>
                    <td className="col-md-1">{product.pro_existences}</td>
                    <td className="col-md-1">{product.pro_date}</td>
                    <td className="col-md-2 ">{product.pro_description}</td>
                    <td className="col-md-1">{product.pro_category}</td>
                    <td className="col-md-1" >
                    <button clasName={prodcss.btn} className="btn btn-primary btn-xs" onClick={modalsAdds} ><FaIcons.FaRegEdit color="#fff" size='15px' padding='2px' /></button>
                    <button clasName={prodcss.btn}  className="btn btn-danger btn-xs" onClick={()=>product.id && handleDelete(product.id)}><FaIcons.FaTrashAlt color="#fff" size='15px' padding='2px' /></button>
          
                    </td>
          
                </tr>
                ))}
            </tbody>
        </table>
      {/* //modal table add products */}
      <Modal isOpen={modalAdd} >
            <ModalHeader>
            <div>
                <h3>Agregar Producto</h3>
            </div>
            </ModalHeader>
            <ModalBody>
                <form  className="form-group" onSubmit={handleSubmit}>
                <label >ID</label>
                <input className="form-control" readOnly type="text" name="id" onChange={handleInputChangue}
                //   value={product[product.length-1].id+1}
                />
                <br />
                <label>Nombre</label>
                <input className="form-control" type="text" name="pro_name" value={addProducts.pro_name} onChange={handleInputChangue}/>
                <br />
                <label>Proveedor</label>
                <input className="form-control" type="text" name="pro_provider" value={addProducts.pro_provider} onChange={handleInputChangue}/>
                <br />
                <label>Existencia</label>
                <input className="form-control" type="text" name="pro_existences" value={addProducts.pro_existences} onChange={handleInputChangue}/>
                <br />
                <label>Fecha</label>
                <input className="form-control" type= "pro_date" 
                // eslint-disable-next-line react/jsx-no-duplicate-props
                type="pro_datetime-local" 
                name="pro_date" value={addProducts.pro_date} onChange={handleInputChangue}/>
                <br />
    
                <label>Descripción</label>
                <input className="form-control" type="text" name="pro_description" value={addProducts.pro_description} onChange={handleInputChangue}/>
                <br />
                <label>Categoria</label>
                <input className="form-control" type="text" name="pro_category" value={addProducts.pro_category} onChange={handleInputChangue}/>
                <button className="btn btn-primary"  type='submit' onClick={openmodalAdd}>Agregar</button>
            </form>
            </ModalBody>
            |<ModalFooter>
                <button className="btn btn-danger" onClick={openmodalAdd}>Cancelar</button>
        </ModalFooter>
                </Modal>

        {/* edit product */}

        <Modal isOpen={modalEdit}>
                <ModalHeader>
                <div>
                    <h3>Editar Producto</h3>
                </div>
                </ModalHeader>
                <ModalBody>
            <form className="form-group">
                <label>ID</label>
                <input className="form-control" readOnly type="text" name="id"/>
                <br />
                <label>Nombre</label>
                <input className="form-control" type="text" name="nombre"/>
                <br />
                <label>Proveedor</label>
                <input className="form-control" type="text" name="proveedor"/>
                <br />
                <label>Existencia</label>
                <input className="form-control" type="text" name="existencia"/>
                <br />
                <label>Fecha</label>
                <input className="form-control" type="data" name="pro_date"/>
                <br />
        
                <label>Descripción</label>
                <input
                className="form-control" type="text" name="Descripción"/>
                <br />

            <label>Categoria</label>
            <input className="form-control" type="text" name="Descripción"/>
                <br />
        </form>
            
        </ModalBody>
        <ModalFooter>
        <button className="btn btn-primary">Actualizar</button>
        <button className="btn btn-danger" onClick={edit}> cancelar </button>
            </ModalFooter>
            </Modal>
        </div>
    )
}

export default ManagerProducts
