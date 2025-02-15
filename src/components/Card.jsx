export default function Card({ record }) {
  return (
    <div className="card">
      <img src={record.img} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-text">{record.title}</h5>
        <p className="card-text">{record.artist}</p>
        <p className="card-text">{record.year}</p>
      </div>
    </div>
  );
}
