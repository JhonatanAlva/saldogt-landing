import { MotionSection, MotionDiv } from "@/components/shared/ui/MotionSection";

export default function Terms() {
  return (
    <MotionSection id="terminos" className="mx-auto max-w-7xl px-6 py-16">
      <MotionDiv className="mx-auto max-w-4xl rounded-3xl border border-white/10 bg-slate-950/80 p-8 shadow-2xl" delay={0.1}>
        <h2 className="text-3xl font-extrabold text-white">Términos y Condiciones</h2>
        <p className="mt-4 text-slate-300 leading-7">
          Estas condiciones regulan el uso de la plataforma SaldoGT. Al usar este sitio, aceptas los términos descritos aquí y cualquier actualización futura.
        </p>

        <div className="mt-8 space-y-6 text-slate-300">
          <div>
            <h3 className="text-xl font-semibold text-white">1. Uso del servicio</h3>
            <p className="mt-2">
              El servicio se ofrece para la gestión financiera personal. El acceso es para mayores de edad y el uso debe ser responsable.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white">2. Privacidad y datos</h3>
            <p className="mt-2">
              La plataforma puede recopilar datos para mejorar la experiencia y ofrecer funciones. Recomendamos revisar la política de privacidad para conocer los detalles.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white">3. Propiedad intelectual</h3>
            <p className="mt-2">
              Todos los derechos sobre el contenido, diseño y marca pertenecen a SaldoGT. No está permitido copiar ni reproducir sin autorización.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white">4. Limitación de responsabilidad</h3>
            <p className="mt-2">
              SaldoGT no se hace responsable por pérdidas financieras derivadas del uso de la plataforma. Siempre verifica tu información antes de tomar decisiones.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white">5. Cambios en los términos</h3>
            <p className="mt-2">
              Podemos actualizar estos términos en cualquier momento. Las modificaciones se publicarán en el sitio y se aplicarán a partir de su publicación.
            </p>
          </div>
        </div>
      </MotionDiv>
    </MotionSection>
  );
}
