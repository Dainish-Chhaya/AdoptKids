import { useState } from "react";
import MoreInfo from "./MoreInfo";
import { useNavigate } from "react-router-dom";
import angelaImage from "../Assets/angela-300x225.jpg";
import { useSelector } from "react-redux";
interface SingleChildProps {
  data: {
    childId: string;
    name: string;
    gender: string;
    birthDate: string;
    parentName: string;
    grade: string;
    country: string;
    biography: string;
    healthStatus: string;
    photo: string;
  };
}

// const datas = useSelector(
//   (state: { child: { childId: string }[] }) => state.child
// );

function AdminSingleChild(props: SingleChildProps) {
  // const [showDetails, setShowDetails] = useState(false);
  const navigate = useNavigate();

  const handleButtonClick = () => {
    // setShowDetails(true);
    localStorage.setItem("selectedChildId", props.data.childId);
    navigate("/AdminDashboard/AdminMoreInfo");
  };
  const { data } = props;
  return (
    <>
      {/* <h1>{props.data.childId}</h1> */}
      <div
        className="card"
        style={{
          width: "18rem",
          margin: "25px",
        }}
      >
        <img src={data.photo} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.data.name}</h5>

          <button
            type="button"
            className="btn btn-primary"
            onClick={handleButtonClick}
          >
            More Information
          </button>
        </div>
      </div>
    </>
  );
}

export default AdminSingleChild;
