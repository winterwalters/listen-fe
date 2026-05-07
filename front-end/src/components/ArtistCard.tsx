import { Card, Image, Text } from "@mantine/core";
import { Link } from "@tanstack/react-router";
import type { ExtendedArtist } from "../data/types";

export const ArtistCard = ({ artist }: { artist: ExtendedArtist }) => {
  return (
    <Card
      component={Link}
      to={`/artistProfile/${artist.id}`}
      w={160}
      h={220}
      radius="md"
      withBorder
      style={{
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        flexShrink: 0,
      }}
    >
      <Card.Section>
        <Image
          src={artist.imageUrl}
          alt={artist.name}
          height={140}
          fit="cover"
        />
      </Card.Section>

      <Text mt="xs" fw={500} size="sm">
        {artist.name}
      </Text>

      <Text size="xs" c="dimmed">
        {artist.genre}
      </Text>
    </Card>
  );
};
