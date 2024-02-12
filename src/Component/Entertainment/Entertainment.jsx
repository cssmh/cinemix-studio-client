import { useEffect, useState } from "react";
import CineCard from "../CineCard/CineCard";
import { Link } from "react-router-dom";

const Entertainment = () => {
  const [media, setMedia] = useState([]);

  useEffect(() => {
    fetch("media.json")
      .then((res) => res.json())
      .then((data) => {
        setMedia(data);
      }),
      [];
  });

  return (
    <Link>
      <div className="my-7 max-w-5xl mx-auto">
        <h1 className="text-3xl font-semibold text-center mb-9">
          Entertainment and Media
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {media.map((med) => (
            <CineCard key={med.id} getMedia={med}></CineCard>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default Entertainment;
