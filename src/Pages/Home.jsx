import axios from "axios";
import React, { useEffect, useState } from "react";
import{toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = ({ token }) => {
  const [resData, setResData] = useState([]);


  useEffect(() => {
    fetchdata();
  }, []);
  const fetchdata = async () => {
    await axios
      .get("https://authentication-backend-1-961o.onrender.com/api/get-user", {
        headers: { Authorization: token },
      })
      .then((res) => {
        setResData(res.data.data);
        toast.success(res.data.message);
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.response.data.message);
      });
  };
  return (
    <>
    {/* profile page */}
      <div className="tablescroll m-5">
        <h2 className="text-center fw-bolder">PROFILE</h2>
        <table className="table table-responsive table-bordered">
          <thead>
            <tr>
              <th scope="col" className="text-center fs-4">
                USERNAME
              </th>
              <th scope="col" className="text-center fs-4">
                EMAIL
              </th>
            </tr>
          </thead>
          <tbody>
            {resData.map((ele, i) => {
             return(
                <tr key={i}>
                    <td className="text-center">{ele.username}</td>
                    <td className="text-center">{ele.email}</td>
                </tr>
             )
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Home;
