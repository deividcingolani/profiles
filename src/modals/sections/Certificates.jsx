export default function Certificates({profile}){
    if(!profile.certifications || !profile.certifications.length){
        return;
    }
    return(
        <div>
                <span className='text-green text-3xl flex flex-cols mb-5'>
                    <iconify-icon style={{fontSize: '3rem'}} icon="carbon:certificate"/>
                    <h1 className='self-end text-purpled ml-3'>Certificaciones</h1>
                </span>
                {
                    profile.certifications.map(certification => {
                        const startDate = new Date(certification.date.start.year, certification.date.start.month);
                        const endDate = !certification.date.end.year ? null : new Date(certification.date.end.year, education.date.end.month);
                        const opts = { year: 'numeric', month: 'short' };

                        return(
                            <div className='shadow-md text-green bg-white w-full rounded-lg mb-5 p-2 flex flex-cols justify-between'>
                                <div>
                                    <h1 className='text-xl'>{certification.name}</h1>
                                    <h1 className='text-md text-purpled'>{certification.authority}</h1>
                                    <h1 className='text-md text-purpled'>{certification.license_number}</h1>
                                    <a className='text-md text-purpled mb-4' href={certification.url}>{certification.url}</a>
                                </div>
                                <h1 className='text-xl text-right text-green mt-8 capitalize'>{startDate.toLocaleString('es-ES', opts)} {endDate ? `${endDate.toLocaleString('es-ES', opts)}` : ''}</h1>
                            </div>
                        )
                    })
            }
            </div>
    )
}