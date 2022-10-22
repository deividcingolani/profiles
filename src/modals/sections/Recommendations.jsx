export default function Recommendations({profile}){
    if(!profile.recommendations || !profile.recommendations.length){
        return;
    }
    return(
        <div>
            <span className='text-green text-3xl flex flex-cols mb-5'>
                <iconify-icon style={{fontSize: '3rem'}} icon="ant-design:star-filled"/>
                <h1 className='self-end text-purpled ml-3'>Recomendaciones</h1>
            </span>
            <div className='flex flex-cols flex-wrap gap-3 mx-5 justify-evenly items-start'>
                {
                    profile.recommendations.map(recommendation => {
                        const createdAt = new Date(recommendation.created_at);
                        const opts = { year: 'numeric', month: 'long' };

                        return(
                            <div className='shadow-md bg-white rounded-lg p-2 w-1/4 text-center'>
                                <h1 className='text-green font-bold'>{recommendation.first_name}</h1>
                                <h2 className='text-purpled text-xs mb-5'>{recommendation.occupation}</h2>
                                <p className='text-purpled'>{recommendation.text}</p>
                                <h2 className='mt-5 capitalize text-green text-xs text-right mb-5'>{createdAt.toLocaleString('es-ES', opts)}</h2>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}