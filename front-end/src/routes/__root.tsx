import { createRootRoute, Outlet } from "@tanstack/react-router";
import { MantineProvider } from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";
import { Notifications } from "@mantine/notifications";
import { Layout } from "../components/Layout";
import { createTheme } from "@mantine/core";
import { ThemeProvider, useTheme } from "../context/ThemeContext";
import { Transport } from "../components/Transport";

export const Route = createRootRoute({
  component: RootLayout,
});

const theme = createTheme({
  fontFamily: "Open Sans, sans-serif",
  primaryColor: "cyan",
  colors: {
    "fairplay-purple": [
      "141414",
      "9c7a97",
      "1b0c9f",
      "abc8c0",
      "922d50",
      "141414",
      "9c7a97",
      "1b0c9f",
      "abc8c0",
      "922d50",
      "141414",
      "9c7a97",
      "1b0c9f",
      "abc8c0",
      "922d50",
    ],
  },
});

function RootLayoutContent() {
  const { colorScheme } = useTheme();

  return (
    <MantineProvider theme={theme} forceColorScheme={colorScheme}>
      <ModalsProvider>
        <Notifications />
        <Layout children={<Outlet />} />
        <Transport />
      </ModalsProvider>
    </MantineProvider>
  );
}

function RootLayout() {
  return (
    <ThemeProvider>
      <RootLayoutContent />
    </ThemeProvider>
  );
}
