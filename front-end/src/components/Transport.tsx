import { Affix, Flex } from "@mantine/core";
import {
  BackwardIcon,
  ForwardIcon,
  PauseIcon,
  PlayIcon,
} from "@heroicons/react/24/solid";

export const Transport = () => {
  return (
    <Affix position={{ bottom: 0, right: 0 }} bg="black" w="100%" p="md">
      <Flex justify="space-between" align="center" direction="row" w="100%">
        <Flex gap="lg" direction="row">
          <BackwardIcon style={{ width: 20, height: 20, color: "white" }} />
          <Flex gap="sm" direction="row">
            <PlayIcon style={{ width: 20, height: 20, color: "white" }} />
            <PauseIcon style={{ width: 20, height: 20, color: "white" }} />
          </Flex>
          <ForwardIcon style={{ width: 20, height: 20, color: "white" }} />
        </Flex>
        <Flex direction="row">Song Name</Flex>
        <Flex direction="row">Actions</Flex>
      </Flex>
    </Affix>
  );
};
