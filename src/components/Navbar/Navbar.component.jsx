import React from "react";
import { Instagram, Github, Linkedin } from "lucide-react";

export function Navbar() {
  return (
    <aside className="h-full w-1/3 bg-white/60 rounded-3xl shadow-xl p-4">
      <div className="flex flex-col h-full justify-between">
        <div className="flex flex-col justify-center items-center text-gray-900">
          <img
            src="/profile-photo.png"
            alt="profile-photo"
            className="size-20 rounded-full"
          />
          <span>Lincoln Diogo</span>
          <span>Front-end Developer</span>
          <span>Dev.lincoln.diogo@gmail.com</span>
        </div>
        <div>
          <p className="text-gray-600">
            Meu nome é Lincoln, tenho 23 anos e estou cursando Sistemas de
            Informação na UNIFACISA. Sou apaixonado por desenvolvimento web e
            especializado em criar interfaces dinâmicas e responsivas com React.
            Busco sempre aprender novas ferramentas e resolver problemas de
            forma criativa e eficiente.
          </p>
        </div>
        <div className="flex flex-col mt-4">
          <span className="text-2xl mb-2 text-gray-800">Skills:</span>
          <ul className="flex flex-col justify-center text-gray-600">
            <li>- HTML</li>
            <li>- CSS</li>
            <li>- JAVASCRIPT</li>
            <li>- REACT</li>
            <li>- TAILWIND</li>
          </ul>
        </div>
        <div className="flex flex-col">
          <span className="text-2xl pb-3 text-gray-600">Projetos:</span>
          <a
            href="https://e-commerce-beta-rust.vercel.app/"
            target="_blank"
            className="p-2 mb-2 bg-purple text-white rounded text-center hover:brightness-90 transition-colors"
          >
            E-COMMERCE
          </a>
          <a
            href="https://movies-rating-97q4rzbmp-lincolndiogo200s-projects.vercel.app/"
            target="_blank"
            className="p-2 mb-2 bg-purple text-white rounded text-center hover:brightness-90 transition-colors"
          >
            MOVIES RATING
          </a>
          <a
            href="https://github-profile-finder-bay-nu.vercel.app/"
            target="_blank"
            className="p-2 mb-2 bg-purple text-white rounded text-center hover:brightness-90 transition-colors"
          >
            GITHUB FINDER
          </a>
        </div>
        <div>
          <span className="text-2xl text-gray-600">Sociais:</span>
          <div className="flex justify-around space-x-4 mt-4">
            <a href="https://github.com/Lincolndiogo200" target="_blank">
              <Github size={35} color="#979BF7" />
            </a>
            <a href="">
              <Linkedin size={35} color="#979BF7" />
            </a>
            <a href="https://www.instagram.com/lincolndfo_/" target="_blank">
              <Instagram size={35} color="#979BF7" />
            </a>
          </div>
        </div>
      </div>
    </aside>
  );
}
