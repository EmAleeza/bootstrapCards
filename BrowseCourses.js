import Header from "../../Header/Header"
import './BrowseCourses.css'
import Cards from "./Cards"
import CoursesList from "./CoursesList"
import Filter from "./Filter"
import { CardData } from "./CardsData"
import Footer from '../../Footer/Footer'


function BrowseCourses() {
    return (
        <div>
            <Header />
            <section className="blue-bg">
                <div className="container">
                    <h1 className="text-white">Filter Page</h1>
                </div>
            </section>

            <section className="bg-body">
                <div className="container">
                    <div className="row g-2  ms-auto me-auto ">
                        <Filter />
                    </div>

                    <div className="row ms-auto me-auto">
                        <div className="col-12 shadow-sm col-lg-3 bg-white py-4 px-4 ms-auto me-auto  rounded-3 h-75 mb-4">
                        <div className="row">
                            <div className="col-lg-12 col-12">
                                <CoursesList />
                            </div>
                        </div>
                            
                        </div>

                        <div className="col-12 col-lg-9">
                            <div className="row g-4 ">
                                {
                                    CardData.map((data) => {
                                        return <div className="col-12 col-md-12 col-lg-4" key={data.rating}>
                                            <Cards
                                                cardImg={data.angular}
                                                title={data.title}
                                                profile={data.profile}
                                                instructor={data.instructor}
                                                courseDuration={data.courseDuration}
                                                rating={data.rating}
                                                courseRating={data.courseRating}
                                            />
                                        </div>
                                    })}
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </section>

        </div>

    )
}

export default BrowseCourses
