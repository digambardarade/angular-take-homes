export interface Student {
  name: string;
  age: number;
  gender: 'Male' | 'Female';
  course: string;
  isActive: boolean;
}

export const students: Student[] = [
  {
    name: 'John Smith',
    age: 22,
    gender: 'Male',
    course: 'Computer Science',
    isActive: true
  },
  {
    name: 'Emily Johnson',
    age: 21,
    gender: 'Female',
    course: 'Information Technology',
    isActive: true
  },
  {
    name: 'Michael Brown',
    age: 23,
    gender: 'Male',
    course: 'Software Engineering',
    isActive: false
  },
  {
    name: 'Sarah Davis',
    age: 20,
    gender: 'Female',
    course: 'Web Development',
    isActive: true
  },
  {
    name: 'David Wilson',
    age: 24,
    gender: 'Male',
    course: 'Data Science',
    isActive: true
  },
  {
    name: 'Jessica Miller',
    age: 22,
    gender: 'Female',
    course: 'Cybersecurity',
    isActive: false
  },
  {
    name: 'Robert Garcia',
    age: 25,
    gender: 'Male',
    course: 'Mobile App Development',
    isActive: true
  },
  {
    name: 'Amanda Martinez',
    age: 21,
    gender: 'Female',
    course: 'UI/UX Design',
    isActive: true
  },
  {
    name: 'Christopher Lee',
    age: 23,
    gender: 'Male',
    course: 'Machine Learning',
    isActive: false
  },
  {
    name: 'Lauren Anderson',
    age: 22,
    gender: 'Female',
    course: 'Full Stack Development',
    isActive: true
  }
];
