import React, { useMemo, useEffect } from 'react'
import { useTable} from "react-table";
//import MOCK_DATA from "../../../MOCK_DATA.json";
import { COLUMNS } from "./columnsUsuarios";
import { Link  } from "react-router-dom";
import  "./table.css";
import { useDispatch, useSelector } from "react-redux";
import {  activarUsuarioInscripcion, suspenderUsuarioInscripcion ,limpiarMensajeAdicional} from "../../../../actions/adicionalActions";
import Modal from "../../../functions/function";

export const UsuariosCursosTable = ({cursosInscritos, idUsuario}) => {
    const dispatch = useDispatch();  
  const suspenderUsuarioInscripcionBtn = e => dispatch( suspenderUsuarioInscripcion(e));
  const activarUsuarioInscripcionBtn = e => dispatch(activarUsuarioInscripcion(e));
  const mensaje = useSelector( state => state.adicional.mensaje);
  const limpiarMensaje = e => dispatch(limpiarMensajeAdicional());
    //const columns = useMemo( ()=> COLUMNS, [] );
    //const data = useMemo( ()=> MOCK_DATA, [] )

    useEffect(() => {
        
       
        if(mensaje){
          //mostrarAlerta(mensaje.msg, mensaje.categoria);
          console.log(mensaje);
          tratarMensajes(mensaje);                    
        }
        //obtenerCategoriasDatos();
        
    }, [mensaje])

    const tratarMensajes=()=>{
      Modal.Toast.show({html: mensaje.msg, mensaje: mensaje});
      setTimeout( ()=>{ limpiarMensaje() } ,5000 );
    }

    const columns = React.useMemo(
        () => [
        {
            Header: 'Id',
            accessor: 'idCurso'               
        },{
            Header: 'nombre',
            accessor: 'nombreCurso',
        },
        {
            Header: 'estatus',
            accessor: 'estatus',
            Cell:  ({row}) =>{
                //console.log(props)
                return row.original.estatus ==='Activo'? 
                (<div className="icon icon-lg shadow mr-3 text-green" title={row.original.estatus}><i className="far fa-check-circle"></i></div>)
                :
                (<div className="icon icon-lg shadow mr-3 text-red" title={row.original.estatus}><i className="fas fa-ban"></i></div>)
                
            }
        },
        
        {
            Header: 'Opciones',        
        //    Cell: ({ cell: { value }, row: { original } }) => <Link to={`users/${original.idUsuario}`} className="btn btn-primary"><i className="fa fa-eye">{value}</i></Link>
        // <Link to={`usuariosCursos/${row.original.idInscrito}`} className="btn btn-primary"><i className="fa fa-address-book"></i></Link>
        //<button onClick={()=>registarCurso(`${idUsuario}`)}  className="btn btn-info ml-2" title="registrar en curso"><i className="fa fa-address-book ml-auto"></i></button>
            Cell: ({row}) => {
                //console.log(row); 
                return (
                <div>
                    
                    
                    { row.original.estatus==='Activo'? (<button onClick={()=>suspenderUsuario(`${row.original.idInscrito}`)}  className="btn btn-danger ml-2" title="suspender acceso curso"><i className="fa fa-user-minus ml-auto"></i></button>): (<button onClick={()=>activarUsuario(`${row.original.idInscrito}`)}  className="btn btn-success ml-2" title="activar acceso curso"><i className="fa fa-user-plus ml-auto"></i></button>)}
                    
                </div> )
                                    }
        }
    
    ],
    []
  )
    const tableInstance = useTable({
        columns,
        data: cursosInscritos
    })
    const suspenderUsuario= (e) =>{
        suspenderUsuarioInscripcionBtn(e);
        console.log(e);
    }
    const activarUsuario= (e) =>{
        activarUsuarioInscripcionBtn(e);
        console.log(e);
    }
    const registarCurso = (e)=>{
        console.log(e);
    }
    const { 
        getTableProps, 
        getTableBodyProps, 
        headerGroups, 
        rows, 
        prepareRow } = tableInstance;
    return (
        <table {...getTableProps()}>
           <thead>
           {headerGroups.map((headerGroup) => (
               <tr {...headerGroup.getHeaderGroupProps()}>
                   {
                    headerGroup.headers.map( (column) => (
                        <th {...column.getHeaderProps() }>{column.render('Header')}</th>
                    ))
                   }
                    
                </tr>
           ))}
               
            </thead>

           <tbody {...getTableBodyProps()}>
               {
                    rows.map(row => {
                    prepareRow(row)
                    return (
                        <tr {...row.getRowProps()}>
                        {
                            row.cells.map( (cell) => {
                                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>                                
                            })
                        }                            
                        </tr>
                    )   
                   })}
               
           </tbody>
        </table>
    )
}
