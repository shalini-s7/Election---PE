export const modules = [
  {
    id: 'voter-registration',
    title: 'Voter Registration',
    icon: '📋',
    description: 'Learn how citizens register to vote and what documents are needed.',
    steps: [
      { title: 'Check Eligibility', content: 'To register, you must be a citizen, meet your state\'s residency requirements, and be at least 18 years old by Election Day. Some states allow 16- or 17-year-olds to pre-register.', fact: 'About 1 in 4 eligible Americans are not registered to vote.' },
      { title: 'Choose How to Register', content: 'You can register online (available in most states), by mail using the National Voter Registration Form, or in person at your local election office, DMV, or other designated agencies.', fact: 'The National Voter Registration Act of 1993 (Motor Voter Act) made registration available at DMVs nationwide.' },
      { title: 'Provide Required Information', content: 'You\'ll need your full legal name, address, date of birth, and a state ID number or the last four digits of your Social Security number. Some states also request party affiliation.', fact: 'Party registration is optional in many states and does not limit your choices in a general election.' },
      { title: 'Verify and Submit', content: 'Double-check all information before submitting. After submission, you\'ll receive a voter registration card confirming your registration and polling place.', fact: 'You can check your registration status anytime through your state\'s Secretary of State website.' },
      { title: 'Keep Your Registration Current', content: 'Update your registration if you move, change your name, or want to change party affiliation. Most states allow updates online.', fact: 'Failure to update your address can result in being directed to the wrong polling place on Election Day.' }
    ]
  },
  {
    id: 'election-types',
    title: 'Types of Elections',
    icon: '🗳️',
    description: 'Understand primary, general, and special elections and how they differ.',
    steps: [
      { title: 'Primary Elections', content: 'Primaries are held before the general election to narrow down candidates. In closed primaries, only registered party members can vote. In open primaries, any registered voter can participate.', fact: 'The first statewide primary election was held in Wisconsin in 1903.' },
      { title: 'General Elections', content: 'General elections determine who will hold office. They occur on the first Tuesday after the first Monday in November. All registered voters can participate regardless of party affiliation.', fact: 'Election Day was set in November in 1845, chosen because the fall harvest was over and winter hadn\'t made travel difficult.' },
      { title: 'Midterm Elections', content: 'Midterm elections occur halfway through a president\'s four-year term. All 435 House seats, about a third of Senate seats, and many state and local positions are on the ballot.', fact: 'Voter turnout in midterms is historically 15-20 percentage points lower than presidential elections.' },
      { title: 'Special Elections', content: 'Special elections fill vacancies caused by death, resignation, or removal of an officeholder. They can happen at any time and follow rules set by each state.', fact: 'Special elections have sometimes changed the balance of power in the U.S. Senate.' },
      { title: 'Local Elections', content: 'Local elections choose mayors, city council members, school board members, judges, and other officials. These elections directly impact your daily life including schools, roads, and public safety.', fact: 'Local elections often have the lowest turnout, sometimes below 20%, despite having the most direct impact on communities.' }
    ]
  },
  {
    id: 'voting-methods',
    title: 'How to Vote',
    icon: '✅',
    description: 'Explore the different ways you can cast your ballot on Election Day.',
    steps: [
      { title: 'In-Person Voting', content: 'Visit your assigned polling place on Election Day. Bring valid ID if required by your state. Poll workers will verify your registration, and you\'ll use a voting machine or paper ballot.', fact: 'Over 130 million Americans voted in the 2020 presidential election.' },
      { title: 'Early Voting', content: 'Many states allow voting at designated locations days or weeks before Election Day. This reduces wait times and gives more flexibility. Check your state\'s early voting period and locations.', fact: 'In 2020, more than 101 million people voted early, either in person or by mail.' },
      { title: 'Mail-In / Absentee Voting', content: 'Request a ballot by mail, fill it out at home, and return it by mail or at a drop-off location. Some states send ballots automatically to all registered voters.', fact: 'Oregon became the first state to conduct all elections entirely by mail in 2000.' },
      { title: 'Provisional Ballots', content: 'If there\'s a question about your eligibility at the polls, you can cast a provisional ballot. Election officials will verify your eligibility afterward and count your ballot if confirmed.', fact: 'Provisional ballots were mandated nationwide by the Help America Vote Act of 2002.' },
      { title: 'Accessibility Options', content: 'Polling places must be accessible to voters with disabilities. Options include accessible voting machines, curbside voting, and assistance from a person of your choice.', fact: 'The Americans with Disabilities Act requires all polling places to be physically accessible.' }
    ]
  },
  {
    id: 'campaigns',
    title: 'Campaigns & Candidates',
    icon: '📢',
    description: 'Learn how candidates run campaigns and how to evaluate them.',
    steps: [
      { title: 'Announcing Candidacy', content: 'Candidates formally announce their intention to run for office. They must file paperwork with the appropriate election authority and often form a campaign committee to manage fundraising.', fact: 'Presidential candidates must file a Statement of Candidacy with the Federal Election Commission.' },
      { title: 'Campaign Fundraising', content: 'Campaigns raise money through individual donations, fundraising events, and political action committees (PACs). Federal law limits how much individuals can donate to candidates.', fact: 'The 2020 presidential election cycle saw over $14 billion in total spending, making it the most expensive in U.S. history.' },
      { title: 'Debates and Forums', content: 'Candidates participate in debates to present their positions on issues and contrast themselves with opponents. Debates help voters compare candidates side by side.', fact: 'The first televised presidential debate was between John F. Kennedy and Richard Nixon in 1960.' },
      { title: 'Media and Advertising', content: 'Campaigns use TV ads, social media, mailers, and public appearances to reach voters. It\'s important to verify claims through nonpartisan fact-checking organizations.', fact: 'Social media ad spending in elections has grown from nearly zero in 2008 to billions of dollars today.' },
      { title: 'Evaluating Candidates', content: 'Research candidates\' positions on issues that matter to you. Use nonpartisan voter guides, attend town halls, and read candidates\' official platforms to make an informed choice.', fact: 'Nonpartisan organizations like the League of Women Voters provide voter guides for elections at every level.' }
    ]
  },
  {
    id: 'electoral-college',
    title: 'The Electoral College',
    icon: '🏛️',
    description: 'Understand how the Electoral College works in presidential elections.',
    steps: [
      { title: 'What Is the Electoral College?', content: 'The Electoral College is the system used to elect the President and Vice President. It consists of 538 electors. A candidate needs 270 electoral votes to win the presidency.', fact: 'The Electoral College was established by Article II, Section 1 of the U.S. Constitution in 1787.' },
      { title: 'How Electors Are Allocated', content: 'Each state gets electors equal to its total number of Senators (2) plus Representatives (based on population). Washington, D.C. gets 3 electors per the 23rd Amendment.', fact: 'California has the most electors (54), while several states and D.C. have the minimum of 3.' },
      { title: 'Winner-Take-All vs. Proportional', content: 'In 48 states and D.C., the candidate who wins the popular vote in that state gets all its electoral votes. Maine and Nebraska use a proportional district method.', fact: 'Maine and Nebraska have split their electoral votes in multiple elections.' },
      { title: 'The Electoral Vote Process', content: 'After Election Day, electors meet in their state capitals in December to cast their official votes. Congress counts the electoral votes in a joint session in January.', fact: 'The official Electoral College vote happens on the first Tuesday after the second Wednesday in December.' },
      { title: 'Contingency Procedures', content: 'If no candidate reaches 270 electoral votes, the House of Representatives chooses the President (each state delegation gets one vote), and the Senate chooses the Vice President.', fact: 'The House has decided the presidential election twice: in 1800 (Thomas Jefferson) and 1824 (John Quincy Adams).' }
    ]
  },
  {
    id: 'after-election',
    title: 'After the Election',
    icon: '📊',
    description: 'What happens after votes are cast — counting, certification, and inauguration.',
    steps: [
      { title: 'Vote Counting', content: 'After polls close, election officials count ballots. Results may take hours or days depending on the volume of mail-in and provisional ballots. Media projections are unofficial.', fact: 'Official results are not final on election night — what you see are projections based on partial counts.' },
      { title: 'Canvassing and Audits', content: 'Election boards conduct a canvass to verify vote totals. Many states require post-election audits to ensure accuracy and public confidence in results.', fact: 'Risk-limiting audits are considered the gold standard for verifying election results.' },
      { title: 'Certification of Results', content: 'State officials certify election results after the canvass is complete. This is a formal declaration that the results are accurate and official.', fact: 'Most states must certify results within 2-4 weeks after Election Day.' },
      { title: 'Recounts and Challenges', content: 'If results are very close, candidates may request a recount. Legal challenges must be filed within specific timeframes and are resolved by courts.', fact: 'The 2000 presidential election in Florida was decided by a margin of just 537 votes after a recount.' },
      { title: 'Inauguration', content: 'The newly elected President is inaugurated on January 20th following the election. State and local winners take office according to their jurisdiction\'s schedule.', fact: 'The 20th Amendment, ratified in 1933, moved Inauguration Day from March 4 to January 20.' }
    ]
  }
];

