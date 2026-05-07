import { createFileRoute } from "@tanstack/react-router";
import { ArtistProfilePage } from "../pages/ArtistProfilePage";

export const Route = createFileRoute("/artistProfile/$artistId")({
  component: ArtistProfilePage,
});
