import DashBoard from "../Pages/faculty/DashBoard/DashBoard";
import Faculty from "../Pages/faculty/facultypro/Faculty";
import About from "../Pages/User/Home/About";
import Contact from "../Pages/User/Home/Contact";
import Home from "../Pages/User/Home/Home";
import Login from "../Pages/User/Home/Login";
import { RiDashboardFill } from "react-icons/ri";
import {   FaEnvelopeOpenText, FaGraduationCap, FaRupeeSign, FaUserAlt, FaUsers } from "react-icons/fa";
import { BsCalendarCheckFill, BsFillBellFill} from "react-icons/bs";
import Notice from "../Pages/faculty/Notice/Notice";
import Attandance from "../Pages/faculty/Attendance/Attandance";
import Result from "../Pages/faculty/Result/Result";
import StuDashBoard from "../Pages/Student/DashBoard/StuDashBoard";
import Stuattandance from "../Pages/Student/Attendance/Stuattandance";
import StuResult from "../Pages/Student/Result/StuResult";
import Studentpro from "../Pages/Student/Student/Studentpro";
import Notification from "../Pages/Student/Notice/Notification";
import Leavenotice from "../Pages/Student/leave notice/Leavenotice";
import Viewnotice from "../Pages/Student/Notice/Viewnotice";
import Payfee from "../Pages/Student/Fees/Payfee";
import StuFees from "../Pages/Student/Fees/StuFees";
import Subfacnotice from "../Pages/faculty/Notice/Subfacnotice";
import Subnotice from "../Pages/faculty/subnotice/Subnotice";
import Password from "../Pages/Student/password change/Password";
import Studentlist from "../Pages/faculty/student list/Studentlist";








export const faculty = [
    {
        path: "/dashboard",
        name: "dashboard",
        icon: <RiDashboardFill />,
        element: <DashBoard/>
    },
    {
        path: "/faculty",
        name: "faculty",
        icon: <FaUserAlt />,
        element:<Faculty/>
    },
    {
        path: "/subfacnotice",
        name: "subfacnotice",
        element:<Subfacnotice/>
    },
    {
        path: "/facnotice",
        name: "notice",
        icon: <FaEnvelopeOpenText />,
        element:<Notice/>,
    },
    {
        path: "/attandance",
        name: "attandance",
        icon: <BsCalendarCheckFill />,
        element:<Attandance/>
    },
    {
        path: "/result",
        name: "result",
        icon: <FaGraduationCap />,
        element:<Result/>
    },
    {
        path: "/subnotice",
        name: "subnotice",
        icon: <FaGraduationCap />,
        element:<Subnotice/>
    },
    {
        path: "/studentlist",
        name: "studentlist",
        icon: <FaUsers />,
        element:<Studentlist/>
    },
 
    
];

export const Student=[
    {
        path: "/StuDashBoard",
        name: "student Dashboard",
        icon: <RiDashboardFill  />,
        element:<StuDashBoard/>
    },
    {
        path: "/studentpro",
        name: "student profile",
        icon: <FaUserAlt  />,
        element:<Studentpro/>
    },
    {
        path: "/stuattendance",
        name: "Attendance",
        icon: <BsCalendarCheckFill  />,
        element:<Stuattandance/>
    },
    {
        path: "/payfee",
        name: "Fee pay",
        icon: <FaRupeeSign  />,
        element:<Payfee/>
    },
  
    {
        path: "/result",
        name: "result",
        icon: <FaGraduationCap  />,
        element:<StuResult/>
    },
    {
        path: "/stunotice",
        name: "notice",
        icon: <BsFillBellFill />,
        element:<Notification/>
    },
    {
        path: "/leavenotice",
        name: "Leave Notice",
        icon: <FaEnvelopeOpenText />,
        element:<Leavenotice/>
    },
    {
        path: "/viewnotice",
        name:"Sub Notice",
        element:<Viewnotice/>
    },
    {
        path: "/stufee",
        name:"Sub fee",
        element:<StuFees/>
    },
   
   


]; 


export const user=[
    {
        path:"/",
        name:"Home",
        element:<Home/>
    },
    {
        path:"/about",
        name:"about",
        element:<About/>
    },
    {
        path:"/contact",
        name:"Contact",
        element:<Contact/>
    },
    {
        path:"/login",
        name:"login",
        element:<Login/>,
    },

];