export default function Volunteering({profile}){
    if(!profile.volunteer_experiences || !profile.volunteer_experiences.length){
        return;
    }
    return(
        <div>
            <span className=' text-base lg:text-xl flex flex-cols mb-5'>
                <iconify-icon style={{fontSize: '2rem'}} icon="ic:outline-volunteer-activism"/>
                <h1 className='self-end text-purpled ml-3'>Voluntariado</h1>
            </span>
            <div className='flex flex-cols flex-wrap gap-3 mx-5    '>
                    {
                         profile.volunteer_experiences.map((experience, index) => {
                              const startDate = new Date(experience.date.start.year, experience.date.start.month);
                              const endDate = experience.date.end.year ? 
                                        new Date(experience.date.end.year, experience.date.end.month)
                                        : 'Actualidad';

                              const opts = { year: 'numeric', month: 'long' };

                              return(
                                   <div key={index} className='bg-white rounded-lg w-full lg:w-1/5 shadow-md p-2'>
                                        <h1 key={index + experience.role} className=' font-bold text-center mb-3'>{experience.role}</h1>
                                        <h1 key={index + experience.company.name} className='text-purpled text-xs lg:text-base font-bold text-center mb-4'>{experience.company.name}</h1>
                                        <h1 key={experience.company.name} className='text-xs lg:text-base text-right  mt-8 capitalize'>{startDate.toLocaleString('es-ES', opts)} - {endDate.toLocaleString('es-ES', opts)}</h1>
                                   </div>
                              );
                         })
                    }
               </div>
        </div>
    )
}