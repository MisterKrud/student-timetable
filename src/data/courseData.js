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
    'Unavailable'
]

export const allCourses = [...coreSubjects, ...electiveSubjects]

const lessonOptions = [
    'Group Lesson',
    'Individual Lesson',
    'Independent'
]

export const createCourseLesson = (lessonOption) => allCourses.map(course => `${course} ${lessonOption}`)

export const timetableLessonDropDowns = lessonOptions.map(option => createCourseLesson(option)).flat()
export const timetableDropDowns = [...timetableLessonDropDowns,...otherSubjects, ...miscellaneous]


