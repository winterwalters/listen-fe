import { ActionIcon, Avatar, Button, Loader, Menu } from "@mantine/core";
import { Link } from "@tanstack/react-router";
import { UserCircleIcon } from "@heroicons/react/24/outline";
import { useAuth0 } from "@auth0/auth0-react";



export const LoginButton = () => {
  const {
    isAuthenticated,
    loginWithRedirect: login,
    logout,
    isLoading,
    user,
  } = useAuth0();

  const handleSignup = () =>
    login({ authorizationParams: { screen_hint: "signup" } });

  const handleLogout = () =>
    logout({ logoutParams: { returnTo: window.location.origin } });

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      {isAuthenticated ? (
        <Menu width={200} position="bottom-start">
          <Menu.Target>
            <ActionIcon
              component="button"
              variant="subtle"
              size="lg"
              aria-label="Profile"
              color="gray"
            >
              {user?.picture ? (
                <Avatar src={user.picture} size={32} radius="xl" />
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
            <Menu.Divider />
            <Menu.Item onClick={handleLogout}>Logout</Menu.Item>
          </Menu.Dropdown>
        </Menu>
      ) : (
        <>
          <Button
            variant="subtle"
            size="sm"
            onClick={handleSignup}
            disabled={isLoading}
          >
            Signup
          </Button>
          <Button variant="outline" size="sm" onClick={() => login()} disabled={isLoading}>
            Log in
          </Button>
        </>
      )}
    </>
  );
};
