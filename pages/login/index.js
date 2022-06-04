import { Box, Button, Grid, Typography } from "@mui/material";
import { useUser } from "@auth0/nextjs-auth0";
import { useRouter } from "next/router";
import { useEffect } from "react";
import React, { useState } from "react";
import Link from "next/link";
import style from "../../styles/login.module.css";

const Login = () => {
  const { user, isLoading } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (user || isLoading) {
      router.push("/");
      return;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, isLoading]);

  return (
    <Box className={style.wrapper}>
      <Grid container className={style.container}>
        <Grid item lg={5} xl={7} className={style.imageContainer} />
        <Grid item lg={7} xl={5}>
          <div className={style.formContainer}>
            <form>
              <Typography variant="h4" className={style.title}>
                Welcome!
              </Typography>
              <Typography variant="h6" className={style.subtitle}>
                Log in with your account
              </Typography>
              <div className={style.buttonsContainer}>
                <Button
                  className={style.button}
                  size="large"
                  variant="contained"
                >
                  <Link href="/api/auth/login">log in</Link>
                </Button>
              </div>
            </form>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Login;
