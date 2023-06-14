
const locationPin = {
    title: 'Locations',
  name: 'location',
  type: 'document',
  fields: [
    {
      title: 'Location',
      name: 'locationPin',
      type: 'string',
      description: 'Add/Remove Locations',
    },
    {
      title: 'Location Coordinates',
      name: 'locationCoo',
      type: 'string',
      description: 'Add/Remove Locations',
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

export default locationPin;
