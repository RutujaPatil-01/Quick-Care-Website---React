
import doc1 from '../src/assets/doc1.png'
import doc2 from '../src/assets/doc2.png'
import doc3 from '../src/assets/doc3.png'
import doc4 from '../src/assets/doc4.png'
import doc5 from '../src/assets/doc5.png'
import doc6 from '../src/assets/doc6.png'
import doc7 from '../src/assets/doc7.png'
import doc8 from '../src/assets/doc8.png'
import doc9 from '../src/assets/doc9.png'
import doc10 from '../src/assets/doc10.png'
import doc11 from '../src/assets/doc11.png'
import doc12 from '../src/assets/doc12.png'
import doc13 from '../src/assets/doc13.png'
import doc14 from '../src/assets/doc14.png'
import doc15 from '../src/assets/doc15.png'
import Dermatologist from '../src/assets/Dermatologist.svg'
import Gastroenterologist from '../src/assets/Gastroenterologist.svg'
import General_physician from '../src/assets/General_physician.svg'
import Gynecologist from '../src/assets/Gynecologist.svg'
import Neurologist from '../src/assets/Neurologist.svg'
import Pediatricians from '../src/assets/Pediatricians.svg'


export const specialityData = [
    {
        speciality: 'General physician',
        image: General_physician
    },
    {
        speciality: 'Gynecologist',
        image: Gynecologist
    },
    {
        speciality: 'Dermatologist',
        image: Dermatologist
    },
    {
        speciality: 'Pediatricians',
        image: Pediatricians
    },
    {
        speciality: 'Neurologist',
        image: Neurologist
    },
    {
        speciality: 'Gastroenterologist',
        image: Gastroenterologist
    },
]

