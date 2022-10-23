export default function Patents({profile}){
     if(!profile.patents || !profile.patents.length){
          return;
     }
     return(
          <>
               <span className='text-green text-base lg:text-3xl flex flex-cols mb-5'>
                    <iconify-icon style={{fontSize: '2rem'}} icon="fluent:certificate-20-regular"/>
                    <h1 className='self-end text-purpled ml-3'>Patentes</h1>
               </span>
               <div className='flex flex-cols flex-wrap gap-3 mx-5 lg:justify-center'>
                    {
                         profile.patents.map((patent, index) => {
                              const date = new Date(patent.date.year, patent.date.month, patent.date.day);
                              const opts = { year: 'numeric', month: 'long' };

                              return(
                                   <div key={index} className='bg-white rounded-lg w-full lg:w-1/5 shadow-md p-2 lg:h-fit'>
                                        <h1 key={index + patent.title} className='text-green font-bold text-center mb-3'>{patent.title}</h1>
                                        <h1 key={index + patent.issuer} className='text-purpled text-xs lg:text-base font-bold text-center mb-4'>Emitida por {patent.issuer}</h1>
                                        <h1 key={index + patent.application_number} className='text-purpled text-xs lg:text-base font-bold text-center mb-4'>{patent.application_number}</h1>
                                        <h1 key={patent.title} className='text-xs lg:text-base text-right text-green mt-8 capitalize'>{date.toLocaleString('es-ES', opts)}</h1>
                                   </div>
                              );
                         })
                    }
               </div>
          </>
     )
}