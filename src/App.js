import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { LoginPage } from "./pages/LoginPage";
import { PostCreatePage } from "./pages/posts/PostCreatePage";
import { PostDetailPage } from "./pages/posts/PostDetailPage";
import { PostListPage } from "./pages/posts/PostListPage";
import { RegisterPage } from "./pages/RegisterPage";

function App() {
    return (
        <Router>
            <div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                    <li>
                        <Link to="/register">Register</Link>
                    </li>
                    <li>
                        <Link to="/posts">Posts</Link>
                    </li>
                </ul>

                <hr />

                <Switch>
                    <Route exact path="/">
                        <HomePage />
                    </Route>
                    <Route path="/login">
                        <LoginPage />
                    </Route>
                    <Route path="/register" exact component={RegisterPage} />

                    <Route path="/posts/create" exact component={PostCreatePage} />
                    <Route path="/posts/:id" exact component={PostDetailPage} />
                    <Route path="/posts">
                        <PostListPage />
                    </Route>


                    <Route
                        path="*"
                        component={() => "This page doesnt exist!"}
                    />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
