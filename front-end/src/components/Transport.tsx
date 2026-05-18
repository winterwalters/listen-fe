import {
  Affix,
  Box,
  Flex,
  Slider,
  Text,
  UnstyledButton,
  useMantineTheme,
} from "@mantine/core";
import {
  BackwardIcon,
  ForwardIcon,
  PauseIcon,
  PlayIcon,
} from "@heroicons/react/24/solid";
import { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { usePlayback } from "../context/PlaybackContext";
import { layoutSurfaces } from "../theme/palette";

function formatTime(totalSec: number) {
  if (!Number.isFinite(totalSec) || totalSec < 0) return "0:00";
  const s = Math.floor(totalSec);
  const m = Math.floor(s / 60);
  const h = Math.floor(m / 60);
  const sec = s % 60;
  const min = m % 60;
  if (h > 0) {
    return `${h}:${String(min).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
  }
  return `${m}:${String(sec).padStart(2, "0")}`;
}

export const Transport = () => {
  const { colorScheme } = useTheme();
  const mantine = useMantineTheme();
  const shell = layoutSurfaces(colorScheme);
  const icon =
    colorScheme === "dark"
      ? mantine.colors.ashGrey[2]
      : mantine.colors.vividRoyal[7];

  const {
    track,
    activeAudioUrl,
    isPlaying,
    positionSec,
    durationSec,
    seekTo,
    togglePlayPause,
    skipBy,
  } = usePlayback();

  const [scrubbing, setScrubbing] = useState(false);
  const [scrubValue, setScrubValue] = useState(0);

  const hasTrack = Boolean(activeAudioUrl);
  const sliderMax = Math.max(durationSec, positionSec, 0.01);
  const sliderValue = scrubbing ? scrubValue : positionSec;

  return (
    <Affix
      position={{ bottom: 0, right: 0 }}
      w="100%"
      p="md"
      style={{
        backgroundColor: shell.header,
        borderTop: `1px solid ${shell.border}`,
        boxShadow: `inset 0 2px 0 0 ${shell.headerAccent}`,
      }}
    >
      <Flex direction="column" gap="sm" w="100%">
        <Box style={{ opacity: hasTrack ? 1 : 0.45 }}>
          <Slider
            min={0}
            max={sliderMax}
            step={0.1}
            value={Math.min(sliderValue, sliderMax)}
            onChange={(v) => {
              if (!hasTrack) return;
              setScrubbing(true);
              setScrubValue(v);
            }}
            onChangeEnd={(v) => {
              if (!hasTrack) return;
              seekTo(v);
              setScrubbing(false);
            }}
            disabled={!hasTrack}
            size="sm"
            label={null}
            styles={{
              root: { width: "100%" },
            }}
          />
          <Flex justify="space-between" mt={4}>
            <Text size="xs" c="dimmed" ff="monospace">
              {formatTime(hasTrack ? (scrubbing ? scrubValue : positionSec) : 0)}
            </Text>
            <Text size="xs" c="dimmed" ff="monospace">
              {formatTime(hasTrack ? durationSec : 0)}
            </Text>
          </Flex>
        </Box>

        <Flex justify="space-between" align="center" direction="row" w="100%">
          <Flex gap="lg" direction="row" align="center">
            <UnstyledButton
              type="button"
              aria-label="Back 10 seconds"
              disabled={!hasTrack}
              onClick={() => skipBy(-10)}
              style={{ opacity: hasTrack ? 1 : 0.35, cursor: hasTrack ? "pointer" : "not-allowed" }}
            >
              <BackwardIcon style={{ width: 20, height: 20, color: icon }} />
            </UnstyledButton>
            <UnstyledButton
              type="button"
              aria-label={isPlaying ? "Pause" : "Play"}
              disabled={!hasTrack}
              onClick={() => togglePlayPause()}
              style={{ opacity: hasTrack ? 1 : 0.35, cursor: hasTrack ? "pointer" : "not-allowed" }}
            >
              {isPlaying ? (
                <PauseIcon style={{ width: 22, height: 22, color: icon }} />
              ) : (
                <PlayIcon style={{ width: 22, height: 22, color: icon }} />
              )}
            </UnstyledButton>
            <UnstyledButton
              type="button"
              aria-label="Forward 10 seconds"
              disabled={!hasTrack}
              onClick={() => skipBy(10)}
              style={{ opacity: hasTrack ? 1 : 0.35, cursor: hasTrack ? "pointer" : "not-allowed" }}
            >
              <ForwardIcon style={{ width: 20, height: 20, color: icon }} />
            </UnstyledButton>
          </Flex>
          <Text size="sm" fw={600} c="ashGrey.4" ta="center" style={{ flex: 1, minWidth: 0 }} lineClamp={1}>
            {track ? `${track.title} · ${track.artist}` : "Nothing playing"}
          </Text>
          <Flex direction="row">
            <Text size="sm" c="dimmed">
              Actions
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Affix>
  );
};
