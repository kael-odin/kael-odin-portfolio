import { useState } from 'react';
import { MagneticButton } from '../components/Aboutme';
import emailjs from '@emailjs/browser';

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    taskArea: '',
    message: ''
  });

  const [status, setStatus] = useState({
    loading: false,
    error: null,
    success: false
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, error: null, success: false });

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        organization: formData.organization,
        task_area: formData.taskArea,
        message: formData.message,
        to_name: 'Aditya',
      };

      await emailjs.send(
        'service_0t7jmxd', 
        'template_yugunp7', 
        templateParams,
        '4051WXShaQRMgEf84' 
      );

      setStatus({ loading: false, error: null, success: true });
      setFormData({
        name: '',
        email: '',
        organization: '', 
        taskArea: '',
        message: ''
      });

      setTimeout(() => {
        setStatus(prev => ({ ...prev, success: false }));
      }, 5000);

    } catch (error) {
      console.error('Email sending failed:', error);
      setStatus({ 
        loading: false, 
        error: 'Failed to send message. Please try again later.', 
        success: false 
      });
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-[#111111] text-[#e4e4e4] p-8">
      <div className="max-w-6xl mx-auto relative">
        {/* Header Section */}
        <div className="flex justify-between items-start mb-16">
          <div className="max-w-2xl">
            <h1 className="text-6xl font-light text-[#e4e4e4] mb-6">{"Let's Connect!"}</h1>
            <p className="text-lg text-[#888888]">
             {" Whether you're looking to collaborate on a project, need a solution to a challenging problem, or just want to talk tech, feel free to reach out. Together, we can turn ideas into reality."}
            </p>
          </div>
          <div className="w-16 h-16 rounded-full bg-primarytext flex items-center justify-center">
            <span className="text-2xl text-black">A</span>
          </div>
        </div>

        <div className="flex justify-between gap-24">
          {/* Form Section */}
          <form onSubmit={handleSubmit} className="space-y-12 flex-1">
            {[
              {
                number: '01',
                label: "What's your name?",
                name: 'name',
                placeholder: 'Charles Babbage*',
                required: true
              },
              {
                number: '02',
                label: "What's your email?",
                name: 'email',
                placeholder: 'charles.babe@gmail.com*',
                required: true,
                type: 'email'
              },
              {
                number: '03',
                label: "What's the name of your organization?",
                name: 'organization',
                placeholder: 'the Analytical Society',
                required: false
              },
              {
                number: '04',
                label: "What specific area or task do you need help with?",
                name: 'taskArea',
                placeholder: 'To improve the performance of a Next.js application',
                required: false
              },
              {
                number: '05',
                label: "Your message",
                name: 'message',
                placeholder: 'Hello Adi, can you help me with...*',
                required: true
              }
            ].map((field) => (
              <div key={field.number} className="border-t border-bline pt-8">
                <div className="flex gap-8">
                  <span className="text-[#444444] text-sm">{field.number}</span>
                  <div className="flex-1">
                    <label htmlFor={field.name} className="block text-primarytext text-xl mb-3">
                      {field.label}
                    </label>
                    <input
                      type={field.type || 'text'}
                      name={field.name}
                      required={field.required}
                      placeholder={field.placeholder}
                      onChange={handleChange}
                      value={formData[field.name]}
                      className="w-full bg-transparent border-none text-accentv text-lg placeholder-[#333333] focus:outline-none"
                    />
                  </div>
                </div>
              </div>
            ))}

            {/* Status Messages */}
            {status.error && (
              <div className="text-red-500 mt-4 text-sm">{status.error}</div>
            )}
            {status.success && (
              <div className="text-green-500 mt-4 text-sm">Message sent successfully! I will get back to yo as soon as possible</div>
            )}

            <div className="pt-8 flex justify-end">
              <MagneticButton>
                <button
                  type="submit"
                  disabled={status.loading}
                >
                  {status.loading ? 'Sending...' : 'Send Message'}
                </button>
              </MagneticButton>
            </div>
          </form>

          {/* Contact Details - Positioned on the right */}
          <div className="w-64 space-y-12 pt-8 hidden sm:block">
            <div>
              <h3 className="text-[#444444] mb-4 tracking-wider text-sm">CONTACT DETAILS</h3>
              <a href="mailto:araj0259@gmail.com" className="text-[#e4e4e4] hover:text-[#888888] text-lg">
                araj0259@gmail.com
              </a>
            </div>
            
            <div className='hidden sm:block'>
              <h3 className="text-[#444444] mb-4 tracking-wider text-sm">SOCIALS</h3>
              <div className="flex flex-col gap-3">
                {['Twitter', 'LinkedIn'].map((social) => (
                  <a
                    key={social}
                    href={`#${social.toLowerCase()}`}
                    className="text-[#e4e4e4] hover:text-[#888888] text-lg"
                  >
                    {social}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;