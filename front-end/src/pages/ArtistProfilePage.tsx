import { useParams } from "@tanstack/react-router";
import {
  Container,
  Title,
  Group,
  Avatar,
  Stack,
  Text,
  Grid,
  Card,
  Image,
  Badge,
} from "@mantine/core";
import { mockArtistData } from "../data/mockData";

// ---- Artist Page ----

export function ArtistProfilePage() {
  const { artistId } = useParams({ from: "/artistProfile/$artistId" });
  const artist = mockArtistData.find((a) => a.id === artistId);
  if (!artist) {
    return (
      <Container>
        <Title>Artist not found</Title>
      </Container>
    );
  }

  return (
    <Container size="lg" py="xl">
      {/* Header */}
      <Group align="flex-start" gap="lg">
        <Avatar src={artist.imageUrl} size={120} radius="md" />
        <Stack gap={4}>
          <Title>{artist.name}</Title>
          <Text c="dimmed">{artist.genre}</Text>
          <Text size="sm">{artist.bio}</Text>
        </Stack>
      </Group>

      {/* Top Songs */}
      <Title order={3} mt="xl">
        Top 10 Songs
      </Title>
      <Grid mt="sm">
        {artist.topSongs.map((song) => (
          <Grid.Col span={6} key={song.id}>
            <Card withBorder>
              <Group justify="space-between">
                <Text>{song.title}</Text>
                <Text size="sm" c="dimmed">
                  {song.album}
                </Text>
              </Group>
            </Card>
          </Grid.Col>
        ))}
      </Grid>

      {/* Albums */}
      <Title order={3} mt="xl">
        Albums
      </Title>
      <Grid mt="sm">
        {artist.albums.map((album) => (
          <Grid.Col span={3} key={album.id}>
            <Card withBorder>
              <Image src={album.coverUrl} height={120} />
              <Text mt="sm" fw={500}>
                {album.title}
              </Text>
              <Text size="sm" c="dimmed">
                {album.year}
              </Text>
            </Card>
          </Grid.Col>
        ))}
      </Grid>

      {/* Gigs */}
      <Title order={3} mt="xl">
        Upcoming Gigs
      </Title>
      <Stack mt="sm">
        {artist.gigs.map((gig) => (
          <Card key={gig.id} withBorder>
            <Group justify="space-between">
              <div>
                <Text fw={500}>{gig.venue}</Text>
                <Text size="sm" c="dimmed">
                  {gig.city}
                </Text>
              </div>
              <Badge>{gig.date}</Badge>
            </Group>
          </Card>
        ))}
      </Stack>
    </Container>
  );
}
