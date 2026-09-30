export interface Feature {
  id: string;
  name: string;
  category: string;
  basic: string | boolean;
  pro: string | boolean;
  enterprise: string | boolean;
}

export const plansData = [
  { id: '1', name: 'Price / month', category: 'General', basic: '$9', pro: '$29', enterprise: '$99' },
  { id: '2', name: 'Users included', category: 'General', basic: '1 user', pro: '5 users', enterprise: 'Unlimited' },
  { id: '3', name: 'Cloud Storage', category: 'Storage', basic: '10 GB', pro: '100 GB', enterprise: '1 TB' },
  { id: '4', name: 'Custom Domain', category: 'Features', basic: false, pro: true, enterprise: true },
  { id: '5', name: 'Advanced Analytics', category: 'Features', basic: false, pro: false, enterprise: true },
  { id: '6', name: '24/7 Support', category: 'Support', basic: false, pro: true, enterprise: true },
  { id: '7', name: 'API Access', category: 'Developer', basic: false, pro: true, enterprise: true },
  { id: '8', name: 'SLA Guarantee', category: 'Support', basic: false, pro: false, enterprise: '99.9%' },
  { id: '9', name: 'Audit Logs', category: 'Security', basic: false, pro: false, enterprise: true },
  { id: '10', name: 'Single Sign-On (SSO)', category: 'Security', basic: false, pro: false, enterprise: true },
  { id: '11', name: 'Data Export', category: 'Storage', basic: true, pro: true, enterprise: true },
  { id: '12', name: 'Custom Branding', category: 'Features', basic: false, pro: true, enterprise: true },
  { id: '13', name: 'Webhooks', category: 'Developer', basic: false, pro: true, enterprise: true },
  { id: '14', name: 'Mobile App Access', category: 'Features', basic: true, pro: true, enterprise: true },
  { id: '15', name: 'Dedicated Account Manager', category: 'Support', basic: false, pro: false, enterprise: true },
];