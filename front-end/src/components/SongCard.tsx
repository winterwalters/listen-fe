import { Card, Image, Text, Stack, ActionIcon, Box } from "@mantine/core";
import { PauseIcon, PlayIcon } from "@heroicons/react/24/solid";
import { Howl } from "howler";
import { useEffect, useRef, useState } from "react";
import { usePlayback } from "../context/PlaybackContext";

interface SongCardProps {
  title: string;
  artist: string;
  coverUrl: string;
  audioUrl: string;
  onPlay?: () => void;
}

export const SongCard = ({
  title,
  artist,
  coverUrl,
  audioUrl,
  onPlay,
}: SongCardProps) => {
  const { activateHowl, detachHowl } = usePlayback();
  const [hovered, setHovered] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const howlRef = useRef<Howl | null>(null);

  useEffect(() => {
    const howl = new Howl({
      src: [audioUrl],
      html5: true,
    });

    const syncPlaying = () => setIsPlaying(howl.playing());
    howl.on("play", syncPlaying);
    howl.on("pause", syncPlaying);
    howl.on("stop", syncPlaying);
    howl.on("end", syncPlaying);

    howlRef.current = howl;

    return () => {
      detachHowl(howl);
      howl.unload();
      howlRef.current = null;
    };
  }, [audioUrl, detachHowl]);

  const togglePlayback = () => {
    const howl = howlRef.current;
    if (!howl) return;

    if (howl.playing()) {
      howl.pause();
      return;
    }

    activateHowl(howl, { title, artist, audioUrl });
    howl.play();
    onPlay?.();
  };

  return (
    <Card
      radius="md"
      padding="xs"
      withBorder
      style={{
        width: 160,
        cursor: "pointer",
        transition: "transform 120ms ease, box-shadow 120ms ease",
        transform: hovered ? "translateY(-2px)" : "translateY(0)",
        boxShadow: hovered
          ? "0 8px 24px rgba(0,0,0,0.12)"
          : "0 1px 4px rgba(0,0,0,0.06)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Album art with play button overlay */}
      <Card.Section style={{ position: "relative" }}>
        <Image
          src={coverUrl}
          w={160}
          h={160}
          alt={`${title} album art`}
          style={{ display: "block" }}
        />
        <Box
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(0,0,0,0.35)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            opacity: hovered || isPlaying ? 1 : 0,
            transition: "opacity 150ms ease",
          }}
        >
          <ActionIcon
            onClick={(e) => {
              e.stopPropagation();
              togglePlayback();
            }}
            size="xl"
            radius="xl"
            color="white"
            variant="filled"
            style={{ background: "rgba(255,255,255,0.92)" }}
            aria-label={isPlaying ? "Pause" : "Play"}
          >
            {isPlaying ? (
              <PauseIcon style={{ width: 20, height: 20, color: "#111" }} />
            ) : (
              <PlayIcon style={{ width: 20, height: 20, color: "#111" }} />
            )}
          </ActionIcon>
        </Box>
      </Card.Section>

      {/* Text */}
      <Stack gap={2} mt="xs" mb={4} px={2}>
        <Text fw={600} size="sm" lineClamp={1}>
          {title}
        </Text>
        <Text size="xs" c="dimmed" lineClamp={1}>
          {artist}
        </Text>
      </Stack>
    </Card>
  );
};
