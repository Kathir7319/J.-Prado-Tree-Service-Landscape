import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Upload, X, CheckCircle, Phone, AlertCircle, Camera, Clock } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function EstimateForm({ compact = false }) {
  const { lang, t } = useLanguage();
  const f = t.estimateSection.fields;
  const [searchParams] = useSearchParams();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: 'Fuquay-Varina, NC',
    service: 'Tree Trimming & Pruning',
    details: '',
  });

  const [photos, setPhotos] = useState([]);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // Pre-fill service from URL param if available
  useEffect(() => {
    const serviceParam = searchParams.get('service');
    if (serviceParam) {
      setFormData(prev => ({ ...prev, service: serviceParam }));
    }
  }, [searchParams]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handlePhotoUpload = (e) => {
    const files = Array.from(e.target.files);
    if (photos.length + files.length > 5) {
      setErrorMsg(lang === 'en' ? 'Maximum 5 photos allowed.' : 'Máximo 5 fotos permitidas.');
      return;
    }

    const newPhotos = files.map(file => ({
      file,
      name: file.name,
      url: URL.createObjectURL(file),
      size: (file.size / (1024 * 1024)).toFixed(1) + ' MB'
    }));

    setPhotos(prev => [...prev, ...newPhotos]);
    setErrorMsg('');
  };

  const removePhoto = (index) => {
    setPhotos(prev => {
      const updated = [...prev];
      URL.revokeObjectURL(updated[index].url);
      updated.splice(index, 1);
      return updated;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      setErrorMsg(lang === 'en' ? 'Please fill in required fields (Name & Phone).' : 'Por favor complete su Nombre y Teléfono.');
      return;
    }

    setSubmitting(true);
    setErrorMsg('');

    // Simulate submission
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 1200);
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-2xl border border-forest-100 text-center max-w-xl mx-auto animate-in zoom-in-95 duration-300">
        <div className="w-20 h-20 bg-forest-100 text-forest-700 rounded-full flex items-center justify-center mx-auto mb-6 ring-8 ring-forest-50">
          <CheckCircle className="w-10 h-10" />
        </div>

        <h3 className="text-2xl sm:text-3xl font-extrabold text-forest-950 mb-3">
          {f.successTitle}
        </h3>

        <p className="text-stone-600 text-base leading-relaxed mb-6">
          {f.successMessage}
        </p>

        {photos.length > 0 && (
          <div className="mb-6 p-4 rounded-xl bg-stone-50 border border-stone-200 text-xs text-stone-600">
            ✓ {photos.length} {lang === 'en' ? 'photo(s) attached for fast estimation.' : 'foto(s) adjuntadas para cotización rápida.'}
          </div>
        )}

        <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 mb-6 text-left flex items-start gap-3">
          <Phone className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
          <div className="text-xs">
            <span className="font-bold text-amber-900 block">
              {lang === 'en' ? 'Need immediate emergency attention?' : '¿Necesita atención de emergencia inmediata?'}
            </span>
            <a href="tel:+19196719647" className="font-extrabold text-forest-800 text-sm hover:underline">
              {lang === 'en' ? 'Direct Line: (919) 671-9647' : 'Línea Directa: (919) 671-9647'}
            </a>
          </div>
        </div>

        <button
          onClick={() => {
            setSubmitted(false);
            setPhotos([]);
            setFormData({
              name: '',
              phone: '',
              city: 'Fuquay-Varina, NC',
              service: 'Tree Trimming & Pruning',
              details: '',
            });
          }}
          className="px-6 py-2.5 rounded-xl bg-forest-800 text-white font-bold text-sm hover:bg-forest-900 transition-colors"
        >
          {lang === 'en' ? 'Submit Another Request' : 'Enviar Otra Solicitud'}
        </button>
      </div>
    );
  }

  return (
    <div className={`bg-white rounded-3xl shadow-2xl border border-stone-200/80 overflow-hidden ${compact ? 'p-6 sm:p-8' : 'p-6 sm:p-10'}`}>
      {/* Form Header */}
      <div className="mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200/60 text-amber-800 text-xs font-bold mb-3">
          <Clock className="w-3.5 h-3.5 text-amber-600" />
          <span>{lang === 'en' ? 'Fast 24-Hour Response' : 'Respuesta Rápida en 24 Horas'}</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          {t.estimateSection.heading}
        </h2>
        <p className="text-sm sm:text-base text-stone-600 mt-2 leading-relaxed">
          {t.estimateSection.subheading}
        </p>
      </div>

      {errorMsg && (
        <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm flex items-center gap-2">
          <AlertCircle className="w-5 h-5 shrink-0" />
          <span>{errorMsg}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* Full Name */}
          <div>
            <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
              {f.name}
            </label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleInputChange}
              placeholder={f.namePlaceholder}
              className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:outline-hidden focus:ring-2 focus:ring-forest-600 focus:border-forest-600 text-stone-900 text-sm transition-all"
            />
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
              {f.phone}
            </label>
            <input
              type="tel"
              name="phone"
              required
              value={formData.phone}
              onChange={handleInputChange}
              placeholder={f.phonePlaceholder}
              className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:outline-hidden focus:ring-2 focus:ring-forest-600 focus:border-forest-600 text-stone-900 text-sm transition-all"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* City / Area */}
          <div>
            <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
              {f.city}
            </label>
            <select
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:outline-hidden focus:ring-2 focus:ring-forest-600 focus:border-forest-600 text-stone-900 text-sm transition-all bg-white"
            >
              {f.cities.map((city, idx) => (
                <option key={idx} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>

          {/* Service Needed */}
          <div>
            <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
              {f.service}
            </label>
            <select
              name="service"
              value={formData.service}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:outline-hidden focus:ring-2 focus:ring-forest-600 focus:border-forest-600 text-stone-900 text-sm transition-all bg-white"
            >
              {f.services.map((svc, idx) => (
                <option key={idx} value={svc}>
                  {svc}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Photo Upload Dropzone */}
        <div>
          <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
            {f.photoLabel}
          </label>
          <div className="border-2 border-dashed border-stone-300 hover:border-forest-500 rounded-2xl p-5 text-center bg-stone-50/60 hover:bg-forest-50/20 transition-all cursor-pointer relative group">
            <input
              type="file"
              accept="image/*"
              multiple
              onChange={handlePhotoUpload}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            />
            <div className="flex flex-col items-center pointer-events-none">
              <div className="w-12 h-12 rounded-full bg-forest-100 text-forest-700 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                <Camera className="w-6 h-6" />
              </div>
              <p className="text-sm font-bold text-stone-800">
                {f.photoPrompt}
              </p>
              <p className="text-xs text-stone-500 mt-1 max-w-sm">
                {f.photoSub}
              </p>
            </div>
          </div>

          {/* Uploaded Photos Preview List */}
          {photos.length > 0 && (
            <div className="mt-3 grid grid-cols-2 sm:grid-cols-5 gap-3">
              {photos.map((photo, index) => (
                <div key={index} className="relative group rounded-xl overflow-hidden border border-stone-200 aspect-square bg-stone-100 shadow-xs">
                  <img src={photo.url} alt="Preview" className="w-full h-full object-cover" />
                  <button
                    type="button"
                    onClick={() => removePhoto(index)}
                    className="absolute top-1 right-1 bg-red-600 hover:bg-red-700 text-white rounded-full p-1 shadow-md transition-colors"
                    title="Remove photo"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                  <span className="absolute bottom-1 left-1 right-1 text-[9px] bg-black/60 text-white px-1 py-0.5 rounded truncate text-center">
                    {photo.size}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Project Details Description */}
        <div>
          <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
            {f.details}
          </label>
          <textarea
            name="details"
            rows="3"
            value={formData.details}
            onChange={handleInputChange}
            placeholder={f.detailsPlaceholder}
            className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:outline-hidden focus:ring-2 focus:ring-forest-600 focus:border-forest-600 text-stone-900 text-sm transition-all"
          ></textarea>
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            disabled={submitting}
            className="w-full py-4 px-6 rounded-2xl bg-forest-800 hover:bg-forest-900 active:bg-forest-950 text-white font-extrabold text-base tracking-wide shadow-xl shadow-forest-900/15 hover:shadow-2xl transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
          >
            {submitting ? (
              <span>{f.submitting}</span>
            ) : (
              <>
                <span>{f.submitBtn}</span>
                <span className="text-emerald-400 text-lg">→</span>
              </>
            )}
          </button>
        </div>

        {/* Immediate Call Notice */}
        <div className="pt-2 text-center text-xs text-stone-500">
          <span>{f.callDirectNotice} </span>
          <a href="tel:+19196719647" className="font-extrabold text-forest-800 hover:underline">
            (919) 671-9647
          </a>
        </div>
      </form>
    </div>
  );
}
