import InlineLoader from "./inline-loader";
import styles from "./loaders.module.css";

export default function FullPageLoader() {
  return (
    <div
      className={`grid place-items-center ${styles.fullpageLoaderWrapperHeight}`}
    >
      <InlineLoader />
    </div>
  );
}
