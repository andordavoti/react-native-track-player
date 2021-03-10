import { AppRegistry } from "react-native";
import TrackPlayer from "@andordavoti/react-native-track-player";

import App from "./App";

AppRegistry.registerComponent("example", () => App);
TrackPlayer.registerPlaybackService(() => require("./service"));
