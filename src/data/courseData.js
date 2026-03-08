export const coreSubjects = [
  'Maths',
  'English',
  'Science',
  'Geography',
  'History',
  'PDHPE',
];

 export const electiveSubjects = [
  'Agriculture',
  'Child Studies',
  'Commerce',
  'Design & Tech',
  'Elec History',
  'Food Tech',
  'French',
  'German',
  'Italian',
  'Japanese',
  'Spanish',
  'Computing Tech',
  'Music',
  'Photography',
  'Timber',
  'Textiles',
  'Visual Arts',
  'Vis Design',
];

export const otherSubjects = [
    'MacqLit',
    'SRA',
    'WARP',
    'SPARK',
    'SGT Literacy',
    'SGT Numeracy',
    'Taking Charge',
]

export const miscellaneous = [
    'Lunch',
    'Morning Tea',
    'Study Period',
    'Unavailable',
    ''
]

export const allCourses = [...coreSubjects, ...electiveSubjects]

const lessonOptions = [
    'Group Lesson',
    'Individual Lesson',
    'Independent'
]


const slug = (text) =>
  text
    .toLowerCase()
    .replace(/[&]/g, '')
    .replace(/\s+/g, '-')
    .trim();

const lessonTypes = [
  { label: 'Group Lesson', code: 'group' },
  { label: 'Individual Lesson', code: 'individual' },
  { label: 'Independent', code: 'independent' }
];

export const courseOptions = allCourses.flatMap(course =>
  lessonTypes.map(type => ({
    label: `${course} ${type.label}`,
    code: `${slug(course)}_${type.code}`
  }))
);

export const otherOptions = otherSubjects.map(item => ({
  label: item,
  code: slug(item)
}));

export const miscOptions = miscellaneous.map(item => ({
  label: item,
  code: slug(item)
}));

export const dropdownOptions = [
  ...courseOptions,
  ...otherOptions,
  ...miscOptions
];



export const createCourseLesson = (lessonOption) => allCourses.map(course => `${course} ${lessonOption}`)

export const timetableLessonDropDowns = lessonOptions.map(option => createCourseLesson(option)).flat()
export const timetableDropDowns = [...timetableLessonDropDowns,...otherSubjects, ...miscellaneous]


