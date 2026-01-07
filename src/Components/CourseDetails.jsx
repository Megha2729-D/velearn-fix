import { Component } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

class CourseDetails extends Component {

    render() {
        return (
            <>
                <section className="banner_top_sec_parent">
                    <div className="banner_top_sec">
                        <div className="details_banner">
                            <div className="details_banner_inner">
                                <div className="section_container">
                                    <div className="row justify-content-between">
                                        <div className="col-lg-6">
                                            <div className="pe-lg-5">
                                                <h1 className="text-white">
                                                    Industry-Driven Online Full Stack Program With Live Mentors
                                                </h1>
                                                <p className="text-white mt-4">
                                                    A live, mentor-led Full Stack Development program designed to take you from fundamentals to production-ready applications — with real projects, real tools, and real career support.
                                                </p>
                                                <button>Enroll Now</button>
                                                <div className="pagination_parent d-lg-flex d-none">
                                                    <Link to={"/"}>Home</Link>
                                                    <span className="px-2"> /</span>
                                                    <Link to={"/recorded-course"}> Recorded courses </Link>
                                                    <span className="px-2">/</span>
                                                    <Link to={"/course-details"}> Data Science in English</Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 mt-5 mt-lg-0 position-relative">
                                            <form action="#">
                                                <div className="d-flex flex-column w-100 my-3">
                                                    <label for="name">Name</label>
                                                    <input type="text" name="name" id="name" />
                                                </div>
                                                <div className="d-flex flex-column w-100 my-3">
                                                    <label for="phone">Phone Number</label>
                                                    <input type="number" name="phone" id="phone" />
                                                </div>
                                                <div className="d-flex flex-column w-100 my-3">
                                                    <label for="email">Email</label>
                                                    <input type="email" name="email" id="email" />
                                                </div>
                                                <div className="d-flex justify-content-center mb-3">
                                                    <button>Send</button>
                                                </div>
                                            </form>
                                            <div className="pagination_parent mt-5 d-lg-none d-flex justify-content-center">
                                                <Link to={"/"}>Home</Link>
                                                <span className="px-2"> /</span>
                                                <Link to={"/recorded-course"}> Recorded courses </Link>
                                                <span className="px-2">/</span>
                                                <Link to={"/course-details"}> Data Science in English</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="banner_details">
                            <div className="section_container">
                                <div className="col-12 d-flex justify-content-start">
                                    <div className="col-lg-9">
                                        <div className="ms-lg-5 ms-2 py-3">
                                            <div className="row text-center">
                                                <div className="col-6 col-lg-3 mb-3 banner_details_list d-flex justify-content-center">
                                                    <div className="d-flex justify-content-center align-items-center align-items-lg-start flex-column">
                                                        <p className="fw-bold mb-1">4 Modules</p>
                                                        <p className="mb-0">with Certifications</p>
                                                    </div>
                                                </div>
                                                <div className="col-6 col-lg-3 mb-3 banner_details_list d-flex justify-content-center">
                                                    <div className="d-flex justify-content-center align-items-center align-items-lg-start flex-column">
                                                        <p className="fw-bold mb-1">4 Hours</p>
                                                        <p className="mb-0">of Recorded Content</p>
                                                    </div>
                                                </div>
                                                <div className="col-6 col-lg-3 mb-3 banner_details_list d-flex justify-content-center">
                                                    <div className="d-flex justify-content-center align-items-center align-items-lg-start flex-column">
                                                        <p className="fw-bold mb-1">4.5 Ratings</p>
                                                        <p className="mb-0">by 1000 Learners</p>
                                                    </div>
                                                </div>
                                                <div className="col-6 col-lg-3 mb-3 banner_details_list d-flex justify-content-center">
                                                    <div className="d-flex justify-content-center align-items-center align-items-lg-start flex-column">
                                                        <p className="fw-bold mb-1">English</p>
                                                        <p className="mb-0">Language</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="details_desc_parent">
                        <div className="section_container">
                            <div className="why_choose_details pt-5 pb-lg-5">
                                <div className="d-flex justify-content-center col-12">
                                    <div className="col-lg-7">
                                        <h3 className="text-white text-center px-3 lh-sm">Why Full Stack Development Is a Smart
                                            <span className="text-c2"> Career Choice</span>
                                        </h3>
                                    </div>
                                </div>
                                {/* Cards */}
                                {/* Top Row - 3 Cards */}
                                <div className="col-lg-12 d-flex justify-content-center">
                                    <div className="col-lg-8">
                                        <div className="row justify-content-center mb-4">
                                            <div className="col-lg-4 col-6 mb-3">
                                                <div className="col-12 my-4 big">
                                                    <div className="why-card">
                                                        Learn One Skill, Work in Multiple Roles
                                                    </div>
                                                </div>
                                                <div className="col-12 my-4 big">
                                                    <div className="why-card">
                                                        High Demand Across All Industries
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-6 mb-3">
                                                <div className="col-12 my-4 small">
                                                    <div className="why-card">
                                                        Build Real Products, Not Just Code
                                                    </div>
                                                </div>
                                                <div className="col-12 my-4 small">
                                                    <div className="why-card">
                                                        Higher Salary Potential
                                                    </div>
                                                </div>
                                                <div className="col-12 my-4 small">
                                                    <div className="why-card">
                                                        Faster Career Growth
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-12 mb-3 mt-4 mt-lg-0 d-flex flex-row flex-lg-column">
                                                <div className="col-6 col-lg-12 my-4 big pe-3 pe-lg-0">
                                                    <div className="why-card">
                                                        Strong Foundation for Future Tech
                                                    </div>
                                                </div>
                                                <div className="col-6 col-lg-12 my-4 my-lg-0 big ps-3 ps-lg-0">
                                                    <div className="why-card">
                                                        Logic-Driven Problem Solving
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="detail_overview pb-4">
                                <div className="col-12">
                                    <h3 className="text-c2 text-center"> Course Overview</h3>
                                    <p className="text-white text-center text-lg-start mt-3">
                                        Data science is an interdisciplinary field that focuses on extracting meaningful insights from data. It combines statistics, mathematics, programming, and domain knowledge to analyze structured and unstructured data. Data scientists collect, clean, and process large datasets, then apply techniques like data analysis, visualization, machine learning, and predictive modeling. The goal is to identify patterns, trends, and relationships that support better decision-making. Data science is widely used in industries such as healthcare, finance, marketing, e-commerce, and technology. By turning raw data into actionable insights, data science helps organizations improve efficiency, predict outcomes, and create data-driven strategies for growth and innovation.
                                    </p>
                                </div>
                            </div>
                            <div className="career_launch pb-4">
                                <h3 className="text-white text-center">Launch your iT Career As a <span className="text-c2"> Full Stack Developer</span></h3>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}

export default CourseDetails;
