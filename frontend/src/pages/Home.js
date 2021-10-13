import React from 'react'
import homecss from './Home.module.css'
import * as FaIcons from 'react-icons/fa';



const Home = () => {
    
    return (
        <div className={homecss.content}>
            <div className="content-wrapper">
                <div className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-md-6">
                                <h3 className="m-0 text-warning text-center" >Dashboard v.1 </h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mb-4">

                    <div className="col-sm-6">
                        <div class="card bg-success text-white">
                            <div className="card-body">
                                <h5>Misión</h5>
                                <p className="card-text">Deleitar a nuestros clientes con una experiencia de compra. Brindar el mejor servicio y atención al cliente.</p>

                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="card bg-warning text-white">
                            <div className="card-body">
                                <h5>Visión</h5>
                                <p className="card-text">Ofrecer una experiencia plena en servicios innovadores a nuestros clientes bajo un ambiente cálido, con productos únicos en calidad.</p>

                            </div>
                        </div>
                    </div>
                </div>


                <section className="content">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-3 col-6 mb-3">

                                <div className="small-box bg-info text-center Small shadow">
                                    <div className="inner text-white">
                                        <h3>40</h3>
                                        <h6>Nuevos pedidos</h6>
                                    </div>
                                    <div className="icon">
                                        <FaIcons.FaTruck color="#fff" size='4em' />
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-6 ">
                                <div className="small-box bg-success text-center Small shadow">
                                    <div className="inner text-white">
                                        <h3>189</h3>
                                        <h6>Productos</h6>
                                        <FaIcons.FaOpencart color="#fff" size='4em' />
                                    </div>
                                    <div className="icon">
                                        <i className="ion ion-stats-bars" />
                                    </div>

                                </div>
                            </div>
                            <div className="col-lg-3 col-6 ">
                                <div className="small-box bg-warning text-center Small shadow">
                                    <div className="inner text-white">
                                        <h3>14</h3>
                                        <h6>Usuarios registrados</h6>
                                        <FaIcons.FaUserCheck color="#fff" size='4em' />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-6 ">
                                <div className="small-box bg-danger text-center Small shadow">
                                    <div className="inner text-white">
                                        <h3>65</h3>
                                        <h6>Proveedores</h6>
                                        <FaIcons.FaIndustry color="#fff" size='4em' />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <section className="col-lg-6 Small shadow">
                                <div className="card width: 18rem">
                                    <div className="card-header bg-danger text-white">
                                        <h3>
                                            Pedidos Confirmados
                                        </h3>
                                    </div>
                                    <div className="card-deck">
                                        <ul className="todo-list" data-widget="todo-list">
                                            <li>

                                                <span className="handle">
                                                    <i className="fas fa-ellipsis-v" />
                                                    <i className="fas fa-ellipsis-v" />
                                                </span>

                                                <div className="icheck-primary d-inline ml-2">
                                                    <input type="checkbox" defaultValue name="todo1" id="todoCheck1" />
                                                    <label htmlFor="todoCheck1" />
                                                </div>

                                                <span className="text">Pedidos atrasados</span>

                                                <div className="tools">
                                                    <i className="fas fa-edit" />
                                                    <i className="fas fa-trash-o" />
                                                </div>
                                            </li>
                                            <li>
                                                <span className="handle">
                                                    <i className="fas fa-ellipsis-v" />
                                                    <i className="fas fa-ellipsis-v" />
                                                </span>
                                                <div className="icheck-primary d-inline ml-2">
                                                    <input type="checkbox" defaultValue name="todo2" id="todoCheck2" defaultChecked />
                                                    <label htmlFor="todoCheck2" />
                                                </div>
                                                <span className="text">Pedidos con la entrega pendiente de procesar</span>
                                                <small className="badge badge-info"><i className="far fa-clock" /> 4 hours</small>
                                                <div className="tools">
                                                    <i className="fas fa-edit" />
                                                    <i className="fas fa-trash-o" />
                                                </div>
                                            </li>
                                            <li>
                                                <span className="handle">
                                                    <i className="fas fa-ellipsis-v" />
                                                    <i className="fas fa-ellipsis-v" />
                                                </span>
                                                <div className="icheck-primary d-inline ml-2">
                                                    <input type="checkbox" defaultValue name="todo3" id="todoCheck3" />
                                                    <label htmlFor="todoCheck3" />
                                                </div>
                                                <span className="text">Salida de mercancías pendientes</span>
                                                <small className="badge badge-warning"><i className="far fa-clock" /> 1 day</small>
                                                <div className="tools">
                                                    <i className="fas fa-edit" />
                                                    <i className="fas fa-trash-o" />
                                                </div>
                                            </li>
                                            <li>
                                                <span className="handle">
                                                    <i className="fas fa-ellipsis-v" />
                                                    <i className="fas fa-ellipsis-v" />
                                                </span>
                                                <div className="icheck-primary d-inline ml-2">
                                                    <input type="checkbox" defaultValue name="todo4" id="todoCheck4" />
                                                    <label htmlFor="todoCheck4" />
                                                </div>
                                                <span className="text">Entragas Pedientes</span>
                                                <small className="badge badge-success"><i className="far fa-clock" /> 3 days</small>
                                                <div className="tools">
                                                    <i className="fas fa-edit" />
                                                    <i className="fas fa-trash-o" />
                                                </div>
                                            </li>


                                        </ul>
                                    </div>


                                    <div className="card-footer clearfix ">
                                        <button type="button" className="btn btn-info float-right"><i className="fas fa-plus" /> Add item</button>
                                    </div>
                                </div>

                            </section>

                            <section className="col-lg-5 ">
                                {/* Map card */}
                                <div className="card bg-info">
                                    <div className="card-header border-0">
                                        <h3 className="card-title">

                                            Visitantes
                                        </h3>
                                    
                                    </div>
                                    <div className="card-body">
                                        <div className="row">

                                            <div className='c'>
                                                <div className="card width: 18rem;">
                                                    <div className="card-body">
                                                        <h5 className="card-title">15.236</h5>
                                                      

                                                    </div>
                                                </div>

                                            </div>

                                        </div>

                                    </div>

                                </div>

                            </section>

                        </div>

                    </div>
                </section>

            </div>
        </div>
    )
}

export default Home