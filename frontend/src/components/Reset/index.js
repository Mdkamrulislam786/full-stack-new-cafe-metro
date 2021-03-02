import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import M from "materialize-css";
import { Button, Card, Container } from "react-bootstrap";
import { api } from "../../urlConfig";
const Reset = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const PostData = () => {
    if (
      !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
      )
    ) {
      M.toast({ html: "invalid email", classes: "#c62828 red darken-3" });
      return;
    }
    fetch(`${api}/reset-password`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          M.toast({ html: data.error, classes: "#c62828 red darken-3" });
        } else {
          M.toast({ html: data.message, classes: "#43a047 green darken-1" });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <Container>
      <div style={{ height: "100%", display: "grid", placeItems: "center" }}>
        <h2 style={{ paddingTop: "4rem" }}>Reset Password</h2>
        <p style={{ textAlign: "center" }}>
          A mail will be sent to you, check your mail after submit
        </p>

        <Card
          style={{ maxWidth: "500px", padding: "20px", marginBottom: "1rem" }}
        >
          {/* <h2>New Cafe Metro</h2> */}
          <input
            style={{ paddingLeft: "5px" }}
            type="text"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button variant="success" onClick={() => PostData()}>
            Submit
          </Button>
        </Card>
      </div>
    </Container>
  );
};

export default Reset;

// kamrulislam.ki01@gmail.com
