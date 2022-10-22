export default function({profile}){
     if(!profile.courses || !profile.courses.length){
          return;
     }
     return (
          <>
               <span className='text-green text-3xl flex flex-cols mb-5'>
                         <iconify-icon style={{fontSize: '3rem'}} icon="carbon:course"/>
                         <h1 className='self-end text-purpled ml-3'>Cursos</h1>
               </span>
               <div className='flex flex-cols flex-wrap gap-3 mx-5'>
                    {
                         profile.courses.map(course => 
                              <h1 className='bg-white rounded-lg p-2 shadow-lg text-green font-bold'>{course.name}</h1>
                         )
                    }
               </div>
          </>
          
          
     )
}