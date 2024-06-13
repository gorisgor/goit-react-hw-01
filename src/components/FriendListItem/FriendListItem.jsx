import css from "./FriendListItem.module.css";
import "clsx";
export default function FriendListItem({ avatar, name, isOnline }) {
  const statusClxs = clsx(css.text, isOnline ? css.online : css.offline);
  return (
    <div className={css.friendCard}>
      <img src={avatar} alt="Avatar" width="48" />
      <p>{name}</p>
      <p className={css.text}>{isOnline ? "Online" : "Offline"}</p>
    </div>
  );
}
