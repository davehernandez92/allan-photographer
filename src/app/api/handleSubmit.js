import axios from 'axios';

export const handleSubmitLogic = async (data, toast) => {
  try {
    const response = await axios.post('/', data);
    console.log(response.data);
    toast({
      description: 'Your message has been sent.',
    });
  } catch (error) {
    console.error('Error occurred while sending email:', error);
    toast({
      description: 'Algo sucedio, vuelve a intentarlo.',
    });
  }
};
