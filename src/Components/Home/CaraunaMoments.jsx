import React from "react";
import { TbAnchor } from "react-icons/tb";
import { HiOutlineExternalLink } from "react-icons/hi";
import img2 from "../../assets/imagensHero/imagen2.jpg";
import { Link } from "react-router-dom";
const CaraunaMoments = () => {
  return (
    <div className="border mt-10 w-full flex items-center flex-col">
      <div className="">
        <h1 className="text-xl text-start">
          Conheça a beleza da costa paraibana com a Carauna!
        </h1>
      </div>
      <div>
        <img className="rounded-md" src={img2} alt="" />
      </div>
      <div>
        <p>
          Navegue pelas águas cristalinas da costa paraibana e aproveite
          momentos inesquecíveis com a Carauna. Reserve agora sua viagem!
        </p>
        <Link className="btn flex gap-2">
          Explore os destinos <HiOutlineExternalLink />
        </Link>
      </div>
    </div>
  );
};

export default CaraunaMoments;
