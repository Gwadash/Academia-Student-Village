import React, { useState } from 'react';
import { X, Loader2, CheckCircle, User, BookOpen, Home, Phone, CreditCard, FileText } from 'lucide-react';

interface ApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface ApplicationFormState {
  firstName: string;
  lastName: string;
  idNumber: string;
  gender: string;
  email: string;
  phone: string;
  institution: string;
  studentNumber: string;
  yearOfStudy: string;
  roomType: string;
  guardianName: string;
  guardianPhone: string;
  agreedToTerms: boolean;
}

const ApplicationModal: React.FC<ApplicationModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1); // 1: Form, 2: Success
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<ApplicationFormState>({
    firstName: '',
    lastName: '',
    idNumber: '',
    gender: 'select',
    email: '',
    phone: '',
    institution: 'select',
    studentNumber: '',
    yearOfStudy: '',
    roomType: 'select',
    guardianName: '',
    guardianPhone: '',
    agreedToTerms: false
  });

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    const finalValue = e.target.type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;
    
    setFormData(prev => ({ ...prev, [name]: finalValue }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.agreedToTerms) {
        alert("Please agree to the Terms & Conditions to proceed.");
        return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log("Application Submitted:", formData);
    setIsSubmitting(false);
    setStep(2);
  };

  const resetForm = () => {
    setFormData({
      firstName: '',
      lastName: '',
      idNumber: '',
      gender: 'select',
      email: '',
      phone: '',
      institution: 'select',
      studentNumber: '',
      yearOfStudy: '',
      roomType: 'select',
      guardianName: '',
      guardianPhone: '',
      agreedToTerms: false
    });
    setStep(1);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-gray-900/75 backdrop-blur-sm transition-opacity" onClick={onClose}></div>

      <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
        <div className="relative transform overflow-hidden rounded-2xl bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-2xl">
          
          {/* Header */}
          <div className="bg-brand-orange px-6 py-4 flex justify-between items-center">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <User className="w-5 h-5" />
              Student Application
            </h3>
            <button onClick={onClose} className="text-white/80 hover:text-white transition-colors">
              <X className="w-6 h-6" />
            </button>
          </div>

          {step === 1 ? (
            <form onSubmit={handleSubmit} className="p-6 max-h-[80vh] overflow-y-auto">
              <div className="space-y-8">
                
                {/* Section 1: Personal Info */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2 pb-2 border-b">
                    <User className="w-4 h-4 text-brand-orange" /> Personal Details
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">First Name</label>
                      <input
                        type="text"
                        name="firstName"
                        required
                        value={formData.firstName}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-brand-orange focus:outline-none focus:ring-1 focus:ring-brand-orange sm:text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Last Name</label>
                      <input
                        type="text"
                        name="lastName"
                        required
                        value={formData.lastName}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-brand-orange focus:outline-none focus:ring-1 focus:ring-brand-orange sm:text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">ID / Passport Number</label>
                      <input
                        type="text"
                        name="idNumber"
                        required
                        value={formData.idNumber}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-brand-orange focus:outline-none focus:ring-1 focus:ring-brand-orange sm:text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Gender</label>
                      <select
                        name="gender"
                        required
                        value={formData.gender}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-brand-orange focus:outline-none focus:ring-1 focus:ring-brand-orange sm:text-sm"
                      >
                        <option value="select" disabled>Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="072 123 4567"
                        className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-brand-orange focus:outline-none focus:ring-1 focus:ring-brand-orange sm:text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-brand-orange focus:outline-none focus:ring-1 focus:ring-brand-orange sm:text-sm"
                      />
                    </div>
                  </div>
                </div>

                {/* Section 2: Academic Info */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2 pb-2 border-b">
                    <BookOpen className="w-4 h-4 text-brand-orange" /> Academic Information
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Institution</label>
                      <select
                        name="institution"
                        required
                        value={formData.institution}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-brand-orange focus:outline-none focus:ring-1 focus:ring-brand-orange sm:text-sm"
                      >
                        <option value="select" disabled>Select Institution</option>
                        <option value="VUT">Vaal University of Technology (VUT)</option>
                        <option value="NWU">North-West University (NWU)</option>
                        <option value="Eduvos">Eduvos</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Student Number</label>
                      <input
                        type="text"
                        name="studentNumber"
                        required
                        value={formData.studentNumber}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-brand-orange focus:outline-none focus:ring-1 focus:ring-brand-orange sm:text-sm"
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label className="block text-sm font-medium text-gray-700">Year of Study</label>
                      <input
                        type="text"
                        name="yearOfStudy"
                        placeholder="e.g., 1st Year, Post-grad"
                        required
                        value={formData.yearOfStudy}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-brand-orange focus:outline-none focus:ring-1 focus:ring-brand-orange sm:text-sm"
                      />
                    </div>
                  </div>
                </div>

                {/* Section 3: Accommodation */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2 pb-2 border-b">
                    <Home className="w-4 h-4 text-brand-orange" /> Accommodation Preferences
                  </h4>
                  <div className="grid grid-cols-1 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Room Type Preference</label>
                      <select
                        name="roomType"
                        required
                        value={formData.roomType}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-brand-orange focus:outline-none focus:ring-1 focus:ring-brand-orange sm:text-sm"
                      >
                        <option value="select" disabled>Select Room Type</option>
                        <option value="Single">Single Room</option>
                        <option value="Sharing">Sharing Room (2 Students)</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Section 4: Guardian / Next of Kin */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2 pb-2 border-b">
                    <Phone className="w-4 h-4 text-brand-orange" /> Guardian / Next of Kin
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Guardian Name</label>
                      <input
                        type="text"
                        name="guardianName"
                        required
                        value={formData.guardianName}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-brand-orange focus:outline-none focus:ring-1 focus:ring-brand-orange sm:text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Guardian Phone</label>
                      <input
                        type="tel"
                        name="guardianPhone"
                        required
                        value={formData.guardianPhone}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-brand-orange focus:outline-none focus:ring-1 focus:ring-brand-orange sm:text-sm"
                      />
                    </div>
                  </div>
                </div>

                {/* Section 5: Payment & Terms */}
                <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
                   <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <CreditCard className="w-4 h-4 text-brand-orange" /> Payment & Terms
                  </h4>
                  
                  <div className="mb-4 text-sm text-gray-600 space-y-2">
                    <p><strong>Payment Info:</strong> ASV accepts <strong>NSFAS</strong> payments.</p>
                    <p><strong>Deposit / Booking Fee:</strong> A deposit may be required to secure your room. The specific amount and deadline will be communicated once your application is reviewed.</p>
                  </div>

                  <div className="flex items-start gap-3 mt-4">
                    <div className="flex h-5 items-center">
                      <input
                        id="agreedToTerms"
                        name="agreedToTerms"
                        type="checkbox"
                        required
                        checked={formData.agreedToTerms}
                        onChange={handleChange}
                        className="h-4 w-4 rounded border-gray-300 text-brand-orange focus:ring-brand-orange"
                      />
                    </div>
                    <div className="text-sm">
                      <label htmlFor="agreedToTerms" className="font-medium text-gray-700">
                        I agree to the <a href="#" className="text-brand-orange hover:underline">Terms & Conditions</a> and Residence Rules.
                      </label>
                      <p className="text-gray-500">I confirm that all information provided is accurate.</p>
                    </div>
                  </div>
                </div>

              </div>

              <div className="mt-8 pt-6 border-t flex justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-5 py-2.5 rounded-lg text-gray-700 font-medium hover:bg-gray-100 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-2.5 rounded-lg bg-brand-orange text-white font-bold hover:bg-orange-700 transition-colors flex items-center gap-2 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    'Submit Application'
                  )}
                </button>
              </div>
            </form>
          ) : (
            <div className="p-10 text-center">
              <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-6">
                <CheckCircle className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Thank You for Your Application!</h3>
              <div className="bg-gray-50 rounded-lg p-4 mb-8 text-left max-w-md mx-auto">
                <h4 className="font-semibold text-gray-900 mb-2">Next Steps:</h4>
                <ul className="list-disc list-inside text-sm text-gray-600 space-y-2">
                    <li>Our team will review your application details. This typically takes <strong>2-3 business days</strong>.</li>
                    <li>You will receive an email or SMS at <strong>{formData.email}</strong> regarding the status of your application.</li>
                    <li>If approved, you will receive further instructions on how to sign your lease and finalize your booking.</li>
                </ul>
              </div>
              <p className="text-gray-500 mb-6 text-sm">
                Have questions in the meantime? Call us at <span className="font-medium">{Phone} 072 323 0062</span>
              </p>
              <button
                onClick={resetForm}
                className="w-full sm:w-auto px-8 py-3 bg-brand-orange text-white font-bold rounded-lg hover:bg-orange-700 transition-colors"
              >
                Close
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ApplicationModal;