export default function Publications({profile}){
     if(!profile.publications || !profile.publications.length){
          return;
     }
     return(
          <>
               <span className='text-green text-base lg:text-3xl flex flex-cols mb-5'>
                    <iconify-icon style={{fontSize: '2rem'}} icon="akar-icons:paper"/>
                    <h1 className='self-end text-purpled ml-3'>Publicaciones</h1>
               </span>
               <div className='flex flex-cols flex-wrap gap-3 mx-5 lg:justify-center'>
                    {
                         profile.publications.map((publication, index) => {
                              return(
                                   <a href={publication.url} key={index} className='hover:scale-110 transition bg-white rounded-lg w-full lg:w-1/5 shadow-md p-2 lg:h-fit'>
                                        <h1 key={index + publication.title} className='text-green font-bold text-center mb-3'>{publication.name}</h1>
                                        <h1 key={index + publication.publisher} className='text-purpled text-xs lg:text-base font-bold text-center mb-4'>{publication.publisher}</h1>
                                        <h1 key={publication.title} className='text-xs lg:text-base text-right text-green mt-8 capitalize'>{publication.date.year}</h1>
                                   </a>
                              );
                         })
                    }
               </div>
          </>
     )
}