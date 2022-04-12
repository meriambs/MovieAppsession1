import React ,{useState} from 'react'
import './AddMovie.css';
import Modal from "react-modal";


const AddMovie = ({Addmoviehandeler}) => {
    const [modalIsOpen, setIsOpen] = useState(false);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [date, setDate] = useState("");
    const [type, setType] = useState("");
    const [image, setImage] = useState("");
    const [rating, setRating] = useState("");


    const openModal=()=>{
        setIsOpen(true)
    }
    const closeModal=()=>{
        setIsOpen(false)

    }

    //function add 
    const Addmovie=()=>{
        Addmoviehandeler(
            {
                name:name,
                description:description,
                date:date,
                type:type,
                image:image,
                rating:rating
            }
        )
        closeModal()
    }
  return (
    <div>
      <div className="Add-btn-container">
        <div className="btn-play" onClick={openModal}>
          <span>
            {" "}
            <ion-icon className="icon" name="play"></ion-icon>{" "}
          </span>
          +
        </div>
        <Modal
          className="add-modal"
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
       
        >
          <h1 className="addMovie-h1">Add A Movie</h1>
          <form>
            <label>Movie Name</label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label>Movie Release Date</label>
            <input
              type="number"
              name="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
            <label>Movie Image</label>
            <input
              type="url"
              name="image"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
            <label>Movie Type</label>
            <input
              type="text"
              name="type"
              value={type}
              onChange={(e) => setType(e.target.value)}
            />
            <div className="rating-search">
              <input
                value={rating}
                onChange={(e) => setRating(e.target.value)}
              />
            </div>
            <label>Movie Summary</label>
            <textarea
              type="text"
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </form>
          <button className="Modal-btn" onClick={()=>Addmovie()}>
            Submit
          </button> 
          <button className="Modal-btn" onClick={closeModal}>close</button>
        </Modal>
      </div>
    </div>
  )
}

export default AddMovie