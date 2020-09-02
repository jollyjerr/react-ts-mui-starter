import React from "react";
import { ThemeProvider } from "@material-ui/core";
import theme from "./assets/theme";

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <div>Hi</div>
        </ThemeProvider>
    );
};

export default App;
