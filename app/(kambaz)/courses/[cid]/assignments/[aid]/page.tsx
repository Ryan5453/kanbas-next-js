"use client";
import { Form, Button, Row, Col, Card } from "react-bootstrap";

export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <Form>
        {/* Assignment Name */}
        <Form.Group className="mb-3">
          <Form.Label>Assignment Name</Form.Label>
          <Form.Control 
            id="wd-name" 
            defaultValue="A1" 
          />
        </Form.Group>

        {/* Description */}
        <Form.Group className="mb-3">
          <Form.Control 
            as="textarea" 
            rows={8}
            id="wd-description"
            defaultValue={`The assignment is available online

Submit a link to the landing page of your Web application running on Netlify.

The landing page should include the following:
• Your full name and section
• Links to each of the lab assignments
• Link to the Kambaz application
• Links to all relevant source code repositories

The Kambaz application should include a link to navigate back to the landing page.`}
          />
        </Form.Group>

        {/* Points */}
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={2} className="text-end">Points</Form.Label>
          <Col sm={10}>
            <Form.Control id="wd-points" type="number" defaultValue={100} />
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
                <Form.Check 
                  type="checkbox" 
                  id="wd-text-entry" 
                  label="Text Entry" 
                  className="mb-2"
                />
                <Form.Check 
                  type="checkbox" 
                  id="wd-website-url" 
                  label="Website URL" 
                  defaultChecked
                  className="mb-2"
                />
                <Form.Check 
                  type="checkbox" 
                  id="wd-med-rec" 
                  label="Media Recordings" 
                  className="mb-2"
                />
                <Form.Check 
                  type="checkbox" 
                  id="wd-stud-ann" 
                  label="Student Annotation" 
                  className="mb-2"
                />
                <Form.Check 
                  type="checkbox" 
                  id="wd-file-up" 
                  label="File Uploads" 
                />
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
                    type="text" 
                    id="wd-due" 
                    defaultValue="May 13, 2024, 11:59 PM"
                  />
                </Form.Group>

                <Row>
                  <Col>
                    <Form.Group>
                      <Form.Label className="fw-bold">Available from</Form.Label>
                      <Form.Control 
                        type="text" 
                        id="wd-available-from" 
                        defaultValue="May 6, 2024, 12:00 AM"
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group>
                      <Form.Label className="fw-bold">Until</Form.Label>
                      <Form.Control 
                        type="text" 
                        id="wd-available-until"
                      />
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
          <Button variant="secondary">Cancel</Button>
          <Button variant="danger">Save</Button>
        </div>
      </Form>
    </div>
  );
}
