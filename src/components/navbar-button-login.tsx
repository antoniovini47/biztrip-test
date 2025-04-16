import { useLoginMutation } from "../mutations/auth.mutations";
import ButtonStyled from "./ui/ButtonStyled";
import { getConfig } from "../lib/config";
import { useEffect, useState } from "react";
import LoadingIcon from "./loading-icon";
import capitalize from "../utils/capitalize";
import { useQueryClient } from "@tanstack/react-query";

const NavBarButtonLogin = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const queryClient = useQueryClient();

  const { mutate: login, isPending } = useLoginMutation({
    onSuccess: (data) => {
      localStorage.setItem("access-token", data.token.value);
      localStorage.setItem("user-name", data.user.name.split(" ")[0]);
      setIsLoggedIn(true);
      queryClient.invalidateQueries({ queryKey: ["credentials"] });
    },
    onError: () => {
      setIsLoggedIn(false);
    },
  });

  const isLoading = isPending || isLoggingOut;

  useEffect(() => {
    if (localStorage.getItem("access-token")) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = () => {
    login({ email: getConfig("loginUserEmail"), password: getConfig("loginUserPassword") });
  };

  const handleLogout = () => {
    localStorage.removeItem("access-token");
    localStorage.removeItem("user-name");
    setIsLoggingOut(true);
    setTimeout(() => {
      setIsLoggedIn(false);
      setIsLoggingOut(false);
      queryClient.invalidateQueries({ queryKey: ["credentials"] });
    }, 1000);
  };

  if (isLoading) {
    return (
      <ButtonStyled>
        <LoadingIcon />
      </ButtonStyled>
    );
  }

  return (
    <ButtonStyled onClick={isLoggedIn ? handleLogout : handleLogin}>
      {isLoggedIn ? `Logout (${capitalize(localStorage.getItem("user-name") || "")})` : "Login"}
    </ButtonStyled>
  );
};

export default NavBarButtonLogin;
