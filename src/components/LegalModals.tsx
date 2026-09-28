import type { FC } from 'react';
import { X, ShieldCheck, FileText, ArrowRight, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO } from '../constants/company';
import type { ModalType, SolutionDetail } from '../types';

interface LegalModalsProps {
  activeModal: ModalType;
  selectedSolution: SolutionDetail | null;
  onClose: () => void;
  onContactSolution?: (solutionTitle: string) => void;
}

export const LegalModals: FC<LegalModalsProps> = ({
  activeModal,
  selectedSolution,
  onClose,
  onContactSolution,
}) => {
  if (!activeModal) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-3xl max-w-2xl w-full max-h-[88vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-100 bg-slate-50/60">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
              {activeModal === 'privacy' && <ShieldCheck className="w-5 h-5" />}
              {activeModal === 'terms' && <FileText className="w-5 h-5" />}
              {activeModal === 'solution-detail' && <CheckCircle2 className="w-5 h-5" />}
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900">
                {activeModal === 'privacy' && 'Política de Tratamiento de Datos Personales'}
                {activeModal === 'terms' && 'Términos y Condiciones de Uso'}
                {activeModal === 'solution-detail' && (selectedSolution?.title || 'Detalle de Solución')}
              </h3>
              <p className="text-xs text-slate-500">
                {COMPANY_INFO.legalName} • NIT {COMPANY_INFO.nit}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
            aria-label="Cerrar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-5 text-sm text-slate-600 leading-relaxed">
          {activeModal === 'privacy' && (
            <>
              <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-100 text-xs text-blue-900 font-medium">
                Conforme a lo dispuesto en la <strong>Ley Estatutaria 1581 de 2012</strong> y el <strong>Decreto 1377 de 2013</strong> de la República de Colombia, {COMPANY_INFO.legalName} informa a los titulares de la información personal sus derechos y políticas de tratamiento.
              </div>

              <div className="space-y-2">
                <h4 className="font-bold text-slate-900 text-base">1. Responsable del Tratamiento</h4>
                <p>
                  <strong>Razón Social:</strong> {COMPANY_INFO.legalName}<br />
                  <strong>NIT:</strong> {COMPANY_INFO.nit}<br />
                  <strong>Domicilio:</strong> {COMPANY_INFO.city}<br />
                  <strong>Dirección:</strong> {COMPANY_INFO.address}<br />
                  <strong>Correo Electrónico:</strong> {COMPANY_INFO.email}<br />
                  <strong>Teléfono:</strong> {COMPANY_INFO.phone}<br />
                  <strong>Portal Web:</strong> {COMPANY_INFO.domain}
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-bold text-slate-900 text-base">2. Finalidad del Tratamiento de Datos</h4>
                <p>
                  Los datos personales suministrados a través de los formularios o canales de contacto serán utilizados exclusivamente para atender consultas, establecer contacto comercial institucional, remitir información solicitada y dar cumplimiento a las obligaciones legales vigentes.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-bold text-slate-900 text-base">3. Derechos de los Titulares</h4>
                <p>
                  Como titular de los datos personales, le asiste el derecho de conocer, actualizar, rectificar y solicitar la supresión de su información, así como revocar la autorización otorgada, mediante comunicación escrita dirigida al correo electrónico oficial: <strong className="text-blue-600">{COMPANY_INFO.email}</strong>.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-bold text-slate-900 text-base">4. Seguridad y Confidencialidad</h4>
                <p>
                  {COMPANY_INFO.legalName} implementa medidas técnicas, humanas y administrativas necesarias para otorgar seguridad a los registros y evitar su adulteración, pérdida, consulta, uso o acceso no autorizado o fraudulento.
                </p>
              </div>
            </>
          )}

          {activeModal === 'terms' && (
            <>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700">
                Última actualización: 2026. Los presentes Términos regulan el acceso y uso del sitio web oficial <strong className="text-slate-900">{COMPANY_INFO.domain}</strong>, de propiedad de <strong className="text-slate-900">{COMPANY_INFO.legalName}</strong>.
              </div>

              <div className="space-y-2">
                <h4 className="font-bold text-slate-900 text-base">1. Identidad del Titular</h4>
                <p>
                  El sitio web es gestionado y administrado por {COMPANY_INFO.legalName}, sociedad identificada con NIT {COMPANY_INFO.nit}, con domicilio principal en {COMPANY_INFO.city}, {COMPANY_INFO.address}.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-bold text-slate-900 text-base">2. Uso Permitido del Sitio</h4>
                <p>
                  El usuario se compromete a hacer un uso adecuado y lícito de los contenidos y servicios de este portal, absteniéndose de realizar actos contrarios a la ley, a la moral o al orden público.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-bold text-slate-900 text-base">3. Propiedad Intelectual</h4>
                <p>
                  El nombre comercial LOGITEC, emblemas, elementos gráficos, diseño y código fuente son propiedad exclusiva o han sido licenciados a {COMPANY_INFO.legalName}, encontrándose protegidos por las leyes de propiedad industrial y derechos de autor aplicables en Colombia.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-bold text-slate-900 text-base">4. Ley Aplicable y Jurisdicción</h4>
                <p>
                  Cualquier controversia relacionada con el uso de este portal se regirá e interpretará bajo la legislación de la República de Colombia, sometiéndose a la jurisdicción de los jueces y tribunales de la ciudad de Cali, Valle del Cauca.
                </p>
              </div>
            </>
          )}

          {activeModal === 'solution-detail' && selectedSolution && (
            <>
              <div className="p-4 rounded-xl bg-blue-50/80 border border-blue-200 text-blue-900">
                <span className="text-xs font-bold uppercase tracking-wider block text-blue-700 mb-1">
                  {selectedSolution.badge}
                </span>
                <p className="font-semibold text-sm">
                  {selectedSolution.shortDesc}
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="font-bold text-slate-900 text-base">Alcance y Enfoque</h4>
                <p className="text-slate-600 leading-relaxed">
                  {selectedSolution.extendedDesc}
                </p>
              </div>

              <div className="space-y-2 pt-2">
                <h4 className="font-bold text-slate-900 text-base">Metodología de Trabajo</h4>
                <ul className="space-y-2 list-disc list-inside text-slate-600">
                  <li>Evaluación preliminar de requerimientos y contexto operativo.</li>
                  <li>Diálogo técnico y estratégico con el equipo de la organización.</li>
                  <li>Propuesta estructurada y pertinente orientada a resultados medibles.</li>
                  <li>Canales de comunicación directos y seguimiento continuo.</li>
                </ul>
              </div>

              <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row gap-3">
                <a
                  href="#contacto"
                  onClick={() => {
                    onClose();
                    if (onContactSolution) onContactSolution(selectedSolution.title);
                  }}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm transition-colors shadow-sm"
                >
                  <span>Consultar sobre este enfoque</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <button
                  type="button"
                  onClick={onClose}
                  className="px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-sm transition-colors cursor-pointer"
                >
                  Cerrar
                </button>
              </div>
            </>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-slate-100 bg-slate-50 flex items-center justify-between text-xs text-slate-400">
          <span>{COMPANY_INFO.legalName} • Cali, Colombia</span>
          <button
            type="button"
            onClick={onClose}
            className="text-blue-600 hover:underline font-semibold cursor-pointer"
          >
            Entendido
          </button>
        </div>
      </div>
    </div>
  );
};
