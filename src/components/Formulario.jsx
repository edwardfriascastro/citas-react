 import {useState,useEffect}from 'react';
import Error from './Error';
 
 const Formulario = ({pacientes,setPacientes,paciente,setPaciente}) => {

       const[nombre,setNombre]=useState('');   //estos useState estan asociados con los input
       const[propietario,setPropietario]=useState('');
       const[email,setEmail]=useState('');
       const[telefono,setTelefono]=useState('');
       const[fecha,setFecha]=useState('');
       const[sintomas,setSintomas]=useState('');

       const[error,setError]=useState(false)

      /* useEffect(()=>{
           if(Object.keys(paciente).length > 0){
            console.log('Si hay algo')    
               setNombre(paciente.nombre)
               setPropietario(paciente.propietario)
               setEmail(paciente.email)                  //Todo esto quiere decir que esta leyendo los
               setTelefono(paciente.telefono)       //cambios en el objeto de paciente,lo detecta que no esta
               setFecha(paciente.fecha)            //vacio y ejecuta elstate con los datos del objeto.
               setSintomas(paciente.sintomas)        //por tanto,se ejecuta el if.
           }else{
             console.log('No hay nada')
           }
      },[paciente])*/

       const generarId=()=>{
        const random= Math.random().toString(36).substr(2);
        const fecha= Date.now().toString(36)

        return random + fecha;
       }

       const handleSubmit=(e)=>{
            e.preventDefault();
          //Validacion del Formulario
          if([nombre,propietario,email,telefono,fecha,sintomas].includes('')){

                setError(true)
                return;
                }
                setError(false)

                //Objeto de Paciente
                const objetoPaciente={
                  nombre,
                  propietario,
                  email,
                  telefono,
                  fecha,
                  sintomas
                }
                if(paciente.id){
                  //Editando el registro
                  objetoPaciente.id=paciente.id
                  const pacientesActualizados=pacientes.map(pacienteState=>
                    pacienteState.id===paciente.id?objetoPaciente:pacienteState)
                
                  setPacientes(pacientesActualizados)
                  setPaciente({})
                
                }else{
                  //Nuevo registro
                  objetoPaciente.id=generarId()
                  setPacientes([...pacientes,objetoPaciente])

                }
                //console.log(objetoPaciente)

                //Reiniciar el form
                setNombre('')
                setPropietario('')
                setEmail('')
                setTelefono('')
                setFecha('')
                setSintomas('')
      }

   return (
     <div className="md:w-1/2 lg:w-2/5 mx-5">
       <h1 className="font-black text-3xl text center">Seguimiento Pacientes</h1>
       <p className="text-xl mt-5 mb-10">Añade pacientes y {" "}
       <span className="text-indigo-600 font-bold">Administralos</span>
       </p>
       <form 
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">
         
         {error && <Error><p>Todos los campos son obligatorios</p></Error>}

        <div className="mb-5">
          <label htmlFor="nombremascota" className="block text-gray-700 uppercase font-bold">
            Nombre Mascota
            </label>
          <input id="nombremascota"
          type="text" placeholder="Nombre de la Mascota"
          className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          value={nombre}
          onChange={(e)=>setNombre(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="nombrepropietario" className="block text-gray-700 uppercase font-bold">Nombre del Propietario</label>
          <input id="nombrepropietario"
          type="text" placeholder="Nombre del Propietario"
          className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          value={propietario}
          onChange={(e)=>setPropietario(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="email" className="block text-gray-700 uppercase font-bold">E-mail</label>
          <input id="email"
          type="email" placeholder="E-mail del Propietario"
          className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="telefonopropietario" className="block text-gray-700 uppercase font-bold">Telefono del Propietario</label>
          <input id="telefonopropietario"
          type="tel" placeholder="Telefono del Propietario"
          className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          value={telefono}
          onChange={(e)=>setTelefono(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="alta" className="block text-gray-700 uppercase font-bold">Alta</label>
          <input id="alta"
          type="date" placeholder=""
          className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          value={fecha}
          onChange={(e)=>setFecha(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">Alta</label>
          <textarea id="sintomas" 
          className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          placeholder="Describe los Sintomas"
          value={sintomas}
          onChange={(e)=>setSintomas(e.target.value)}
          >
          Sintomas
          </textarea>
        </div>
        <input type="submit" 
         className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-800 transition-all cursor-pointer"
         value={paciente.id?'Editar Paciente':'Agregar Paciente'}
        />
       </form>
     </div>
   )
 }
 
 
 export default Formulario

 
