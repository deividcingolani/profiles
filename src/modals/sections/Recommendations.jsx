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
            {
                profile.recommendations.map(recommendation => {
                    <div>
                        
                    </div>
                })
            }
        </div>
    )
}