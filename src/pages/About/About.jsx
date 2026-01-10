import { useState } from "react";
import aboutData from '../About/data/aboutData.js'

const About = () => {
  const [activeTab, setActiveTab] = useState("story");

  const { title, content } = aboutData[activeTab];

  return (
    <section className="h-175 px-4 py-10">
      
      {/* Header */}
      <h1 className="text-4xl font-bold mb-4">About Us</h1>
      <p className="text-gray-600 max-w-2xl mb-8">
        Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle.
        From personal packages to business shipments — we deliver on time, every time.
      </p>

      {/* Tabs */}
      <div className="tabs mb-6">
        <button
          className={`tab tab-bordered ${activeTab === "story" && "tab-active"}`}
          onClick={() => setActiveTab("story")}
        >
          Story
        </button>

        <button
          className={`tab tab-bordered ${activeTab === "mission" && "tab-active"}`}
          onClick={() => setActiveTab("mission")}
        >
          Mission
        </button>

        <button
          className={`tab tab-bordered ${activeTab === "success" && "tab-active"}`}
          onClick={() => setActiveTab("success")}
        >
          Success
        </button>

        <button
          className={`tab tab-bordered ${activeTab === "team" && "tab-active"}`}
          onClick={() => setActiveTab("team")}
        >
          Team & Others
        </button>
      </div>

      {/* Content Box */}
      <div className="border rounded-xl p-6 bg-base-100">
        <h2 className="text-2xl font-semibold mb-4">{title}</h2>

        <div className="space-y-4 text-gray-600">
          {content.map((text, index) => (
            <p key={index}>{text}</p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
