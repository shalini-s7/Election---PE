// Mode 1: Time Machine Mode
export const historicalElections = [
  { year: 1789, title: "The First Election", rights: "Only white male property owners", methods: "Voice voting or paper ballots", issue: "Ratification of the Constitution" },
  { year: 1860, title: "Pre-Civil War", rights: "White males", methods: "Party-printed tickets (not secret)", issue: "Slavery and states' rights" },
  { year: 1920, title: "Women's Suffrage", rights: "Men and women (19th Amendment)", methods: "Secret Australian ballot", issue: "Post-WWI recovery, League of Nations" },
  { year: 1965, title: "Voting Rights Act", rights: "Enforcement of 15th Amendment for Black voters", methods: "Mechanical lever machines popular", issue: "Civil rights, Vietnam War" },
  { year: 2000, title: "The Recount", rights: "Universal suffrage (18+)", methods: "Punch cards, optical scan", issue: "Hanging chads, Supreme Court decision" }
];

// Mode 2: Mock Ballots
export const mockBallots = {
  default: {
    state: 'Any State',
    offices: [
      {
        title: "President of the United States",
        candidates: ["Candidate A (Party X)", "Candidate B (Party Y)", "Candidate C (Independent)"]
      },
      {
        title: "United States Senator",
        candidates: ["Candidate D (Party X)", "Candidate E (Party Y)"]
      },
      {
        title: "Local Proposition 1",
        description: "Bonds for public school improvements.",
        candidates: ["Yes", "No"]
      }
    ]
  }
};

// Mode 3: Why Context (Mapped to Timeline/Module steps)
export const whyContext = {
  "Electoral College": "The framers of the Constitution created the Electoral College as a compromise between election of the President by a vote in Congress and election of the President by a popular vote of qualified citizens.",
  "Primary Elections": "Introduced in the Progressive Era (early 1900s) to take candidate selection away from party bosses in smoke-filled rooms and give the power directly to voters.",
  "Tuesday Election Day": "Set in 1845. Most citizens were farmers. Sunday was for church, Wednesday was market day. Tuesday allowed travel time to the county seat without interfering with religious or economic duties."
};

// Mode 4: Myth Buster
export const myths = [
  { myth: "You can vote online in federal elections.", fact: "Currently, no state allows general online voting for federal elections due to security concerns, though some states have portals for military/overseas voters." },
  { myth: "If a race is called on TV, the counting stops.", fact: "TV networks make projections based on partial counts and exit polls. Election officials continue counting every legally cast ballot until finished." },
  { myth: "Dead people are voting in large numbers.", fact: "Numerous studies and audits have shown that voter fraud involving deceased individuals is vanishingly rare and isolated." },
  { myth: "You need a passport to vote.", fact: "No state requires a passport. While some states require a photo ID (like a driver's license), many have alternative methods to verify identity." }
];

// Mode 5: Deadlines
export const getDeadlines = (state) => {
  const electionDay = new Date('2024-11-05'); // Dummy date for countdown
  return {
    state: state || 'Your State',
    electionDay: electionDay,
    registration: new Date('2024-10-07'),
    earlyVotingStart: new Date('2024-10-15'),
    mailBallotRequest: new Date('2024-10-25')
  };
};

// Mode 7: Candidate Lens
export const mockCandidates = [
  {
    name: "Candidate A",
    party: "Party X",
    issues: {
      "Voting Access": "Supports expanding early voting and no-excuse mail-in voting.",
      "Election Security": "Focuses on post-election audits and paper trails.",
      "Campaign Finance": "Advocates for stricter limits on PAC contributions."
    }
  },
  {
    name: "Candidate B",
    party: "Party Y",
    issues: {
      "Voting Access": "Emphasizes in-person voting on Election Day.",
      "Election Security": "Supports strict Voter ID laws and regular voter roll maintenance.",
      "Campaign Finance": "Supports free speech rights allowing unlimited independent expenditures."
    }
  }
];

// Mode 9: Skeptic Q&A
export const skepticQA = [
  { q: "Does my one vote actually matter?", a: "Yes. Many local elections are decided by fewer than 100 votes. In 2017, a Virginia state house race ended in an exact tie and was decided by drawing a name from a bowl, which determined the balance of power in the state legislature." },
  { q: "Isn't the system just rigged?", a: "U.S. elections are highly decentralized. Because thousands of local jurisdictions run their own elections, coordinating a massive 'rigged' system is nearly impossible. Paper trails, public logic-and-accuracy testing of machines, and post-election audits ensure integrity." },
  { q: "Why should I vote if I live in a 'safe' state?", a: "Even if the presidential race is predictable in your state, local races (mayors, school boards, judges) directly affect your daily life and are often highly competitive. Plus, popular vote margins can influence political mandates." }
];
