import Modal from 'react-modal';
import Header from './sections/Header';
import AboutMe from './sections/AboutMe';
import WorkExperience from './sections/WorkExperience';
import Education from './sections/Education';
import Skills from './sections/Skills';
import Certificates from './sections/Certificates';
import Recommendations from './sections/Recommendations';

function ProfileModal({modalIsOpen, setModalIsOpen, profileData}){
    return(
        <Modal
        isOpen={modalIsOpen}
        contentLabel="Example Modal"
        shouldCloseOnOverlayClick={true}
        onRequestClose={setModalIsOpen}
        style={{
          content: {
            backgroundColor: '#f6f6f9',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            width: '80%',
            left: 0,
            right: 0,
            margin: 'auto',
            borderRadius: '20px',
          },
          overlay: {
            backgroundColor: 'transparent',
            width: '100vw',
            height: '100vh'
          }
        }}
      >
        <div className='grid grid-cols-1 w-full gap-y-5'>
          <Header profile={profileData}/>
          <AboutMe profile={profileData}/>
          <WorkExperience profile={profileData} />
          <Education profile={profileData} />
          <Skills profile={profileData} />
          <Certificates profile={profileData} />
          <Recommendations profile={profileData} />

        </div>
        <button className='h-min' onClick={setModalIsOpen}>Cerrar
        </button>
      </Modal>
    )
}

export default ProfileModal;