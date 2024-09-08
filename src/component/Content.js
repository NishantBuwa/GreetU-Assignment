import React, { useState } from 'react';
import '../Styles/Content.css';
import Delete from '../Assets/Images/delete.png'
import GU from '../Assets/Images/GU.svg'


function Content() {
  // const [milestones, setMilestones] = useState([{ milestone: '', date: '' }]);

  // const addMilestone = () => {
  //   setMilestones([...milestones, { milestone: '', date: '' }]);
  // };

  // Initial state with two milestones by default
  const [formData, setFormData] = useState({
    yourName: '',
    partnerName: '',
    coupleName: '',
    yourImageName: null,
    partnerImageName: null,
    coupleImageName: null,
    milestones: [
      { milestone: '', date: '' },
      { milestone: '', date: '' }
    ]
  });

  // Add a new milestone
  const addMilestone = () => {
    setFormData((prevState) => ({
      ...prevState,
      milestones: [...prevState.milestones, { milestone: '', date: '' }]
    }));
  };

  const handleMilestoneChange = (index, event) => {
    const { name, value } = event.target;

    const updatedMilestones = formData.milestones.map((milestone, i) =>
      i === index ? { ...milestone, [name]: value } : milestone
    );
    setFormData({ ...formData, milestones: updatedMilestones });
  };



  const handleDelete = (indexToDelete) => {
    if (formData.milestones.length > 2) {
      const updatedMilestones = formData.milestones.filter((_, index) => index !== indexToDelete);
      setFormData({ ...formData, milestones: updatedMilestones });
    } else {
      alert("At least 2 milestones are required.");
    }
  };

  const handleInputChange = (event) => {
    const { name, value, type, files } = event.target;
    setFormData({
      ...formData,
      [name]: type === 'file' ? files[0] : value
    });
  };

  const handleFileChange = (event) => {
    const { id, files } = event.target;
    const file = files[0];
    if (file) {
      const fileName = file.name;
      switch (id) {
        case 'your-image':
          setFormData({ ...formData, yourImageName: fileName });
          break;
        case 'partner-image':
          setFormData({ ...formData, partnerImageName: fileName });
          break;
        case 'couple-image':
          setFormData({ ...formData, coupleImageName: fileName });
          break;
        default:
          break;
      }
    }
  };
  const handleSubmit=(e)=>{
    e.preventDefault()
    console.log(formData)
  }

  return (
    <div className="content">
      <div className="heading">
        <p>Create your Love Timeline</p>
      </div>
      <div className="details">
        <div className="details-info">
          <div className="details-form">
            <form onSubmit={handleSubmit}>
              <div className="first-part">
                <p>Add Your Details</p>
                <label htmlFor="Your Name">Your Name</label>
                <input type="text"
                  name="yourName"
                  value={formData.yourName}
                  placeholder="Enter your name"
                  onChange={handleInputChange}
                  required />

                <label htmlFor="P-Name">Partner Name</label>
                <input type="text"
                  name="partnerName"
                  value={formData.partnerName}
                  placeholder="Enter your partner name"
                  onChange={handleInputChange}
                  required />

                <label htmlFor="Couple Name">Couple Name</label>
                <input type="text"
                  name="coupleName"
                  value={formData.coupleName}
                  placeholder="Eg.. Virat & Anushka => Virushka"
                  onChange={handleInputChange}
                  required />

                <label htmlFor="Your Image" style={{ marginBottom: '-10px' }}>
                  Your Image<span>(recommended aspect ratio of image 1:1)</span>
                </label>
                <input type="file"
                  id="your-image"
                  name="yourImage"
                  style={{ display: 'none' }}
                  onChange={(e) => handleFileChange(e, 'yourImage')}
                />
                <label htmlFor="your-image" className="custom-file-label" >Choose File</label>
                {formData.yourImageName && <span className="imagename">{formData.yourImageName}</span>}


                <label htmlFor="Partner Image" style={{ marginBottom: '-10px' }}>
                  Partner Image<span>(recommended aspect ratio of image 1:1)</span>
                </label>
                <input  type="file"
                  id="partner-image"
                  name="partnerImage"
                  style={{ display: 'none' }}
                  onChange={(e) => handleFileChange(e, 'yourImage')} />
                <label htmlFor="partner-image" className="custom-file-label">Choose File</label>
                {formData.partnerImageName && <span className="imagename">{formData.yourImageName}</span>}


                <label htmlFor="Couple Image" style={{ marginBottom: '-10px' }}>
                  Couple Image<span>(Optional)</span>
                </label>
                <input type="file"
                  id="couple-image"
                  name="coupleImage"
                  style={{ display: 'none' }}
                  onChange={(e) => handleFileChange(e, 'yourImage')}/>
                <label htmlFor="couple-image" className="custom-file-label" style={{ marginBottom: '25px' }}>Choose File</label>
                {formData.coupleImageName && <span className="imagename" style={{marginTop:"-25px",marginBottom:'25px'}}>{formData.yourImageName}</span>}

              </div>

              <div className="second-part">
                <p>Add your journey milestones</p>
                {formData.milestones.map((milestone, index) => (
                  <div key={index} className="milestone">
                    <div className="milestone-row">
                      <div className="milestone-input">
                        <label htmlFor={`milestone-${index}`}>Milestone {index + 1}</label>
                        <input
                          type="text"
                          id={`milestone-${index}`}
                          name="milestone"
                          value={milestone.milestone}
                          placeholder={`Milestone ${index + 1}`}
                          onChange={(event) => handleMilestoneChange(index, event)}
                        />
                      </div>
                      <div className="milestone-date">
                        <label htmlFor={`date-${index}`}>Date of Milestone</label>
                        <input
                          type="date"
                          id={`date-${index}`}
                          name="date"
                          value={milestone.date}
                          onChange={(event) => handleMilestoneChange(index, event)}
                        />
                      </div>
                      <div className="delete-icon">
                        <img src={Delete} alt="" srcSet="" onClick={() => handleDelete(index)} />
                      </div>
                    </div>
                  </div>
                ))}
                <div className="add-milestone-btn">
                  <button type="button" className="btn" onClick={addMilestone} style={{ marginBottom: "13px" }}>Add Milestone</button>
                </div>
              </div>
              <div className="btncontainer">
                <button type="submit" className="btn">Create Timeline</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="footer-content">
        <div className="gu-img">
          <img src={GU} alt="" />
        </div>
        <div className="text">
          <p id="from">from team</p>
          <p id="greetU">GreetsU</p>
        </div>
      </div>
    </div>
  );
}

export default Content;
