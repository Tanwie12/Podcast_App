import * as  yup from 'yup'

export const courseSchema = yup.object().shape({
    name: yup.string().required(),
    tutor: yup.string().required(),
    date: yup.date().required(),
    
})
