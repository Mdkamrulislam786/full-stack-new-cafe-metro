import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import M from "materialize-css";
import { Button, Card, Container } from "react-bootstrap";
import { api } from "../../urlConfig";

const NewPassword = () => {
  const history = useHistory();
  const [password, setPasword] = useState("");
  const { token } = useParams();
  console.log(token);
  const PostData = () => {
    fetch(`${api}/new-password`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        password,
        token,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.error) {
          M.toast({ html: data.error, classes: "#c62828 red darken-3" });
        } else {
          M.toast({ html: data.message, classes: "#43a047 green darken-1" });
          history.push("/signin");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <Container>
      <div style={{ height: "100%", display: "grid", placeItems: "center" }}>
        <h2 style={{ paddingTop: "4rem" }}>Enter new password</h2>
        <Card
          style={{ maxWidth: "500px", padding: "20px", marginBottom: "1rem" }}
        >
          <h2>New Cafe Metro</h2>
          <input
            style={{ paddingLeft: "5px" }}
            type="password"
            placeholder="enter a new password"
            value={password}
            onChange={(e) => setPasword(e.target.value)}
          />
          <Button variant="success" onClick={() => PostData()}>
            Update password
          </Button>
        </Card>
      </div>
    </Container>
  );
};

export default NewPassword;
