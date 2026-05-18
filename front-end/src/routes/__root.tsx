import { createRootRoute, Outlet } from "@tanstack/react-router";
import { MantineProvider } from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";
import { Notifications } from "@mantine/notifications";
import { Layout } from "../components/Layout";
import { createTheme } from "@mantine/core";
import { ThemeProvider, useTheme } from "../context/ThemeContext";
import { PlaybackProvider } from "../context/PlaybackContext";
import { Transport } from "../components/Transport";
import { paletteMantineColors } from "../theme/palette";

export const Route = createRootRoute({
  component: RootLayout,
});

const theme = createTheme({
  fontFamily: "Open Sans, sans-serif",
  primaryColor: "vividRoyal",
  colors: paletteMantineColors(),
});

function RootLayoutContent() {
  const { colorScheme } = useTheme();

  return (
    <MantineProvider theme={theme} forceColorScheme={colorScheme}>
      <ModalsProvider>
        <Notifications />
        <PlaybackProvider>
          <Layout children={<Outlet />} />
          <Transport />
        </PlaybackProvider>
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
