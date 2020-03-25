import React from "react";
import styles from "./Form.module.scss";
import AppContext from "../../context/context";
import Input from "../Input/Input";
import Button from "../Button/Button";
import Title from "../Title/Title";
import Radio from "./Radio";

const types = {
    twitter: "twitter",
    article: "article",
    note: "note",
};

const descriptions = {
    twitter: "favorite Twitter account",
    article: "Article",
    note: "Note",
};

class Form extends React.Component {
    state = {
        activeOption: types.twitter,
        title: '',
        link: '',
        image: '',
        description: '',
    };

    handleRadioButtonChange = type => {
        this.setState({
            activeOption: type,
        });
    };
    handleInputChange = e => {
        console.log(e.target.name)
    };

    render() {
        const {activeOption} = this.state;

        return (
            <AppContext.Consumer>
                {(context) => (
                    <div className={styles.wrapper}>
                        <Title>Add new {descriptions[activeOption]}</Title>
                        <form
                            autoComplete="off"
                            className={styles.form}
                            onSubmit={context.addItem}
                        >
                            <div className={styles.formOptions}>
                                <Radio
                                    id={types.twitter}
                                    checked={activeOption === types.twitter}
                                    changeFn={() => this.handleRadioButtonChange(types.twitter)}
                                >
                                    Twitter
                                </Radio>
                                <Radio
                                    id={types.article}
                                    checked={activeOption === types.article}
                                    changeFn={() => this.handleRadioButtonChange(types.article)}
                                >
                                    Article
                                </Radio>
                                <Radio
                                    id={types.note}
                                    checked={activeOption === types.note}
                                    changeFn={() => this.handleRadioButtonChange(types.note)}
                                >
                                    Note
                                </Radio>
                            </div>
                            <Input
                                onChange={this.handleInputChange}
                                name="name"
                                label={activeOption === types.twitter ? "Twitter Name" : "Title"}
                                maxLength={30}
                            />
                            {activeOption !== types.note ? (
                                <Input
                                    onChange={this.handleInputChange}
                                    name="link"
                                    label={activeOption === types.twitter ? "Twitter Link" : "Link"}
                                />
                            ) : null}
                            {activeOption === types.twitter ? (
                                <Input
                                    onChange={this.handleInputChange}
                                    name="image"
                                    label="Image"/>
                            ) : null}
                            <Input
                                onChange={this.handleInputChange}
                                tag="textarea" name="description"
                                label="Description"/>
                            <Button>add new item</Button>
                        </form>
                    </div>
                )}
            </AppContext.Consumer>
        );
    }
}

export default Form;
