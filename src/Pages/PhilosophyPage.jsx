// Pages/PhilosophyPage.jsx
import React from "react";
import { Link } from "react-router-dom";
import philosophyHero from "../asset/philosophy1.png";
import materialImg from "../asset/philosophy2.png";
import timelessImg from "../asset/philosophy3.png";

const PhilosophyPage = () => {
  return (
    <div className="bg-white text-black">
      {/* Section 1: Hero */}
      <section className="relative w-full h-[420px] md:h-[560px] lg:h-[640px] overflow-hidden">
        <img
          src={philosophyHero}
          alt="Philosophy Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black/40 px-4">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif mb-8 tracking-wide">
            The quiet eloquence of space.
          </h2>
          <p className="max-w-3xl text-xl md:text-2xl leading-relaxed text-gray-100">
            We believe architecture is the art of subtraction. By stripping away
            the non-essential, we reveal the profound beauty of structure, light,
            and material truth.
          </p>
          <span className="mt-10 text-3xl text-white animate-bounce">
            ↓
          </span>
        </div>
      </section>

      {/* Section 2: Material Honesty */}
      <section className="w-full bg-white py-20 md:py-28">
        <div className="container mx-auto grid md:grid-cols-2 gap-12 px-6 items-center">
          <div>
            <span className="block w-12 h-[2px] bg-black mb-6" />
            <h3 className="text-2xl md:text-3xl font-serif mb-4">
              Material Honesty
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Our materials are not chosen; they are discovered in the context of
              the site. We celebrate the raw, the unadorned, and the natural patina
              of time. Wood, concrete, stone, and steel — each element speaks its
              own language, contributing to a harmonious whole that is deeply
              rooted in its environment.
            </p>
          </div>
          <div className="overflow-hidden rounded shadow-lg">
            <img
              src={materialImg}
              alt="Material Honesty"
              className="w-full h-[300px] md:h-[350px] lg:h-[420px] object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>
      </section>

      {/* Section 3: Timelessness */}
      <section className="w-full bg-gray-50 py-20 md:py-28">
        <div className="container mx-auto grid md:grid-cols-2 gap-12 px-6 items-center">
          <div className="overflow-hidden rounded shadow-lg order-2 md:order-1">
            <img
              src={timelessImg}
              alt="Timelessness"
              className="w-full h-[300px] md:h-[350px] lg:h-[420px] object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
          <div className="order-1 md:order-2">
            <span className="block w-12 h-[2px] bg-black mb-6" />
            <h3 className="text-2xl md:text-3xl font-serif mb-4">
              Timelessness
            </h3>
            <p className="text-gray-600 leading-relaxed mb-8">
              We design for permanence. By avoiding fleeting trends and focusing on
              enduring principles of proportion, scale, and light, we create spaces
              that transcend eras. Our architecture is meant to age gracefully,
              becoming more resonant with each passing generation.
            </p>
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 bg-white text-black border border-gray-300 px-6 py-3 rounded-full hover:bg-black hover:text-white hover:border-black transition-colors duration-300 tracking-wide shadow-sm"
            >
              View Portfolio <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Section 4: Manifesto Quote */}
      <section className="w-full bg-black py-24 md:py-32 px-6">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
          <span className="text-5xl md:text-6xl font-serif text-gray-600 mb-4 leading-none">
            &rdquo;
          </span>
          <p className="font-serif text-2xl md:text-4xl text-white leading-relaxed mb-8">
            &quot;Space is the breath of art. We do not build walls; we shape the
            void between them.&quot;
          </p>
          <span className="text-sm font-semibold tracking-widest text-gray-400 uppercase">
            The Aesthetique Manifesto
          </span>
        </div>
      </section>
    </div>
  );
};

export default PhilosophyPage;