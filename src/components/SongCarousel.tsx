import { Box, Group, Text, ActionIcon, ScrollArea, Stack } from "@mantine/core";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { Link } from "@tanstack/react-router";
import { SongCard } from "./SongCard";
import { type Song } from "../data/types";

interface SongCarouselProps {
  id: string;
  title: string;
  subtitle?: string;
  songs: Song[];
  onPlay: (song: Song) => void;
  /** If provided, renders a "See all" link pointing to this route */
  seeAllTo?: string;
}

export const SongCarousel = ({
  id,
  title,
  subtitle,
  songs,
  onPlay,
  seeAllTo,
}: SongCarouselProps) => {
  return (
    <Stack gap={4} component="section" aria-labelledby={`section-${id}`}>
      {/* Section header */}
      <Group justify="space-between" align="flex-end" px={2}>
        <Stack gap={0}>
          <Text
            id={`section-${id}`}
            component="h2"
            fw={700}
            size="xl"
            style={{
              letterSpacing: "-0.02em",
              lineHeight: 1.15,
            }}
          >
            {title}
          </Text>
          {subtitle && (
            <Text size="sm" c="dimmed" mt={2}>
              {subtitle}
            </Text>
          )}
        </Stack>

        {seeAllTo && (
          <Group
            gap={4}
            component={Link}
            // to={seeAllTo}
            style={{
              color: "var(--mantine-color-dimmed)",
              textDecoration: "none",
              transition: "color 120ms ease",
            }}
            className="see-all-link"
          >
            <Text size="sm" fw={500}>
              See all
            </Text>
            <ActionIcon variant="transparent" color="gray" size="xs">
              <ChevronRightIcon style={{ width: 14, height: 14 }} />
            </ActionIcon>
          </Group>
        )}
      </Group>

      {/* Scrollable card row */}
      <ScrollArea
        type="hover"
        offsetScrollbars={false}
        scrollbarSize={4}
        styles={{
          root: { overflow: "hidden" },
          viewport: { paddingBottom: 12 },
        }}
      >
        <Group gap="md" wrap="nowrap" px={2} py={4}>
          {songs.map((song) => (
            <Box key={song.id} style={{ flexShrink: 0 }}>
              <SongCard
                title={song.title}
                artist={song.artist}
                coverUrl={song.coverUrl}
                onPlay={() => onPlay(song)}
              />
            </Box>
          ))}
        </Group>
      </ScrollArea>
    </Stack>
  );
};
