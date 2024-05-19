import { Feature } from "@/types/feature";
import classes from "./classes.module.css";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph } = feature;
  return (
    <div className="w-full">
      <div className={`${classes.center} wow fadeInUp" data-wow-delay=".15s`}>
        <div  itemProp="Service icon" 
          className={`${classes.itemCenter} mb-10 flex max-w-48 items-center justify-center rounded-md  bg-opacity-10 text-primary`}
        >
          {icon}
        </div>
        <h2  itemProp="Service title" 
          className={`${classes.itemCenter} mb-5 text-xl font-bold text-black  sm:text-2xl lg:text-xl xl:text-2xl`}
        >
          {title}
        </h2>
        <p  itemProp="Service description"  className="pr-[10px] text-justify text-base font-medium leading-relaxed text-body-color">
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default SingleFeature;
