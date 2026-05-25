import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Informativa privacy · Tiziano Odontoiatria",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-[100dvh] px-5 pt-[calc(env(safe-area-inset-top)+16px)] pb-[calc(env(safe-area-inset-bottom)+32px)] bg-enamel-warm">
      <header className="flex items-center gap-3 mb-6">
        <Link
          href="/"
          className="w-9 h-9 rounded-full bg-white border border-border-soft flex items-center justify-center text-text-primary active:scale-95 transition-transform"
          aria-label="Indietro"
        >
          <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" aria-hidden="true">
            <path
              d="M15 6l-6 6 6 6"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
        <div className="flex items-center gap-2">
          <Image src="/brand-mark.png" alt="" aria-hidden="true" width={24} height={24} />
          <span className="font-bold text-[13px] text-text-primary">Tiziano Odontoiatria</span>
        </div>
      </header>

      <article className="space-y-6 text-text-primary">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-wider text-text-tertiary mb-1">
            Informativa privacy
          </p>
          <h1 className="text-[24px] font-extrabold leading-tight">
            Come trattiamo i tuoi dati
          </h1>
          <p className="text-[13px] text-text-tertiary mt-2">
            Versione 1.0 · 25 maggio 2026 · ex artt. 13-14 GDPR (Reg. UE 2016/679) e D.Lgs. 196/2003 come novellato dal D.Lgs. 101/2018
          </p>
        </div>

        <section>
          <h2 className="text-[16px] font-bold mb-2">1. Titolare del trattamento</h2>
          <p className="text-[14px] leading-relaxed text-text-secondary">
            Tiziano Odontoiatria S.r.l. — sede legale [INDIRIZZO DA CONFERMARE]. Email del Titolare:
            privacy@tizianoodontoiatria.it. Per ogni questione relativa al trattamento dei dati personali
            puoi contattare il Titolare ai recapiti indicati.
          </p>
        </section>

        <section>
          <h2 className="text-[16px] font-bold mb-2">2. Responsabile della protezione dei dati (DPO)</h2>
          <p className="text-[14px] leading-relaxed text-text-secondary">
            Il DPO è raggiungibile all&apos;indirizzo dpo@tizianoodontoiatria.it. Se ritieni che il
            trattamento dei tuoi dati violi le norme vigenti, hai diritto di rivolgerti direttamente al
            DPO prima di proporre reclamo all&apos;Autorità di controllo.
          </p>
        </section>

        <section>
          <h2 className="text-[16px] font-bold mb-2">3. Categorie di dati trattati</h2>
          <ul className="text-[14px] leading-relaxed text-text-secondary list-disc pl-5 space-y-1">
            <li><strong>Dati anagrafici e di contatto</strong>: nome, cognome, data di nascita, telefono, email, codice fiscale.</li>
            <li><strong>Dati di salute</strong> (categoria particolare ex art. 9 GDPR): anamnesi odontoiatrica, allergie, terapie in corso, immagini radiografiche, piano terapeutico, esito delle prestazioni.</li>
            <li><strong>Dati di utilizzo dell&apos;app</strong>: stato di avanzamento del percorso di cura, checklist completate, interazioni con l&apos;assistente virtuale Sofia, preferenze di notifica.</li>
            <li><strong>Dati di familiari</strong> (se aggiunti volontariamente al tuo profilo): per i minori di 14 anni il consenso è prestato dal soggetto esercente la responsabilità genitoriale.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-[16px] font-bold mb-2">4. Finalità e base giuridica</h2>
          <ul className="text-[14px] leading-relaxed text-text-secondary list-disc pl-5 space-y-1">
            <li><strong>Erogazione delle prestazioni odontoiatriche</strong> — base: esecuzione del contratto sanitario (art. 6.1.b GDPR) e finalità di cura (art. 9.2.h GDPR).</li>
            <li><strong>Gestione del percorso di cura in app, notifiche, promemoria</strong> — base: consenso esplicito al momento dell&apos;onboarding (art. 6.1.a / 9.2.a GDPR), revocabile in qualsiasi momento.</li>
            <li><strong>Comunicazione con l&apos;assistente virtuale Sofia</strong> — base: consenso. Le tue domande possono essere conservate in forma pseudonimizzata per migliorare il servizio.</li>
            <li><strong>Adempimenti di legge</strong> (obblighi contabili, fiscali, fatturazione elettronica, conservazione cartelle cliniche) — base: obbligo legale (art. 6.1.c GDPR).</li>
          </ul>
        </section>

        <section>
          <h2 className="text-[16px] font-bold mb-2">5. Modalità del trattamento</h2>
          <p className="text-[14px] leading-relaxed text-text-secondary">
            Il trattamento avviene con strumenti elettronici e cartacei, nel rispetto delle misure
            tecniche e organizzative di cui all&apos;art. 32 GDPR. L&apos;accesso ai dati è riservato al
            personale sanitario e amministrativo autorizzato, ciascuno per quanto di propria competenza.
          </p>
        </section>

        <section>
          <h2 className="text-[16px] font-bold mb-2">6. Conservazione</h2>
          <ul className="text-[14px] leading-relaxed text-text-secondary list-disc pl-5 space-y-1">
            <li><strong>Cartella clinica e dati sanitari</strong>: conservazione illimitata per finalità di cura, secondo Codice deontologico medico e indicazioni AGENAS.</li>
            <li><strong>Dati contabili e fatturazione</strong>: 10 anni (art. 2220 c.c.).</li>
            <li><strong>Dati di utilizzo dell&apos;app e log conversazioni</strong>: 24 mesi dall&apos;ultimo accesso, salvo richiesta di cancellazione.</li>
            <li><strong>Dati di contatto per marketing</strong> (se concesso il consenso separato): fino a revoca.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-[16px] font-bold mb-2">7. Destinatari e trasferimento</h2>
          <p className="text-[14px] leading-relaxed text-text-secondary">
            I dati possono essere comunicati a: laboratori odontotecnici per la produzione di
            manufatti, professionisti sanitari consulenti, compagnie assicurative (su tua autorizzazione),
            commercialista e medico competente, fornitori IT che operano come Responsabili del
            trattamento (es. fornitore del gestionale clinico, fornitore della PWA, servizio di
            notifiche push). L&apos;elenco completo dei Responsabili è disponibile su richiesta.
          </p>
          <p className="text-[14px] leading-relaxed text-text-secondary mt-2">
            Non è previsto trasferimento dei dati al di fuori dello Spazio Economico Europeo. Se in
            futuro dovesse rendersi necessario, sarà effettuato esclusivamente verso Paesi con decisione
            di adeguatezza o sulla base di clausole contrattuali standard approvate dalla Commissione UE.
          </p>
        </section>

        <section>
          <h2 className="text-[16px] font-bold mb-2">8. I tuoi diritti</h2>
          <p className="text-[14px] leading-relaxed text-text-secondary">
            Puoi esercitare in ogni momento i diritti previsti dagli artt. 15-22 GDPR:
          </p>
          <ul className="text-[14px] leading-relaxed text-text-secondary list-disc pl-5 mt-1 space-y-1">
            <li>accesso ai tuoi dati, copia degli stessi, rettifica;</li>
            <li>cancellazione (entro i limiti degli obblighi di conservazione sanitaria);</li>
            <li>limitazione e opposizione al trattamento per motivi legittimi;</li>
            <li>portabilità in formato strutturato e leggibile da dispositivo automatico;</li>
            <li>revoca del consenso (in qualsiasi momento, senza pregiudizio per il trattamento già effettuato);</li>
            <li>reclamo all&apos;Autorità Garante per la Protezione dei Dati Personali (www.garanteprivacy.it).</li>
          </ul>
          <p className="text-[14px] leading-relaxed text-text-secondary mt-2">
            Per esercitare i tuoi diritti scrivi a privacy@tizianoodontoiatria.it. Risponderemo entro
            30 giorni.
          </p>
        </section>

        <section>
          <h2 className="text-[16px] font-bold mb-2">9. Profilazione e decisioni automatizzate</h2>
          <p className="text-[14px] leading-relaxed text-text-secondary">
            L&apos;app non effettua profilazione né adotta decisioni automatizzate produttive di effetti
            giuridici sul tuo conto. L&apos;assistente virtuale Sofia risponde sulla base di una knowledge
            base predefinita e non sostituisce in alcun caso la valutazione clinica del medico.
          </p>
        </section>

        <section>
          <h2 className="text-[16px] font-bold mb-2">10. Versioni e aggiornamenti</h2>
          <p className="text-[14px] leading-relaxed text-text-secondary">
            La presente informativa può essere aggiornata. Le modifiche sostanziali saranno comunicate
            tramite la app e tramite email. La versione corrente è sempre disponibile a questo indirizzo.
          </p>
        </section>

        <div className="pt-4 border-t border-border-soft">
          <p className="text-[12px] text-text-tertiary text-center">
            Per chiarimenti: privacy@tizianoodontoiatria.it · DPO: dpo@tizianoodontoiatria.it
          </p>
          <p className="text-[11px] text-text-tertiary text-center mt-2">
            Demo prototype — i contenuti sono indicativi e saranno finalizzati dal Titolare prima del lancio in produzione.
          </p>
        </div>

        <div className="flex justify-center">
          <Link
            href="/"
            className="text-[13px] font-semibold text-teal-primary"
          >
            ← Torna alla home
          </Link>
        </div>
      </article>
    </main>
  );
}
