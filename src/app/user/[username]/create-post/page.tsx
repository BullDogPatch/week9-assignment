const CreatePostPage = () => {
  return (
    <form className='flex flex-col'>
      <input
        type='text'
        placeholder='What is on your mind?'
        name='title'
        className='input input-bordered w-full max-w-xs'
        required
      />
      <textarea
        className='textarea textarea-bordered resize-none'
        placeholder='Write anything here.'
        name='description'
        required
      ></textarea>
    </form>
  );
};

export default CreatePostPage;
