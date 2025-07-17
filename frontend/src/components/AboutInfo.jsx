import React from "react";
import { BiSolidQuoteSingleLeft } from "react-icons/bi";
import { BiSolidQuoteSingleRight } from "react-icons/bi";

const AboutInfo = () => {
  return (
    <section className="my-10">
      <div className="container mx-auto justify-center lg:px-24 px-6 max-w-4xl">
        <div className="ml-[-1rem] mb-4">
          <BiSolidQuoteSingleLeft color="skyblue" size={35} />
        </div>

        <p className="mb-8 text-xl font-normal text-primaryBlack/70">
          Nullam sodales bibendum nulla ut vulputate. Vivamus auctor tincidunt
          urna, ac molestie lectus imperdiet id. Maecenas nisl massa, mollis sed
          sem a, finibus dapibus dui. Phasellus rhoncus, quam id molestie
          efficitur, elit ipsum blandit diam, ac lobortis lectus nibh quis
          ligula. Ut nunc erat, lobortis vel ultrices aliquet, efficitur id
          mauris. Duis posuere hendrerit est lacinia consectetur. Morbi nec
          volutpat ipsum. Cras blandit efficitur velit ut consequat. Suspendisse
          potenti.
        </p>
        <p className="mb-8 text-xl font-normal text-primaryBlack/70">
          Quisque vitae nisi tempor, ultricies purus et, maximus metus.
          Phasellus tempus a lorem vel ultricies. Pellentesque a pharetra
          tellus, sit amet blandit ante. Morbi sollicitudin lacus ut orci
          fermentum, in vestibulum nulla egestas. Pellentesque nisi orci,
          ullamcorper ac bibendum quis, congue eget tellus. In sed est dolor.
          Mauris gravida sem diam, et placerat metus lacinia non. Morbi
          pellentesque ultricies ante at ultricies. Suspendisse vulputate elit
          vel sapien volutpat pharetra. In hac habitasse platea dictumst.
        </p>
        <p className="text-xl font-normal text-primaryBlack/70">
          Integer felis lorem, cursus ac leo quis, tristique elementum dolor. In
          hac habitasse platea dictumst. In hac habitasse platea dictumst. Sed
          interdum tincidunt suscipit. Sed sit amet tincidunt libero. Praesent
          id condimentum lacus. Vivamus congue scelerisque pulvinar
        </p>

        <div className="mt-4">
          <BiSolidQuoteSingleRight color="skyblue" size={35} />
        </div>
      </div>
    </section>
  );
};

export default AboutInfo;
