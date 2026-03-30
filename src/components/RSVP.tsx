import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { content, contentAR } from "@/content/content";
import { useLang } from "@/context/LanguageContext";

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

interface GuestEntry { name: string; dietary: string; }
interface FormState {
  attending: "yes" | "no" | "";
  email: string;
  guestCount: number;
  guests: GuestEntry[];
  childrenAttending: "yes" | "no" | "";
  message: string;
  honeypot: string;
}
type SubmitStatus = "idle" | "submitting" | "success" | "declined" | "error";

export default function RSVP() {
  const { lang } = useLang();
  const c = lang === "ar" ? contentAR.rsvp : content.rsvp;
  const [form, setForm] = useState<FormState>({
    attending: "", email: "", guestCount: 1,
    guests: [{ name: "", dietary: "" }],
    childrenAttending: "", message: "", honeypot: "",
  });
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [validationErrors, setValidationErrors] = useState<string[]>([]);

  const setAttending = (val: "yes" | "no") => setForm((f) => ({ ...f, attending: val }));
  const setGuestCount = (count: number) => {
    const guests: GuestEntry[] = Array.from({ length: count }, (_, i) => ({
      name: form.guests[i]?.name ?? "", dietary: form.guests[i]?.dietary ?? "",
    }));
    setForm((f) => ({ ...f, guestCount: count, guests }));
  };
  const updateGuest = (idx: number, field: keyof GuestEntry, value: string) =>
    setForm((f) => { const guests = [...f.guests]; guests[idx] = { ...guests[idx], [field]: value }; return { ...f, guests }; });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (form.honeypot) {
      setStatus("success");
      return;
    }

    const errors: string[] = [];

    if (!form.attending) {
      errors.push("Please indicate whether you will be attending.");
    }

    if (!form.email.trim() || !EMAIL_REGEX.test(form.email.trim())) {
      errors.push("Please enter a valid email address.");
    }

    if (form.attending === "yes") {
      if (form.guestCount < 1 || form.guestCount > 10) {
        errors.push("Guest count must be between 1 and 10.");
      }

      for (let i = 0; i < form.guests.length; i++) {
        if (!form.guests[i].name.trim()) {
          errors.push(`Please enter a name for person ${i + 1}.`);
        }
        if (form.guests[i].name.length > 100) {
          errors.push(`Name for person ${i + 1} must be under 100 characters.`);
        }
      }
    }

    if (form.message.length > 1000) {
      errors.push("Message must be under 1000 characters.");
    }

    if (errors.length > 0) {
      setValidationErrors(errors);
      return;
    }

    setValidationErrors([]);
    setStatus("submitting");

    const guestSummary = form.guests
      .map((g, i) => `Guest ${i + 1}: ${g.name || "N/A"}${g.dietary ? ` (${g.dietary})` : ""}`)
      .join("\n");

    const templateParams = {
      attending:        form.attending,
      email:            form.email,
      guest_count:      form.guestCount,
      guests:           guestSummary,
      children:         form.childrenAttending || "not specified",
      message:          form.message || "—",
      couple:           content.couple.fullNames,
      wedding_date:     content.footer.date,
    };

    try {
      const emailjs = await import("@emailjs/browser");
      await emailjs.default.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY,
      );
      setStatus(form.attending === "no" ? "declined" : "success");
    } catch {
      setStatus("error");
    }
  };
  const isSubmitting = status === "submitting";
  const isDone = status === "success" || status === "declined";
  const isError = status === "error";

  return (
    <section id="rsvp" className="relative bg-gold section-padding" aria-label="RSVP form">
      <div className="relative z-10 max-w-xl mx-auto text-center">

        {/* Script title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-display text-white leading-none mb-3"
          style={{ fontSize: "clamp(3.2rem, 10vw, 6rem)" }}
        >
          {c.title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-cinzel text-white/75 mb-1"
          style={{ fontSize: "0.75rem", letterSpacing: "0.35em" }}
        >
          {c.subtitle.toUpperCase()}
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="font-cinzel text-white/50 mb-10"
          style={{ fontSize: "0.72rem", letterSpacing: "0.28em" }}
        >
          {c.deadline.toUpperCase()}
        </motion.p>

        <AnimatePresence mode="wait">
          {!isDone ? (
            <motion.form
              key="form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl p-6 md:p-9 text-left shadow-xl space-y-6"
              aria-label="RSVP submission form"
            >
              {/* Attendance */}
              <fieldset>
                <legend className="font-body font-semibold text-sage-dark text-sm mb-3">
                  {c.fields.attending.label}
                </legend>
                <div className="space-y-3">
                  {([
                    { val: "yes" as const, label: c.fields.attending.yes },
                    { val: "no" as const, label: c.fields.attending.no },
                  ]).map(({ val, label }) => (
                    <label key={val} className="flex items-center gap-3 cursor-pointer group">
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-colors duration-200 ${form.attending === val ? "border-gold" : "border-sage/30 group-hover:border-gold/50"}`}>
                        {form.attending === val && <div className="w-2.5 h-2.5 rounded-full bg-gold" />}
                      </div>
                      <input type="radio" name="attending" value={val} checked={form.attending === val} onChange={() => setAttending(val)} className="sr-only" />
                      <span className="font-body text-sage-dark text-base">{label}</span>
                    </label>
                  ))}
                </div>
              </fieldset>

              {/* Email */}
              <div>
                <label htmlFor="rsvp-email" className="font-body font-semibold text-sage-dark text-sm block mb-2">{c.fields.email.label}</label>
                <input
                  id="rsvp-email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                  placeholder={c.fields.email.placeholder}
                  className="w-full px-4 py-3 rounded-xl border border-sage/20 font-body text-sage-dark placeholder:text-sage/40 focus:outline-none focus:border-gold transition-colors text-base"
                  autoComplete="email"
                />
              </div>

              {/* Attending-only fields */}
              <AnimatePresence>
                {form.attending === "yes" && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.35 }}
                    className="space-y-5 overflow-hidden"
                  >
                    {/* Guest count */}
                    <div>
                      <p id="guest-count-label" className="font-body font-semibold text-sage-dark text-sm mb-3 flex items-center gap-2">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4 text-gold" aria-hidden="true">
                          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
                        </svg>
                        {c.fields.guestCount.label}
                      </p>
                      <div className="flex items-center gap-4" role="group" aria-labelledby="guest-count-label">
                        <button type="button" onClick={() => setGuestCount(Math.max(1, form.guestCount - 1))} className="w-10 h-10 border border-gold/40 text-gold text-xl rounded-lg hover:bg-gold/8 transition-colors font-body" aria-label="Decrease guest count">−</button>
                        <span className="font-body text-forest text-xl w-6 text-center" aria-live="polite">{form.guestCount}</span>
                        <button type="button" onClick={() => setGuestCount(Math.min(10, form.guestCount + 1))} className="w-10 h-10 border border-gold/40 text-gold text-xl rounded-lg hover:bg-gold/8 transition-colors font-body" aria-label="Increase guest count">+</button>
                      </div>
                    </div>

                    {/* Per-guest fields */}
                    {form.guests.map((guest, i) => (
                      <div key={i} className="space-y-3">
                        <p className="font-cinzel text-gold/65" style={{ fontSize: "0.72rem", letterSpacing: "0.24em" }}>
                          {i === 0
                            ? (lang === "ar" ? "الشخص ١ (جهة الاتّصال الرئيسيّة)" : "PERSON 1 (MAIN CONTACT)")
                            : (lang === "ar" ? `الشخص ${i + 1}` : `PERSON ${i + 1}`)}
                        </p>
                        <label htmlFor={`guest-name-${i}`} className="sr-only">{c.fields.name.label} {i + 1}</label>
                        <input id={`guest-name-${i}`} type="text" required value={guest.name} onChange={(e) => updateGuest(i, "name", e.target.value)} placeholder={c.fields.name.placeholder} className="w-full px-4 py-3 rounded-xl border border-sage/20 font-body text-sage-dark placeholder:text-sage/40 focus:outline-none focus:border-gold transition-colors text-base" autoComplete="off" />
                        <label htmlFor={`guest-dietary-${i}`} className="sr-only">{c.fields.dietary.label} {i + 1}</label>
                        <input id={`guest-dietary-${i}`} type="text" value={guest.dietary} onChange={(e) => updateGuest(i, "dietary", e.target.value)} placeholder={c.fields.dietary.placeholder} className="w-full px-4 py-3 rounded-xl border border-sage/20 font-body text-sage-dark placeholder:text-sage/40 focus:outline-none focus:border-gold transition-colors text-base" autoComplete="off" />
                      </div>
                    ))}

                    {/* Children */}
                    <fieldset>
                      <legend className="font-body font-semibold text-sage-dark text-sm mb-3">{c.fields.children.label}</legend>
                      <div className="space-y-3">
                        {([{ val: "yes" as const, label: c.fields.children.yes }, { val: "no" as const, label: c.fields.children.no }]).map(({ val, label }) => (
                          <label key={val} className="flex items-center gap-3 cursor-pointer group">
                            <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-colors duration-200 ${form.childrenAttending === val ? "border-gold" : "border-sage/30 group-hover:border-gold/50"}`}>
                              {form.childrenAttending === val && <div className="w-2.5 h-2.5 rounded-full bg-gold" />}
                            </div>
                            <input type="radio" name="children" value={val} checked={form.childrenAttending === val} onChange={() => setForm((f) => ({ ...f, childrenAttending: val }))} className="sr-only" />
                            <span className="font-body text-sage-dark text-base">{label}</span>
                          </label>
                        ))}
                      </div>
                    </fieldset>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Message */}
              <div>
                <label htmlFor="rsvp-message" className="font-body font-semibold text-sage-dark text-sm block mb-2">{c.fields.message.label}</label>
                <textarea id="rsvp-message" rows={3} value={form.message} onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))} placeholder={c.fields.message.placeholder} className="w-full px-4 py-3 rounded-xl border border-sage/20 font-body text-sage-dark placeholder:text-sage/40 focus:outline-none focus:border-gold transition-colors resize-none text-base" />
              </div>

              <input
                type="text"
                name="website"
                value={form.honeypot}
                onChange={(e) => setForm((f) => ({ ...f, honeypot: e.target.value }))}
                autoComplete="off"
                tabIndex={-1}
                aria-hidden="true"
                style={{ position: "absolute", left: "-9999px", opacity: 0, height: 0, width: 0 }}
              />

              {validationErrors.length > 0 && (
                <div role="alert" className="text-red-600 text-sm font-body space-y-1">
                  {validationErrors.map((err, i) => (
                    <p key={i}>{err}</p>
                  ))}
                </div>
              )}

              {isError && (
                <p role="alert" className="text-red-600 text-sm font-body text-center">
                  {lang === "ar" ? "حدث خطأ ما. يرجى المحاولة مجدّدًا أو التواصل معنا مباشرةً." : "Something went wrong. Please try again or contact us directly."}
                </p>
              )}

              <button
                type="submit"
                disabled={isSubmitting || !form.attending}
                className={`w-full py-4 rounded-full bg-gold text-white font-cinzel tracking-widest transition-opacity ${isSubmitting || !form.attending ? "opacity-50 cursor-not-allowed" : "hover:opacity-88"}`}
                style={{ fontSize: "0.75rem", letterSpacing: "0.32em" }}
                aria-busy={isSubmitting}
              >
                {isSubmitting ? (lang === "ar" ? "جارٍ الإرسال..." : "SENDING…") : c.fields.submit.toUpperCase()}
              </button>
            </motion.form>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl p-10 md:p-14 text-center shadow-xl"
              role="status"
              aria-live="polite"
            >
              <div className="mx-auto mb-6 w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center">
                {status === "success" ? <HeartCheckIcon className="w-8 h-8 text-gold" /> : <HeartIcon className="w-8 h-8 text-sage" />}
              </div>
              <h3 className="font-display text-forest mb-4" style={{ fontSize: "clamp(2.2rem, 7vw, 3.2rem)" }}>
                {status === "success" ? c.successMessage.title : c.declineMessage.title}
              </h3>
              <p className="font-body italic text-sage/75 text-lg leading-relaxed">
                {status === "success" ? c.successMessage.body : c.declineMessage.body}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

function HeartCheckIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      <polyline points="9 12 11 14 15 10" />
    </svg>
  );
}
function HeartIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  );
}
