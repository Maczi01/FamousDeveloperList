import React from "react";
import "./index.css";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import TwittersView from "../TwittersView/TwittersView";
import ArticlesView from "../ArticlesViews/ArticlesView";
import NotesView from "../NotesView/NotesView";
import Header from "../../components/Header/Header";
import Modal from "../../components/Modal/Modal";
const initialStateItems = [
    {
        image: "data:image/jpeg;base64,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",
        name: "Dan Abramov",
        description: "React core member",
        twitterLink: "https://twitter.com/dan_abramov"
    }
];

class Root extends React.Component {
    state = {
        items: [...initialStateItems],
        isModalOpen: true,
    };

    addItem = e => {
        e.preventDefault();

        const newItem = {
            name: e.target[0].value,
            twitterLink: e.target[1].value,
            image: e.target[2].value,
            description: e.target[3].value
        };

        this.setState(prevState => ({
            items: [...prevState.items, newItem]
        }));

        e.target.reset();
    };

    openModal = () => {
        this.setState({
            isModalOpen: true,
        });
    }
    closeModal = () => {
        this.setState({
            isModalOpen: false,
        });
    }

    render() {
        const {isModalOpen} = this.state;
        return (
            <BrowserRouter>
                <>
                    <Header openModalFn={this.openModal}/>
                    <h1> Hello World!!!</h1>
                    <Switch>
                        <Route exact path="/" component={TwittersView}/>
                        <Route path="/articles" component={ArticlesView}/>
                        <Route path="/notes" component={NotesView}/>
                    </Switch>
                    {isModalOpen && <Modal closeModalFn={this.closeModal}/>}
                </>
            </BrowserRouter>
        );
    }
}

export default Root;
