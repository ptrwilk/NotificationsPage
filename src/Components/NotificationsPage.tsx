import { Box, Button, Typography } from "@mui/material";
import styles from "./styles.module.css";
import ImageMark from "../assets/avatar-mark-webber.webp";
import ImageAngela from "../assets/avatar-angela-gray.webp";
import ImageJacob from "../assets/avatar-jacob-thompson.webp";
import ImageRizky from "../assets/avatar-rizky-hasanuddin.webp";
import ImageKimberly from "../assets/avatar-kimberly-smith.webp";
import ImageNathan from "../assets/avatar-nathan-peterson.webp";
import ImageAnna from "../assets/avatar-anna-kim.webp";
import ImageChess from "../assets/image-chess.webp";
import classNames from "classnames";
import { useState } from "react";

const NotificationsPage = () => {
  const [notification, setNotification] = useState(true);

  return (
    <Box className={styles["container"]}>
      <Box className={styles["header"]}>
        <Box className={styles["notifications"]}>
          <Typography className={styles["text"]} variant="h1">
            Notifications
          </Typography>
          <Box className={styles["number"]}>
            <Typography className={styles["value"]}>
              {notification ? 3 : 0}
            </Typography>
          </Box>
        </Box>
        <Button
          className={styles["btn-mark"]}
          onClick={() => setNotification(false)}
        >
          Mark all as read
        </Button>
      </Box>
      <Box className={styles["cards"]}>
        <Card
          notification={notification}
          avatar={ImageMark}
          name="Mark Webber"
          action="reaction"
          additionalInfo="My first tournament today!"
          time="1m ago"
        />
        <Card
          notification={notification}
          avatar={ImageAngela}
          name="Angela Gray"
          action="follow"
          time="5m ago"
        />
        <Card
          notification={notification}
          avatar={ImageJacob}
          name="Jacob Thompson"
          action="join"
          additionalInfo="Chess Club"
          time="1 day ago"
        />
        <Card
          avatar={ImageRizky}
          name="Rizky Hasanuddin"
          action="message"
          message="Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and 
          I'm already having lots of fun and improving my game."
          time="5 days ago"
        />
        <Card
          avatar={ImageKimberly}
          name="Kimberly Smith"
          action="picture"
          picture={ImageChess}
          time="1 week ago"
        />
        <Card
          avatar={ImageNathan}
          name="Nathan Peterson"
          action="reaction"
          additionalInfo="5 end-game strategies to increase your win rate"
          time="2 weeks ago"
        />
        <Card
          avatar={ImageAnna}
          name="Anna Kim"
          action="leave"
          additionalInfo="Chess Club"
          time="2 weeks ago"
        />
      </Box>
    </Box>
  );
};

type Action = "reaction" | "follow" | "join" | "leave" | "message" | "picture";

const Card = ({
  notification,
  name,
  action,
  additionalInfo,
  avatar,
  time,
  message,
  picture,
}: {
  notification?: boolean;
  name: string;
  action: Action;
  additionalInfo?: string;
  picture?: any;
  message?: string;
  avatar: any;
  time: string;
}) => {
  const actionText: {
    [n in Action]: string;
  } = {
    follow: "followed you",
    picture: "commented on your picture",
    message: "sent you a private message",
    join: "has joined your group",
    leave: "left the group",
    reaction: "reacted to your recent post",
  };

  var text = actionText[action];

  return (
    <Box
      className={classNames(styles["card"], {
        [styles["card-notification"]]: notification,
      })}
    >
      <img className={styles["img-avatar"]} src={avatar} />
      <Box className={styles["right"]}>
        <Box className={styles["top"]}>
          <Box className={styles["content"]}>
            <Typography className={styles["name"]}>
              {name}
              <span className={styles["text"]}>{text}</span>
              {additionalInfo && (
                <span
                  className={classNames(styles["additional-info"], {
                    [styles["bold"]]: action === "reaction",
                    [styles["club"]]: action === "join" || action === "leave",
                  })}
                >
                  {additionalInfo}
                </span>
              )}
              {notification && (
                <span className={styles["notification-shape"]} />
              )}
            </Typography>
            <Typography className={styles["time"]}>{time}</Typography>
          </Box>
          {picture && <img className={styles["img-picture"]} src={picture} />}
        </Box>
        {message && (
          <Box className={styles["message-container"]}>
            <Typography className={styles["message"]}>{message}</Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default NotificationsPage;
