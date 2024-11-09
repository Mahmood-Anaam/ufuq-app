"use client";

import React from "react";
import { useParams } from "next/navigation";
import Breadcrumb from "@/components/Common/Breadcrumb";
import LearningSection from "@/components/Learning/LearningSection";
import { MyRuntimeProvider } from "@/app/RuntimeProvider";
import levelData from "@/components/Learning-Journey/levelData";
import { Level } from "@/types/level";

const LearningPage = () => {
  const { id } = useParams(); 
  const level = (levelData.find((lvl) => lvl.id === parseInt(id as string))) as Level; 

  if (!level) {
    return <p>لم يتم العثور على المستوى المطلوب</p>; 
  }

  return (
    <MyRuntimeProvider>
      <Breadcrumb
        pageName={level.title}
        description={level.description}
      />
      <section
        id="Learning"
        className="overflow-hidden py-16 md:py-20 lg:py-28"
      >
        <div className="h-dvh mx-auto shadow-sm dark:bg-gray-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]" style={{ width: "80%" }}>
        {/* <LearningSection level={level}/> */}
          
        </div>
      </section>
    </MyRuntimeProvider>
  );
};

export default LearningPage;



