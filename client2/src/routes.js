import { Fire } from "./pages/fire/Fire"
import { Home } from "./pages/home/Home"
import { Meter } from "./pages/meteorologia/Meter"
import { Signin } from "./pages/signin/Signin"
import { Signup } from "./pages/signup/Signup"
import { Smoke } from "./pages/smoke/Smoke"
import { Upload } from "./pages/upload/Upload"
import { FIRE_ROUTE, HOME_ROUTE, METEO_ROUTE, SETTINGS_ROUTE, SIGNIN_ROUTE, SIGNUP_ROUTE, SMOKE_ROUTE, UPLOAD_ROUTE } from "./utils/consts"

export const authRoutes = [
    {
        path: FIRE_ROUTE,
        Component: Fire
    },
    {
        path: SMOKE_ROUTE,
        Component: Smoke
    },
    {
        path: METEO_ROUTE,
        Component: Meter
    },
    {
        path: UPLOAD_ROUTE,
        Component: Upload
    },
]

export const publicRoutes = [
    {
        path: HOME_ROUTE,
        Component: Home
    },
    {
        path: SIGNIN_ROUTE,
        Component: Signin
    },
    {
        path: SIGNUP_ROUTE,
        Component: Signup
    },
]