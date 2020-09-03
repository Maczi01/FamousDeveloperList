import React from "react";
import "./index.css";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import TwittersView from "../TwittersView/TwittersView";
import ArticlesView from "../ArticlesViews/ArticlesView";
import NotesView from "../NotesView/NotesView";
import Header from "../../components/Header/Header";
import AppContext from "../../context/context";
import Modal from "../../components/Modal/Modal";

class Root extends React.Component {
    state = {
        twitter: [],
        article: [],
        note: [],
        isModalOpen: false,
    };

    addItem = (e, newItem) => {
        e.preventDefault();
        this.setState(prevState => ({
            [newItem.type]: [...prevState[newItem.type], newItem],
        }));

        this.closeModal();
    };

    openModal = () => {
        this.setState({
            isModalOpen: true,
        })

    }

    closeModal = () => {
        this.setState({
            isModalOpen: false,
        })
    }

    render() {
        const { isModalOpen } = this.state;
        const contextElements = {
            ...this.state,
            addItem: this.addItem
        }

        return (
            <BrowserRouter>
                <AppContext.Provider value={contextElements}>
                    <Header openModalFn={this.openModal} />
                    <Switch>
                        <Route exact path="/" component={TwittersView} />
                        <Route path="/articles" component={ArticlesView} />
                        <Route path="/notes" component={NotesView} />
                    </Switch>
                    { isModalOpen && <Modal closeModalFn={this.closeModal} /> }
                </AppContext.Provider>
            </BrowserRouter>
        );
    }
}

export default Root;