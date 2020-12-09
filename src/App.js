import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import GlobalStyles, { ThemeColor } from "./globalStyles";
import { HomePage } from "./pages/HomePage";
import { LoginPage } from "./pages/LoginPage";
import { PostCreatePage } from "./pages/posts/PostCreatePage";
import { PostDetailPage } from "./pages/posts/PostDetailPage";
import { PostListPage } from "./pages/posts/PostListPage";
import { RegisterPage } from "./pages/RegisterPage";

function App() {
    return (
        <Router>
            <GlobalStyles />
            <ThemeColor darkBg />
            <Navbar />
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/login" exact component={LoginPage} />
                <Route path="/register" exact component={RegisterPage} />
                <Route path="/posts/create" exact component={PostCreatePage} />
                <Route path="/posts/:id" exact component={PostDetailPage} />
                <Route path="/posts" exact component={PostListPage} />
                <Route path="*" component={() => "This page doesnt exist!"} />
            </Switch>
        </Router>
    );
}

export default App;
