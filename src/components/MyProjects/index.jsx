import React from "react";
import NavItem from "./NavItem";

export default function MyProjects() {
  return (
    <section className="bg-black p-4 md:p-8 mb-[50vh]">
      <div className="mx-auto max-w-5xl">
        <NavItem
          heading="Hinder"
          subheading="It's a dating app"
          imgSrc="/medias/hinder1.webp"
          href="#"
        />
        <NavItem
          heading="PetFinder"
          subheading="Its all about the SEO and Performance!!"
          imgSrc="/medias/petfinder.png"
          href="#"
        />
        <NavItem
          heading="PencilPaws"
          subheading="Use the apple pencil on an ipad!"
          imgSrc="/medias/pencil-paws.png"
          href="#"
        />
        <NavItem
          heading="Nordstan"
          subheading="The most used bus in Gothemburg is bus number 16"
          imgSrc="/medias/nordstan.png"
          href="#"
        />
        <NavItem
          heading="Hangman"
          subheading="Creating a classic"
          imgSrc="/medias/hangman.png"
          href="#"
        />
        <NavItem
          heading="The Egg"
          subheading="Completely useless but fun"
          imgSrc="/medias/egg.png"
          href="#"
        />
      </div>
    </section>
  );
}
