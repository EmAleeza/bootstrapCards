import { BsGrid, BsListTask } from 'react-icons/bs'
import './BrowseCourses.css';


function Filter() {
  return (
    <>
      <div className="col-12 col-md-12 col-lg-3 displaingCourses  ">Displaying 9 out of 68 courses</div>
      {/* <!----Dashboard-----> */}
      <div className="col-3 mb-3 col-lg-1   offset-lg-5 ">

        <button className="btn btn-grid btn-outline-secondary active"  >
          <BsGrid />
        </button>
        <button className="btn btn-list btn-outline-secondary" >
          <BsListTask />
        </button>
      </div>


      {/* <!----Select-----> */}
      <div className="col-9 col-md-12 col-lg-3   fw-bolder fs-4 ">
        <select className="form-select rounded-3  mb-3 ">
          <option  >Sort By</option>
          <option>Free</option>
          <option>Most Popular</option>
          <option>Advance</option>
          <option>Newest</option>
          <option>Highest Rated</option>

        </select>
      </div>
    </>
  )
}

export default Filter