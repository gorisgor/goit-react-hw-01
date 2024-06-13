import css from "./FriendListItem.module.css";
import clsx from "clsx";
export default function FriendListItem({ avatar, name, isOnline }) {
  const statusClxs = clsx(css.text, isOnline ? css.online : css.offline);
  return (
    <div className={css.friendCard}>
      <img src={avatar} alt="Avatar" width="48" />
      <p className={css.friendName}>{name}</p>
      <p className={statusClxs}>{isOnline ? "Online" : "Offline"}</p>
    </div>
  );
}
