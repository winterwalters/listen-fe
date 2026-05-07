import { AppShell, Burger, Group } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { AppHeader } from "./AppHeader";
import { NavbarPlaylists } from "./NavBarPlaylists";
import { mockPlaylists } from "../data/mockData";

export const Layout = ({ children }: { children?: React.ReactNode }) => {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      padding="md"
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: "sm",
        collapsed: { mobile: !opened },
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
