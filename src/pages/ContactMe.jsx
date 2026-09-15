import { useState } from 'react';
import { MagneticButton } from '../components/Aboutme';
import { useLang } from '../i18n/LanguageContext.jsx';
import { contactPage } from '../i18n/content.js';

const ContactMe = () => {
  const { t } = useLang();
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
      // Local demo: mailto fallback. Wire emailjs keys to enable real sending.
      const subject = encodeURIComponent(t(`来自作品集的留言 · ${formData.name}`, `Portfolio message · ${formData.name}`));
      const body = encodeURIComponent(
        `${formData.message}\n\n— ${formData.name} (${formData.email})${formData.organization ? ` · ${formData.organization}` : ''}${formData.taskArea ? `\n${formData.taskArea}` : ''}`
      );
      window.location.href = `mailto:${contactPage.email}?subject=${subject}&body=${body}`;

      setStatus({ loading: false, error: null, success: true });
      setFormData({ name: '', email: '', organization: '', taskArea: '', message: '' });

      setTimeout(() => {
        setStatus(prev => ({ ...prev, success: false }));
      }, 5000);

    } catch (error) {
      console.error('Email sending failed:', error);
      setStatus({
        loading: false,
        error: t(contactPage.fail.zh, contactPage.fail.en),
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
    <div className="min-h-screen bg-background text-primarytext p-8">
      <div className="max-w-6xl mx-auto relative">
        {/* Header Section */}
        <div className="flex justify-between items-start mb-16">
          <div className="max-w-2xl">
            <h1 className="text-6xl font-light text-primarytext mb-6">{t(contactPage.title.zh, contactPage.title.en)}</h1>
            <p className="text-lg text-sectext">
             {t(contactPage.para.zh, contactPage.para.en)}
            </p>
          </div>
          <div className="w-16 h-16 rounded-full bg-primarytext flex items-center justify-center">
            <span className="text-2xl text-black">K</span>
          </div>
        </div>

        <div className="flex justify-between gap-24">
          {/* Form Section */}
          <form onSubmit={handleSubmit} className="space-y-12 flex-1">
            {contactPage.fields.map((field) => (
              <div key={field.num} className="border-t border-bline pt-8">
                <div className="flex gap-8">
                  <span className="text-sectext/60 text-sm">{field.num}</span>
                  <div className="flex-1">
                    <label htmlFor={field.key} className="block text-primarytext text-xl mb-3">
                      {t(field.label.zh, field.label.en)}
                    </label>
                    <input
                      type={field.type || 'text'}
                      name={field.key}
                      id={field.key}
                      placeholder={t(field.placeholder.zh, field.placeholder.en)}
                      onChange={handleChange}
                      value={formData[field.key]}
                      className="w-full bg-transparent border-none text-accentv text-lg placeholder-placeholder focus:outline-none"
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
              <div className="text-bgreen mt-4 text-sm">{t(contactPage.success.zh, contactPage.success.en)}</div>
            )}

            <div className="pt-8 flex justify-end">
              <MagneticButton>
                <button
                  type="submit"
                  disabled={status.loading}
                >
                  {status.loading ? t(contactPage.sending.zh, contactPage.sending.en) : t(contactPage.send.zh, contactPage.send.en)}
                </button>
              </MagneticButton>
            </div>
          </form>

          {/* Contact Details - Positioned on the right */}
          <div className="w-64 space-y-12 pt-8 hidden sm:block">
            <div>
              <h3 className="text-sectext/60 mb-4 tracking-wider text-sm">{t(contactPage.contactDetails.zh, contactPage.contactDetails.en)}</h3>
              <a href={`mailto:${contactPage.email}`} className="text-primarytext hover:text-sectext text-lg">
                {contactPage.email}
              </a>
            </div>

            <div className='hidden sm:block'>
              <h3 className="text-sectext/60 mb-4 tracking-wider text-sm">{t(contactPage.socials.zh, contactPage.socials.en)}</h3>
              <div className="flex flex-col gap-3">
                {['GitHub', 'LinkedIn', 'X'].map((socialName) => (
                  <a
                    key={socialName}
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    className="text-primarytext hover:text-sectext text-lg"
                  >
                    {socialName}
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
