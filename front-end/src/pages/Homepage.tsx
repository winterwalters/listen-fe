import { Stack, Text, Box } from "@mantine/core";

import { homeSections } from "../data/mockData";
import { type Song } from "../data/types";
import { SongCarousel } from "../components/SongCarousel";

// ── Greeting helper ───────────────────────────────────────────────────────────

const getGreeting = (): string => {
  const hour = new Date().getHours();
  if (hour < 12) return "Good morning";
  if (hour < 18) return "Good afternoon";
  return "Good evening";
};

// ── Page ──────────────────────────────────────────────────────────────────────

export const Homepage = () => {
  const handlePlay = (song: Song) => {
    // Wire up to your player context / state when ready
    console.log("Playing:", song.title, "by", song.artist);
  };

  return (
    <Stack gap="xl" pb="xl">
      {/* Page greeting */}
      <Box>
        <Text
          component="h1"
          fw={800}
          style={{
            fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
            letterSpacing: "-0.03em",
            lineHeight: 1.1,
          }}
        >
          {getGreeting()}
        </Text>
        <Text c="dimmed" size="sm" mt={4}>
          Here's what's waiting for you today.
        </Text>
      </Box>

      {/* Song sections */}
      {homeSections.map((section) => (
        <SongCarousel
          key={section.id}
          id={section.id}
          title={section.title}
          subtitle={section.subtitle}
          songs={section.songs}
          onPlay={handlePlay}
          seeAllTo={`/section/${section.id}`}
        />
      ))}
    </Stack>
  );
};
