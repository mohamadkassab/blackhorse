import { useTheme } from "next-themes";
import classes from './index.module.css'

const ThemeToggler = () => {
  const { theme, setTheme } = useTheme();
  return (
    <a  aria-label="call us" href="tel:+1 781 777 3922">
<div className={`${classes.rowCenter}`}>
            <label  className={`${classes.textBaseC} cursor-pointer text-black flex py-2 lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 `}>Call</label>
            <button
      className="flex items-center justify-center text-black rounded-full cursor-pointer bg-gray-2  h-18 w-18  md:h-14 md:w-14"
    >
    <svg className={classes.hoverPhone} xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M280-40q-33 0-56.5-23.5T200-120v-720q0-33 23.5-56.5T280-920h400q33 0 56.5 23.5T760-840v720q0 33-23.5 56.5T680-40H280Zm0-120v40h400v-40H280Zm0-80h400v-480H280v480Zm0-560h400v-40H280v40Zm0 0v-40 40Zm0 640v40-40Z"/></svg>

   
    </button>
    </div>
    </a>
    
   
  );
};

export default ThemeToggler;
