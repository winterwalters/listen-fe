import { AppShell, Burger, Group } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { AppHeader } from "./AppHeader";
import { NavbarPlaylists } from "./NavBarPlaylists";
import { mockPlaylists } from "../data/mockData";
import { useTheme } from "../context/ThemeContext";
import { layoutSurfaces } from "../theme/palette";

export const Layout = ({ children }: { children?: React.ReactNode }) => {
  const [opened, { toggle }] = useDisclosure();
  const { colorScheme } = useTheme();
  const shell = layoutSurfaces(colorScheme);

  return (
    <AppShell
      padding="md"
      withBorder={false}
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: "sm",
        collapsed: { mobile: !opened },
      }}
      styles={{
        root: {
          backgroundColor: shell.root,
          minHeight: "100vh",
        },
        header: {
          backgroundColor: shell.header,
          borderBottom: `1px solid ${shell.border}`,
          boxShadow: `inset 0 -2px 0 0 ${shell.headerAccent}`,
        },
        navbar: {
          backgroundColor: shell.navbar,
          borderRight: `1px solid ${shell.border}`,
        },
        main: {
          backgroundColor: shell.main,
        },
      }}
    >
      <AppShell.Header>
        <Group h="100%" px="md" gap="sm" wrap="nowrap" justify="space-between">
          {/* Mobile burger — hidden on sm and above */}
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />

          {/* Header controls fill the rest of the space */}
          <AppHeader
            onSearch={(q) => console.log("search:", q)}
            // avatarUrl="/path/to/user-avatar.jpg"
          />
        </Group>
      </AppShell.Header>

      <AppShell.Navbar p="xs">
        <NavbarPlaylists
          playlists={mockPlaylists}
          onCreatePlaylist={() => console.log("open create modal")}
        />
      </AppShell.Navbar>
      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
};
