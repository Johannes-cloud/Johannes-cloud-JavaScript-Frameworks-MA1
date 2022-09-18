import Heading from "../layout/Heading";
import Form from "react-bootstrap/Form";

export default function Contact() {
  return (
    <div>
      <Heading title="Contact us" />
      <h4>Store Location: 123 Clown Street</h4>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Example textarea</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
      </Form>
    </div>
  );
}
