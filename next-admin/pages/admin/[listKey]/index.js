import Link from 'next/link'

export const getStaticPaths = async () => {
  const { keystone } = require('../../../../');
  const meta = keystone.getAdminMeta({ schemaName: 'public' });

  return {
    paths: Object.values(meta.lists).map(({ path }) => ({
      params: { listKey: path }
    })),
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const { keystone } = require('../../../../');
  const meta = keystone.getAdminMeta({ schemaName: 'public' });

  const { label, path, gqlNames, adminConfig } = Object.values(meta.lists).find(({ path }) => path === params.listKey);

  debugger;

  return {
    props: { label, path, gqlNames, adminConfig }
  }
};

export default ({ label, path }) => (
  <>
    <h1>{label}</h1>
    <p>... (insert client side query to get all items here)</p>
    <p>
      <Link href="/admin/[listKey]/[id]" as={`/admin/${path}/abc123`}>
        <a>Go to fake item: {`/admin/${path}/abc123`}</a>
      </Link>
    </p>
  </>
);
