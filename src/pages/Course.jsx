import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Course = () => {
  const [data, setData] = useState([]);

  const callApi = async () => {
    const res = await axios.get("https://api.codingthailand.com/api/course");
    const data_format = await res.data.data;

    // เก็บข้อมูลทราอ่านได้ใส่ State
    setData(data_format);
  };

  useEffect(() => {
    //call api เมื่อมีการเปิด component ครั้งแรก
    callApi();
  }, []);

  return (
    <>
      <div className="min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-6">
        <h1 className="text-4xl font-bold text-white text-center mb-8">Course</h1>
        <hr className="border-t-4 border-white mb-6"/>
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {
          data.map((course) => (
            <CourseCard key={course.id} {...course}/>
          ))
        }
        </div>
      </div>
    </>
  );
};

const CourseCard = (props) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
      <div style={{ border: "1px solid black", marginBottom: 10 }}>
        <div>
          <img src={props.picture} alt="" style={{width: 100 ,paddingBottom:'10px'}}/>
        </div>
        <div>{props.title}</div>
        <div>{props.detail}</div>
        <div>
          <NavLink to={'/course/'+props.id} className="text-blue-700">เนื้อหาในหลักสูตร</NavLink>
        </div>
      </div>
    </div>
  );
}
export default Course;