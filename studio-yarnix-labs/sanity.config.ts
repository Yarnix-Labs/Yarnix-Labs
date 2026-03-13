import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'Yarnix-labs',

  projectId: 'v7q2gijs',
  dataset: 'production',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            // Blog Section
            S.listItem()
              .title('Blog')
              .icon(() => '📝')
              .child(
                S.list()
                  .title('Blog')
                  .items([
                    S.listItem()
                      .title('Blog Posts')
                      .schemaType('blog')
                      .child(S.documentTypeList('blog').title('Blog Posts')),
                    S.listItem()
                      .title('Categories')
                      .schemaType('category')
                      .child(S.documentTypeList('category').title('Categories')),
                    S.listItem()
                      .title('Authors')
                      .schemaType('author')
                      .child(S.documentTypeList('author').title('Authors')),
                  ])
              ),

            // Projects Section
            S.listItem()
              .title('Projects')
              .icon(() => '🚀')
              .child(
                S.list()
                  .title('Projects')
                  .items([
                    S.listItem()
                      .title('All Projects')
                      .schemaType('project')
                      .child(S.documentTypeList('project').title('Projects')),
                    S.listItem()
                      .title('Project Categories')
                      .schemaType('projectCategory')
                      .child(S.documentTypeList('projectCategory').title('Project Categories')),
                  ])
              ),

            // Company Section
            S.listItem()
              .title('Company')
              .icon(() => '🏢')
              .child(
                S.list()
                  .title('Company')
                  .items([
                    S.listItem()
                      .title('Team Members')
                      .schemaType('teamMember')
                      .child(S.documentTypeList('teamMember').title('Team Members')),
                    S.listItem()
                      .title('Services')
                      .schemaType('service')
                      .child(S.documentTypeList('service').title('Services')),
                    S.listItem()
                      .title('Testimonials')
                      .schemaType('testimonial')
                      .child(S.documentTypeList('testimonial').title('Testimonials')),
                  ])
              ),

            // Contact Section
            S.listItem()
              .title('Contact')
              .icon(() => '📞')
              .child(
                S.list()
                  .title('Contact Information')
                  .items([
                    S.listItem()
                      .title('Contact Info')
                      .schemaType('contactInfo')
                      .child(S.documentTypeList('contactInfo').title('Contact Information')),
                  ])
              ),

            // Legacy Posts (for backward compatibility)
            S.divider(),
            S.listItem()
              .title('Legacy Posts')
              .schemaType('post')
              .child(S.documentTypeList('post').title('Legacy Posts')),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
