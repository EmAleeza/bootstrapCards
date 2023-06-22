// import { CoursesListData } from "./CoursesListData";
import { BsFillStarFill } from 'react-icons/bs';
import { CoursesListData, RatingSkillData } from './CoursesListData';

function CoursesList() {
    return (
        <>
            {/* <!-----Catagory list------> */}

            <h5 className="fw-bold ">Filter</h5>
            <hr />
            <p className='text-muted'>Catagories</p>
            {
                CoursesListData.map((Catagorydata) => {
                    return <div key={Catagorydata.catagoryList}>
                        <input className="form-check-input" type="checkbox" value="" />
                        <label className="form-check-label ms-2 text-muted ">{Catagorydata.catagoryList}</label>
                    </div>
                })
            }
            <hr />

            {/* Rating list */}
            <p className='text-muted'>Ratings</p>
            {
                RatingSkillData.map((RatingData) => {
                    return <div key={RatingData.Rating}>
                        <input className="form-check-input" type="radio" value="" />
                        <label className="form-check-label ms-2 text-muted " >
                            <span className="text-warning ">
                                <i><BsFillStarFill /></i>
                                <i><BsFillStarFill /></i>
                                <i><BsFillStarFill /></i>
                                <i><BsFillStarFill /></i>
                                <i><BsFillStarFill /></i>
                            </span>

                            <span className='ms-2' >{RatingData.Rating}</span>
                        </label>
                    </div>

                })
            }
            <hr />

            {/* Skill level */}
            <p className='text-muted'>Skill Level</p>
            {
                RatingSkillData.map((SkillLevelData) => {
                    return <div key={SkillLevelData.SkillLevel}>
                        <input className="form-check-input" type="checkbox" value="" />
                        <label className="form-check-label ms-2 text-muted ">{SkillLevelData.SkillLevel}</label>
                    </div>
                })
            }
        </>
    )
}

export default CoursesList