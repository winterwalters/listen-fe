import {
  HomeIcon,
  MagnifyingGlassIcon,
  MoonIcon,
  SunIcon,
} from "@heroicons/react/24/outline";
import { MusicalNoteIcon } from "@heroicons/react/24/solid";
import { ActionIcon, Group, Text, TextInput } from "@mantine/core";
import { Link } from "@tanstack/react-router";
import { useRef } from "react";
import { useTheme } from "../context/ThemeContext";
import { LoginButton } from "./LoginButton";

interface AppHeaderProps {
  /** Called when the user submits a search query */
  onSearch?: (query: string) => void;
  /** URL to the user's avatar image — falls back to a generic icon */
  avatarUrl?: string;
}

export const AppHeader = ({ onSearch, avatarUrl }: AppHeaderProps) => {
  const { colorScheme, toggleColorScheme } = useTheme();

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSearch?.(e.currentTarget.value);
    }
  };

  const isLoggedIn = false;

  return (
    <Group h="100%" w="100%" px="md" justify="space-between" wrap="nowrap">
      <Group gap="xs">
        <MusicalNoteIcon
          style={{
            width: 20,
            height: 20,
            color: colorScheme === "dark" ? "#fff" : "#000",
          }}
        />
        <Text fw={700} size="lg" style={{ letterSpacing: "-0.02em" }}>
          Listen
        </Text>
      </Group>

      <Group gap={4} align="center" wrap="nowrap">
        <ActionIcon
          component={Link}
          to="/"
          variant="subtle"
          size="lg"
          aria-label="Home"
          color="gray"
        >
          <HomeIcon style={{ width: 22, height: 22 }} />
        </ActionIcon>

        {/* Search bar — grows to fill available space */}
        <TextInput
          placeholder="Search songs, artists, albums…"
          leftSection={
            <MagnifyingGlassIcon style={{ width: 16, height: 16 }} />
          }
          onKeyDown={handleKeyDown}
          radius="xl"
          w="300px"
        />
      </Group>

      <Group gap={4} align="center" wrap="nowrap">
        <LoginButton isLoggedIn={isLoggedIn} avatarUrl={avatarUrl} />
        <ActionIcon
          onClick={toggleColorScheme}
          variant="subtle"
          size="lg"
          aria-label="Toggle theme"
          color="gray"
        >
          {colorScheme === "dark" ? (
            <SunIcon style={{ width: 22, height: 22 }} />
          ) : (
            <MoonIcon style={{ width: 22, height: 22 }} />
          )}
        </ActionIcon>
      </Group>
    </Group>
  );
};
