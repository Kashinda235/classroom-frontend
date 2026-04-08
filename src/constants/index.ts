export const DEPARTMENTS = [
    { value: 'cs', label: 'Computer Science' },
    { value: 'math', label: 'Mathematics' },
    { value: 'phy', label: 'Physics' },
    { value: 'chem', label: 'Chemistry' },
    { value: 'bio', label: 'Biology' },
];

export const DEPARTMENT_OPTIONS = DEPARTMENTS.map(dept => ({
    value: dept.value,
    label: dept.label,
}));