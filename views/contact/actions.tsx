'use server';

export async function createAction(formData: FormData) {
  const name = formData.get('name');
  const email = formData.get('email');
  const message = formData.get('message');
  console.log('Form Submitted:', { name, email, message });


  return {name}

}
