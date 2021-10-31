const path = require('path')
const fs = require('fs/promises')

exports.makePaths = name => {
  const components = path.join(__dirname, '..', '..', '..', 'source', 'components')

  return {
    'index': path.join(components, 'index.js'),
    'dir': path.join(components, name),
    'component': path.join(components, name, `${name}.js`),
    'test': path.join(components, name, `${name}.test.js`),
    'component-template': path.join(__dirname, '..', 'templates', 'component-template'),
    'test-template': path.join(__dirname, '..', 'templates', 'test-template'),
    'index-template': path.join(__dirname, '..', 'templates', 'index-template')
  }
}

exports.makeTemplates = async (paths, name) => {
  const regexp = /COMPONENT_NAME/g

  const files = {
    'component': await fs.readFile(paths['component-template'], 'utf-8'),
    'test': await fs.readFile(paths['test-template'], 'utf-8'),
    'index': await fs.readFile(paths['index-template'], 'utf-8')
  }

  return {
    'component': files.component.replace(regexp, name),
    'test': files.test.replace(regexp, name),
    'index': files.index.replace(regexp, name)
  }
}
