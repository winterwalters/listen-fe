import {
  Card,
  Image,
  Text,
  Stack,
  ActionIcon,
  Group,
  Box,
} from "@mantine/core";
import { PlayIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

interface SongCardLongProps {
  title: string;
  artist: string;
  coverUrl: string;
  onPlay: () => void;
}

export const SongCardLong = ({
  title,
  artist,
  coverUrl,
  onPlay,
}: SongCardLongProps) => {
  const [hovered, setHovered] = useState(false);

  return (
    <Card
      radius="md"
      padding={0}
      withBorder
      style={{
        width: 320,
        height: 72,
        cursor: "pointer",
        overflow: "hidden",
        transition: "transform 120ms ease, box-shadow 120ms ease",
        transform: hovered ? "translateY(-1px)" : "translateY(0)",
        boxShadow: hovered
          ? "0 6px 18px rgba(0,0,0,0.10)"
          : "0 1px 3px rgba(0,0,0,0.06)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Group gap={0} wrap="nowrap" h="100%">
        {/* Album art with play overlay */}
        <Box style={{ position: "relative", flexShrink: 0 }}>
          <Image
            src={coverUrl}
            w={72}
            h={72}
            alt={`${title} album art`}
            style={{ display: "block" }}
          />
          <Box
            style={{
              position: "absolute",
              inset: 0,
              background: "rgba(0,0,0,0.38)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              opacity: hovered ? 1 : 0,
              transition: "opacity 150ms ease",
            }}
          >
            <ActionIcon
              onClick={(e) => {
                e.stopPropagation();
                onPlay();
              }}
              size="md"
              radius="xl"
              variant="filled"
              style={{ background: "rgba(255,255,255,0.90)" }}
            >
              <PlayIcon style={{ width: 14, height: 14, color: "#111" }} />
            </ActionIcon>
          </Box>
        </Box>

        {/* Text content */}
        <Stack
          gap={3}
          px="sm"
          justify="center"
          style={{ flex: 1, minWidth: 0 }}
        >
          <Text fw={600} size="sm" lineClamp={1}>
            {title}
          </Text>
          <Text size="xs" c="dimmed" lineClamp={1}>
            {artist}
          </Text>
        </Stack>
      </Group>
    </Card>
  );
};
