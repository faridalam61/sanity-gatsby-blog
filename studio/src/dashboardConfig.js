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
                  buildHookId: '5ef18c22bc2d898cfb8c5cb8',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-49pwuhxx',
                  apiId: '70ae27b4-1bde-4c3e-8eed-a8fe83d06edc'
                },
                {
                  buildHookId: '5ef18c22d2797767ae0fee9d',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-aw9oiy29',
                  apiId: '04f44abf-8727-4451-b324-7cf1b37cdea9'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/faridalam61/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-aw9oiy29.netlify.app', category: 'apps' }
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
