// import React, { useContext } from "react";
// import Pagination from "./../common/Pagination";
// import {DashContext} from "../context/DashContext";
//
//
// const CourseTable = () => {
// const context=useContext(DashContext)
//     const {courseData,perPage,currentPage,handlePageChange,openNewCourseDialog}=context
//
//     // const [currentPage, setCurrentPage] = useState(1);
//     // const [perPage] = useState(2);
//     //
//     // const handlePageChange = (page) => {
//     //     setCurrentPage(page);
//     // };
//     //
//     // const courseData = paginate(courses, currentPage, perPage);
//
//     return (
//         <section style={{ marginTop: "5em", marginRight: "2em" }}>
//             <div>
//                 <div>
//                     <h3 className="alert alert-info text-center">
//                         لیست دوره ها
//                     </h3>
//                     <div className="row inline-block">
//                         <button className="btn btn-primary" onClick={openNewCourseDialog}>
//                             <span
//                                 className="fa fa-plus"
//                                 style={{
//                                     verticalAlign: "middle",
//                                     marginLeft: "1em",
//                                 }}
//                             />
//                             اضافه کردن دوره جدید
//                         </button>
//                         <input
//                             type="text"
//                             placeholder="جستجوی دوره"
//                             className="form-control"
//                             style={{
//                                 width: "50%",
//                                 float: "left",
//                                 marginLeft: "2em",
//                             }}
//                         />
//                     </div>
//                     <table className="table">
//                         <thead>
//                             <tr>
//                                 <th scope="col">عنوان دوره</th>
//                                 <th scope="col">تصویر دوره</th>
//                                 <th scope="col">قیمت دوره (تومان)</th>
//                                 <th scope="col">ویرایش</th>
//                                 <th scope="col">حذف</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {courseData.map((course) => (
//                                 <tr key={course._id}>
//                                     <td>{course.title}</td>
//                                     <td>
//                                         <a
//                                             href={`https://toplearnapi.ghorbany.dev/${course.imageUrl}`}
//                                             target="_blank"
//                                             className="btn btn-info btn-sm"
//                                         >
//                                             نمایش تصویر
//                                         </a>
//                                     </td>
//                                     <td>
//                                         {course.price === 0
//                                             ? "رایگان"
//                                             : `${course.price}`}
//                                     </td>
//                                     <td>
//                                         <button className="btn btn-warning">
//                                             ویرایش
//                                         </button>
//                                     </td>
//                                     <td>
//                                         <button className="btn btn-danger">
//                                             حذف
//                                         </button>
//                                     </td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                 </div>
//                 <div className="navbar-fixed-bottom text-center footer">
//                     <Pagination
//                         totalCourse={courseData.length}
//                         currentPage={currentPage}
//                         perPage={perPage}
//                         onPageChange={handlePageChange}
//                     />
//                 </div>
//             </div>
//         </section>
//     );
// };
//
// export default CourseTable;


import React, { useContext } from "react";
import Pagination from "./../common/Pagination";
import {DashContext} from "../context/DashContext";


const CourseTable = () => {
    const context = useContext(DashContext);

    const {
        currentPage,
        perPage,
        handlePageChange,
        courseData,
        openNewCourseDialog,
        openEditCourseDialog,
        openDeleteCourseDialog,
        setSearch,
        filteredCourses,
        sortCoursesDes,
        sortCoursesAsc
    } = context;

    return (
        <section style={{ marginTop: "5em", marginRight: "2em" }}>
            <div>
                <div>
                    <h3 className="alert alert-info text-center">
                        لیست دوره ها
                    </h3>
                    <div className="row inline-block">
                        <button
                            className="btn btn-primary"
                            onClick={openNewCourseDialog}
                        >
                            <span
                                className="fa fa-plus"
                                style={{
                                    verticalAlign: "middle",
                                    marginLeft: "1em",
                                }}
                            />
                            اضافه کردن دوره جدید
                        </button>
                        <input
                            type="text"
                            placeholder="جستجوی دوره"
                            onChange={e=>setSearch(e.target.value)}
                            className="form-control"
                            style={{
                                width: "50%",
                                float: "left",
                                marginLeft: "2em",
                            }}
                        />
                    </div>
                    <table className="table">
                        <thead>
                        <tr>
                            <th scope="col">عنوان دوره</th>
                            <th scope="col">تصویر دوره</th>
                            <th scope="col">قیمت دوره (تومان)
                                <span
                                    className="fa fa-long-arrow-up"
                                    style={{ marginRight: "0.5em" }}
                                    onClick={sortCoursesDes}
                                >نزولی</span>
                                <span
                                    className="fa fa-long-arrow-down"
                                    style={{ marginRight: "0.5em" }}
                                    onClick={sortCoursesAsc}
                                >صعودی</span>

                            </th>
                            <th scope="col">ویرایش</th>
                            <th scope="col">حذف</th>
                        </tr>
                        </thead>
                        <tbody>
                        {courseData.map((course) => (
                            <tr key={course._id}>
                                <td>{course.title}</td>
                                <td>
                                    <a
                                        href={`https://toplearnapi.ghorbany.dev/${course.imageUrl}`}
                                        target="_blank"
                                        className="btn btn-info btn-sm"
                                    >
                                        نمایش تصویر
                                    </a>
                                </td>
                                <td>
                                    {course.price === 0
                                        ? "رایگان"
                                        : `${course.price}`}
                                </td>
                                <td>
                                    <button className="btn btn-warning" onClick={()=>openEditCourseDialog(course)}>
                                        ویرایش
                                    </button>
                                </td>
                                <td>
                                    <button className="btn btn-danger" onClick={()=>openDeleteCourseDialog(course)}>
                                        حذف
                                    </button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
                <div className="navbar-fixed-bottom text-center footer">
                    <Pagination
                        totalCourse={filteredCourses.length}
                        currentPage={currentPage}
                        perPage={perPage}
                        onPageChange={handlePageChange}
                    />
                </div>
            </div>
        </section>
    );
};

export default CourseTable;
