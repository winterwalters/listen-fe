import { useState } from "react";
import {
  Container,
  Title,
  Text,
  Avatar,
  Group,
  Card,
  Image,
  Badge,
  Tabs,
  Grid,
  Stack,
  Box,
  ScrollArea,
  Loader,
} from "@mantine/core";
import { ArtistCard } from "../components/ArtistCard";
import { mockArtistData } from "../data/mockData";
import type { Playlist } from "../data/types";
import {mockPlaylists} from "../data/mockData";
import { useAuth0 } from "@auth0/auth0-react";


// ---- Helpers ----
const formatDuration = (seconds: number) => {
  const hrs = Math.floor(seconds / 3600);
  const mins = Math.floor((seconds % 3600) / 60);
  return hrs > 0 ? `${hrs}h ${mins}m` : `${mins}m`;
};

function PlaylistCard({ playlist }: { playlist: Playlist }) {
  return (
    <Card shadow="sm" padding="md" radius="md" withBorder>
      <Card.Section>
        <Image src={playlist.coverUrl} height={140} alt={playlist.title} />
      </Card.Section>
      <Group justify="space-between" mt="sm">
        <Text fw={500}>{playlist.title}</Text>
        <Badge variant="light">{playlist.visibility}</Badge>
      </Group>
      <Text size="sm" c="dimmed">
        {formatDuration(playlist.length)} • {playlist.dateCreated}
      </Text>
    </Card>
  );
}

export const UserProfilePage = () => {
  const [artists] = useState(mockArtistData);
  const [playlists] = useState(mockPlaylists);
  const { user , isLoading} = useAuth0();

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Container size="lg" py="xl">
      {/* Profile Header */}
      <Group mb="xl">
        {user?.picture ? (
          <Avatar src={user.picture} size={80} radius="xl" />
        ) : (
          <Avatar src="https://cdn.displate.com/artwork/380x270/2024-11-18/d0f43a34-bbb4-4984-a768-2de1f9c283e4.jpg" size={80} radius="xl" />
        )}
        <div>
          <Title order={2}>Winter Walters</Title>
          <Text c="dimmed">Premium User • Joined 2023</Text>
        </div>
      </Group>

      {/* Tabs */}
      <Tabs defaultValue="artists">
        <Tabs.List>
          <Tabs.Tab value="artists">Favorite Artists</Tabs.Tab>
          <Tabs.Tab value="playlists">Playlists</Tabs.Tab>
          <Tabs.Tab value="account">Account</Tabs.Tab>
        </Tabs.List>

        {/* Artists */}
        <Tabs.Panel value="artists" pt="md">
          <Stack gap={4} component="section" aria-labelledby="artists-section">
            <Group justify="space-between" align="flex-end" px={2}>
              <Text fw={700} size="xl" id="artists-section">
                Favorite Artists
              </Text>
            </Group>

            <ScrollArea
              type="scroll"
              scrollbarSize={4}
              styles={{
                viewport: {
                  paddingBottom: 12, // 👈 space between cards and scrollbar
                },
              }}
            >
              <Group gap="md" wrap="nowrap" px={2} py={4}>
                {artists.map((artist) => (
                  <Box key={artist.id} style={{ flexShrink: 0 }}>
                    <ArtistCard artist={artist} />
                  </Box>
                ))}
              </Group>
            </ScrollArea>
          </Stack>
        </Tabs.Panel>

        {/* Playlists */}
        <Tabs.Panel value="playlists" pt="md">
          <Grid>
            {playlists.map((playlist) => (
              <Grid.Col span={4} key={playlist.id}>
                <PlaylistCard playlist={playlist} />
              </Grid.Col>
            ))}
          </Grid>
        </Tabs.Panel>

        {/* Account Info */}
        <Tabs.Panel value="account" pt="md">
          <Card withBorder>
            <Text fw={500}>Account Information</Text>
            <Text size="sm" mt="sm">
              Email: johndoe@email.com
            </Text>
            <Text size="sm">Subscription: Premium</Text>
            <Text size="sm">Country: UK</Text>
          </Card>
        </Tabs.Panel>
      </Tabs>
    </Container>
  );
};
