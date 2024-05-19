import Link from "next/link";
import classes from "./classes.module.css";

const Breadcrumb = ({
  pageName,
  description,
}: {
  pageName: string;
  description: string;
}) => {
  return (
    <>
      <section itemScope className="relative z-10 overflow-hidden pt-28 lg:pt-[150px]">
      <article>
        <div className="container">
          <div
            className={`${classes.alignTop} -mx-4 flex flex-wrap items-center`}
          >
            <div className="w-full px-4 md:w-8/12 lg:w-7/12">
              <div className="mb-8 max-w-[570px] md:mb-0 lg:mb-12">
                <h1 itemProp="headline" className="mb-5 text-3xl font-bold text-black ">
                  {pageName}
                </h1>
                <p itemProp="description" className="text-base font-medium leading-relaxed text-body-color">
                  {description}
                </p>
              </div>
            </div>
            <div className="w-full px-4 md:w-4/12 lg:w-5/12">
              <div className="text-end">
                <ul className="flex items-center md:justify-end">
                  <li className="flex items-center">
                    <Link
                      href="/"
                      className="pr-1 text-base font-medium text-body-color hover:text-primary"
                      title="home"
                    >
                      Home
                    </Link>
                    <span className="mr-3 block h-2 w-2 rotate-45 border-r-2 border-t-2 border-body-color"></span>
                  </li>
                  <li className="text-base font-medium text-primary">
                    {pageName}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div></div>
        </article>
      </section>
    </>
  );
};

export default Breadcrumb;
