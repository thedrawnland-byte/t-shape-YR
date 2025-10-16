import React from "react";
import { ThemeProvider} from "styled-components";
import { lightTheme } from "./lib/theme";
import {Badge} from "./lib/badge"
import { GlobalStyle } from "./lib/theme";
import {Button, Card} from "./lib"

function App() {
	const switcher = false;
	return (
		<ThemeProvider theme={lightTheme}>
			<GlobalStyle />
			<main>
				<Card text ="Hello T-shape" appearance="red" textSize="large">
					<p> SOME CHILDREN </p>
				</Card>
			</main>
		</ThemeProvider>
	);
}

export default App;
