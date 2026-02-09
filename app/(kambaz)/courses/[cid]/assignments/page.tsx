import Link from "next/link";
import { Button, InputGroup, Form, ListGroup, ListGroupItem, Row, Col } from "react-bootstrap";
import InputGroupText from "react-bootstrap/esm/InputGroupText";
import { FaSearch, FaPlus, FaEllipsisV } from "react-icons/fa";
import { BsGripVertical } from "react-icons/bs";

export default function Assignments() {
  return (
    <div id="wd-assignments">
      {/* Top Controls */}
      <Row className="mb-3 align-items-center">
        <Col>
          <InputGroup>
            <InputGroupText className="bg-white"><FaSearch /></InputGroupText>
            <Form.Control 
              placeholder="Search for Assignments"
              id="wd-search-assignment"
            />
          </InputGroup>
        </Col>
        <Col className="text-end">
          <Button variant="secondary" size="lg" className="me-2" id="wd-add-assignment-group">
            <FaPlus className="me-1" /> Group
          </Button>
          <Button variant="danger" size="lg" id="wd-add-assignment">
            <FaPlus className="me-1" /> Assignment
          </Button>
        </Col>
      </Row>

      {/* ASSIGNMENTS Section */}
      <ListGroup className="rounded-0 mb-4" id="wd-assignments-list">
        <ListGroupItem className="p-0 bg-secondary">
          <div className="p-3 d-flex align-items-center">
            <BsGripVertical className="me-2 fs-5" />
            <h3 className="m-0 fs-5 fw-bold" id="wd-assignments-title">
              ASSIGNMENTS <span className="text-muted ms-2">40% of Total</span>
            </h3>
            <div className="ms-auto">
              <Button variant="outline-secondary" className="me-2">
                <FaEllipsisV />
              </Button>
              <Button variant="secondary">
                <FaPlus />
              </Button>
            </div>
          </div>
        </ListGroupItem>

        <ListGroupItem className="wd-lesson border-start border-success border-3 p-3">
          <div className="d-flex align-items-center">
            <BsGripVertical className="me-2 fs-5 text-muted" />
            <div className="flex-fill">
              <Link href="/courses/1234/assignments/a1" className="wd-assignment-link fw-bold text-dark text-decoration-none">
                A1 - ENV + HTML
              </Link>
              <br />
              <small className="text-muted">
                <span className="text-danger">Multiple Modules</span> | <b>Not available until</b> May 6 at 12:00am | <b>Due</b> May 13 at 11:59pm | 100 pts
              </small>
            </div>
            <div>
              <FaEllipsisV className="fs-5 text-muted" />
            </div>
          </div>
        </ListGroupItem>

        <ListGroupItem className="wd-lesson border-start border-success border-3 p-3">
          <div className="d-flex align-items-center">
            <BsGripVertical className="me-2 fs-5 text-muted" />
            <div className="flex-fill">
              <Link href="/courses/1234/assignments/a2" className="wd-assignment-link fw-bold text-dark text-decoration-none">
                A2 - CSS + BOOTSTRAP
              </Link>
              <br />
              <small className="text-muted">
                <span className="text-danger">Multiple Modules</span> | <b>Not available until</b> May 13 at 12:00am | <b>Due</b> May 20 at 11:59pm | 100 pts
              </small>
            </div>
            <div>
              <FaEllipsisV className="fs-5 text-muted" />
            </div>
          </div>
        </ListGroupItem>

        <ListGroupItem className="wd-lesson border-start border-success border-3 p-3">
          <div className="d-flex align-items-center">
            <BsGripVertical className="me-2 fs-5 text-muted" />
            <div className="flex-fill">
              <Link href="/courses/1234/assignments/a3" className="wd-assignment-link fw-bold text-dark text-decoration-none">
                A3 - JAVASCRIPT + REACT
              </Link>
              <br />
              <small className="text-muted">
                <span className="text-danger">Multiple Modules</span> | <b>Not available until</b> May 20 at 12:00am | <b>Due</b> May 27 at 11:59pm | 100 pts
              </small>
            </div>
            <div>
              <FaEllipsisV className="fs-5 text-muted" />
            </div>
          </div>
        </ListGroupItem>
      </ListGroup>

      {/* QUIZZES Section */}
      <ListGroup className="rounded-0 mb-4" id="wd-quizzes-list">
        <ListGroupItem className="p-0 bg-secondary">
          <div className="p-3 d-flex align-items-center">
            <BsGripVertical className="me-2 fs-5" />
            <h3 className="m-0 fs-5 fw-bold" id="wd-quizzes-title">
              QUIZZES <span className="text-muted ms-2">20% of Total</span>
            </h3>
            <div className="ms-auto">
              <Button variant="outline-secondary" className="me-2">
                <FaEllipsisV />
              </Button>
              <Button variant="secondary">
                <FaPlus />
              </Button>
            </div>
          </div>
        </ListGroupItem>

        <ListGroupItem className="wd-lesson border-start border-success border-3 p-3">
          <div className="d-flex align-items-center">
            <BsGripVertical className="me-2 fs-5 text-muted" />
            <div className="flex-fill">
              <Link href="/courses/1234/quizzes/q1" className="wd-assignment-link fw-bold text-dark text-decoration-none">
                Q1 - HTML Quiz
              </Link>
              <br />
              <small className="text-muted">
                <span className="text-danger">Multiple Modules</span> | <b>Not available until</b> May 10 at 12:00am | <b>Due</b> May 12 at 11:59pm | 50 pts
              </small>
            </div>
            <div>
              <FaEllipsisV className="fs-5 text-muted" />
            </div>
          </div>
        </ListGroupItem>
      </ListGroup>

      {/* EXAMS Section */}
      <ListGroup className="rounded-0 mb-4" id="wd-exams-list">
        <ListGroupItem className="p-0 bg-secondary">
          <div className="p-3 d-flex align-items-center">
            <BsGripVertical className="me-2 fs-5" />
            <h3 className="m-0 fs-5 fw-bold" id="wd-exams-title">
              EXAMS <span className="text-muted ms-2">25% of Total</span>
            </h3>
            <div className="ms-auto">
              <Button variant="outline-secondary" className="me-2">
                <FaEllipsisV />
              </Button>
              <Button variant="secondary">
                <FaPlus />
              </Button>
            </div>
          </div>
        </ListGroupItem>

        <ListGroupItem className="wd-lesson border-start border-success border-3 p-3">
          <div className="d-flex align-items-center">
            <BsGripVertical className="me-2 fs-5 text-muted" />
            <div className="flex-fill">
              <Link href="/courses/1234/exams/e1" className="wd-assignment-link fw-bold text-dark text-decoration-none">
                E1 - Midterm Exam
              </Link>
              <br />
              <small className="text-muted">
                <span className="text-danger">Covers Modules 1-5</span> | <b>Due</b> June 1 at 11:59pm | 150 pts
              </small>
            </div>
            <div>
              <FaEllipsisV className="fs-5 text-muted" />
            </div>
          </div>
        </ListGroupItem>
      </ListGroup>

      {/* PROJECT Section */}
      <ListGroup className="rounded-0 mb-4" id="wd-project-list">
        <ListGroupItem className="p-0 bg-secondary">
          <div className="p-3 d-flex align-items-center">
            <BsGripVertical className="me-2 fs-5" />
            <h3 className="m-0 fs-5 fw-bold" id="wd-project-title">
              PROJECT <span className="text-muted ms-2">15% of Total</span>
            </h3>
            <div className="ms-auto">
              <Button variant="outline-secondary" className="me-2">
                <FaEllipsisV />
              </Button>
              <Button variant="secondary">
                <FaPlus />
              </Button>
            </div>
          </div>
        </ListGroupItem>

        <ListGroupItem className="wd-lesson border-start border-success border-3 p-3">
          <div className="d-flex align-items-center">
            <BsGripVertical className="me-2 fs-5 text-muted" />
            <div className="flex-fill">
              <Link href="/courses/1234/project/p1" className="wd-assignment-link fw-bold text-dark text-decoration-none">
                P1 - Final Project
              </Link>
              <br />
              <small className="text-muted">
                <span className="text-danger">All Modules</span> | <b>Not available until</b> May 1 at 12:00am | <b>Due</b> June 15 at 11:59pm | 200 pts
              </small>
            </div>
            <div>
              <FaEllipsisV className="fs-5 text-muted" />
            </div>
          </div>
        </ListGroupItem>
      </ListGroup>
    </div>
  );
}
