export default function Certificates({profile}){
    if(!profile.certifications || !profile.certifications.length){
        return;
    }
    return(
        <div>
                <span className=' text-base lg:text-xl flex flex-cols mb-5'>
                    <iconify-icon style={{fontSize: '2rem'}} icon="carbon:certificate"/>
                    <h1 className='self-end text-purpled ml-3'>Certificaciones</h1>
                </span>
                {
                    profile.certifications.map((certification, index) => {
                        const startDate = new Date(certification.date.start.year, certification.date.start.month);
                        const endDate = !certification.date.end.year ? null : new Date(certification.date.end.year, education.date.end.month);
                        const opts = { year: 'numeric', month: 'short' };

                        return(
                            <div key={index} className='shadow-md  bg-white w-full rounded-lg mb-5 p-2 lg:flex lg:flex-cols justify-between'>
                                <a href={certification.url}  key={index + JSON.stringify(certification)}>
                                    <h1 key={index + certification.name} className='text-base lg:text-xl'>{certification.name}</h1>
                                    <h1  key={index + certification.authority} className='text-sm lg:text-base text-purpled'>{certification.authority}</h1>
                                    <h1  key={index + certification.license_number} className='text-sm lg:text-base text-purpled'>{certification.license_number}</h1>
                                </a>
                                <h1 className='text-sm lg:text-xl text-right  mt-8 capitalize'>{startDate.toLocaleString('es-ES', opts)} {endDate ? `${endDate.toLocaleString('es-ES', opts)}` : ''}</h1>
                            </div>
                        )
                    })
            }
            </div>
    )
}