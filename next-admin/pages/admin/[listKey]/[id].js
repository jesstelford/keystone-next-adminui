import { useRouter } from 'next/router';

export const getStaticPaths = async () => {
  const { keystone } = require('../../../../');
  const meta = keystone.getAdminMeta({ schemaName: 'public' });

  return {
    // Don't pre-render _any_ paths (because it's not possible to know them)
    paths: [],
    fallback: true,
  };
};

export const getStaticProps = async ({ params }) => {
  const { keystone } = require('../../../../');
  const meta = keystone.getAdminMeta({ schemaName: 'public' });

  const { singular, gqlNames, adminConfig } = Object.values(meta.lists).find(({ path }) => path === params.listKey);

  return {
    props: {
      id: params.id,
      listMeta: { singular, gqlNames, adminConfig }
    },
  }
};

export default (props) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>"Loading..."</div>;
  }

  return <Details {...props} />;

};

const Details = ({ id, listMeta: { singular } }) => (
  <>
    <h1>{singular} {id}</h1>
    <p>... (insert client side query to get item details here)</p>
  </>
)
