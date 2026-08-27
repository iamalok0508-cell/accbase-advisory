export const services = [
  {
    slug: 'accounting-bookkeeping',
    title: 'Accounting & bookkeeping',
    tagline: 'Clean books, reconciled and closed on a fixed date.',
    description:
      'Outsourced bookkeeping and month-end close for US businesses. Daily transaction processing, AP and AR, reconciliations and general ledger maintenance in QuickBooks, Xero or NetSuite.',
    body: [
      'Most businesses do not come to us because bookkeeping is hard. They come because it is late. Transactions pile up, reconciliations slip, and by the time the books are current the quarter is over.',
      'We take the recurring work off your calendar and put it on ours. Transactions are categorised as they arrive rather than in a monthly scramble, bank and credit card accounts are reconciled continuously, and the close runs to a date you can plan around.',
      'Everything happens inside the accounting system you already use. Your login, your chart of accounts, your existing workflows. Nothing gets migrated and nothing gets rebuilt unless you ask us to.',
    ],
    includes: [
      'Daily transaction processing and categorisation',
      'General ledger maintenance and journal entries',
      'Accounts payable: bill entry, approval routing, payment runs',
      'Accounts receivable: invoicing, collections follow-up, ageing',
      'Bank, credit card and merchant account reconciliations',
      'Month-end close to an agreed calendar date',
      'Fixed asset and depreciation schedules',
      'Prepaid and accrual schedules',
    ],
    good: 'A business whose books are more than two weeks behind, or whose bookkeeper has left.',
  },
  {
    slug: 'financial-reporting',
    title: 'Financial reporting',
    tagline: 'A reporting pack that arrives before the decision, not after it.',
    description:
      'Monthly financial statements, MIS packs, cash-flow reporting and KPI dashboards for US businesses, delivered on a fixed close calendar.',
    body: [
      'A reporting pack is only useful if it lands while there is still something to do about it. We agree a close date up front and deliver against it, every month, without you having to ask.',
      'The pack itself is built around what you actually decide on. For some clients that is a three-statement view and a variance commentary. For others it is a one-page dashboard with the four metrics the board cares about. We build to the second version more often than the first.',
      'Where reporting currently lives in a spreadsheet that only one person understands, we document it, rebuild it against source data, and remove the single point of failure.',
    ],
    includes: [
      'Monthly and quarterly financial statements',
      'Management information (MIS) packs',
      'Cash-flow statements and rolling cash reporting',
      'KPI dashboards in Power BI, Excel or Google Sheets',
      'Budget-to-actual variance analysis with commentary',
      'Board and investor reporting packs',
      'Departmental and project-level P&L',
      'Consolidated reporting across entities',
    ],
    good: 'A business making decisions on numbers that are six weeks old.',
  },
  {
    slug: 'payroll-compliance',
    title: 'Payroll & compliance',
    tagline: 'Filings, documentation and audit requests handled year-round.',
    description:
      'Payroll processing, compliance reporting, financial documentation and audit support for US businesses, coordinated with your CPA and payroll provider.',
    body: [
      'Compliance work goes wrong the same way every time: it gets handled reactively. A filing deadline appears, the auditor asks for a schedule nobody prepared, and the finance function spends a week reconstructing history.',
      'We run this work as a calendar rather than a series of emergencies. Documentation is prepared as transactions happen, schedules are maintained through the year, and audit requests are answered from records that already exist.',
      'We work alongside your CPA and your payroll provider rather than replacing them. Your tax filings stay with your US tax professional; we prepare the underlying records they depend on.',
    ],
    includes: [
      'Payroll processing and reconciliation via Gusto, ADP or similar',
      'Payroll journal entries and accrual schedules',
      'Supporting documentation and schedule preparation',
      'Year-end audit support and auditor liaison',
      'Compliance reporting and filing calendars',
      'Vendor documentation and 1099 preparation support',
      'Internal control documentation',
      'Working papers for your CPA',
    ],
    good: 'A business heading into its first audit, or one that dreads the request list.',
  },
  {
    slug: 'advisory-fpa',
    title: 'Advisory & FP&A',
    tagline: 'The analysis behind the decision, not just the record of it.',
    description:
      'Budgeting, forecasting, cash-flow planning and financial analysis for US businesses that need FP&A capability without a full-time hire.',
    body: [
      'Bookkeeping tells you what happened. FP&A tells you what is likely to happen and what you can do about it. Most businesses need the second long before they can justify hiring for it.',
      'We build and maintain the models: an annual budget you can actually track against, a rolling forecast that updates with the close, and cash-flow planning that shows you the runway question before it becomes urgent.',
      'The work is collaborative rather than delivered over the wall. Assumptions get argued about, scenarios get built and discarded, and the model stays yours.',
    ],
    includes: [
      'Annual budget build and quarterly re-forecast',
      'Rolling 13-week cash-flow forecasting',
      'Scenario and sensitivity modelling',
      'Unit economics and contribution margin analysis',
      'Pricing and profitability analysis',
      'Headcount and capacity planning',
      'Fundraising and lender reporting support',
      'Ad-hoc financial analysis',
    ],
    good: 'A business with a budget in a spreadsheet nobody has updated since January.',
  },
  {
    slug: 'offshore-finance-teams',
    title: 'Offshore finance teams',
    tagline: 'A finance team that works as part of yours.',
    description:
      'Dedicated offshore finance teams for US businesses. Qualified accountants embedded in your finance operation, working your hours and your processes.',
    body: [
      'Some businesses do not want a service. They want people: named individuals who show up in the same Slack channel every day, learn the quirks of the business, and take ownership of a function.',
      'That is what this is. A dedicated accountant or a small team who work exclusively on your account, in your systems, during hours that overlap your working day. They join your standups if you want them to.',
      'Because we handle recruitment, training, cover and documentation, the arrangement survives people moving on. Every routine is written down, so nothing lives only in one person\u2019s head.',
    ],
    includes: [
      'Dedicated accountants working exclusively on your account',
      'Working hours overlapping the US business day',
      'Recruitment, training and replacement handled by us',
      'Documented process manuals for every routine',
      'Direct access via your Slack, Teams or email',
      'Finance operations and workflow improvement',
      'Capacity added in weeks rather than hiring cycles',
      'NDAs, access controls and audited data handling',
    ],
    good: 'A business that wants continuity and ownership rather than a ticketed service.',
  },
];

