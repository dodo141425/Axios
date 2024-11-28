import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const Chapter = () => {
  const params = useParams();
  const id = params.id;
  // ยิง api ไป get chapter ยังไง?
  const [data, setData] = useState([]);
  const callApi = async () => {
    const res = await axios.get(
      "https://api.codingthailand.com/api/course/" + id
    );
    console.log(res);
    const data_format = await res.data.data;
    // เก็บข้อมูลที่อ่านได้ใส่ State
    setData(data_format);
  };
  useEffect(() => {
    //call api เมื่อมีการเปิด component ครั้งแรก
    callApi();
    console.log(data);
  }, []);
  return (
    <>
      <div className="min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-6">
        <div className="min-h-screen bg-gray-100 p-6">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Chapter {id}</h1>
          <hr className="border-gray-400 mb-6"/>
            <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {
              data.map((c) => (
                <CourseCard key={c.course_id}
                title={c.ch_title} 
                views={c.ch_view} 
                timeTotal={c.ch_timetotal}
                url={c.ch_url} />
              ))
            }
            </div>
        </div>
      </div>
    </>
  );
};
const CourseCard = (props) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <div>{props.title}</div>
      <iframe width="560" height="315" src={"https://www.youtube.com/embed/"+ props.url}></iframe>
      <div>{props.views}</div>
      <div>{props.timeTotal}</div>
    </div>
  );
}
export default Chapter;