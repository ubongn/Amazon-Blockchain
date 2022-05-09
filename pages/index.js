import Main from "../components/Main";
import Siderbar from "../components/Siderbar";

const styles = {
  container: `h-full w-full flex bg-[#fff]`,
};

export default function Home() {
  return (
    <div className={styles.container}>
      <Siderbar />

      <Main />
    </div>
  );
}
