import css from "./Profile.module.css";

export default function Profile({ name, tag, location, avatar, stats }) {
  return (
    <div className={css.profileCard}>
      <div>
        <img src={avatar} alt="User avatar" className={css.profileImage} />
        <p className={css.profileName}>{name}</p>
        <p className={css.profileTag}>@{tag}</p>
        <p className={css.profileLocation}>{location}</p>
      </div>
      <ul className={css.profileStats}>
        <li className={css.profileStatItem}>
          <span className={css.profileStatLabel}>Followers</span>
          <span className={css.profileStatValue}>{stats.followers}</span>
        </li>
        <li className={css.profileStatItem}>
          <span className={css.profileStatLabel}>Views</span>
          <span className={css.profileStatValue}>{stats.views}</span>
        </li>
        <li className={css.profileStatItem}>
          <span className={css.profileStatLabel}>Likes</span>
          <span className={css.profileStatValue}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
