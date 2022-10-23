export default function Organizations({profile}){
     if(!profile.organizations || !profile.organizations.length){
          return;
     }
     return(
          <>
               <span className='text-green text-base lg:text-3xl flex flex-cols mb-5'>
                    <iconify-icon style={{fontSize: '2rem'}} icon="codicon:organization"/>
                    <h1 className='self-end text-purpled ml-3'>Organizaciones</h1>
               </span>
               <div className='flex flex-cols flex-wrap gap-3 mx-5 lg:justify-center'>
                    {
                         profile.organizations.map((organization, index) => {
                              const startDate = new Date(organization.date_start.year, organization.date_start.month);
                              const endDate = organization.date_end && organization.date_end.year ? 
                                        new Date(organization.date_end.year, organization.date_end.month)
                                        : 'Actualidad';

                              const opts = { year: 'numeric', month: 'long' };

                              return(
                                   <div key={index} className='bg-white rounded-lg w-full lg:w-1/5 shadow-md p-2 lg:h-fit'>
                                        <h1 key={index + organization.name} className='text-green font-bold text-center mb-3'>{organization.name}</h1>
                                        <h1 key={index + organization.position} className='text-purpled text-xs lg:text-base font-bold text-center mb-4'>{organization.position}</h1>
                                        <h1 key={organization.title} className='text-xs lg:text-base text-right text-green mt-8 capitalize'>{startDate.toLocaleString('es-ES', opts)} - {endDate.toLocaleString('es-ES', opts)}</h1>
                                   </div>
                              );
                         })
                    }
               </div>
          </>
     )
}