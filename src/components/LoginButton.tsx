import { ActionIcon, Avatar, Button, Menu } from "@mantine/core";
import { Link } from "@tanstack/react-router";
import { UserCircleIcon } from "@heroicons/react/24/outline";

type Props = {
  isLoggedIn: boolean;
  avatarUrl?: string;
};

export const LoginButton = ({ isLoggedIn, avatarUrl }: Props) => {
  return (
    <>
      {isLoggedIn ? (
        <Menu width={200} position="bottom-start">
          <Menu.Target>
            <ActionIcon
              component="button"
              variant="subtle"
              size="lg"
              aria-label="Profile"
              color="gray"
            >
              {avatarUrl ? (
                <Avatar src={avatarUrl} size={32} radius="xl" />
              ) : (
                <UserCircleIcon style={{ width: 26, height: 26 }} />
              )}
            </ActionIcon>
          </Menu.Target>

          <Menu.Dropdown>
            <Menu.Item component={Link} to="/userProfile">
              Dashboard
            </Menu.Item>
            <Menu.Sub openDelay={120} closeDelay={150}>
              <Menu.Sub.Target>
                <Menu.Sub.Item>Settings</Menu.Sub.Item>
              </Menu.Sub.Target>

              <Menu.Sub.Dropdown>
                <Menu.Item>Profile</Menu.Item>
                <Menu.Item>Security</Menu.Item>
                <Menu.Item>Notifications</Menu.Item>
              </Menu.Sub.Dropdown>
            </Menu.Sub>
          </Menu.Dropdown>
        </Menu>
      ) : (
        <Button component={Link} to="/login" variant="outline" size="sm">
          Log in
        </Button>
      )}
    </>
  );
};
