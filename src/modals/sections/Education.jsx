import 'iconify-icon';

export default function Education({profile}){
        return(
            <div>
                <span className='text-green text-base lg:text-3xl flex flex-cols mb-5'>
                    <iconify-icon style={{fontSize: '2rem'}} icon="cil:education"/>
                    <h1 className='self-end text-purpled ml-3'>Educación</h1>
                </span>
                {
                    profile.education.map((education, index) => {
                        const startDate = new Date(education.date.start.year, education.date.start.month);
                        const endDate = !education.date.end.year ? 'Actualidad' : new Date(education.date.end.year, education.date.end.month);
                        const opts = { year: 'numeric', month: 'short' };

                        return(
                            <div key={index} className='shadow-md text-green bg-white w-full rounded-lg mb-5 p-2 lg:flex lg:flex-cols justify-between'>
                                <div key={education.field_of_study}>
                                    <h1 key={index + 10 + education.field_of_study} className='text-base lg:text-xl'>{education.field_of_study}</h1>
                                    <h1 key={index + education.degree_name} className='text-base lg:text-xl'>{education.degree_name}</h1>
                                    <h1 key={index + education.school.name} className='text-sm lg:text-base text-purpled mb-4'>{education.school.name}</h1>
                                </div>
                                <h1 className='text-sm lg:text-xl text-right text-green mt-8 capitalize'>{startDate.toLocaleString('es-ES', opts)} - {endDate.toLocaleString('es-ES', opts)}</h1>
                            </div>
                        )
                    })
            }
            </div>
        );
}