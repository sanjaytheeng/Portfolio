import './Resume.css'

const MyResume = () => {
    const handleViewResume = () => {
      window.open('/src/components/public/MyResume.pdf', '_blank');
    };
  
    return (
      <div className="resume">
        <button onClick={handleViewResume}>View Resume</button>
      </div>
    );
  };
  
  export default MyResume;