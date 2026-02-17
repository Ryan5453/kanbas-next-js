"use client";
import Link from "next/link";
import { Button, InputGroup, Form, ListGroup, ListGroupItem, Row, Col } from "react-bootstrap";
import InputGroupText from "react-bootstrap/esm/InputGroupText";
import { FaSearch, FaPlus, FaEllipsisV } from "react-icons/fa";
import { BsGripVertical } from "react-icons/bs";
import { useParams } from "next/navigation";
import * as db from "../../../database";

export default function Assignments() {
  const { cid } = useParams();
  const assignments = db.assignments;
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

        {assignments
          .filter((assignment: any) => assignment.course === cid)
          .map((assignment: any) => (
            <ListGroupItem key={assignment._id} className="wd-lesson border-start border-success border-3 p-3">
              <div className="d-flex align-items-center">
                <BsGripVertical className="me-2 fs-5 text-muted" />
                <div className="flex-fill">
                  <Link href={`/courses/${cid}/assignments/${assignment._id}`}
                    className="wd-assignment-link fw-bold text-dark text-decoration-none">
                    {assignment.title}
                  </Link>
                  <br />
                  <small className="text-muted">
                    <span className="text-danger">Multiple Modules</span> |{" "}
                    <b>Not available until</b> {assignment.availableDate} |{" "}
                    <b>Due</b> {assignment.dueDate} | {assignment.points} pts
                  </small>
                </div>
                <div>
                  <FaEllipsisV className="fs-5 text-muted" />
                </div>
              </div>
            </ListGroupItem>
          ))}
      </ListGroup>
    </div>
  );
}
