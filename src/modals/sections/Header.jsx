import 'iconify-icon';

export default function Header({profile}){
     return(
        <div>
            <h1 className='text-xl text-md lg:text-3xl text-green text-center '>{`${profile.first_name} ${profile.last_name}`}</h1>
            <h2 className='mt-2 text-xs lg:text-sm text-purpled flex justify-center w-full '>{
                profile.contact_info.websites.map(web => {
                    if(!web.url){
                        return;
                    }
                    return (
                        <>
                            <p className='mx-2'>|</p><a href={web.url}>{web.url}</a>
                        </>
                        )
                })
            }</h2>
            {profile.profile_picture && 
            <img className='mt-5 inset-0 m-auto rounded-full h-24 border-green border-2' src={profile.profile_picture}/>}
            <h2 className='mt-2 text-sm lg:text-md text-purpled mx-3 text-center'>{`${profile.sub_title}`}</h2>
            <div className='mt-5 flex flex-cols w-full flex justify-around text-xs lg:text-md'>
                { profile.location.city &&
                    <span className='text-green text-center'>
                        <iconify-icon style={{fontSize: '1.5rem'}} icon="carbon:location-filled"/>
                        <p className='text-purpled'>{profile.location.city}</p>
                    </span>
                }
                { profile.birth_date && 
                    <span className='text-green text-center'>
                        <iconify-icon style={{fontSize: '1.5rem'}} icon="la:birthday-cake"/>
                        <p className='text-purpled'>{profile.birth_date.month}/{profile.birth_date.day}</p>
                    </span>
                }
            </div>

        </div>
     );
}