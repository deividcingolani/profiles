import { useState } from 'react';

export default function Recommendations({profile}){
    if(!profile.recommendations || !profile.recommendations.length){
        return;
    }
    
    const [expanded, setExpanded] = useState(Array(profile.recommendations.length).fill(false));
    
    const onChange = (index) => {
        const newExpanded = [...expanded];
        newExpanded[index] = !newExpanded[index];
        setExpanded(newExpanded);
    }


    profile.recommendations = profile.recommendations.sort((a,b) => b.text.length - a.text.length);
    return(
        <div>
            <span className='text-green text-md lg:text-3xl flex flex-cols mb-5'>
                <iconify-icon style={{fontSize: '3rem'}} icon="ant-design:star-filled"/>
                <h1 className='self-end text-purpled ml-3'>Recomendaciones</h1>
            </span>
            <div className='grid grid-cols-1 lg:flex lg:dflex-cols lg:flex-wrap lg:gap-3 mx-5 justify-evenly items-start'>
                {
                    profile.recommendations.map((recommendation, index) => {
                        const createdAt = new Date(recommendation.created_at);
                        const opts = { year: 'numeric', month: 'long' };
                        
                        return(
                            <div className='shadow-md bg-white rounded-lg p-2 w-full lg:w-1/4 text-center'>
                                <h1 className='text-green font-bold'>{recommendation.first_name}</h1>
                                <h2 className='text-purpled text-xs mb-5'>{recommendation.occupation}</h2>
                                <p className={`text-sm lg:text-md text-purpled text-ellipsis overflow-hidden ${expanded[index] ? 'h-full' : 'h-20'}`}>
                                    {recommendation.text}
                                </p>
                                <button className={`transition duration-150 ease-out ${expanded[index] ? 'rotate-180' : ''}`} onClick={() => onChange(index)} >
                                    <iconify-icon style={{fontSize: '2rem'}} icon="flat-color-icons:expand"/>
                                </button>
                                <h2 className='mt-5 capitalize text-green text-xs text-right mb-5'>{createdAt.toLocaleString('es-ES', opts)}</h2>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}