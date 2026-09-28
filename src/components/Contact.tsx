import { useState } from 'react';
import type { FC, FormEvent, ChangeEvent } from 'react';
import { 
  Building2, 
  MapPin, 
  Phone, 
  Mail, 
  Globe, 
  Send, 
  CheckCircle, 
  Copy, 
  ExternalLink,
  MessageCircle,
  AlertCircle
} from 'lucide-react';
import { COMPANY_INFO } from '../constants/company';
import type { ContactFormData } from '../types';

export const Contact: FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    nombre: '',
    correo: '',
    telefono: '',
    mensaje: '',
  });

  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const copyToClipboard = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errorMessage) setErrorMessage(null);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // Validation
    if (!formData.nombre.trim() || !formData.correo.trim() || !formData.mensaje.trim()) {
      setErrorMessage('Por favor completa todos los campos requeridos (*).');
      return;
    }

    // Basic email check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.correo.trim())) {
      setErrorMessage('Por favor ingresa un correo electrónico válido.');
      return;
    }

    setIsSubmitting(true);

    // Simulate client processing
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);

      // Construct mailto link
      const subject = encodeURIComponent(`Contacto Web - ${formData.nombre}`);
      const body = encodeURIComponent(
        `Nombre: ${formData.nombre}\nCorreo: ${formData.correo}\nTeléfono: ${formData.telefono || 'No reportó'}\n\nMensaje:\n${formData.mensaje}`
      );
      
      // Auto-trigger mailto client
      window.location.href = `mailto:${COMPANY_INFO.email}?subject=${subject}&body=${body}`;
    }, 600);
  };

  const resetForm = () => {
    setFormData({ nombre: '', correo: '', telefono: '', mensaje: '' });
    setSubmitted(false);
    setErrorMessage(null);
  };

  return (
    <section id="contacto" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider">
            Canales Oficiales
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Contacto
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            Ponte en contacto directo con el equipo corporativo de <strong className="text-slate-900 font-semibold">{COMPANY_INFO.legalName}</strong>. Estamos a tu disposición para atender tus consultas empresariales.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Official Enterprise Information Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-9 shadow-xl border border-slate-800 space-y-7 relative overflow-hidden">
              {/* Background gradient blur */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />

              <div>
                <span className="text-xs uppercase tracking-widest text-cyan-400 font-bold">
                  Identidad Corporativa
                </span>
                <h3 className="text-2xl font-extrabold text-white mt-1">
                  {COMPANY_INFO.legalName}
                </h3>
                <div className="text-sm text-slate-400 mt-1">
                  NIT <span className="font-mono text-cyan-300 font-semibold">{COMPANY_INFO.nit}</span>
                </div>
              </div>

              {/* Data Items */}
              <div className="space-y-4 pt-2">
                {/* Address */}
                <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/60 flex items-start justify-between gap-3 group">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold">
                        Dirección
                      </div>
                      <div className="text-sm font-semibold text-white mt-0.5">
                        {COMPANY_INFO.address}
                      </div>
                      <div className="text-xs text-slate-300">
                        {COMPANY_INFO.city}
                      </div>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => copyToClipboard(COMPANY_INFO.address, 'address')}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
                    title="Copiar dirección"
                    aria-label="Copiar dirección"
                  >
                    {copiedField === 'address' ? (
                      <CheckCircle className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Phone */}
                <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/60 flex items-start justify-between gap-3 group">
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold">
                        Teléfono
                      </div>
                      <a
                        href={`tel:${COMPANY_INFO.phoneRaw}`}
                        className="text-sm font-semibold text-white hover:text-cyan-400 transition-colors block mt-0.5 font-mono"
                      >
                        {COMPANY_INFO.phone}
                      </a>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => copyToClipboard(COMPANY_INFO.phone, 'phone')}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
                    title="Copiar teléfono"
                    aria-label="Copiar teléfono"
                  >
                    {copiedField === 'phone' ? (
                      <CheckCircle className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Email */}
                <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/60 flex items-start justify-between gap-3 group">
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold">
                        Correo Corporativo
                      </div>
                      <a
                        href={`mailto:${COMPANY_INFO.email}`}
                        className="text-sm font-semibold text-white hover:text-cyan-400 transition-colors block mt-0.5 font-mono truncate max-w-[200px] sm:max-w-xs"
                      >
                        {COMPANY_INFO.email}
                      </a>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => copyToClipboard(COMPANY_INFO.email, 'email')}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
                    title="Copiar correo"
                    aria-label="Copiar correo"
                  >
                    {copiedField === 'email' ? (
                      <CheckCircle className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Website Domain */}
                <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/60 flex items-start justify-between gap-3 group">
                  <div className="flex items-start gap-3">
                    <Globe className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold">
                        Sitio Web Oficial
                      </div>
                      <a
                        href={COMPANY_INFO.domain}
                        className="text-sm font-semibold text-cyan-300 hover:underline block mt-0.5 font-mono"
                      >
                        {COMPANY_INFO.domain}
                      </a>
                    </div>
                  </div>
                  <a
                    href={COMPANY_INFO.domain}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
                    title="Abrir enlace"
                    aria-label="Abrir enlace del sitio web"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Direct WhatsApp Callout */}
              <div className="pt-2">
                <a
                  href={`https://wa.me/57${COMPANY_INFO.phoneRaw}?text=${encodeURIComponent(
                    'Hola LOGITEC, me comunico desde su sitio web oficial https://logitec.store/'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2.5 px-4 py-3 rounded-xl bg-emerald-600/90 hover:bg-emerald-600 text-white font-semibold text-sm transition-colors shadow-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Mensaje directo por WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Location map preview card */}
            <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 text-xs text-slate-600 space-y-2">
              <div className="flex items-center justify-between font-semibold text-slate-800">
                <span className="flex items-center gap-1.5">
                  <Building2 className="w-4 h-4 text-blue-600" />
                  Sede en Cali, Valle del Cauca
                </span>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                    `${COMPANY_INFO.address}, Cali, Colombia`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline flex items-center gap-1"
                >
                  Ver en mapa
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
              <p className="text-slate-500">
                Atención empresarial y formal con cobertura y domicilio fiscal en Cali, Colombia.
              </p>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-xl relative">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-slate-900">
                  Envíanos un mensaje
                </h3>
                <p className="text-sm text-slate-600 mt-1">
                  Completa el formulario y nos pondremos en contacto contigo a la mayor brevedad.
                </p>
              </div>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-blue-50 border border-blue-200 text-center space-y-4 animate-in fade-in duration-300">
                  <div className="w-14 h-14 rounded-full bg-blue-600 text-white flex items-center justify-center mx-auto shadow-md">
                    <CheckCircle className="w-7 h-7" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900">
                    ¡Mensaje preparado con éxito!
                  </h4>
                  <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Se ha abierto tu cliente de correo electrónico para remitir la comunicación directamente a <strong className="text-slate-900 font-semibold">{COMPANY_INFO.email}</strong>.
                  </p>
                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                      type="button"
                      onClick={resetForm}
                      className="px-5 py-2.5 rounded-lg text-sm font-semibold bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 transition-colors shadow-xs"
                    >
                      Enviar otro mensaje
                    </button>
                    <a
                      href={`tel:${COMPANY_INFO.phoneRaw}`}
                      className="px-5 py-2.5 rounded-lg text-sm font-semibold bg-blue-600 text-white hover:bg-blue-700 transition-colors shadow-xs"
                    >
                      Llamar ahora ({COMPANY_INFO.phone})
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {errorMessage && (
                    <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-semibold flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Nombre */}
                    <div className="space-y-1.5">
                      <label htmlFor="nombre" className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                        Nombre completo <span className="text-blue-600">*</span>
                      </label>
                      <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        required
                        value={formData.nombre}
                        onChange={handleChange}
                        placeholder="Ej. Juan Pérez"
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 outline-hidden transition-all text-sm text-slate-900 placeholder:text-slate-400 bg-slate-50/50 focus:bg-white"
                      />
                    </div>

                    {/* Correo */}
                    <div className="space-y-1.5">
                      <label htmlFor="correo" className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                        Correo electrónico <span className="text-blue-600">*</span>
                      </label>
                      <input
                        type="email"
                        id="correo"
                        name="correo"
                        required
                        value={formData.correo}
                        onChange={handleChange}
                        placeholder="correo@empresa.com"
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 outline-hidden transition-all text-sm text-slate-900 placeholder:text-slate-400 bg-slate-50/50 focus:bg-white"
                      />
                    </div>
                  </div>

                  {/* Teléfono */}
                  <div className="space-y-1.5">
                    <label htmlFor="telefono" className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                      Teléfono de contacto
                    </label>
                    <input
                      type="tel"
                      id="telefono"
                      name="telefono"
                      value={formData.telefono}
                      onChange={handleChange}
                      placeholder="Ej. +57 300 000 0000"
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 outline-hidden transition-all text-sm text-slate-900 placeholder:text-slate-400 bg-slate-50/50 focus:bg-white"
                    />
                  </div>

                  {/* Mensaje */}
                  <div className="space-y-1.5">
                    <label htmlFor="mensaje" className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                      Mensaje o requerimiento <span className="text-blue-600">*</span>
                    </label>
                    <textarea
                      id="mensaje"
                      name="mensaje"
                      rows={4}
                      required
                      value={formData.mensaje}
                      onChange={handleChange}
                      placeholder="Cuéntanos sobre tu organización o las necesidades de solución que buscas abordar..."
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 outline-hidden transition-all text-sm text-slate-900 placeholder:text-slate-400 bg-slate-50/50 focus:bg-white resize-y"
                    ></textarea>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl text-base font-bold text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 disabled:opacity-70 transition-all shadow-md hover:shadow-lg hover:shadow-blue-600/25 focus:outline-hidden focus:ring-2 focus:ring-blue-600 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                          <span>Procesando comunicación...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Enviar mensaje</span>
                        </>
                      )}
                    </button>
                  </div>

                  <p className="text-[11px] text-slate-400 text-center pt-1">
                    Tus datos serán tratados de forma estrictamente confidencial de conformidad con la normativa de Habeas Data colombiana.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
