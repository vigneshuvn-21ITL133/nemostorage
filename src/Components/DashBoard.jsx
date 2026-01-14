import '../style/Dashboard.css'
import { SiAmazonluna } from "react-icons/si";
import { MdDashboard } from "react-icons/md";
import { MdLibraryAdd } from "react-icons/md";
import { BiSolidFileBlank } from "react-icons/bi";
import { MdNotificationsActive } from "react-icons/md";
import { GrStorage } from "react-icons/gr";
import { FaRegFile } from "react-icons/fa6";
import { MdAddTask } from "react-icons/md";
import Marquee from "react-fast-marquee";

function DashBoard(){

    const name=["John","Elena","Alice", "Bob", "Charlie", "David", "Emma"]
    const randomname = name[Math.floor(Math.random()*name.length)]

    return(
        <div>
           <div className='full-container'>
             <div className='menu-container'>
              <div className='logo-container'>
                <SiAmazonluna size={35} color='#09fc11'/>
                <span>Nemo</span>
              </div>
              <div className='menu-item'>
               <nav>
                 <ul>
                    <li><MdDashboard color='#CFE1B9'/>DashBoard</li>
                    <li><BiSolidFileBlank color='#CFE1B9'/>Viewfiles</li>
                    <li>< MdLibraryAdd color='#CFE1B9'/>AddTask</li>
                 </ul>
               </nav>
              </div>
               <div className='login-container'>
                 Login
               </div>
             </div>
             <div className='content-container'>
             <div className='welcome-board'>
              <div className='welcome'>
                <h3>Welcome,<span>{randomname}</span></h3>
              </div>
              <div className='notification-icon'>
              < MdNotificationsActive size={30}/>
              </div>
             </div>
             <div className='count-container'>
               <div className='files'>
                 <div className='child-files'>
                    <h2>10<span> Files</span></h2>
                    <p>Number of Files</p>
                </div>
                <div className='child1-fileicon'>
                  <FaRegFile size={40}/>
                </div>
               </div>
               <div className='task'>
                <div className='child-task'>
                    <h2>10<span> Task</span></h2>
                    <p>Total task</p>
                </div>
                <div className='child1-taskicon'>
                  <MdAddTask size={40}/>
                </div>
               </div>
               <div className='storage'>
                <div className='child-storage'>
                    <h2>10<span> GB</span></h2>
                    <p>Storage</p>
                </div>
                <div className='child1-storageicon'>
                  <GrStorage size={40}/>
                </div>
               </div>
             </div>
             
             </div>
           </div>
        </div>
    )
}

export default DashBoard