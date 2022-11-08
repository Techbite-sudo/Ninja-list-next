import Link from "next/link";
import {
  Key,
  ReactElement,
  JSXElementConstructor,
  ReactFragment,
  ReactPortal,
} from "react";
import styles from "../../styles/Ninjas.module.css";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: { ninjas: data },
  };
};

const Ninjas = ({ ninjas }: any) => {
  console.log(ninjas);

  return (
    <div>
      <h1>All Ninjas</h1>
      {ninjas.map(
        (ninja: {
          id: Key | null | undefined;
          name:
            | string
            | number
            | boolean
            | ReactElement<any, string | JSXElementConstructor<any>>
            | ReactFragment
            | ReactPortal
            | null
            | undefined;
        }) => (
          <Link
            href={"/ninjas/" + ninja.id}
            key={ninja.id}
            className={styles.single}
          >
            <h3>{ninja.name}</h3>
          </Link>
        )
      )}
    </div>
  );
};

export default Ninjas;