export const doctors = [
    {
        _id: 'doc1',
        name: 'Dr. Swapnil Deshmukh',
        image: doc1,
        speciality: 'General physician',
        degree: 'MBBS',
        experience: '6 Years',
        about: 'Dr. Swapnil Deshmukh is known for his patient-centric approach and expertise in diagnosing common illnesses. He believes in holistic care and preventive health.',
        fees: 400,
        address: {
            line1: 'Laxmipuri, near Dasara Chowk',
            line2: 'Kolhapur, Maharashtra'
        }
    },
    {
        _id: 'doc2',
        name: 'Dr. Aarti Shinde',
        image: doc2,
        speciality: 'Gynecologist',
        degree: 'MBBS',
        experience: '5 Years',
        about: 'Dr. Aarti Shinde specializes in women’s health and has helped many women navigate safe pregnancies and reproductive issues with care.',
        fees: 600,
        address: {
            line1: 'Laxmipuri, near Dasara Chowk',
            line2: 'Kolhapur, Maharashtra'
        }
    },
    {
        _id: 'doc3',
        name: 'Dr. Meenal Jadhav',
        image: doc3,
        speciality: 'Dermatologist',
        degree: 'MBBS',
        experience: '3 Years',
        about: 'Dr. Meenal Jadhav provides excellent treatment for skin, hair, and nail disorders with a modern and compassionate approach.',
        fees: 350,
        address: {
            line1: 'Laxmipuri, near Dasara Chowk',
            line2: 'Kolhapur, Maharashtra'
        }
    },
    {
        _id: 'doc4',
        name: 'Dr. Snehal Pawar',
        image: doc4,
        speciality: 'Pediatricians',
        degree: 'MBBS',
        experience: '2 Years',
        about: 'Dr. Snehal Pawar is a friendly pediatrician who ensures children get timely and appropriate treatment with empathy and care.',
        fees: 500,
        address: {
            line1: 'Laxmipuri, near Dasara Chowk',
            line2: 'Kolhapur, Maharashtra'
        }
    },
    {
        _id: 'doc5',
        name: 'Dr. Kunal Bhosale',
        image: doc5,
        speciality: 'Gastroenterologist',
        degree: 'MBBS, MD (Gastroenterology)',
        experience: '6 Years',
        about: 'Dr. Kunal Bhosale is a skilled Gastroenterologist with a strong background in diagnosing and treating digestive disorders. He specializes in managing conditions such as acidity, ulcers, IBS, and liver-related diseases. His approach combines modern diagnostic tools with patient-centered care to ensure effective and lasting relief.',
        fees: 700,
        address: {
            line1: 'Laxmipuri, near Dasara Chowk',
            line2: 'Kolhapur, Maharashtra'
        }
    },
    {
        _id: 'doc6',
        name: 'Dr. Nikhil More',
        image: doc6,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '8 Years',
        about: 'Dr. Nikhil More offers expert care in treating complex neurological conditions with a calm and thorough diagnosis process.',
        fees: 850,
        address: {
            line1: 'Laxmipuri, near Dasara Chowk',
            line2: 'Kolhapur, Maharashtra'
        }
    },
    {
        _id: 'doc7',
        name: 'Dr. Abhijeet Raut',
        image: doc7,
        speciality: 'General physician',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Abhijeet Raut is dedicated to providing accurate and efficient medical care with a strong emphasis on wellness and lifestyle changes.',
        fees: 400,
        address: {
            line1: 'Laxmipuri, near Dasara Chowk',
            line2: 'Kolhapur, Maharashtra'
        }
    },
    {
        _id: 'doc8',
        name: 'Dr. Amey Chavan',
        image: doc8,
        speciality: 'Gynecologist',
        degree: 'MBBS',
        experience: '5 Years',
        about: 'Dr. Amey Chavan provides empathetic care in obstetrics and gynecology with experience in fertility and women’s hormonal health.',
        fees: 650,
        address: {
            line1: 'Laxmipuri, near Dasara Chowk',
            line2: 'Kolhapur, Maharashtra'
        }
    },
    {
        _id: 'doc9',
        name: 'Dr. Vaishnavi Thakur',
        image: doc9,
        speciality: 'Dermatologist',
        degree: 'MBBS',
        experience: '1 Years',
        about: 'Dr. Vaishnavi Thakur has a modern approach to dermatology and excels in cosmetic skin treatments and acne care.',
        fees: 300,
        address: {
            line1: 'Laxmipuri, near Dasara Chowk',
            line2: 'Kolhapur, Maharashtra'
        }
    },
    {
        _id: 'doc10',
        name: 'Dr. Rohan Patil',
        image: doc10,
        speciality: 'Pediatricians',
        degree: 'MBBS',
        experience: '2 Years',
        about: 'Dr. Rohan Patil is a gentle and knowledgeable pediatrician, trusted by many parents for handling child health with care.',
        fees: 450,
        address: {
            line1: 'Laxmipuri, near Dasara Chowk',
            line2: 'Kolhapur, Maharashtra'
        }
    },
    {
        _id: 'doc11',
        name: 'Dr. Tejas Ghorpade',
        image: doc11,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '2 Years',
        about: 'Dr. Tejas Ghorpade brings expertise in neurotherapy and treats patients with conditions like Parkinson’s, stroke, and epilepsy.',
        fees: 950,
        address: {
            line1: 'Laxmipuri, near Dasara Chowk',
            line2: 'Kolhapur, Maharashtra'
        }
    },
    {
        _id: 'doc12',
        name: 'Dr. Sayali Pawaskar',
        image: doc12,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '1 Years',
        about: 'Dr. Sayali Pawaskar combines medical knowledge with compassion to help patients manage chronic and acute neurological conditions.',
        fees: 900,
        address: {
            line1: 'Laxmipuri, near Dasara Chowk',
            line2: 'Kolhapur, Maharashtra'
        }
    },
    {
        _id: 'doc13',
        name: 'Dr. Manasi Kharat',
        image: doc13,
        speciality: 'General physician',
        degree: 'MBBS',
        experience: '3 Years',
        about: 'Dr. Manasi Kharat focuses on holistic diagnosis and believes in early detection and long-term health planning.',
        fees: 420,
        address: {
            line1: 'Laxmipuri, near Dasara Chowk',
            line2: 'Kolhapur, Maharashtra'
        }
    },
    {
        _id: 'doc14',
        name: 'Dr. Abhijeet Raut',
        image: doc14,
        speciality: 'Gynecologist',
        degree: 'MBBS',
        experience: '3 Years',
        about: 'Dr. Abhijeet Raut is committed to supporting women’s health through every stage of life with trust and expertise.',
        fees: 600,
        address: {
            line1: 'Laxmipuri, near Dasara Chowk',
            line2: 'Kolhapur, Maharashtra'
        }
    },
    {
        _id: 'doc15',
        name: 'Dr. Yashraj Gawade',
        image: doc15,
        speciality: 'Dermatologist',
        degree: 'MBBS',
        experience: '5 Years',
        about: 'Dr. Yashraj Gawade offers effective treatments for skin issues with modern techniques and a personalized care plan.',
        fees: 320,
        address: {
            line1: 'Laxmipuri, near Dasara Chowk',
            line2: 'Kolhapur, Maharashtra'
        }
    },
]
