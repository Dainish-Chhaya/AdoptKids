import { useEffect, useState } from "react";
import AdminSingleChild from "./AdminSingleChild";
import { useSelector } from "react-redux";

interface ChildData {
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
}

// const datas = useSelector(
//   (state: { child: { childId: string }[] }) => state.child
// );

function AdminAdoptChild() {
  const [datas, setDatas] = useState<ChildData[]>([]);
  useEffect(() => {
    fetch("http://localhost:3000/child/piyush")
      .then((response) => response.json())
      .then((data) => {
        console.log("Called");
        console.log(data);
        setDatas(data);
      })
      .catch((e) => {});
  }, []);

  return (
    <>
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {datas.map((item: ChildData) => (
          <AdminSingleChild key={item.childId} data={item} />
        ))}
      </div>
    </>
  );
}

export default AdminAdoptChild;
