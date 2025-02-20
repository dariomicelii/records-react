import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddRecord() {
  const defaultFormData = {
    img: "",
    title: "",
    artist: "",
    year: "",
  };

  const apiUrl = "http://localhost:3000/records";
  const [formData, setFormData] = useState(defaultFormData);
  const [okState, setOkState] = useState(false);
  const navigate = useNavigate();

  function handleSubmitFormData(e) {
    e.preventDefault();
    console.log("dati inviati:", formData);

    if (formData.title) {
      fetch(apiUrl, {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-type": "application/json",
        },
      })
        .then((res) => {
          console.log("🟢 Risposta server:", res);
          return res.json();
        })
        .then((data) => {
          console.log("✅ Disco aggiunto:", data);
          navigate("/records"); // Reindirizza alla lista dopo l'aggiunta
        })
        .catch((error) => console.error("Errore:", error));
    }
  }

  function handleInputFormData(e) {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === "year" ? Number(value) : value, // Converte 'year' in numero
    });
    setOkState(true);
  }

  // function handleInputFormData(e) {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  //   setOkState(true);
  // }

  return (
    <>
      <form onSubmit={handleSubmitFormData}>
        <div className="container">
          <h1 className="container my-5">Aggiungi un Disco</h1>

          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="floatingImage"
              placeholder="Immagine"
              name="img"
              value={formData.img}
              onChange={handleInputFormData}
            />
            <label htmlFor="floatingImage">Immagine</label>
          </div>

          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="floatingTitle"
              placeholder="Titolo"
              name="title"
              value={formData.title}
              onChange={handleInputFormData}
              required
            />
            <label htmlFor="floatingTitle">Titolo</label>
          </div>

          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="floatingArtist"
              placeholder="Artista"
              name="artist"
              value={formData.artist}
              onChange={handleInputFormData}
            />
            <label htmlFor="floatingArtist">Artista</label>
          </div>

          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              id="floatingYear"
              placeholder="Anno"
              name="year"
              value={formData.year}
              onChange={handleInputFormData}
            />
            <label htmlFor="floatingYear">Anno</label>
          </div>

          <button type="submit" className="btn btn-primary mt-3">
            Aggiungi Disco
          </button>
        </div>
      </form>
    </>
  );
}

// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// export default function AddRecord() {
//   const defaultFormData = {
//     image: "",
//     title: "",
//     artist: "",
//     year: "",
//   };

//   const apiUrl = "http://localhost:3000/records";
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState(defaultFormData);
//   const [okState, setOkState] = useState(false);

//   function handleSubmitFormData(e) {
//     e.preventDefault();
//     if (formData.title) {
//       fetch(apiUrl, {
//         method: "POST",
//         body: JSON.stringify(formData),
//         headers: {
//           "Content-type": "application/json",
//         },
//       })
//         .then((res) => res.json())
//         .then((data) => {
//           fetchProperties();
//           setSelectedItem("records");
//           navigate("/records");
//         });
//     } else {
//       setOkState(false);
//     }
//   }

//   function handleInputFormData(e) {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//     setOkState(true);
//   }

//   return (
//     <>
//       <form onSubmit={handleSubmitFormData}>
//         <div className="container">
//           <h1 className="container my-5">Add Record</h1>
//           <div className="form-floating mb-3">
//             <input
//               type="text"
//               className="form-control"
//               id="floatingInput"
//               placeholder="Immagine"
//               name="Immagine"
//               value={formData.image}
//               onChange={handleInputFormData}
//             ></input>
//             <label htmlFor="floatingInput">Immagine</label>
//           </div>
//           <div className="form-floating mb-3">
//             <input
//               type="text"
//               className="form-control"
//               id="floatingInput"
//               placeholder="Titolo"
//               name="Titolo"
//               value={formData.title}
//               onChange={handleInputFormData}
//               required
//             ></input>
//             <label htmlFor="floatingInput">Titolo</label>
//           </div>
//           <div className="form-floating mb-3">
//             <input
//               type="text"
//               className="form-control"
//               id="floatingArtist"
//               placeholder="Artista"
//               name="Artista"
//               value={formData.artist}
//               onChange={handleInputFormData}
//             ></input>
//             <label htmlFor="floatingPassword">Artista</label>
//           </div>
//           <div className="form-floating ">
//             <input
//               type="number"
//               className="form-control"
//               id="floatingArtist"
//               placeholder="Anno"
//               name="Anno"
//               value={formData.year}
//               onChange={handleInputFormData}
//             ></input>
//             <label htmlFor="floatingPassword">Anno</label>
//           </div>
//           <button type="submit" className="btn btn-primary mt-3">
//             Aggiungi Disco
//           </button>
//         </div>
//       </form>
//     </>
//   );
// }
