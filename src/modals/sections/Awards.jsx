export default function({profile}){
     if(!profile.awards || !profile.awards.length){
          return;
     }
     return (
          <>
               <span className=' text-base lg:text-xl flex flex-cols mb-5'>
                         <iconify-icon style={{fontSize: '2rem'}} icon="healthicons:award-trophy"/>
                         <h1 className='self-end text-purpled ml-3'>Premios</h1>
               </span>
               <div className='flex flex-cols flex-wrap gap-3 mx-5'>
                    {
                         profile.awards.map((award, index) => {
                              const issueDate = new Date(award.date.year, award.date.month);
                              const opts = { year: 'numeric', month: 'long' };

                              return(
                                   <div key={index} className='bg-white rounded-lg w-full lg:w-1/5 shadow-md p-2'>
                                        <h1 key={index + award.title} className=' font-bold text-center mb-3'>{award.title}</h1>
                                        <h1 key={index + award.description} className='text-purpled text-xs font-bold text-center mb-4'>{award.description}</h1>
                                        <h1 key={index + award.issueDate} className={`text-purpled text-xs capitalize ${award.description ? 'text-right' : 'text-center'}`}>{issueDate.toLocaleString('es-ES', opts)}</h1>
                                        <h1 key={index + award.issuer} className='text-purpled text-xs text-right'>{award.issuer}</h1>
                                   </div>
                              )
                         })
                    }
               </div>
          </>
          
          
     )
}