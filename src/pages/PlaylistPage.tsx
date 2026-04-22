import {
  Container,
  Divider,
  Group,
  Image,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { useParams } from "@tanstack/react-router";
import { SongCardLong } from "../components/SongCardLong";
import { mockPlaylists } from "../data/mockData"; // adjust path

// mock lookup (replace with API later)

export const PlaylistPage = () => {
  const { playlistId } = useParams({ from: "/playlist/$playlistId" });

  const playlist = mockPlaylists.find((p) => p.id === playlistId);

  if (!playlist) {
    return (
      <Container>
        <Title>Playlist not found</Title>
      </Container>
    );
  }

  const formatDuration = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const hrs = Math.floor(mins / 60);
    return hrs > 0 ? `${hrs}h ${mins % 60}m` : `${mins}m`;
  };

  const onPlay = (songId: string) => {
    console.log("playing:", songId);
  };

  const getCoverUrl = () => {
    if (playlist.coverUrl) return playlist.coverUrl;
    if (playlist.songs.length > 0) return playlist.songs[0].coverUrl;
    return "https://via.placeholder.com/300";
  };

  return (
    <Container size="md" py="xl">
      {/* Header */}
      <Group align="flex-start" gap="lg">
        <Image src={getCoverUrl()} w={160} h={160} radius="md" fit="cover" />

        <Stack gap={4}>
          <Title>{playlist.title}</Title>

          <Text size="sm" c="dimmed">
            {playlist.creatorName} • {playlist.visibility}
          </Text>

          <Text size="sm" c="dimmed">
            {formatDuration(playlist.length)} • {playlist.songs.length} songs
          </Text>

          {playlist.description && (
            <Text size="sm" mt="xs">
              {playlist.description}
            </Text>
          )}
        </Stack>
      </Group>

      <Divider my="lg" />

      {/* Songs */}
      <Stack gap="sm">
        {playlist.songs.map((song, index) => (
          <SongCardLong
            key={song.id}
            title={song.title}
            artist={song.artist}
            coverUrl={song.coverUrl}
            onPlay={() => onPlay(song.id)}
          />
        ))}
      </Stack>
    </Container>
  );
};
