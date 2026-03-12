import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'project',
  title: 'Projects',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Project Title',
      type: 'string',
    }),

    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'title'},
    }),

    defineField({
      name: 'image',
      title: 'Project Image',
      type: 'image',
      options: {hotspot: true},
    }),

    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),

    defineField({
      name: 'projectUrl',
      title: 'Live Project URL',
      type: 'url',
    }),

    defineField({
      name: 'techStack',
      title: 'Tech Stack',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        layout: 'tags'
      }
    })
  ],
})