export const industries = [
  {
    slug: 'saas-technology',
    title: 'SaaS & technology',
    tagline: 'Deferred revenue, ARR reporting and investor-ready books.',
    description:
      'Outsourced accounting for SaaS and technology companies: revenue recognition, deferred revenue schedules, ARR and MRR reporting, and books ready for diligence.',
    body: [
      'Subscription businesses break generic bookkeeping quickly. Revenue arrives before it is earned, contracts change mid-term, and the metrics investors ask about are not on any standard financial statement.',
      'We maintain deferred revenue schedules that tie to the general ledger, apply consistent recognition policies across contract types, and produce the ARR, MRR, churn and CAC reporting your board expects alongside the statements.',
      'When diligence starts, the work is already done. Schedules reconcile, policies are documented, and the historical numbers do not need rebuilding.',
    ],
    points: [
      'ASC 606 revenue recognition and deferred revenue schedules',
      'ARR, MRR, net revenue retention and churn reporting',
      'CAC, LTV and payback period analysis',
      'Stripe, Chargebee and billing system reconciliation',
      'R&D expense tracking and capitalisation schedules',
      'Diligence-ready books and data room support',
    ],
  },
  {
    slug: 'ecommerce-retail',
    title: 'E-commerce & retail',
    tagline: 'Multi-channel reconciliation, inventory and true margin.',
    description:
      'Outsourced accounting for e-commerce and retail businesses: marketplace reconciliation, inventory accounting, COGS accuracy and channel-level profitability.',
    body: [
      'E-commerce accounting is mostly a reconciliation problem. Shopify, Amazon, a payment processor and a 3PL each report a different version of the same transaction, and the gap between gross sales and what lands in the bank is filled with fees nobody has categorised.',
      'We reconcile every channel down to the deposit, allocate fees and returns correctly, and maintain inventory and COGS so gross margin means something.',
      'The result is channel-level profitability you can act on: which SKUs make money, which marketplace is quietly expensive, and what the real margin is after fees, shipping and returns.',
    ],
    points: [
      'Shopify, Amazon and marketplace settlement reconciliation',
      'Payment processor fee allocation and deposit matching',
      'Inventory accounting and COGS by SKU',
      'Returns, chargebacks and allowance tracking',
      'Channel and SKU-level margin reporting',
      'Sales tax data preparation for your tax professional',
    ],
  },
  {
    slug: 'professional-services',
    title: 'Professional services',
    tagline: 'Project profitability, WIP and utilisation you can trust.',
    description:
      'Outsourced accounting for agencies, consultancies and professional services firms: project accounting, WIP, utilisation reporting and revenue recognition.',
    body: [
      'In a services business the P&L rarely tells you what you need to know. Revenue is fine and the firm is still not making money, because the answer sits at project level and nobody has the data.',
      'We set up project accounting that ties time and cost to engagements, maintain work-in-progress and unbilled revenue schedules, and report gross margin by client, project and team.',
      'Utilisation and realisation reporting sit alongside the statements, so the conversation about pricing and staffing is grounded in numbers rather than instinct.',
    ],
    points: [
      'Project and engagement-level profitability reporting',
      'Work-in-progress and unbilled revenue schedules',
      'Time and expense integration with billing',
      'Utilisation and realisation rate reporting',
      'Retainer and milestone revenue recognition',
      'Pass-through cost and third-party media margin tracking',
    ],
  },
  {
    slug: 'healthcare',
    title: 'Healthcare',
    tagline: 'Payer reconciliation, provider reporting and audit-ready records.',
    description:
      'Outsourced accounting for healthcare practices and providers: payer reconciliation, revenue cycle support, provider-level reporting and audit-ready documentation.',
    body: [
      'Healthcare revenue arrives late, partially, and rarely for the amount billed. Reconciling what was charged against what was actually collected, across multiple payers, is where most practices lose visibility.',
      'We reconcile remittances against billing, track adjustments and write-offs properly, and report collections and margin at the level you manage: by provider, location or service line.',
      'Documentation is maintained to a standard that survives audit, and access to financial data is controlled and logged.',
    ],
    points: [
      'Payer remittance and EOB reconciliation',
      'Revenue cycle reporting and collections analysis',
      'Contractual adjustment and write-off tracking',
      'Provider, location and service-line profitability',
      'Practice management system integration',
      'Controlled access, NDAs and audit-ready documentation',
    ],
  },
];
