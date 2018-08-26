import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-payments',
  template: `
    <div *ngIf="translate.currentLang === 'en'">
      <div class="content">
        <h1>Payments</h1>
        <h3>PRICES AND CURRENCIES</h3>
        The orders are invoiced in Euro and correspond to the prices in Euro reported on our website. The amount that will be debited on
        your credit card or your Paypal account may vary as it is based on fluctuating exchange rates and bank commissions. WWW.SOXPLAY.COM
        invites customers to contact their bank to request detailed information on exchange rates and bank commissions related to their
        transaction.
        <h3>PAYMENT FORMS</h3>
        On WWW.SOXPLAY.COM the following forms of payment are accepted:
        <h3>PAYMENTS WITH CREDIT CARD, PAYPAL, GESTPAY or STRIPE</h3>
        Since all transactions are processed by Paypal, GestPay and Stripe, customers of WWW.SOXPLAY.COM are guaranteed maximum security on
        their purchases. The Customer Service operators of WWW.SOXPLAY.COM are not authorized to request or accept credit card numbers and /
        or extremes of validity of the same. In order to guarantee higher protection on purchases made in the e-commerce, WWW.SOXPLAY.COM
        recommends its Customers to join the Verified By Visa or Mastercard Securecode services, requesting a PIN security code to purchase
        in all safety. For more information, please visit the website:
        www.paypal.it; www.gestpay.it; www.stripe.com
        <h3>PAGAMENTI WITH PAYPAL ACCOUNT</h3>
        Choosing the PAYPAL payment method, the customer can pay directly through his verified Paypal account. WWW.SOXPLAY.COM only accepts
        Paypal payments from Verified accounts and reserves the right to send the goods to the address indicated on the account verified by
        Paypal. Payments sent from unverified Paypal accounts will be canceled. We wish to remind our new customers that payments made
        through the Paypal system, with a Verified account, are not delayed for bank verification.
        <h3>STATE OF THE ORDER</h3>
        Customers can request information on the status of their order by sending an email to info@soxplay.com. In the e-mail is required to
        indicate the name and surname of the customer who placed the order and the order number.
        <h3>CHANGES IN THE ORDER</h3>
        We wish to remind our customers that once confirmed and processed, the orders of items already available can not be changed. Orders
        placed separately will be shipped separately.
      </div>
    </div>
    <div *ngIf="translate.currentLang === 'it'">
      <div class="content">
        <h1>Pagamenti</h1>
        <h3>PREZZI E VALUTA</h3>
        Gli ordini sono fatturati in Euro e corrispondono ai prezzi in Euro riportati sul nostro sito. La somma che sarà addebitata sulla
        carta di credito o sul vostro conto Paypal può variare poichè basata su regimi di cambio a fluttuazione e sulle commissioni
        bancarie. WWW.SOXPLAY.COM  invita i clienti a contattare il proprio istituto bancario per richiedere informazioni dettagliate sui
        tassi di cambio e commissioni bancarie relative alla propria transazione.
        <h3>FORME DI PAGAMENTO</h3>
        Su WWW.SOXPLAY.COM  sono accettate le seguenti forme di pagamento:
        <h3>PAGAMENTI CON CARTA DI CREDITO PER MEZZO PAYPAL, GESTPAY o STRIPE</h3>
        Poiché tutte le transazioni sono processate da Paypal, GestPay e Stripe, ai Clienti di WWW.SOXPLAY.COM  è garantita la massima
        sicurezza sull’acquisto. Gli operatori del Servizio Clienti di WWW.SOXPLAY.COM  non sono in nessun modo autorizzati a richiedere o
        ad accettare numeri di carta di credito e/o estremi di validità della stessa. Al fine di garantire maggiore tutela sugli acquisti
        effettuati in ambito e-commerce, WWW.SOXPLAY.COM  raccomanda ai propri Clienti di aderire ai servizi Verified By Visa o Mastercard
        Securecode, richiedendo un codice di sicurezza PIN con cui poter effettuare i propri acquisti in tutta sicurezza. Per maggiori
        informazioni si prega di visitare il sito: www.paypal.it; www.gestpay.it; www.stripe.com
        <h3>PAGAMENTI CON CONTO PAYPAL</h3>
        Scegliendo il metodo di pagamento PAYPAL il cliente può pagare direttamente tramite il Suo conto verificato Paypal. WWW.SOXPLAY.COM
         accetta solo pagamenti Paypal provenienti da conti Verificati e si riserva il diritto di spedire la merce all’indirizzo indicato
        sull’account verificato da Paypal. I Pagamenti inviati da conti Paypal non verificati saranno annullati. Desideriamo ricordare ai
        nostri nuovi clienti che i pagamenti effettuati tramite il sistema Paypal, con un conto Verificato, non subiscono alcun ritardo per
        la verifica bancaria.
        <h3>STATO DELL’ORDINE</h3>
        I Clienti possono richiedere informazioni sullo stato del proprio ordine inviando un’e-mail all’indirizzo info@soxplay.com .
        Nell’e-mail occorre indicare il nome ed il cognome con cui si è effettuato l’ordine ed il numero d’ordine.
        <h3>MODIFICHE DELL’ORDINE</h3>
        Desideriamo ricordare ai nostri clienti che una volta confermati ed evasi, gli ordini di articoli già disponibili non possono essere
        modificati. Gli ordini effettuati separatamente saranno spediti separatamente.
      </div>
    </div>
  `,
  styles: [`
    .content {
      max-width: 900px;
      text-align: center;
      margin: 0 auto;
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
export class PaymentsComponent implements OnInit {

  constructor(public translate: TranslateService) {
  }

  ngOnInit() {
  }

}
