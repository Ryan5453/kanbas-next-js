"use client";
import { Form, Button, Row, Col, Card } from "react-bootstrap";
import Link from "next/link";
import { useParams } from "next/navigation";
import * as db from "../../../../database";

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const assignments = db.assignments;
  const assignment = assignments.find((a: any) => a._id === aid);
  return (
    <div id="wd-assignments-editor">
      <Form>
        {/* Assignment Name */}
        <Form.Group className="mb-3">
          <Form.Label>Assignment Name</Form.Label>
          <Form.Control
            id="wd-name"
            defaultValue={assignment?.title || ""}
          />
        </Form.Group>

        {/* Description */}
        <Form.Group className="mb-3">
          <Form.Control
            as="textarea"
            rows={8}
            id="wd-description"
            defaultValue={assignment?.description || ""}
          />
        </Form.Group>

        {/* Points */}
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={2} className="text-end">Points</Form.Label>
          <Col sm={10}>
            <Form.Control id="wd-points" type="number" defaultValue={assignment?.points || 100} />
          </Col>
        </Form.Group>

        {/* Assignment Group */}
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={2} className="text-end">Assignment Group</Form.Label>
          <Col sm={10}>
            <Form.Select id="wd-assignment-group" defaultValue="ASSIGNMENTS">
              <option>ASSIGNMENTS</option>
              <option>QUIZZES</option>
              <option>EXAMS</option>
              <option>PROJECT</option>
            </Form.Select>
          </Col>
        </Form.Group>

        {/* Display Grade as */}
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={2} className="text-end">Display Grade as</Form.Label>
          <Col sm={10}>
            <Form.Select id="wd-display-as" defaultValue="Percentage">
              <option>Percentage</option>
              <option>Points</option>
              <option>Complete/Incomplete</option>
              <option>Letter Grade</option>
            </Form.Select>
          </Col>
        </Form.Group>

        {/* Submission Type */}
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={2} className="text-end">Submission Type</Form.Label>
          <Col sm={10}>
            <Card>
              <Card.Body>
                <Form.Select id="wd-submission-type" defaultValue="Online" className="mb-3">
                  <option>Online</option>
                  <option>On Paper</option>
                  <option>No Submission</option>
                </Form.Select>

                <Form.Label className="fw-bold">Online Entry Options</Form.Label>
                <Form.Check type="checkbox" id="wd-text-entry" label="Text Entry" className="mb-2" />
                <Form.Check type="checkbox" id="wd-website-url" label="Website URL" defaultChecked className="mb-2" />
                <Form.Check type="checkbox" id="wd-med-rec" label="Media Recordings" className="mb-2" />
                <Form.Check type="checkbox" id="wd-stud-ann" label="Student Annotation" className="mb-2" />
                <Form.Check type="checkbox" id="wd-file-up" label="File Uploads" />
              </Card.Body>
            </Card>
          </Col>
        </Form.Group>

        {/* Assign */}
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={2} className="text-end">Assign</Form.Label>
          <Col sm={10}>
            <Card>
              <Card.Body>
                <Form.Group className="mb-3">
                  <Form.Label className="fw-bold">Assign to</Form.Label>
                  <Form.Control id="wd-assign-to" defaultValue="Everyone" />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label className="fw-bold">Due</Form.Label>
                  <Form.Control
                    type="date"
                    id="wd-due"
                    defaultValue={assignment?.dueDate || ""}
                  />
                </Form.Group>

                <Row>
                  <Col>
                    <Form.Group>
                      <Form.Label className="fw-bold">Available from</Form.Label>
                      <Form.Control
                        type="date"
                        id="wd-available-from"
                        defaultValue={assignment?.availableDate || ""}
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group>
                      <Form.Label className="fw-bold">Until</Form.Label>
                      <Form.Control type="date" id="wd-available-until" />
                    </Form.Group>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Form.Group>

        <hr />

        {/* Buttons */}
        <div className="d-flex justify-content-end gap-2">
          <Link href={`/courses/${cid}/assignments`}>
            <Button variant="secondary">Cancel</Button>
          </Link>
          <Link href={`/courses/${cid}/assignments`}>
            <Button variant="danger">Save</Button>
          </Link>
        </div>
      </Form>
    </div>
  );
}
