import {Node, Project, SyntaxKind} from 'ts-morph'

const project = new Project({})

const removedFeatureName = process.argv[2]; // isArticleEnabled
const featureState = process.argv[3]; //off/on

if (!removedFeatureName) {
  throw new Error('Add feature flag name')
}

if (!featureState) {
  throw new Error('Add feature state(on or off)')
}

if (featureState !== 'on' && featureState !== 'off') {
  throw new Error('Add "on or off" feature state')
}

project.addSourceFilesAtPaths('src/**/*.ts')
project.addSourceFilesAtPaths('src/**/*.tsx')

const files = project.getSourceFiles()

function isToggleFunction(node: Node) {
  let isToggleFeatures = false
  node.forEachChild(child => {
    if(child.isKind((SyntaxKind.Identifier)) && child.getText() === 'toggleFeatures') {
      isToggleFeatures = true
    }
  })
  return isToggleFeatures
}

files.forEach(sourceFile => {
  sourceFile.forEachDescendant(node => {
    if(node.isKind(SyntaxKind.CallExpression) && isToggleFunction(node)) {
      const objectOptions = node.getFirstDescendantByKind(SyntaxKind.ObjectLiteralExpression)
      const onProperty = objectOptions?.getProperty('on')
      const offProperty = objectOptions?.getProperty('off')

      const featureNameProperty = objectOptions?.getProperty('name')

      const onFunction = onProperty?.getFirstDescendantByKind(SyntaxKind.ArrowFunction)
      const offFunction = offProperty?.getFirstDescendantByKind(SyntaxKind.ArrowFunction)
      const featureName = featureNameProperty?.getFirstDescendantByKind(SyntaxKind.StringLiteral)?.getText().slice(1, -1)

      if(featureName !== removedFeatureName) return

      if(featureState === 'on') {
        node.replaceWithText(onFunction?.getBody().getText() ?? '')
      }

      if(featureState === 'off') {
        node.replaceWithText(offFunction?.getBody().getText() ?? '')
      }
    }
  })
})

project.save()