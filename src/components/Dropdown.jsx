import { useState, useRef, useEffect, useMemo } from 'react';
import { allCourses, miscellaneous, otherSubjects } from '../data/courseData';
import styles from './Dropdown.module.css';

const Dropdown = ({time}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const dropdownRef = useRef(null);
    const [selected, setSelected] = useState({ 
        label: '', 
        subject: '', 
        version: '' 
    });

    // 1. Memoize the full list so it doesn't recalculate on every keystroke
    const fullList = useMemo(() => {
        const lessonVersions = ['Group Lesson', 'Individual Lesson', 'Independent'];
        
        const courseOptions = allCourses.flatMap(course => 
            lessonVersions.map(version => ({
                label: `${course} ${version}`,
                subject: course.toLowerCase().replace(/[&]/g, '').replace(/\s+/g, '-').trim(),
                version: version.toLowerCase()
            }))
        );

        const otherSubjectOptions = otherSubjects.map(item=> ({
            label: item,
            subject: item.toLowerCase().replace(/\s+/g, '-').trim(),
            version: 'group lesson'
        }))

        const miscOptions = miscellaneous.map(item => ({
            label: item,
            subject: item.toLowerCase().replace(/\s+/g, '-').trim(),
            version: 'standard'
        }));

        return [...courseOptions, ...otherSubjectOptions, ...miscOptions];
    }, []);

    // 2. Filter the list based on search input
    const filteredList = fullList.filter(item => 
        item.label.toLowerCase().includes(searchTerm.toLowerCase())
    );

    console.log(filteredList)
    // 3. Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
                setSearchTerm(''); // Clear search on close
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        
        <div className={styles.container} ref={dropdownRef} key={dropdownRef}>
           {time === "9:00" ? <div className={styles.rollCall}>Roll Call</div> :(
            <div 
                className={styles.trigger}
                onClick={() => setIsOpen(!isOpen)}
                data-subject={selected.subject}
                data-version={selected.version}
                data-placeholder={selected.subject === ''}
            >
                <span>{selected.label}</span>
                {/* <span 
    className={styles.arrow} 
    style={{ 
        transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
        transition: 'transform 0.2s ease' 
    }}
>
    {/* ▼ */}
{/* </span> */}
            </div> )}

            {isOpen && (
                <div className={styles.optionsWrapper}>
                    <input 
                        type="text"
                        className={styles.searchInput}
                        placeholder="Search courses..."
                        autoFocus
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <ul className={styles.optionsList}>
                        {filteredList.length > 0 ? (
                            filteredList.map((item) => (
                                <li 
                                    key={item.label}
                                    className={styles.option}
                                    data-subject={item.subject}
                                    data-version={item.version}
                                    onClick={() => {
                                        setSelected(item);
                                        setIsOpen(false);
                                        setSearchTerm('');
                                    }}
                                >
                                    {item.label}
                                </li>
                            ))
                        ) : (
                            <li className={styles.noResults}>No courses found</li>
                        )}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Dropdown;