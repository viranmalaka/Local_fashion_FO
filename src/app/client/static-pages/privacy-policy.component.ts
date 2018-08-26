import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-privacy-policy',
  template: `
    <div *ngIf="translate.currentLang === 'en'">
      <div class="content">
        <h1>Site regulation</h1>

        <h2>ITEMS AND IMAGES ONLINE</h2>

        <p>WWW.SOXPLAY.COM disclaims any responsibility for the possibility that, due to a particular configuration of the computer used by
          the Customer or a malfunction, the colors of the products displayed on the site have slight differences compared to the original
          ones. The images contained on the WWW.SOXPLAY.COM website are the property of “RLLR SOCIETA’ A RESPONSABILITA’ LIMITATA
          SEMPLIFICATA” . Any use of such images, not authorized by a written consent of "RLLR LIMITED LIMITED LIABILITY COMPANY", will be
          prosecuted according to law. For more information please contact: info@soxplay.com
        </p>

        <h2> ARTICLES AVAILABILITY</h2>
        <p>The assortment on WWW.SOXPLAY.COM reflects the exact availability of each item. Upon receipt of the order request, the Orders
          department of WWW.SOXPLAY.COM reserves the right to reconfirm the availability of the items purchased, the validity of the
          transaction by credit card and to verify the details of the previous transactions made by the Customer on WWW.SOXPLAY.COM. In the
          event that the ordered items are not available, or if for some reason the order can not be processed as requested by the Customer,
          the Orders Office WWW.SOXPLAY.COM will promptly inform the Customer.
        </p>
        <h2>LEGAL TERMS</h2>

        <p>This notice contains the terms and legal conditions governing the WWW.SOXPLAY.COM website. By accessing the WWW.SOXPLAY.COM
          website, users undertake to accept and agree with all the conditions contained in this declaration. WWW.SOXPLAY.COM reserves the
          right to ask Users who do not accept or do not intend to respect these terms, to avoid to use the WWW.SOXPLAY.COM website. Access
          to the site and related services is intended for personal use only. Accessing to WWW.SOXPLAY.COM website, customers will see
          information on the products offered together with the possibility of purchasing them.</p>

        <h2>PROPERTY, COPYRIGHT & TRADEMARK</h2>

        <p> WWW.SOXPLAY.COM and all its content is property of “RLLR SOCIETA’ A RESPONSABILITA’ LIMITATA SEMPLIFICATA”. This includes
          documentation, images, characters, design. The material contained on the website is protected by copyright. Any reproduction,
          alteration, transmission, publication or redistribution to third parties, for commercial purposes, is strictly prohibited without
          the express written consent provided by “RLLR SOCIETA’ A RESPONSABILITA’ LIMITATA SEMPLIFICATA”.
        </p>

        <h2>COMMERCIAL POLICY</h2>

        <h2>PROCESSING OF ORDERS</h2>

        <p>“RLLR SOCIETA’ A RESPONSABILITA’ LIMITATA SEMPLIFICATA” reserves the right to refuse an order if Paypal, Gestpay or Stripe do not
          give consent to payment. “RLLR SOCIETA’ A RESPONSABILITA’ LIMITATA SEMPLIFICATA” reserves the right to refuse orders or to refuse
          the provision of services to anyone and at any time.
        </p>
        <h2>FINAL CUSTOMER</h2>
        <p>“RLLR SOCIETA’ A RESPONSABILITA’ LIMITATA SEMPLIFICATA” has created and published the WWW.SOXPLAY.COM website with the aim of
          offering a service exclusively reserved to its Customers. The products on sale on the WWW.SOXPLAY.COM website are intended for the
          Final Consumer. For Final Consumer, “RLLR SOCIETA’ A RESPONSABILITA’ LIMITATA SEMPLIFICATA” means a natural person acting for
          purposes unrelated to his business or professional, legal activity that is not limited to the resale of goods purchased on
          WWW.SOXPLAY.COM. Different subjects who are interested in buying products sold on WWW.SOXPLAY.COM can contact us at the following
          address: info@soxplay.com.
        </p>
        <p>According to the commercial policy described above, “RLLR SOCIETA’ A RESPONSABILITA’ LIMITATA SEMPLIFICATA” reserves the right
          not to process orders for goods whose use is not intended for the Final Consumer or orders that do not comply with the above
          mentioned commercial policies.
        </p>

        <h2>CUSTOMER REQUIREMENTS</h2>
        <p>To place orders on WWW.SOXPLAY.COM, Customers must: - Be the final customer as defined in the "Commercial Policy" of
          WWW.SOXPLAY.COM. - Be at least 18 years old. - Possess the necessary requirements to be able to enter into legally binding
          contracts. - Have a valid e-mail address. - Have a valid credit card for payment: Visa, MasterCard, American Express or a verified
          PayPal account.
        </p>

        <h2>LIABILITY DISCLAIMER</h2>

        <p>“RLLR SOCIETA’ A RESPONSABILITA’ LIMITATA SEMPLIFICATA” publishes information on its website in order to provide a service to its
          customers, however it disclaims any responsibility for the possibility of any technical or factual inaccuracies and / or
          typographical errors for which it is intended, following a segnalation, immediate correction. “RLLR SOCIETA’ A RESPONSABILITA’
          LIMITATA SEMPLIFICATA” also reserves the right to make corrections and changes to the site whenever it is necessary without giving
          prior notice. “RLLR SOCIETA’ A RESPONSABILITA’ LIMITATA SEMPLIFICATA” does not offer any guarantee that the information published
          on its website complies with the laws of the jurisdiction of the Customer's country of residence. “RLLR SOCIETA’ A RESPONSABILITA’
          LIMITATA SEMPLIFICATA” disclaims any liability for any problems, damages or risks that the user may encounter while using the
          site. “RLLR SOCIETA’ A RESPONSABILITA’ LIMITATA SEMPLIFICATA” disclaims any liability for any malfunctions related to the
          deactivation of cookies in the user's browser. “RLLR SOCIETA’ A RESPONSABILITA’ LIMITATA SEMPLIFICATA” reserves the right to amend
          / revise the terms and conditions contained in this legal notice, by updating it, whenever it is appropriate, without any
          obligation to give prior notice. The user is required to comply with the terms contained in this legal notice, periodically
          checking for updates, changes and corrections.
        </p>

        <h2>ITALIAN LAW</h2>

        <p>The website WWW.SOXPLAY.COM, adhering to the Italian legislation, declares: "Users who access this site declare to accept that
          all matters relating to the use of the WWW.SOXPLAY.COM website are governed by the current legislation of the Italian State. They
          also accept that they are subject exclusively to the jurisdiction of the Court of Milan for the aforementioned issues. “RLLR
          SOCIETA’ A RESPONSABILITA’ LIMITATA SEMPLIFICATA” does not in any way guarantee that the content of the site complies with the
          regulations of other countries. Access to the WWW.SOXPLAY.COM site from places where its contents are considered illegal is
          expressly prohibited. Users who decide to access the site from these countries are fully aware of the legal consequences and
          sanctions they are likely to incur and will be solely responsible for compliance with local laws. "
        </p>

        <h2>PRIVACY</h2>

        <p>“RLLR SOCIETA’ A RESPONSABILITA’ LIMITATA SEMPLIFICATA creator and promoter of the activities available on the website
          WWW.SOXPLAY.COM, reserves the right to use personal data, voluntarily provided by Users, in compliance with current regulations
          (Article 13 et seq. D. Legislative Decree 196/2003). Users are therefore invited to periodically visit this section to keep up
          with changes concerning changes to current legislation. “RLLR SOCIETA’ A RESPONSABILITA’ LIMITATA SEMPLIFICATA” guarantees to
          users that the processing of personal data will be reserved for uses strictly connected and related to the provision of its
          services, to the facilitation of site management and order fulfillment. The data voluntarily provided by the Users will in no case
          be communicated or disclosed to third parties. In case of payment by credit card, the fundamental information for the execution of
          the transaction (credit / debit card number, expiration date, security code) will be sent to the company responsible for
          processing (Paypal, GestPay, Stripe) , or possibly to companies responsible for fraud control, using an encrypted protocol,
          without any third party having access thereto. However, this information will never be displayed or stored by the Seller (“RLLR
          SOCIETA’ A RESPONSABILITA’ LIMITATA SEMPLIFICATA”). “RLLR SOCIETA’ A RESPONSABILITA’ LIMITATA SEMPLIFICATA” adopts appropriate
          security measures in order to minimize the risk of destruction or loss of data, unauthorized access or processing that is not
          permitted or does not comply with the collection purposes indicated in our Privacy Policy.
        </p>

        <p>However, “RLLR SOCIETA’ A RESPONSABILITA’ LIMITATA SEMPLIFICATA” can not guarantee its users that the measures taken for site
          security and the transmission of data and information on the site are capable of limiting or excluding any risk of unauthorized
          access or of data dispersion by devices belonging to the user. For this reason, we suggest to the users of the site to make sure
          that their computer is equipped with adequate software to protect the transmission of data (for example, updated antivirus) and
          that its Internet provider has adopted appropriate measures for the security of transmission of data on the network. “RLLR
          SOCIETA’ A RESPONSABILITA’ LIMITATA SEMPLIFICATA” informs Users that they may exercise the rights referred to in Article 7 of
          Legislative Decree 196/2003, listed below in its essential part.
        </p>
        <p>Users have the right to request to “RLLR SOCIETA’ A RESPONSABILITA’ LIMITATA SEMPLIFICATA” the following informations:
        </p>

        <ul>
          <li>The confirmation of the existence or not of personal data concerning him</li>
          <li>Clear communication of data and their origin</li>
          <li>The reason and purpose of their existence and their use</li>
          <li>The request for the information listed above may be renewed with a minimum interval of 90 days, except for those cases where
            there is just cause: cancellation or modification of such data due to violation of the law; cancellation of data that can not be
            used for the reasons for which they were collected.
          </li>
        </ul>

        <h1>Shippings</h1>
        
        <h2>SHIPPINGS AND SHIPPING DATA</h2>
        <p>As required by the trading laws, all WWW.SOXPLAY.COM shipings are accompanied by an official invoice that declares the value of individual items in Euro. For items on sale, the invoice shows the discounted amounts. SHIPPING DATE Orders are shipped from WWW.SOXPLAY.COM, Monday to Friday from 9:00 am to 5:30 pm. Orders placed on Saturday and Sunday will be processed starting from the following Monday morning. The items will be delivered to the courier within 24 hours from receiving the order. Delivery within Italy (excluding islands) takes place within 24-48 hours from the date of shiping from our warehouses. For delivery to Sicily and Sardinia and places difficult to reach, shippings can have delays
        </p>
        <h2>AUTHORIZED DELIVERY</h2>
        <p>At arrival of the goods, customers are asked to carefully inspect the package before making a signature as proof of delivery of the shipment. The WWW.SOXPLAY.COM packs are carefully packed and sealed with adhesive tape. If for any reason the package appears damaged or if the adhesive tape is not intact, Customers are asked to sign the receipt with reservation, or to refuse delivery. In the event that the delivery has been accepted with an unauthorized signature or there is evidence of damaging of the package, customers are requested to immediately report the incident to the local office of the shipping company and to contact our service department at the address : info@soxplay.com. If for any reason the shipment fails to be delivered successfully to the address provided by the customer in the commercial contract, the package is likely to be returned to the sender at the expense of the customer. These amounts will be deducted from any refund due to the Customer from WWW.SOXPLAY.COM.
        </p>
        <h2>DELIVERY OF THE ORDER</h2>
        <p>All customers who place an order establish a business relationship with WWW.SOXPLAY.COM and therefore undertake to accept delivery of their package. If for any reason the Customer refuses to deliver the shipment or requests the return to the sender, any shipping costs charged to WWW.SOXPLAY.COM will be deducted from any refund due to the Customer.</p>
      </div>
    </div>

    <div *ngIf="translate.currentLang === 'it'">
      <div class="content">

        <h1>Regolamento del sito</h1>
        <h2>ARTICOLI ED IMMAGINI ONLINE</h2>

        <p>WWW.SOXPLAY.COM declina ogni responsabilità circa la possibilità che, a causa di una particolare configurazione del computer
          utilizzato dal Cliente o di un suo malfunzionamento, i colori dei prodotti visualizzati sul sito presentino leggere differenze
          rispetto a quelli originali. Le immagini contenute sul sito WWW.SOXPLAY.COM sono di proprietà di “RLLR SOCIETA’ A RESPONSABILITA’
          LIMITATA SEMPLIFICATA” . Ogni utilizzo di tali immagini, non autorizzato da un consenso scritto da parte di “RLLR SOCIETA’ A
          RESPONSABILITA’ LIMITATA SEMPLIFICATA”, sarà perseguito a norma di legge. Per maggiori informazioni potete contattare:
          info@soxplay.com
        </p>

        <h2>DISPONIBILITA’ ARTICOLI</h2>
        <p>L’assortimento presente su WWW.SOXPLAY.COM riflette l’esatta disponibilità di ogni articolo. Una volta ricevuta la richiesta
          d’ordine, il reparto Ordini di WWW.SOXPLAY.COM si riserva il diritto di riconfermare la disponibilità degli articoli acquistati,
          la validità della transazione tramite carta di credito e di verificare i dettagli delle precedenti transazioni effettuate dal
          Cliente su WWW.SOXPLAY.COM. Nell’eventualità in cui gli articoli ordinati non siano disponibili, o se per qualche motivo l’ordine
          non possa essere evaso come da richiesta del Cliente, l’ufficio Ordini WWW.SOXPLAY.COM ne darà tempestiva comunicazione al
          Cliente.
        </p>


        <h2>TERMINI LEGALI</h2>
        <p>Il presente avviso contiene i termini e le condizioni legali che regolano il sito WWW.SOXPLAY.COM. Accedendo al sito
          WWW.SOXPLAY.COM gli utenti si impegnano ad accettare e concordare di attenersi al rispetto di tutte le condizioni contenute in
          questa dichiarazione. WWW.SOXPLAY.COM si riserva il diritto di chiedere agli Utenti che non accettino o non intendano rispettare
          tali termini, di astenersi dall’utilizzo del sito web WWW.SOXPLAY.COM. L’accesso al sito ed ai relativi servizi è destinato
          esclusivamente ad utilizzo personale. La visualizzazione del sito WWW.SOXPLAY.COM fornisce ai Clienti informazioni sui prodotti
          proposti insieme alla possibilità di acquisto degli stessi.
        </p>

        <h2>PROPRIETA’, COPYRIGHT & TRADEMARK</h2>
        <p>WWW.SOXPLAY.COM e tutto il suo contenuto è proprietà di “RLLR SOCIETA’ A RESPONSABILITA’ LIMITATA SEMPLIFICATA”. Ciò include
          documentazione, immagini, caratteri, design. Il materiale contenuto nel sito web è protetto da copyright. Qualsiasi riproduzione,
          alterazione, trasmissione, pubblicazione o ridistribuzione a terzi, per scopi commerciali, è severamente vietata se priva di
          espresso consenso scritto fornito da “RLLR SOCIETA’ A RESPONSABILITA’ LIMITATA SEMPLIFICATA”.
        </p>


        <h2>POLITICA COMMERCIALE</h2>
        <h2>EVASIONE DEGLI ORDINI</h2>
        <p>“RLLR SOCIETA’ A RESPONSABILITA’ LIMITATA SEMPLIFICATA” si riserva il diritto di rifiutare un ordine nel caso in cui Paypal,
          Gestpay o Stripe non diano il consenso al pagamento. “RLLR SOCIETA’ A RESPONSABILITA’ LIMITATA SEMPLIFICATA” si riserva il diritto
          di rifiutare ordini o di rifiutare l’erogazione di servizi a chiunque ed in qualsiasi momento.
        </p>

        <h2>CLIENTE FINALE</h2>
        <p>“RLLR SOCIETA’ A RESPONSABILITA’ LIMITATA SEMPLIFICATA” ha realizzato e pubblicato il sito WWW.SOXPLAY.COM con lo scopo di
          offrire un servizio riservato esclusivamente ai propri Clienti. I prodotti in vendita sul sito WWW.SOXPLAY.COM sono destinati al
          Consumatore Finale. Per Consumatore Finale, “RLLR SOCIETA’ A RESPONSABILITA’ LIMITATA SEMPLIFICATA” intende una persona fisica che
          agisca per scopi estranei alla propria attività imprenditoriale o professionale, giuridica che non sia limitata alla rivendita di
          beni acquistati su WWW.SOXPLAY.COM. Soggetti differenti che fossero interessati all’acquisto dei prodotti commercializzati su
          WWW.SOXPLAY.COM possono contattarci al seguente indirizzo: info@soxplay.com
        </p>
        <p>In considerazione della politica commerciale sopra descritta, “RLLR SOCIETA’ A RESPONSABILITA’ LIMITATA SEMPLIFICATA” si riserva
          il diritto di non processare ordini di beni il cui utilizzo non sia destinato al Consumatore Finale o ordini non conformi alle
          politiche commerciali sopra descritte.
        </p>

        <h2>REQUISITI DEI CLIENTI</h2>

        <p>Per effettuare ordini su WWW.SOXPLAY.COM i Clienti devono: – Essere il cliente finale da come definito nella “Politica
          Commerciale” di WWW.SOXPLAY.COM. – Avere almeno 18 anni. – Possedere i requisiti necessari per poter stipulare contratti
          legalmente vincolanti. – Avere un indirizzo E-mail valido. – Possedere una carta di credito valida per il pagamento: Visa,
          MasterCard, American Express oppure un conto PayPal Verificato.
        </p>

        <h2>DECLINAZIONE DI RESPONSABILITA’</h2>
        <p>“RLLR SOCIETA’ A RESPONSABILITA’ LIMITATA SEMPLIFICATA” pubblica informazioni sul proprio  sito al fine di fornire un servizio ai
          propri clienti, tuttavia declina ogni responsabilità circa la possibilità di eventuali inesattezze tecniche o di fatto e/o errori
          tipografici per i quali è prevista, a seguito di una segnalazione, immediata correzione. “RLLR SOCIETA’ A RESPONSABILITA’ LIMITATA
          SEMPLIFICATA” si riserva inoltre il diritto di apportare correzioni e cambiamenti al sito ogni qual volta lo ritenga necessario
          senza darne preavviso. “RLLR SOCIETA’ A RESPONSABILITA’ LIMITATA SEMPLIFICATA” non offre alcuna garanzia sulla conformità delle
          informazioni pubblicate nel proprio sito alle leggi previste dalla giurisdizione del paese di residenza del Cliente. “RLLR
          SOCIETA’ A RESPONSABILITA’ LIMITATA SEMPLIFICATA” declina ogni responsabilità relativa ad eventuali problemi, danni o rischi che
          l’utente può incontrare durante l’utilizzo del sito. “RLLR SOCIETA’ A RESPONSABILITA’ LIMITATA SEMPLIFICATA” declina ogni
          responsabilità relativa ad eventuali malfunzionamenti legati alla disattivazione dei cookies nel browser dell’utente. “RLLR
          SOCIETA’ A RESPONSABILITA’ LIMITATA SEMPLIFICATA” si riserva il diritto di rettificare/riesaminare i termini e le condizioni
          contenute in questa nota legale, tramite un aggiornamento della stessa, ogni qualvolta lo ritenga opportuno, senza alcun obbligo
          di dare preavviso. L’utente è tenuto ad attenersi ai termini contenuti in questa avviso legale, controllandone periodicamente
          eventuali aggiornamenti, cambi e correzioni.
        </p>

        <h2>LEGGE ITALIANA</h2>

        <p>Il sito internet WWW.SOXPLAY.COM, aderendo alla legislazione italiana, dichiara: “Gli Utenti che accedono al presente sito
          dichiarano di accettare che tutte le questioni relative all’utilizzo del sito Web WWW.SOXPLAY.COM siano regolate dalla
          legislazione vigente dello Stato Italiano. Dichiarano inoltre di assoggettarsi esclusivamente alla competenza del Foro di Milano
          per le questioni sopracitate. “RLLR SOCIETA’ A RESPONSABILITA’ LIMITATA SEMPLIFICATA” non garantisce in alcun modo che il
          contenuto del sito sia conforme alle normative vigenti in altri paesi. L’accesso al sito WWW.SOXPLAY.COM da luoghi in cui i
          relativi contenuti sono considerati illegali è espressamente proibito. Gli Utenti che decidano di accedere al sito da tali paesi
          sono pienamente consapevoli delle conseguenze legali e delle sanzioni in cui rischiano di incorrere e saranno i soli responsabili
          del rispetto delle leggi locali.”
        </p>

        <h2>PRIVACY</h2>

        <p>“RLLR SOCIETA’ A RESPONSABILITA’ LIMITATA SEMPLIFICATA”  ideatore e promotore delle attività disponibili nel sito
          WWW.SOXPLAY.COM, si riserva il diritto di utilizzare i dati personali, forniti volontariamente dagli Utenti, nel rispetto delle
          vigenti normative (art. 13 e ss. D. Lgs. 196/2003). Si invitano pertanto gli Utenti a visitare periodicamente questa sezione per
          aggiornarsi su variazioni relative a modifiche della legislazione attuale. “RLLR SOCIETA’ A RESPONSABILITA’ LIMITATA SEMPLIFICATA”
          garantisce agli utenti che il trattamento dei dati personali sarà riservato ad utilizzi strettamente connessi e correlati alla
          prestazione dei propri servizi, alla facilitazione della gestione del sito e dell’evasione degli ordini. I dati volontariamente
          forniti dagli Utenti, non saranno in nessun caso comunicati o diffusi a terzi. In caso di pagamento con carta di credito, le
          informazioni fondamentali per l’esecuzione della transazione (numero della carta di credito/debito, data di scadenza, codice di
          sicurezza) saranno inviate all’ente responsabile del trattamento (Paypal, GestPay, Stripe), o eventualmente a società responsabili
          del controllo frodi, tramite protocollo crittografato, senza che terzi possano, in alcun modo, avervi accesso. Queste informazioni
          non saranno comunque mai visualizzate ne memorizzate da parte del Venditore (“RLLR SOCIETA’ A RESPONSABILITA’ LIMITATA
          SEMPLIFICATA”). “RLLR SOCIETA’ A RESPONSABILITA’ LIMITATA SEMPLIFICATA” adotta misure di sicurezza adeguate al fine di ridurre al
          minimo i rischi di distruzione o di perdita dei dati, di accesso non autorizzato o di trattamento non consentito o non conforme
          alle finalità di raccolta indicate nella nostra Privacy Policy. Tuttavia “RLLR SOCIETA’ A RESPONSABILITA’ LIMITATA SEMPLIFICATA”
          non può garantire ai propri utenti che le misure adottate per la sicurezza del sito e della trasmissione dei dati e delle
          informazioni sul sito siano in grado di limitare o escludere qualsiasi rischio di accesso non consentito o di dispersione dei dati
          da parte di dispositivi di pertinenza dell’utente. Per tale motivo, suggeriamo agli utenti del sito di assicurarsi che il proprio
          computer sia dotato di software adeguati per la protezione della trasmissione in rete di dati (ad esempio antivirus aggiornati) e
          che il proprio Internet provider abbia adottato misure idonee per la sicurezza della trasmissione di dati in rete. “RLLR SOCIETA’
          A RESPONSABILITA’ LIMITATA SEMPLIFICATA” informa che gli Utenti possono esercitare i diritti di cui all’articolo 7 D. Lgs.
          196/2003, qui di seguito riportato nella sua parte essenziale.
        </p>

        <p>Gli Utenti hanno il diritto di richiedere a “RLLR SOCIETA’ A RESPONSABILITA’ LIMITATA SEMPLIFICATA” le seguenti informazioni:
        </p>

        <ul>
          <li>La conferma dell’esistenza o meno di dati personali che lo riguardano</li>
          <li>La chiara comunicazione dei dati e della loro provenienza</li>
          <li>Il motivo e la finalità della loro esistenza e del loro utilizzo</li>
          <li>La richiesta delle informazioni sopra elencate può essere rinnovata con un intervallo minimo di 90 giorni, fatta eccezione per
            quei casi ove sussista giusta causa: cancellazione o modifica di tali dati a causa di violazione della legge; cancellazione di
            quei dati che non sono utilizzabili per i motivi per i quali sono stati raccolti.
          </li>
        </ul>

        <h1>Spedizioni</h1>

        <h2>SPEDIZIONI DATI DI SPEDIZIONE</h2>

        <p>Come richiesto dalle leggi che regolano il commercio, tutte le spedizioni WWW.SOXPLAY.COM  sono accompagnate da fattura ufficiale
          che dichiara il valore dei singoli articoli in Euro. Per gli articoli in saldo la fattura riporta gli importi scontati. DATA DI
          SPEDIZIONE Gli ordini sono spediti da WWW.SOXPLAY.COM , dal Lunedì al Venerdì con orario 9:00-17:30. Gli ordini effettuati il
          Sabato e la Domenica saranno processati a partire dal Lunedì mattina successivo. Gli articoli verranno consegnati al corriere
          entro 24 ore dalla ricezione dell’ordine. La consegna sul territorio nazionale (isole escluse) avviene in 24-48 ore dalla data di
          spedizione dai nostri magazzini. Per la consegna in Sicilia e Sardegna e luoghi difficilmente raggiungibili, i tempi di spedizione
          possono subire ritardi.
        </p>

        <h2>CONSEGNA AUTORIZZATA</h2>
        <p>Al momento dell’arrivo della merce, i Clienti sono pregati di ispezionare attentamente il pacco prima di apporre una firma a
          prova di avvenuta consegna della spedizione. Le confezioni WWW.SOXPLAY.COM  sono accuratamente imballate e sigillate con un nastro
          adesivo. Se per qualsiasi motivo, la confezione appare manomessa o se il nastro adesivo non risulta intatto, i Clienti sono
          pregati di firmare l’avvenuta ricezione con riserva, oppure di rifiutare la consegna. Nel caso in cui la consegna sia stata
          accettata con una firma non autorizzata o ci siano prove di manomissione del pacco, i Clienti sono pregati di riportare
          immediatamente l’accaduto all’ufficio locale dello spedizioniere e di contattare il nostro servizio di assistenza all’indirizzo:
          info@soxplay.com . Se per qualsiasi motivo la spedizione non riesce ad essere consegnata con successo all’indirizzo fornito dal
          Cliente nel contratto commerciale, il pacco rischia di essere rispedito al mittente a spese del Cliente stesso. Tali importi
          saranno dedotti dall’eventuale rimborso dovuto al Cliente da WWW.SOXPLAY.COM .
        </p>

        <h2>CONSEGNA DELL’ORDINE</h2>

        <p>Tutti i Clienti che effettuano un ordine stabiliscono un rapporto commerciale con WWW.SOXPLAY.COM  e si impegnano pertanto ad
          accettare la consegna del proprio pacco. Se per qualsiasi motivo il Cliente rifiuta la consegna della spedizione o richiede la
          restituzione al mittente, ogni spesa di spedizione, addebitata a WWW.SOXPLAY.COM , sarà dedotta dall’eventuale rimborso dovuto al
          Cliente.</p>
      </div>
    </div>
  `,
  styles: [`
    h1, h2, h3 {
      margin: 30px 0 20px 0;
    }

    .content {
      text-align: center;
      max-width: 900px;
      margin: 0 auto;
    }

    .content > ul, ol {
      text-align: start;
      padding-left: 40px;
      padding: 0 5px;
    }

    * {
      margin: 10px 0 10px 0;
    }

    a {
      text-transform: none;
    }
  `]
})
export class PrivacyPolicyComponent implements OnInit {

  constructor(public translate: TranslateService) {
  }

  ngOnInit() {
  }

}
