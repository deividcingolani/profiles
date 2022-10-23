const MAX_CHARACTERS = 280;

export default function AboutMe({profile}){
    return(
        <div className='flex flex-col bg-white rounded-lg p-1 mt-5 shadow-md'>
            <h2 className=' font-bold text-left'>Sobre Mí</h2>
            <p className='mt-2 text-md max-md:text-xs text-purpled'>{`${profile.summary}`}</p>
        </div>
    )
}