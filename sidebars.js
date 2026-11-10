/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  samples: [
    'index',
    {
      type: 'category',
      label: 'Family safety guides',
      collapsible: false,
      link: {type: 'doc', id: 'family-safety/index'},
      items: [
        'family-safety/how-safety-controls-fit-together',
        'family-safety/link-your-account',
        'family-safety/change-chat-settings',
        'family-safety/report-and-block',
        'family-safety/quick-reference',
      ],
    },
    {
      type: 'category',
      label: 'Regulations explained',
      collapsible: false,
      items: [
        'compliance/coppa-for-product-teams',
        'compliance/hipaa-security-rule-for-engineers',
        'compliance/glba-safeguards-rule-evidence-guide',
        'compliance/fda-part-11-for-documentation-teams',
        'compliance/export-controls-for-technical-writers',
        'compliance/uk-childrens-code-design-review-guide',
      ],
    },
    {
      type: 'category',
      label: 'Policy and procedure',
      collapsible: false,
      link: {type: 'doc', id: 'policy-procedure/index'},
      items: [
        'policy-procedure/policy',
        'policy-procedure/procedure',
        'policy-procedure/customer-notice',
      ],
    },
    {
      type: 'category',
      label: 'Documentation process',
      collapsible: false,
      items: ['process/doc-update-process', 'process/writing-for-translation'],
    },
    {
      type: 'category',
      label: 'Case studies',
      collapsible: false,
      items: ['case-studies/gainwell-companion-guides', 'case-studies/zone5-work-instructions'],
    },
    {
      type: 'category',
      label: 'Creator tutorial',
      collapsible: false,
      items: ['creator/text-filtering-concept', 'creator/filtered-sign-tutorial'],
    },
  ],
};

module.exports = sidebars;
