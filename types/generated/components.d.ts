import type { Schema, Struct } from '@strapi/strapi';

export interface PartnerPartner extends Struct.ComponentSchema {
  collectionName: 'components_partner_partners';
  info: {
    displayName: 'partner';
  };
  attributes: {
    content: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'partner.partner': PartnerPartner;
    }
  }
}
