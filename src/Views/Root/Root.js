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
        items: {
            twitters: [],
            articles: [],
            notes: [],
        },
        isModalOpen: true,
        name: 'Roman'
    };

    addItem = e => {
        e.preventDefault();
        console.log("Kaczka")
        // const newItem = {
        //     name: e.target[0].value,
        //     twitterLink: e.target[1].value,
        //     image: e.target[2].value,
        //     description: e.target[3].value
        // };
        //
        // this.setState(prevState => ({
        //     items: [...prevState.items, newItem]
        // }));
        //
        // e.target.reset();
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
        const contextElements = {
            ...this.state,
            addItem: this.addItem
        }
        const {isModalOpen} = this.state;
        return (
            <BrowserRouter>
                <AppContext.Provider value={contextElements}>
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
                </AppContext.Provider>
            </BrowserRouter>
        );
    }
}

export default Root;
