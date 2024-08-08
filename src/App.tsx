import "@mantine/core/styles.css";
import { Button, MantineProvider } from "@mantine/core";
import { Portfolio } from "./components/portfolio/Portfolio";

export default function App() {
    return (
        <MantineProvider>
            <Portfolio />
        </MantineProvider>
    );
}
