const timeManagementData = [

  {
    date: "2026-01-27",
    timeRecorded: "21:00",

    scheduledCommitments: 4,
    totalPlannedHours: 7,
    unexpectedEngagements: 1,

    effectivenessRating: 4, // 1=Very Poor, 5=Very Effective
    notes: "Busy but productive"

  },

  {
    date: "2026-01-28",
    timeRecorded: "20:30",
    scheduledCommitments: 3,
    totalPlannedHours: 5,
    unexpectedEngagements: 0,
    effectivenessRating: 5,
    notes: "Very productive"
  },

  {
    date: "2026-01-29",
    timeRecorded: "22:00",
    scheduledCommitments: 2,
    totalPlannedHours: 6.5,
    unexpectedEngagements: 0,
    effectivenessRating: 5,
    notes: "Very productive"
  },

  {
    date: "2026-01-30",
    timeRecorded: "21:00",
    scheduledCommitments: 1,
    totalPlannedHours: 3,
    unexpectedEngagements: 4,
    effectivenessRating: 3,
    notes: "Not so productive"
  },

  {
    date: "2026-01-31",
    timeRecorded: "21:40",
    scheduledCommitments: 2,
    totalPlannedHours: 2.5,
    unexpectedEngagements: 6,
    effectivenessRating: 1,
    notes: "Busy but not productive"
  },

  {
    date: "2026-02-01",
    timeRecorded: "22:00",
    scheduledCommitments: 1,
    totalPlannedHours: 3,
    unexpectedEngagements: 0,
    effectivenessRating: 5,
    notes: "Very productive"
  },

  {
    date: "2026-02-02",
    timeRecorded: "21:20",
    scheduledCommitments: 3,
    totalPlannedHours: 6,
    unexpectedEngagements: 5,
    effectivenessRating: 1,
    notes: "Busy but not productive"
  },

  {
    date: "2026-02-03",
    timeRecorded: "20:10",
    scheduledCommitments: 2,
    totalPlannedHours: 4.5,
    unexpectedEngagements: 0,
    effectivenessRating: 4,
    notes: "Productive"
  },

  {
    date: "2026-02-04",
    timeRecorded: "21:00",
    scheduledCommitments: 4,
    totalPlannedHours: 8,
    unexpectedEngagements: 3,
    effectivenessRating: 2,
    notes: "Not productive"
  },

  {
    date: "2026-02-05",
    timeRecorded: "21:15",
    scheduledCommitments: 2,
    totalPlannedHours: 6,
    unexpectedEngagements: 0,
    effectivenessRating: 4,
    notes: "Productive"
  },

  {
    date: "2026-02-06",
    timeRecorded: "20:00",
    scheduledCommitments: 3,
    totalPlannedHours: 8.5,
    unexpectedEngagements: 1,
    effectivenessRating: 3,
    notes: "Not so productive"
  },

  {
    date: "2026-02-07",
    timeRecorded: "21:20",
    scheduledCommitments: 4,
    totalPlannedHours: 5,
    unexpectedEngagements: 3,
    effectivenessRating: 2,
    notes: "Not productive"
  },

  {
    date: "2026-02-08",
    timeRecorded: "22:00",
    scheduledCommitments: 2,
    totalPlannedHours: 4,
    unexpectedEngagements: 5,
    effectivenessRating: 3,
    notes: "Busy but not productive"
  },

  {
    date: "2026-02-09",
    timeRecorded: "20:50",
    scheduledCommitments: 3,
    totalPlannedHours: 9,
    unexpectedEngagements: 5,
    effectivenessRating: 1,
    notes: "Busy but not productive"
  },

  {
    date: "2026-02-10",
    timeRecorded: "21:00",
    scheduledCommitments: 2,
    totalPlannedHours: 5,
    unexpectedEngagements: 0,
    effectivenessRating: 5,
    notes: "Busy but effective"
  },

  {
    date: "2026-02-11",
    timeRecorded: "20:40",
    scheduledCommitments: 4,
    totalPlannedHours: 8,
    unexpectedEngagements: 5,
    effectivenessRating: 1,
    notes: "Very busy but not productive"
  },

  {
    date: "2026-02-12",
    timeRecorded: "20:00",
    scheduledCommitments: 4,
    totalPlannedHours: 7,
    unexpectedEngagements: 0,
    effectivenessRating: 5,
    notes: "Busy and productive"
  },

  {
    date: "2026-02-13",
    timeRecorded: "21:00",
    scheduledCommitments: 3,
    totalPlannedHours: 6,
    unexpectedEngagements: 6,
    effectivenessRating: 1,
    notes: "Busy but not productive"
  },

  {
    date: "2026-02-14",
    timeRecorded: "20:34",
    scheduledCommitments: 2,
    totalPlannedHours: 5,
    unexpectedEngagements: 3,
    effectivenessRating: 3,
    notes: "Not so productive"
  },

  {
    date: "2026-02-15",
    timeRecorded: "21:10",
    scheduledCommitments: 2,
    totalPlannedHours: 4,
    unexpectedEngagements: 0,
    effectivenessRating: 4,
    notes: "Productive"
  },

  {
    date: "2026-02-16",
    timeRecorded: "21:40",
    scheduledCommitments: 4,
    totalPlannedHours: 4.5,
    unexpectedEngagements: 0,
    effectivenessRating: 5,
    notes: "Productive"
  }

]; // list of daily time management observations

// STEP 1 (for JSON validation)
// Uncomment this, run it, copy JSON output, validate online
// console.log(JSON.stringify(timeManagementData));


// STEP 2 (leave this uncommented for submission)
showData(timeManagementData);