export const timelineStages = [
  { title: 'Voter Registration', description: 'Citizens register to vote by providing their information to election authorities.', detail: 'Registration deadlines vary by state. Some states offer same-day registration, while others require registration weeks before Election Day. You can register online, by mail, or in person.' },
  { title: 'Candidate Filing', description: 'Candidates file paperwork and meet requirements to appear on the ballot.', detail: 'Candidates must collect signatures, pay filing fees, and submit required documents to their state or local election authority. Filing deadlines are set by each state.' },
  { title: 'Campaign Season', description: 'Candidates campaign by sharing their platforms, debating, and reaching out to voters.', detail: 'Campaigns use advertisements, social media, rallies, town halls, and debates to communicate with voters. Campaign finance laws regulate fundraising and spending.' },
  { title: 'Primary Elections', description: 'Parties hold primaries or caucuses to select their nominees for the general election.', detail: 'Primaries can be open (any voter) or closed (party members only). Caucuses involve group discussions and voting. These events narrow the field to each party\'s chosen candidate.' },
  { title: 'National Conventions', description: 'Parties formally nominate their candidates and adopt their platforms.', detail: 'Delegates chosen during primaries and caucuses attend national conventions. The nominee gives an acceptance speech, and the party finalizes its official platform.' },
  { title: 'General Election Campaign', description: 'Nominated candidates campaign for the general election.', detail: 'Candidates debate, advertise, and travel the country to earn votes. This is the most visible phase of the election cycle, especially in presidential race years.' },
  { title: 'Election Day', description: 'Voters cast their ballots at polling places, by mail, or through early voting.', detail: 'Election Day is the first Tuesday after the first Monday in November. Voters choose candidates for federal, state, and local offices. Polls are open for set hours determined by each state.' },
  { title: 'Vote Counting & Certification', description: 'Votes are counted, audited, and officially certified by election authorities.', detail: 'Counting may take days for mail-in ballots. Election boards canvass results, conduct audits, and certify official outcomes. Recounts may occur in very close races.' },
  { title: 'Inauguration & Taking Office', description: 'Elected officials are sworn in and begin serving their terms.', detail: 'The President is inaugurated on January 20. Other officials take office according to their jurisdiction\'s schedule. The peaceful transfer of power is a cornerstone of democracy.' }
];
