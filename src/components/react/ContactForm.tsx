import { useState, type FormEvent } from 'react';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(2, 'Imię musi mieć minimum 2 znaki'),
  email: z.string().email('Podaj prawidłowy adres email'),
  phone: z.string().regex(/^(\+48)?[\s-]?\d{3}[\s-]?\d{3}[\s-]?\d{3}$/, 'Podaj prawidłowy numer telefonu'),
  subject: z.string().min(1, 'Wybierz temat sprawy'),
  message: z.string().min(10, 'Wiadomość musi mieć minimum 10 znaków'),
  consent: z.boolean().refine((val) => val === true, 'Musisz zaakceptować politykę prywatności'),
});

type ContactFormData = z.infer<typeof contactSchema>;

interface FormErrors {
  [key: string]: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    consent: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));

    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setErrors({});
    setSubmitError('');

    // Validate form
    const result = contactSchema.safeParse(formData);

    if (!result.success) {
      const fieldErrors: FormErrors = {};
      result.error.errors.forEach((error) => {
        if (error.path[0]) {
          fieldErrors[error.path[0] as string] = error.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      // Here you would send the form data to your backend or service like Formspree
      // For demo purposes, we'll simulate an API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Simulated API call
      // const response = await fetch('YOUR_FORM_ENDPOINT', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData),
      // });

      setIsSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        consent: false,
      });

      // Reset success message after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (error) {
      setSubmitError('Wystąpił błąd podczas wysyłania formularza. Spróbuj ponownie.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Success Message */}
      {isSuccess && (
        <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-800">
          <p className="font-semibold">Dziękujemy za wiadomość!</p>
          <p className="text-sm mt-1">Skontaktujemy się z Tobą w ciągu 24 godzin.</p>
        </div>
      )}

      {/* Error Message */}
      {submitError && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-800">
          {submitError}
        </div>
      )}

      {/* Name Field */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
          Imię i nazwisko <span className="text-burgundy">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-burgundy ${
            errors.name ? 'border-red-500' : 'border-gray-300'
          }`}
          placeholder="Jan Kowalski"
        />
        {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
      </div>

      {/* Email Field */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
          Email <span className="text-burgundy">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-burgundy ${
            errors.email ? 'border-red-500' : 'border-gray-300'
          }`}
          placeholder="jan.kowalski@example.com"
        />
        {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
      </div>

      {/* Phone Field */}
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
          Telefon <span className="text-burgundy">*</span>
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-burgundy ${
            errors.phone ? 'border-red-500' : 'border-gray-300'
          }`}
          placeholder="+48 123 456 789"
        />
        {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
      </div>

      {/* Subject Field */}
      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
          Temat sprawy <span className="text-burgundy">*</span>
        </label>
        <select
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-burgundy ${
            errors.subject ? 'border-red-500' : 'border-gray-300'
          }`}
        >
          <option value="">Wybierz temat</option>
          <option value="Prawo Karne">Prawo Karne</option>
          <option value="Prawo Cywilne">Prawo Cywilne</option>
          <option value="Prawo Rodzinne">Prawo Rodzinne</option>
          <option value="Prawo Gospodarcze">Prawo Gospodarcze</option>
          <option value="Inne">Inne</option>
        </select>
        {errors.subject && <p className="mt-1 text-sm text-red-600">{errors.subject}</p>}
      </div>

      {/* Message Field */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
          Wiadomość <span className="text-burgundy">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-burgundy resize-none ${
            errors.message ? 'border-red-500' : 'border-gray-300'
          }`}
          placeholder="Opisz krótko swoją sprawę..."
        />
        {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
      </div>

      {/* Consent Checkbox */}
      <div>
        <label className="flex items-start space-x-3">
          <input
            type="checkbox"
            name="consent"
            checked={formData.consent}
            onChange={handleChange}
            className="mt-1 w-4 h-4 text-burgundy border-gray-300 rounded focus:ring-burgundy"
          />
          <span className="text-sm text-gray-700">
            Akceptuję{' '}
            <a href="/polityka-prywatnosci" className="text-burgundy hover:underline">
              politykę prywatności
            </a>{' '}
            i wyrażam zgodę na przetwarzanie moich danych osobowych <span className="text-burgundy">*</span>
          </span>
        </label>
        {errors.consent && <p className="mt-1 text-sm text-red-600">{errors.consent}</p>}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full px-6 py-3 bg-burgundy text-white font-semibold rounded-lg hover:bg-burgundy-dark transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Wysyłanie...' : 'Wyślij wiadomość'}
      </button>
    </form>
  );
}
