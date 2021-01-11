import React from "react";
import PropTypes from "prop-types";
import { Button, Grid, Header, Message } from "semantic-ui-react";
import { connect } from "react-redux";
import * as actions from "../../actions/auth";

// Button logout does not neead a spinner because when clicked
// isAuthenticated goes to false and user is redirected to "/".
// See logic in routes components.
const DashboardPage = ({ isAuthenticated, userEmail, logout }) => (
  <div>
    <Grid textAlign="center" style={{ height: "100%" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" textAlign="center">
          Dashboard
        </Header>
        <table>
  <tr>
    <th>ID</th>
    <th>Name</th>
    <th>Age</th>
    <th>Gender</th>
    <th>Email</th>
    <th>Phone Number
    </th>
  </tr>
  <tr>
    <td>1</td>
    <td>Test1</td>
    <td>11</td>
    <td>Male</td>
    <td>test1@gmail.com</td>
    <td>91919119119</td>
  </tr>
  <tr>
    <td>2</td>
    <td>Test2</td>
    <td>12</td>
    <td>Male</td>
    <td>Test2@gmail.com</td>
    <td>92929292929</td>
  </tr>
  <tr>
   <td>3</td>
   <td>Test3</td>
   <td>13</td>
   <td>Male</td>
   <td>Test3@gmail.com</td>
   <td>93939393939</td>
  </tr>
</table>

        <Message
          header="This is the app for beloved user"
          content={userEmail}
          style={{
            marginBottom: "1em",
            marginTop: "1em"
          }}
        />

        {isAuthenticated ? (
          <Button
            primary
            onClick={() =>
              logout({
                email: localStorage.testEmail,
                token: localStorage.testToken
              })
            }
          >
            Logout
          </Button>
        ) : (
          <span />
        )}
      </Grid.Column>
    </Grid>
  </div>
);

DashboardPage.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired
};

// the case where isAuthenticated=false and userEmail=""
// is actually never used but it's there for generality sake.
const mapStateToProps = state =>
  !!state.userReducer.token
    ? {
        isAuthenticated: !!state.userReducer.token,
        userEmail: state.userReducer.email
      }
    : { isAuthenticated: false, userEmail: "" };

export default connect(mapStateToProps, { logout: actions.logout })(
  DashboardPage
);
