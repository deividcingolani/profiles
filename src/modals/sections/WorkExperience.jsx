import 'iconify-icon';


export default function WorkExperience({profile}){
    return(
        <div>
            <span className=' text-base lg:text-xl flex flex-cols mb-5'>
                <iconify-icon style={{fontSize: '2rem'}} icon="ic:outline-work"/>
                <h1 className='self-end text-purpled ml-3'>Experiencia Laboral</h1>
            </span>
            {
                profile.position_groups.map((company, index) => {
                    return company.profile_positions.map(position => {
                        const startDate = new Date(position.date.start.year, position.date.start.month);
                        const endDate = !position.date.end.year ? 'Actualidad' : new Date(position.date.end.year, position.date.end.month);
                        const opts = { year: 'numeric', month: 'short' };

                        return(
                            <div key={index} className='shadow-md  bg-white w-full rounded-lg mb-5 p-2'>
                                <h1 key={index + position.title} className='text-base lg:text-xl'>{position.title}</h1>
                                <h1 key={index + position.company} className='text-sm lg:text-base text-purpled mb-4'>{position.company}</h1>
                                <p key={index + position.description} className='text-sm lg:text-base text-purpled'>{position.description}</p>
                                <h1 key={position.title} className='text-sm  lg:text-base text-right  mt-8 capitalize'>{startDate.toLocaleString('es-ES', opts)} - {endDate.toLocaleString('es-ES', opts)}</h1>
                            </div>
                        )
                    })
                })
            }

        </div>
    )
}