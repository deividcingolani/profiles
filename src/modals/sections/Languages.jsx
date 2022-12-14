
const PROFICENCY_LEVELS = {
     'NATIVE_OR_BILINGUAL': 3,
     'PROFESSIONAL_WORKING': 2,
     'LIMITED_WORKING': 1,
}

export default function Languages({profile}){
     if(!profile.languages.profile_languages.length){
          return;   
     }
     return(
          <div>
               <span className=' text-base lg:text-xl flex flex-cols mb-5'>
                    <iconify-icon style={{fontSize: '2rem'}} icon="ps:world"/>
                    <h1 className='self-end text-purpled ml-3'>Lenguajes</h1>
               </span>
               <div className='flex flex-cols flex-wrap gap-3 mx-5'>
                    {
                         profile.languages.profile_languages.map((language, index) => {
                              return(
                                   <div key={index} className='ml-5 bg-white shadow-md rounded-lg p-2 w-full lg:w-1/5 text-center text-purpled font-bold'>
                                        <h1 key={index + language.name}>{language.name}</h1>
                                        <div key={language.name} className=''>
                                             {
                                                  
                                                 [...Array(PROFICENCY_LEVELS[language.proficiency])].map((e, i) => {
                                                  return(
                                                       <iconify-icon key={index + i} style={{fontSize: '1rem'}} icon="ant-design:star-filled"/>
                                                  )
                                                 })
                                             }
                                        </div>
                                   </div>
                              );
                         })
                    }
               </div>
          </div>
     )
}