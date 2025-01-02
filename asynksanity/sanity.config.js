import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'asynksanity',

  projectId: '60ojvu2u',
  dataset: 'asynk',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
