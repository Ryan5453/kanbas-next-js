import Link from "next/link";
import { Form, Button } from "react-bootstrap";

export default function Signin() {
  return (
    <div id="wd-signin-screen" className="p-4">
      <h1 className="mb-4">Signin</h1>
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
        <Link id="wd-signin-btn"
          href="/account/profile"
          className="btn btn-primary w-100 mb-3">
          Sign in 
        </Link>
        <Link id="wd-signup-link" href="/account/signup" className="text-decoration-none">Sign up</Link>
      </Form>
    </div>
  );
}
