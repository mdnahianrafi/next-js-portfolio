"use client";
import React from "react";
import SpotlightCard from "./ui/SpotlightCard";
import { FcPlanner } from "react-icons/fc";
import { GiProgression } from "react-icons/gi";
import { MdDeveloperMode } from "react-icons/md";
const MyApproach = () => {
  return (
    <div className="min-h-screen flex items-center justify-center  gap-y-10 lg:gap-x-3">
<div className=" xl:w-1/3 ">
<SpotlightCard className="custom-spotlight-card py-10 lg:py-16" spotlightColor="rgba(0, 229, 255, 0.2)">
<div className=" w-full">
<div className="flex justify-center py-1">
<FcPlanner className="text-xl lg:text-2xl mt-1 mr-3"/>
<h1 className=" text-center font-sans font-bold text-base sm:text-xl lg:text-2xl">Planning And Strategy</h1>
</div>
<p className="lg:p-10 text-center font-sans  text-xs sm:text-base">We'll collaborate to map out your website's goals, target audience, and key functionalities. We'll discuss things like site structure, navigation, and content requirements.</p>
</div>
</SpotlightCard>
</div>
<div className=" xl:w-1/3">
<SpotlightCard className="custom-spotlight-card p-10 lg:p-16" spotlightColor="rgba(0, 229, 255, 0.2)">
<div className=" w-full">
<div className="flex justify-center py-1">
<GiProgression  className="text-xl lg:text-2xl mt-1 mr-3"/>
<h1 className=" text-center font-sans font-bold text-base sm:text-xl lg:text-2xl">Development & Launch</h1>
</div>
<p className="lg:p-10 text-center font-sans  text-xs sm:text-base ">Once we agree on the plan, I cue my lofi playlist and dive into coding. From initial sketches to polished code, I keep you updated every step of the way.</p>
</div>
</SpotlightCard>
</div>
<div className=" xl:w-1/3">
<SpotlightCard className="custom-spotlight-card p-10 lg:p-[50px]" spotlightColor="rgba(0, 229, 255, 0.2)">
<div className=" w-full">
<div className="flex justify-center py-1">
<MdDeveloperMode   className="text-xl lg:text-2xl mt-1 mr-3"/>
<h1 className=" text-center font-sans font-bold text-base sm:text-xl lg:text-2xl">Development & Progress Update</h1>
</div>
<p className="lg:p-10 text-center font-sans  text-xs sm:text-base ">This is where the magic happens! Based on the approved design, I'll translate everything into functional code, building your website from the ground up.</p>
</div>
</SpotlightCard>
</div>
    </div>
  );
};

export default MyApproach;
