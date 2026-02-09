import Link from "next/link";
import { Form, Button } from "react-bootstrap";

export default function Signup() {
  return (
    <div id="wd-signup-screen" className="p-4">
      <h1 className="mb-4">Signup</h1>
      <Form>
        <Form.Control 
          id="wd-username"
          placeholder="username"
          className="mb-3"
        />
        <Form.Control 
          id="wd-password"
          placeholder="password" 
          type="password"
          className="mb-3"
        />
        <Form.Control 
          id="wd-password-verify"
          placeholder="verify password"
          type="password"
          className="mb-3"
        />
        <Link href="/account/profile"
          className="btn btn-primary w-100 mb-3">
          Sign up
        </Link>
        <Link href="/account/signin" className="text-decoration-none">Signin</Link>
      </Form>
    </div>
  );
}
