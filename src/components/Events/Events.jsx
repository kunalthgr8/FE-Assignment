import React from "react";
import Filter from "./Filter";
import EventCard from "./EventCard";

function App() {
  return (
    <div className="flex flex-col md:flex-row p-4 bg-gray-100 h-full">
      <div className="w-full md:w-1/4 p-4">
        <Filter />
      </div>

      <div className="w-full md:w-3/4 p-4">
        <h2 className="text-2xl font-semibold mb-4">Events</h2>
        <div className="flex gap-4 flex-wrap">
          <EventCard
            title="Magic Beans - RHYME AND RHYTHM (OFFLINE)"
            date="Wed, 6 Nov onwards"
            location="Magic Beans - Kemps Corner"
            category="Education"
            price="₹650"
            image="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-V2VkLCA2IE5vdiBvbndhcmRz,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00131529-vljtghadtk-portrait.jpg"
          />
          <EventCard
            title="Kisi Ko Batana Mat Ft. Anubhav Singh Bassi"
            date="Sat, 11 Jan"
            location="Prestige Centre for Performing Arts"
            category="Stand up Comedy"
            price="₹1499 onwards"
            image="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAxMSBKYW4%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00355125-kjfzzlbvvn-portrait.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
