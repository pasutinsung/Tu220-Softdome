import { writable } from 'svelte/store';
export let data = {
  '1111': { number: '1111', pin: "1111", 
    prefix: 'นาย' ,
    studentID: '1111',
    name: 'มังคุด',
    lastname: 'ไข่เจียว',
    faculty: 'วิศวกรรมศาสตร์',
    year: '1', },
  '5678': { number: '5678',pin: '5678',
    prefix: 'นางสาว',
    studentID: '5678',
    name: 'มะละกอ',
    lastname: 'ไข่ตุ๋น',
    faculty: 'วิศวกรรมศาสตร์',
    year: '3',},
  '001': { number: '',pin: '',
    prefix: '',
    studentID: '001',
    name: '',
    lastname: '',
    faculty: '',
    year: '',},
}
  
let admin = { '1234': { number: '1234', pin: '1234' } }
export let subjects = writable([
  {
    id: 'SF210',
    subjectName: 'Programming Skill Development 1',
    section: 760001,
    teacher: 'วีรชัย อโณทัยไพบูรณ์',
    date: 'TU 13:30-16:30',
    amount: 20,
    remaining: 18,
    ApplicationDate: '02-04-2022'
  },
  {
    id: 'SF220',
    subjectName: 'Introduction to software Engineering',
    section: 760001,
    teacher: 'วีรชัย อโณทัยไพบูรณ์',
    date: 'MO 09:30-12:30',
    amount: 30,
    remaining: 10,
    ApplicationDate: '02-04-2022'
  },
  {
    id: 'SF230',
    subjectName: 'Linear Algebra and Numerical Methods for Computer Engieering',
    section: 760002,
    teacher: 'วีรชัย อโณทัยไพบูรณ์',
    date: 'WE 13:30-16:30',
    amount: 50,
    remaining: 0,
    ApplicationDate: '02-04-2022'
  },
  {
    id: 'MA111',
    subjectName: 'Basic Calculus',
    section: 760001,
    teacher: 'สุภกุญช์ พนาสวัสดิ์วงศ์',
    date: 'MO 16:30-19:30',
    amount: 52,
    remaining: 30,
    ApplicationDate: '25-03-2022'
  },
]);
export const accounts = writable(data);
export const admins = writable(admin);
export const islogin = writable(false);
export const mode = writable('');
export const account = writable('');
export const askedSubject = writable([]);