import { data } from "data";
import Planet from "components/Planet/Planets";
import MainLayout from "components/UI/MainLayout";

import { getImageSize } from "helpers/functions";

function Planets({ planet }) {
  return (
    <MainLayout>
      <Planet planet={planet} />
    </MainLayout>
  );
}

export default Planets;

export const getServerSideProps = async (ctx) => {
  const { name } = ctx.query;

  const planet = data.find(
    (item) => item.name.toLowerCase() === name.toLowerCase()
  );
  const imageSize = getImageSize(name.toLowerCase());

  return {
    props: {
      planet: {
        ...planet,
        imageSize,
      },
    },
  };
};
