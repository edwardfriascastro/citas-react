
const Paciente = ({paciente,setPaciente,eliminarPaciente}) => {
    const {nombre,propietario,email,telefono,fecha,sintomas,id}=paciente
 
    const handleEliminar=()=>{
        const respuesta=confirm('Deseas eliminar paciente?')

        if(respuesta){
          eliminarPaciente(id)
        }
    }

    return (
      <div className="mx-5 my-10 bg-white shadow-md px-5 py-9 rounded-xl ">
      <p className="text-gray-700 uppercase font-bold mb-3">Nombre de Mascota:{""}
        <span className="font-normal normal-case">{paciente.nombre}</span>
      </p>
      <p className="text-gray-700 uppercase font-bold mb-3">Nombre del Propietario:{""}
        <span className="font-normal normal-case">{paciente.propietario}</span>
      </p>
      <p className="text-gray-700 uppercase font-bold mb-3">Email:{""}
        <span className="font-normal normal-case">{paciente.email}</span>
      </p>
      <p className="text-gray-700 uppercase font-bold mb-3">Telefono:{""}
        <span className="font-normal normal-case">{paciente.telefono}</span>
      </p>
      <p className="text-gray-700 uppercase font-bold mb-3">Alta:{""}
        <span className="font-normal normal-case">{paciente.fecha}</span>
      </p>
      <p className="text-gray-700 uppercase font-bold mb-3">Alta:{""}
        <span className="font-normal normal-case">{paciente.sintomas}</span>
      </p>
      <div className="flex justify-between mt-10">
        <button type="button" 
           className="py-2 px-10 bg-indigo-600 hover:bg-indigo-900 text-white font-bold uppercase rounded-lg"
           onClick={()=>setPaciente(paciente)}  //esto es si tienes una funcion que le vas a pasar algun argumento.
        >
           Editar
        </button>
        <button type="button"
        className="py-2 px-10 bg-red-600 hover:bg-indigo-900 text-white font-bold uppercase rounded-lg"
        onClick={handleEliminar}//esto es si no le vas a pasar no le vas a pasar ningun argumento
        >
          Eliminar
        </button>
      </div>
    </div>
    )
  }
  
  export default Paciente


  
  