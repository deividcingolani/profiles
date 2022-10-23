export default function Projects({profile}){
     if(!profile.projects || !profile.projects.length){
          return;
     }
     return(
          <>
               <span className=' text-base lg:text-xl flex flex-cols mb-5'>
                    <iconify-icon style={{fontSize: '2rem'}} icon="carbon:tool-box"/>
                    <h1 className='self-end text-purpled ml-3'>Proyectos</h1>
               </span>
               <div className='flex flex-cols flex-wrap gap-3 mx-5 lg:justify-center'>
                    {
                         profile.projects.map((project, index) => {
                              const startDate = new Date(project.date.start.year, project.date.start.month);
                              const endDate = project.date.end.year ? 
                                        new Date(project.date.end.year, project.date.end.month)
                                        : 'Actualidad';

                              const opts = { year: 'numeric', month: 'long' };

                              return(
                                   <div key={index} className='bg-white rounded-lg w-full lg:w-1/5 shadow-md p-2 lg:h-fit'>
                                        <h1 key={index + project.title} className=' font-bold text-center mb-3'>{project.title}</h1>
                                        <h1 key={index + project.description} className='text-purpled text-xs lg:text-base font-bold text-center mb-4'>{project.description}</h1>
                                        <h1 key={project.title} className='text-xs lg:text-base text-right  mt-8 capitalize'>{startDate.toLocaleString('es-ES', opts)} - {endDate.toLocaleString('es-ES', opts)}</h1>
                                   </div>
                              );
                         })
                    }
               </div>
          </>
     )
}