export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5e7b1abd1f4886dece2f01bf',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-ymar79r3',
                  apiId: '407b850b-8024-49e5-b5e3-c9151a0ee67f'
                },
                {
                  buildHookId: '5e7b1abea7ddb57bb52a28fc',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-jdprjuy7',
                  apiId: '6fa67a1e-1d6c-4600-a05d-135e62ec7258'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/karanbir8872/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-jdprjuy7.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
