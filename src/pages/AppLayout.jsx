import Sidebar from "../Component/Sidebar";
import styles from "./AppLayout.module.css";
import Map from "../Component/Map";
import User from "../Component/User";
export default function AppLayout() {
  return (
    <div className={styles.app}>
      <Sidebar />
      <Map />
      <User />
    </div>
  );
}
