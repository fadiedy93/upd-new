export const bases = {
  TASKS_INVENTORY: process.env.AIRTABLE_BASE_TASKS_INVENTORY,
  FEEDBACK: process.env.AIRTABLE_BASE_TASKS_INVENTORY,
  DCD_2021_Q1: process.env.AIRTABLE_BASE_DCD_2021_Q1,
  DCD_2021_Q2: process.env.AIRTABLE_BASE_DCD_2021_Q2,
  DCD_2021_Q3: process.env.AIRTABLE_BASE_DCD_2021_Q3,
  DCD_2021_Q4: process.env.AIRTABLE_BASE_DCD_2021_Q4,
  DCD_2022_Q1: process.env.AIRTABLE_BASE_DCD_2022_Q1,
  DCD_2022_Q2: process.env.AIRTABLE_BASE_DCD_2022_Q2,
  DCD_2022_Q3: process.env.AIRTABLE_BASE_DCD_2022_Q3,
  DCD_2022_Q4: process.env.AIRTABLE_BASE_DCD_2022_Q4,
};

// export const tables = {
//     'January 2021' :
// }

export type bases = keyof typeof bases;