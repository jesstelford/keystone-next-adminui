import Link from 'next/link'

export const getStaticProps = async () => {
  const mapValues = require('lodash/mapvalues');
  const { keystone } = require('../../../');
  const meta = keystone.getAdminMeta({ schemaName: 'public' });

  return {
    props: {
      name: meta.name,
      lists: mapValues(meta.lists, ({ path, label, gqlNames, adminConfig }) => ({
        path,
        label,
        metaQuery: gqlNames.listQueryMetaName,
      })),
    }
  };
}

export default ({ name, lists }) => {
  return (
    <>
      <h1>{name} Dashboard</h1>
      <ul>
        {Object.values(lists).map(({ path, label, metaQuery, adminConfig }) => (
          <li key={path}>
            <Link href="/admin/[listKey]" as={`/admin/${path}`}>
              <a>{label}</a>
            </Link>
            (... items)
          </li>
        ))}
      </ul>
    </>
  );
};
