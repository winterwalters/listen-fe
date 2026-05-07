import {
  Modal,
  Button,
  TextInput,
  Textarea,
  Select,
  FileInput,
  Stack,
  Group,
  Image,
  ActionIcon,
  Box,
  HoverCard,
  Text,
} from "@mantine/core";
import {
  InformationCircleIcon,
  PhotoIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { useState, useRef } from "react";
import { type CreatePlaylistRequest } from "../data/types";

type AddPlaylistModalProps = {
  opened: boolean;
  onClose: () => void;
  onCreatePlaylist: (data: CreatePlaylistRequest) => void;
};

export const AddPlaylistModal = ({
  opened,
  onClose,
}: AddPlaylistModalProps) => {
  const [playlistName, setPlaylistName] = useState("");
  const [description, setDescription] = useState("");
  const [visibility, setVisibility] = useState("public");
  const [coverImage, setCoverImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLButtonElement>(null);

  const handleImageChange = (file: File | null) => {
    setCoverImage(file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    setCoverImage(null);
    setImagePreview(null);
  };

  const handleSubmit = () => {
    console.log({
      playlistName,
      description,
      visibility,
      coverImage,
    });
    onClose();
  };

  return (
    <Modal
      opened={opened}
      onClose={onClose}
      title="Create New Playlist"
      size="md"
    >
      <Stack gap="md">
        <TextInput
          label="Playlist Name"
          placeholder="Enter playlist name"
          value={playlistName}
          onChange={(e) => setPlaylistName(e.target.value)}
          required
        />

        <Textarea
          label="Description"
          placeholder="Add an optional description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          minRows={3}
        />

        <Select
          label="Visibility"
          placeholder="Select visibility"
          data={[
            { value: "public", label: "Public" },
            { value: "private", label: "Private" },
          ]}
          value={visibility}
          onChange={(value) => setVisibility(value || "public")}
        />

        <Box>
          <div
            style={{ marginBottom: "8px", fontSize: "14px", fontWeight: 500 }}
          >
            Cover Image
            <span style={{ marginLeft: "4px" }}>
              <HoverCard width={280} shadow="md">
                <HoverCard.Target>
                  <InformationCircleIcon width="15px" />
                </HoverCard.Target>
                <HoverCard.Dropdown>
                  <Text size="sm">
                    Please upload an image file (JPEG, PNG, etc.) to use as the
                    cover for your playlist. This is optional, but it helps your
                    playlist stand out! The image will be cropped to a square
                    aspect ratio and resized to fit. Max file size: 5MB.
                  </Text>
                </HoverCard.Dropdown>
              </HoverCard>
            </span>
          </div>
          {imagePreview ? (
            <Group gap="md" align="flex-start">
              <Image
                src={imagePreview}
                alt="Preview"
                width={120}
                height={120}
                fit="cover"
                radius="md"
              />
              <ActionIcon
                color="red"
                variant="light"
                size="lg"
                onClick={handleRemoveImage}
              >
                <XMarkIcon className="w-4 h-4" />
              </ActionIcon>
            </Group>
          ) : (
            <FileInput
              placeholder="Upload a cover image (optional)"
              accept="image/*"
              value={coverImage}
              onChange={handleImageChange}
            />
          )}
        </Box>

        <Group justify="flex-end" mt="md">
          <Button variant="default" onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={handleSubmit} disabled={!playlistName.trim()}>
            Create Playlist
          </Button>
        </Group>
      </Stack>
    </Modal>
  );
};
