import Link from "next/link";
import Image from "next/image";
export default function Dashboard() {
 return (
  <div id="wd-dashboard">
   <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
   <h2 id="wd-dashboard-published">Published Courses (7)</h2> <hr />
   <div id="wd-dashboard-courses">
    <div className="wd-dashboard-course">
     <Link href="/courses/CS4545" className="wd-dashboard-course-link">
      <Image src="/images/research.avif" width={200} height={150} alt="research logo" />
      <div>
       <h5> CS4545 </h5>
       <p className="wd-dashboard-course-title">
        Research Practicum
       </p>
       <button> Go </button>
      </div>
     </Link>
    </div>

    <div className="wd-dashboard-course">
     <Link href="/courses/CS4100" className="wd-dashboard-course-link">
      <Image src="/images/ai.avif" width={200} height={150} alt="ai logo" />
      <div>
       <h5> CS4100 </h5>
       <p className="wd-dashboard-course-title">
        Artificial Intelligence
       </p>
       <button> Go </button>
      </div>
     </Link>
    </div>

    <div className="wd-dashboard-course">
     <Link href="/courses/CY4100" className="wd-dashboard-course-link">
      <Image src="/images/ai-security.jpg" width={200} height={150} alt="ai security logo" />
      <div>
       <h5> CY4100 </h5>
       <p className="wd-dashboard-course-title">
        AI Security and Privacy
       </p>
       <button> Go </button>
      </div>
     </Link>
    </div>

      <div className="wd-dashboard-course">
     <Link href="/courses/CS4550" className="wd-dashboard-course-link">
      <Image src="/images/react.webp" width={200} height={150} alt="reactjs" />
      <div>
       <h5> CS4550 </h5>
       <p className="wd-dashboard-course-title">
        Web Development
       </p>
       <button> Go </button>
      </div>
     </Link>
    </div>

    <div className="wd-dashboard-course">
     <Link href="/courses/CS3000" className="wd-dashboard-course-link">
      <Image src="/images/algo.png" width={200} height={150} alt="algo logo" />
      <div>
       <h5> CS3000 </h5>
       <p className="wd-dashboard-course-title">
        Algorithms and Data
       </p>
       <button> Go </button>
      </div>
     </Link>
    </div>

      <div className="wd-dashboard-course">
     <Link href="/courses/DS4400" className="wd-dashboard-course-link">
      <Image src="/images/ml.jpg" width={200} height={150} alt="ml logo" />
      <div>
       <h5> DS4400 </h5>
       <p className="wd-dashboard-course-title">
        Machine Learning and Data Mining 1
       </p>
       <button> Go </button>
      </div>
     </Link>
    </div>


      <div className="wd-dashboard-course">
     <Link href="/courses/CS3800" className="wd-dashboard-course-link">
      <Image src="/images/toc.jpeg" width={200} height={150} alt="toc logo" />
      <div>
       <h5> CS3800 </h5>
       <p className="wd-dashboard-course-title">
        Theory of Computation
       </p>
       <button> Go </button>
      </div>
     </Link>
    </div>

   </div>
  </div>
);}
