import {
  Stack,
  Text,
  Group,
  Image,
  UnstyledButton,
  Divider,
  ScrollArea,
  ActionIcon,
} from "@mantine/core";
import { PlusIcon, MusicalNoteIcon } from "@heroicons/react/24/outline";
import { Link } from "@tanstack/react-router";
import type { Playlist } from "../data/types";
import { useDisclosure } from "@mantine/hooks";
import { AddPlaylistModal } from "./AddPlaylistModal";
import { type CreatePlaylistRequest } from "../data/types";
import { useMatch } from "@tanstack/react-router";

const formatLength = (seconds: number): string => {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  if (h > 0) return `${h} hr ${m} min`;
  return `${m} min`;
};

// ── Sub-component: single playlist row ───────────────────────────────────────

interface PlaylistRowProps {
  playlist: Playlist;
}

const PlaylistRow = ({ playlist }: PlaylistRowProps) => {
  const coverUrl = playlist.songs[0]?.coverUrl;

  const match = useMatch({ from: "/playlist/$playlistId", shouldThrow: false });

  const playlistId = match?.params.playlistId;
  const isActive = playlistId === playlist.id;

  return (
    <UnstyledButton
      component={Link}
      to={`/playlist/${playlist.id}`}
      style={{
        width: "100%",
        borderRadius: 8,
        background: isActive
          ? "var(--mantine-color-default-hover)"
          : "transparent",
      }}
    >
      <Group
        gap="sm"
        wrap="nowrap"
        px="sm"
        py={6}
        style={{
          borderRadius: 8,
          background: false
            ? "var(--mantine-color-default-hover)"
            : "transparent",
          transition: "background 120ms ease",
        }}
        className="playlist-row"
      >
        {/* Cover — first song's art, or a fallback icon */}
        {coverUrl ? (
          <Image
            src={coverUrl}
            w={40}
            h={40}
            radius="sm"
            alt={`${playlist.title} cover`}
            style={{ flexShrink: 0 }}
          />
        ) : (
          <Group
            w={40}
            h={40}
            justify="center"
            align="center"
            style={{
              flexShrink: 0,
              borderRadius: 6,
              background: "var(--mantine-color-default-hover)",
            }}
          >
            <MusicalNoteIcon style={{ width: 18, height: 18, opacity: 0.5 }} />
          </Group>
        )}

        {/* Title + meta */}
        <Stack gap={1} style={{ flex: 1, minWidth: 0 }}>
          <Text size="sm" fw={500} lineClamp={1}>
            {playlist.title}
          </Text>
          <Text size="xs" c="dimmed" lineClamp={1}>
            {playlist.creatorName} · {formatLength(playlist.length)}
          </Text>
        </Stack>
      </Group>
    </UnstyledButton>
  );
};

// ── Main component ────────────────────────────────────────────────────────────

interface NavbarPlaylistsProps {
  playlists: Playlist[];
  /** Optional — wire up to open a "create playlist" modal */
  onCreatePlaylist: (data: CreatePlaylistRequest) => void;
}

export const NavbarPlaylists = ({
  playlists,
  onCreatePlaylist,
}: NavbarPlaylistsProps) => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <Stack gap={0} h="100%">
      <AddPlaylistModal
        opened={opened}
        onClose={close}
        onCreatePlaylist={onCreatePlaylist}
      />
      {/* Section header */}
      <Group justify="space-between" align="center" px="sm" py="xs">
        <Text
          size="xs"
          fw={600}
          tt="uppercase"
          c="dimmed"
          style={{ letterSpacing: "0.06em" }}
        >
          Your playlists
        </Text>
        <ActionIcon
          variant="subtle"
          color="gray"
          size="sm"
          aria-label="Create playlist"
          onClick={open}
        >
          <PlusIcon style={{ width: 16, height: 16 }} />
        </ActionIcon>
      </Group>

      <Divider mb={4} />

      {/* Scrollable list */}
      <ScrollArea flex={1} type="hover" offsetScrollbars>
        <Stack gap={2} pb="md">
          {playlists.length === 0 ? (
            <Text size="xs" c="dimmed" px="sm" py="xs">
              No playlists yet.
            </Text>
          ) : (
            playlists.map((pl) => <PlaylistRow key={pl.id} playlist={pl} />)
          )}
        </Stack>
      </ScrollArea>
    </Stack>
  );
};
