import React from 'react';
import AppContext from "../../context/context";

const ArticlesView = () => (
    <AppContext.Consumer>
        {(context) => (

            <p>This an {context} </p>
        )
        }

    </AppContext.Consumer>
);

export default ArticlesView;