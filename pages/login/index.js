import { Box, Button, Grid, Typography } from "@mui/material";
import Link from "next/link";
import React, { useState } from "react";
import style from "../../styles/login.module.css";

const Login = () => {
  return (
    <Box className={style.wrapper}>
      <Grid container className={style.container}>
        <Grid item lg={5} xl={7} className={style.imageContainer} />
        <Grid item lg={7} xl={5}>
          <div className={style.formContainer}>
            <form>
              <Typography variant="h4" className={style.title}>
                ¡Bienvenido!
              </Typography>
              <Typography variant="h6" className={style.subtitle}>
                Inicia sesión con tu cuenta
              </Typography>
              <div className={style.buttonsContainer}>
                <Button
                  className={style.button}
                  size="large"
                  variant="contained"
                >
                  <Link href="/api/auth/login">iniciar sesión</Link>
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
