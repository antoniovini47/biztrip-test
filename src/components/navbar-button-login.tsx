import { useLoginMutation } from "../mutations/auth.mutations";
import ButtonStyled from "./ui/ButtonStyled";
import { getConfig } from "../lib/config";
import { useEffect, useState } from "react";
import LoadingIcon from "./loading-icon";

const NavBarButtonLogin = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const { mutate: login, isPending } = useLoginMutation({
    onSuccess: (data) => {
      localStorage.setItem("access-token", data.token.value);
      setIsLoggedIn(true);
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
    setIsLoggingOut(true);
    setTimeout(() => {
      setIsLoggedIn(false);
      setIsLoggingOut(false);
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
      {isLoggedIn ? "Logout" : "Login"}
    </ButtonStyled>
  );
};

export default NavBarButtonLogin;
