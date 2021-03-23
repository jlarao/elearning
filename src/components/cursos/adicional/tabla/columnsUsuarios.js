import { Link  } from "react-router-dom";
export const   COLUMNS = [
    {
        Header: 'Id',
        accessor: 'idUsuario'               
    },{
        Header: 'nombre',
        accessor: 'nombre',
    },{
        Header: 'apellido',
        accessor: 'apellidoPaterno',
    },{
        Header: 'Rol',
        accessor: 'nombreRol',
    },
    {
        Header: 'Opciones',        
    //    Cell: ({ cell: { value }, row: { original } }) => <Link to={`users/${original.idUsuario}`} className="btn btn-primary"><i className="fa fa-eye">{value}</i></Link>
        Cell: ({row}) => (<div>             <button onClick={()=>this.deleteQnA({row})}>Delete Question</button>            </div> )
    }

];