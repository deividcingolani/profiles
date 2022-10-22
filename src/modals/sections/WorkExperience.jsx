import 'iconify-icon';


export default function WorkExperience({profile}){
    return(
        <div>
            <span className='text-green text-3xl flex flex-cols mb-5'>
                <iconify-icon style={{fontSize: '3rem'}} icon="ic:outline-work"/>
                <h1 className='self-end text-purpled ml-3'>Experiencia Laboral</h1>
            </span>
            {
                profile.position_groups.map((company) => {
                    return company.profile_positions.map(position => {
                        const startDate = new Date(position.date.start.year, position.date.start.month);
                        const endDate = !position.date.end.year ? 'Actualidad' : new Date(position.date.end.year, position.date.end.month);
                        const opts = { year: 'numeric', month: 'short' };

                        return(
                            <div className='shadow-md text-green bg-white w-full rounded-lg mb-5 p-2'>
                                <h1 className='text-xl'>{position.title} en</h1>
                                <h1 className='text-md text-purpled mb-4'>{position.company}</h1>
                                <p className='text-md text-purpled'>{position.description}</p>
                                <h1 className='text-xl text-right text-green mt-8 capitalize'>{startDate.toLocaleString('es-ES', opts)} - {endDate.toLocaleString('es-ES', opts)}</h1>
                            </div>
                        )
                    })
                })
            }

        </div>
    )
}