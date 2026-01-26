import Link from "next/link";
export default function labs() {
 return (
   <div id="wd-labs">
     <h1>Labs</h1>
     <ul>
       <li>
         <Link href="/labs/lab1" id="wd-lab1-link">
           Lab 1: HTML Examples </Link>
       </li>
       <li>
         <Link href="/labs/lab2" id="wd-lab2-link">
           Lab 2: CSS Basics </Link>
       </li>
       <li>
         <Link href="/labs/lab3" id="wd-lab3-link">
           Lab 3: JavaScript Fundamentals </Link>
       </li>
     </ul>
     <h2>
      Other Info
     </h2>
     Name: Ryan Fahey
     <br></br>
     GitHub: <Link href="https://github.com/Ryan5453/kanbas-next-js">github.com/Ryan5453/kanbas-next-js</Link>
   </div>
);}
