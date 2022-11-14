const cohort = {
  name: 'Oct2022',
  id: 1234,
  students: ['Kay', 'Mike', 'Henry', 'George']
};

const cohortFunction = (cohort) => {
  return `${cohort.id} - ${cohort.name} - ${cohort.length} students in this cohort`;
}