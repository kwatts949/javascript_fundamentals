const cohort = {
  name: 'Oct2022',
  id: 1234,
  students: ['Kay', 'Mike', 'Henry', 'George']
};

const cohortFunction = (cohort) => {
  return `${cohort.id} - ${cohort.name} - ${cohort.students.length} students in this cohort`;
}

// cohortFunction(cohort)

// '1234 - Oct2022 - 4 students in this cohort'