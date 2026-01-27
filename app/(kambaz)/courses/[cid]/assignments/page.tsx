import Link from "next/link";
export default function Assignments() {
    return (
        <div id="wd-assignments">
            <input placeholder="Search for Assignments"
                id="wd-search-assignment" />
            <button id="wd-add-assignment-group">+ Group</button>
            <button id="wd-add-assignment">+ Assignment</button>
            <h3 id="wd-assignments-title">
                ASSIGNMENTS 40% of Total <button>+</button> </h3>
            <ul id="wd-assignment-list">
                <li className="wd-assignment-list-item">
                    <Link href="/courses/1234/assignments/a1"
                        className="wd-assignment-link" >
                        A1 - ENV + HTML
                    </Link>
                    <br></br>
                    Multiple Modules | <b>Not available until</b> May 6 at 12:00am | <b>Due</b> May 13 at 11:59pm | 100pts
                </li>

                <li className="wd-assignment-list-item">
                    <Link href="/courses/1234/assignments/a2"
                        className="wd-assignment-link" >
                        A2 - CSS + BOOTSTRAP
                    </Link>
                    <br></br>
                    Multiple Modules | <b>Not available until</b> May 13 at 12:00am | <b>Due</b> May 20 at 11:59pm | 100pts
                </li>

                <li className="wd-assignment-list-item">
                    <Link href="/courses/1234/assignments/a3"
                        className="wd-assignment-link" >
                        A3 - JAVASCRIPT + REACT
                    </Link>
                    <br></br>
                    Multiple Modules | <b>Not available until</b> May 20 at 12:00am | <b>Due</b> May 27 at 11:59pm | 100pts
                </li>

            </ul>

            <h3 id="wd-quizzes-title">
                QUIZZES 20% of Total <button>+</button> </h3>
            <ul id="wd-quizzes-list">
                <li className="wd-assignment-list-item">
                    <Link href="/courses/1234/quizzes/q1"
                        className="wd-assignment-link" >
                        Q1 - HTML Quiz
                    </Link>
                    <br></br>
                    Multiple Modules | <b>Not available until</b> May 10 at 12:00am | <b>Due</b> May 12 at 11:59pm | 50pts
                </li>
            </ul>

            <h3 id="wd-exams-title">
                EXAMS 25% of Total <button>+</button> </h3>
            <ul id="wd-exams-list">
                <li className="wd-assignment-list-item">
                    <Link href="/courses/1234/exams/e1"
                        className="wd-assignment-link" >
                        E1 - Midterm Exam
                    </Link>
                    <br></br>
                    Covers Modules 1-5 | <b>Due</b> June 1 at 11:59pm | 150pts
                </li>
            </ul>

            <h3 id="wd-project-title">
                PROJECT 15% of Total <button>+</button> </h3>
            <ul id="wd-project-list">
                <li className="wd-assignment-list-item">
                    <Link href="/courses/1234/project/p1"
                        className="wd-assignment-link" >
                        P1 - Final Project
                    </Link>
                    <br></br>
                    All Modules | <b>Not available until</b> May 1 at 12:00am | <b>Due</b> June 15 at 11:59pm | 200pts
                </li>
            </ul>
        </div>
    );
}
