
const banner = {
  title: 'Banner',
  name: 'banner',
  type: 'document',
  fields: [
    {
      title: 'Page',
      name: 'page',
      type: 'string',
      description: 'What page is this banner for?',
    },
    {
      title: 'Banner Image',
      name: 'bannerImage',
      type: 'image',
      options: {
        hotspot: true // <-- Defaults to false
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
          
        },
      ],
    },
    {
      title: 'Overlay Text',
      name: 'overlayText',
      type: 'string',
    },
    {
      title: 'Text Position',
      name: 'textPosition',
      type: 'string',
      options: {
        list: [
          {title: 'Top', value: 'top'},
          {title: 'Center', value: 'center'},
          {title: 'Bottom', value: 'bottom'},
        ],
        layout: 'radio', // <-- defaults to 'dropdown'
      }
    }
  ]
}

export default banner;


