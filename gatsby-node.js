const path = require('path');

exports.createPages = ({graphql, actions}) => {
  const {createPage} = actions;

  return new Promise((resolve, reject) => {
    const postTemplate = path.resolve('src/templates/posts.js');
    const projectTemplate = path.resolve('src/templates/projects.js');

    resolve(
      graphql(`
        query {
          allMarkdownRemark(sort: {order: ASC, fields: [frontmatter___date]}) {
            edges {
              node {
                frontmatter {
                  path
                  type
                  featuredImage
                }
              }
            }
          }
        }
      `).then(result => {
        const posts = result.data.allMarkdownRemark.edges.filter(
          post => post.node.frontmatter.type === 'post'
        );

        posts.forEach(({node}, index) => {
          const path = node.frontmatter.path;
          createPage({
            path,
            component: postTemplate,
            context: {
              image: node.frontmatter.featuredImage,
              prev: index === 0 ? null : posts[index - 1].node,
              next: index === posts.length - 1 ? null : posts[index + 1].node
            }
          });

          resolve();
        });

        const projects = result.data.allMarkdownRemark.edges.filter(
          project => project.node.frontmatter.type === 'project'
        );

        projects.forEach(({node}, index) => {
          const path = node.frontmatter.path;
          console.log(path);
          createPage({
            path,
            component: projectTemplate,
            context: {
              image: node.frontmatter.featuredImage,
              prev: index === 0 ? null : projects[index - 1].node,
              next: index === projects.length - 1 ? null : projects[index + 1].node
            }
          });

          resolve();
        });
      })
    );
  });
};
