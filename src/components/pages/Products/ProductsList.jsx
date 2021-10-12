import React,   {useState } from "react";
import prodcss from "./ProductsList.module.css";
import * as FaIcons from 'react-icons/fa';
import { Modal, ModalBody, ModalHeader, ModalFooter, Input } from "reactstrap";

const ProductsList = () => {
  const dataProducts = [
    {
      id: 1,
      pro_name: "Lechuga",
      pro_provider: "Maury Fruver",
      pro_existences: 30,
      pro_date: "2022-1-14 11:00:00",
      pro_description: "Empaques de 300grs",
      pro_category: "Vegetales y Frutas",
    },
    {
      id: 2,
      pro_name: "Dulces Gomas Aros GRISSLY",
      pro_provider: "Colombina",
      pro_existences: 19,
      pro_date: "2020/04/05 18:00:00",
      pro_description:
        "Gomas azucaradas en forma de aros, sabor a durazno, fresa y manzana verde, paquete de 50 unidades de 6 gramos cada una",
      pro_category: "Dulceria",
    },
    {
      id: 3,
      pro_name: "Leche en polvo",
      pro_provider: "colanta",
      pro_existences: 9,
      pro_date: "2020/04/07 18:00:00",
      pro_description: " Los mejores nutrientes y las proteínasa",
      pro_category: "Lacteos",
    },
    {
      id: 4,
      pro_name: "Pollo entero con viceras",
      pro_provider: "yo soy el pollo",
      pro_existences: 10,
      pro_date: "2021/09/10 15:00:00",
      pro_description: "Pollo entero con viceras marinado",
      pro_category: "Cárnicos",
    },
  ];

  const [data, setData] = useState(dataProducts);
  const [modalEdit, setModalEdit] = useState(false);
  const [modalDelete, setModalDelete] = useState(false);
  const [modalAdd, setModalAdd] = useState(false);

  const [productSelec, setProductSelec] = useState({
    id: "",
    pro_name: "",
    pro_provider: "",
    pro_existences: "",
    pro_date: "",
    pro_description: "",
    pro_category: "",
  });

  const choice=(product, set)=>{
    setProductSelec(product);
    (set==='Edit')?setModalEdit(true):setModalDelete(true)
      }
      const handleChange=e=>{
        const {name, value}=e.target;
        setProductSelec((prevState)=>({
          ...prevState,
          [name]: value
        }));
      }
      const edit=()=>{
        let dataNew=data;
        dataNew.map(product=>{
          if(product.id===productSelec.id){
            product.pro_name=productSelec.pro_name;
            product.pro_provider=productSelec.pro_provider;
            product.pro_existences=productSelec.pro_existences;
            product.pro_date=productSelec.pro_date; 
            product.pro_description=productSelec.pro_description;
            product.pro_category=productSelec.pro_category;  
            
        }
        })
        setData(dataNew);
        setModalEdit(false);
      }

      const Delete =()=>{
        setData(data.filter(product=>product.id!==productSelec.id));
        setModalDelete(false);
      }
    
      const openmodalAdd=()=>{
        setProductSelec(null);
        setModalAdd(true);
      }

      const Add =()=>{
        let valadd=productSelec;
        valadd.id=data[data.length-1].id+1;
        let dataNew = data;
        dataNew.push(valadd);
        setData(dataNew);
        setModalAdd(false);
      }


  return (
    
    <div className="container">
      <div className={prodcss.title}>
        <h5>Lista de Productos</h5>
      <div className={prodcss.searh}>
      

      </div>

     </div>
      <button type="button"  className="btn btn-primary" class="btn btn-primary"  onClick={()=>openmodalAdd( )}> + Agregar </button>
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
          {data.map((product) => (
            <tr className={prodcss.table}>
              <td className="col-md-1 ">{product.id}</td>
              <td className="col-md-1">{product.pro_name}</td>
              <td className="col-md-1">{product.pro_provider}</td>
              <td className="col-md-1">{product.pro_existences}</td>
              <td className="col-md-1">{product.pro_date}</td>
              <td className="col-md-2 ">{product.pro_description}</td>
              <td className="col-md-1">{product.pro_category}</td>
              <td className="col-md-1" >
                <button clasName={prodcss.btn} className="btn btn-primary btn-xs" onClick={()=>choice(product, 'Edit')}><FaIcons.FaRegEdit color="#fff" size='15px' padding='2px' /></button> {"   "}
                 <button clasName={prodcss.btn} className="btn btn-danger btn-xs"onClick={()=>choice(product, 'Delete')}><FaIcons.FaTrashAlt color="#fff" size='15px' padding='2px' /></button>
           
              </td>
             
            </tr>
          ))}
        </tbody>
      </table>
            <Modal isOpen={modalEdit}>
              <ModalHeader>
                <div>
                  <h3>Editar Producto</h3>
                </div>
              </ModalHeader>
              <ModalBody>
              <div className="form-group">
            <label>ID</label>
            <input
              className="form-control"
              readOnly
              type="text"
              name="id"
              value={productSelec && productSelec.id}
              onChange={handleChange}
            />
              <br />
              <label>Nombre</label>
            <input
              className="form-control"
              type="text"
              name="nombre"
              value={productSelec && productSelec.pro_name}
              onChange={handleChange}
            
            
            />
            <br />
            <label>Proveedor</label>
            <input
              className="form-control"
              type="text"
              name="proveedor"
              value={productSelec && productSelec.pro_provider}
              onChange={handleChange}
            />
            <br />
            <label>Existencia</label>
            <input
              className="form-control"
              type="text"
              name="existencia"
              value={productSelec && productSelec.pro_existences}
              onChange={handleChange}
            />
            <br />
            <label>Fecha</label>
            <input
              className="form-control"
              type="data"
              name="pro_date"
              value={productSelec && productSelec.pro_date}
              onChange={handleChange}
            />
            <br />
       
            <label>Descripción</label>
            <input
              className="form-control"
              type="text"
              name="Descripción"
              value={productSelec && productSelec.pro_description}
              onChange={handleChange}
            />
              <br />
       
       <label>Categoria</label>
       <input
         className="form-control"
         type="text"
         name="Descripción"
         value={productSelec && productSelec.pro_category}
         onChange={handleChange}
       />
            <br />
            </div>
              </ModalBody>
              <ModalFooter>
              <button className="btn btn-primary"
          onClick={()=>edit()}>
           Actualizar
          </button>
          <button
            className="btn btn-danger"
            onClick={()=>setModalEdit(false)}
          >
              cancelar
          </button>
          
              </ModalFooter>
          </Modal>
            
      <Modal isOpen={modalDelete}>
        <ModalBody>
          Estás Seguro que deseas eliminar el producto { productSelec && productSelec.pro_name}
        </ModalBody>
        <ModalFooter>
          <button className="btn btn-danger" onClick={()=>Delete()}>
            Sí
          </button>
          <button
            className="btn btn-secondary"
            onClick={()=>setModalDelete(false)}
          >
            No
          </button>
        </ModalFooter>
      </Modal>
      <Modal isOpen={modalAdd}>
        <ModalHeader>
          <div>
            <h3>Agregar Producto</h3>
          </div>
        </ModalHeader>
        <ModalBody>
              <div className="form-group">
            <label>ID</label>
            <input
              className="form-control"
              readOnly
              type="text"
              name="id"
              value={data[data.length-1].id+1}
           
            />
              <br />
              <label>Nombre</label>
            <input
              className="form-control"
              type="text"
              name="nombre"
              value={productSelec ? productSelec.pro_name: ''}
              onChange={handleChange}
            
            
            />
            <br />
            <label>Proveedor</label>
            <input
              className="form-control"
              type="text"
              name="proveedor"
              value={productSelec ? productSelec.pro_provider: ''}
        
            />
            <br />
            <label>Existencia</label>
            <input
              className="form-control"
              type="text"
              name="existencia"
              value={productSelec ? productSelec.pro_existences: ''}
              onChange={handleChange}
            />
            <br />
            <label>Fecha</label>
            <input
              className="form-control"
              type= "date" 
              type="datetime-local"
              name="pro_date"
              value={productSelec ? productSelec.pro_date: ''}
              onChange={handleChange}
            />
            <br />
       
            <label>Descripción</label>
            <input
              className="form-control"
              type="text"
              name="Descripción"
              value={productSelec ? productSelec.pro_description: ''}
              onChange={handleChange}
            />
              <br />
       
       <label>Categoria</label>
       <input
         className="form-control"
         type="text"
         name="Descripción"
         value={productSelec ? productSelec.pro_category: ''}
         onChange={handleChange}
       />
        </div>
         </ModalBody>
         <ModalFooter>
          <button className="btn btn-primary"
          onClick={()=>Add()}>
            Agregar
          </button>
          <button
            className="btn btn-danger"
            onClick={()=>setModalAdd(false)}
          >
            Cancelar
          </button>
        </ModalFooter>
            </Modal>

    </div>
  );
};

export default ProductsList;
