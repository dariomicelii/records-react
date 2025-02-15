import { useState, useEffect } from "react";
import Card from "../components/Card";

export default function RecordsIndex() {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    const url = "http://localhost:3000/records";
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        setRecords(data.records);
        console.log(data);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  }, []);

  return (
    <>
      <h1 className="container mt-5">I miei dischi</h1>
      <div className="container d-flex gap-5">
        {records.map((record) => (
          <div
            key={record.id}
            className="row row-cols-md-5 row-cols-3 row-cols-sm-4 g-3 mt-5"
          >
            <div className="col">
              <Card key={record.id} record={record} />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
