import Link from "next/link";
import Image from "next/image";

export default function EventsItem({ item }) {
  const { id, title, image } = item;

  return (
    <div className="col-md-4">
      <div className="card h-100">
        <div className="position-relative" style={{height:'200px'}}>
          <Image
            className="d-block"
            src={image}
            fill
            alt="Picture of the author"
          />
        </div>
        <div className="card-body">
          <h3 className="card-title mb-3">{title}</h3>
          <Link href={`/events/${id}`} className="btn">
            Explore
          </Link>
        </div>
      </div>
    </div>
  );
}
