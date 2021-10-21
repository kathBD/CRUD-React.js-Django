import { useContext } from "react";
import { Modal, ModalBody, ModalHeader, ModalFooter } from "reactstrap";
import { UserContext } from "../../App";
import './ProductsList.module.css'

const ModalAdd = () => {
    const value = useContext(UserContext)
    const [modalAdd, setModalAdd]=value.modalAdd;
    // const toogleModal=()=>{
    //     setModalAdd(false)
    // }
    const openmodalAdd=()=>{
        // setProductSelec(null);
        setModalAdd(!modalAdd);
      }    
    return (
        <>
          <Modal isOpen={modalAdd} >
            <ModalHeader>
              <div>
                <h3>Agregar Producto</h3>
              </div>
            </ModalHeader>
            <ModalBody>
                  <form  className="form-group">
                <label >ID</label>
                <input
                  className="form-control"
                  readOnly
                  type="text"
                  name="id"
                //   value={}
                //   value={product[product.length-1].id+1}
               
                />
                  <br />
                  <label>Nombre</label>
            <input
                className="form-control"
                type="text"
                name="nombre"
                // value={}
               
                
                
                />
                <br />
            <label>Proveedor</label>
            <input
                className="form-control"
                type="text"
                name="proveedor"
                // value={}
            
            
            />
                <br />
                <label>Existencia</label>
            <input
                className="form-control"
                type="text"
                name="existencia"
                // value={}
                              />
                <br />
                <label>Fecha</label>
            <input
                className="form-control"
                type= "pro_date" 
                // eslint-disable-next-line react/jsx-no-duplicate-props
                type="pro_datetime-local"
                name="date"
                // value={}
                        />
                <br />
    
                <label>Descripción</label>
            <input
                className="form-control"
                type="text"
                name="Descripción"
                // value={}
                 />
                <br />

        <label>Categoria</label>
        <input
            className="form-control"
            type="text"
            name="pro_category"
            // value={}
                />
            </form>
            </ModalBody>
            |<ModalFooter>
            <button className="btn btn-primary"
             type='submit' >
                Agregar
            </button>
            <button
                className="btn btn-danger"
                onClick={openmodalAdd}    
            >
                Cancelar
            </button>

                </ModalFooter>
                </Modal>
        </>
    )
}

export default ModalAdd
