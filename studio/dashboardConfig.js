export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5d612a55affbcd98192e7876',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-vcanybkz',
                  apiId: '1e94f1fc-c500-4d0c-9eef-b022155ed6c6'
                },
                {
                  buildHookId: '5d612a55951064b4b6fc9db2',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-r99jitmy',
                  apiId: '12bb497e-5bdd-4e7b-92b2-b663a9e3e136'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/nodexchange/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-r99jitmy.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
