import { Switch, Route, Redirect } from "react-router-dom";
import LoginScreen from "../Components/auth/LoginScreen";
import RegisterScreen from "../Components/auth/RegisterScreen";

const AuthRouter = () => {
  return (
    <div className="auth__main">
      <div className="auth__box-container">
        <Switch>
          <Route path="/auth/login" component={LoginScreen} />
          <Route path="/auth/register" component={RegisterScreen} />
          <Redirect to="/auth/register" />
        </Switch>
      </div>
    </div>
  );
};

export default AuthRouter;
