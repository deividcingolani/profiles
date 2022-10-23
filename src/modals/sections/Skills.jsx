export default function Skills({profile}){

    return(
        <div>
             <span className='text-green text-md lg:text-3xl flex flex-cols mb-5'>
                    <iconify-icon style={{fontSize: '2rem'}} icon="eos-icons:rotating-gear"/>
                    <h1 className='self-end text-purpled ml-3'>Habilidades</h1>
            </span>
            <div className='flex flex-cols flex-wrap gap-3 mx-5'>
            {
                profile.skills.map(skill => {
                    return(
                        <span className='text-sm lg:text-md shadow-md text-white bg-green p-2 rounded-lg w-fit'>{skill}</span>
                    )
                })
            }
            </div>

        </div>
    )
}