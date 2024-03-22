import React from "react";
import { useNavigate } from "react-router-dom";

interface SingleChildProps {
  data: {
    childId: string;
    name?: string; // Make properties optional
    gender?: string;
    birthDate?: string;
    parentName?: string;
    grade?: string;
    country?: string;
    biography?: string;
    healthStatus?: string;
    photo?: string;
  };
}

function SingleChild(props: SingleChildProps) {
  const { data } = props;
  const navigate = useNavigate();
  return (
    <>
      <div
        className="card"
        style={{
          width: "18rem",
          margin: "25px",
        }}
      >
        <img src={data.photo} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{data.name}</h5>

          <button
            type="button"
            className="btn btn-primary"
            onClick={() => {
              localStorage.setItem("selectedChildId", props.data.childId);
              navigate("/Services/AdoptChild/MoreInfo");
            }}
          >
            More Information
          </button>
        </div>
      </div>
    </>
  );
}

export default SingleChild;
