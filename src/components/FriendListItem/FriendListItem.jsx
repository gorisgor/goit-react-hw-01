import css from "./FriendListItem.module.css";
import "clsx";
export default function FriendListItem({ avatar, name, isOnline }) {
  const status = clsx(text, isOnline ? text1 : text2);
  return (
    <div className={css.friendCard}>
      <img src={avatar} alt="Avatar" width="48" />
      <p>{name}</p>
      <p>{isOnline ? "Online" : "Offline"}</p>
    </div>
  );
}
