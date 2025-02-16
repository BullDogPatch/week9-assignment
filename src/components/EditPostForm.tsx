// 'use client';

// import { useState } from 'react';
// import { updatePost } from '@/utils/actions';

// const EditPostForm = ({ post }: ) => {
//   const [formValues, setFormValues] = useState({
//     title: post.title,
//     description: post.description,
//     image: post.image,
//   });

//   function handleChange(event: any) {
//     setFormValues({
//       ...formValues,
//       [event.target.name]: event.target.value,
//     });
//   }

//   return (
//     <form action={updatePost}>
//       <input type="hidden" name="id" value={post.id} />
//       <input type="text" name="title" value={formValues.title} onChange={handleChange} />
//       <input type="text" name="image" value={formValues.image} onChange={handleChange} />
//       <textarea name="content" value={formValues.description} onChange={handleChange}></textarea>
//       <button type="submit">Save Changes</button>
//     </form>
//   );
// };

// export default EditPostForm;
