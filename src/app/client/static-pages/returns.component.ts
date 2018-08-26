import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-returns',
  template: `
    <div *ngIf="translate.currentLang === 'en'">
      <div class="content">
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
      padding: 0 5px;
      margin: 0 auto;
    }

    .content > ul, ol {
      text-align: start;
      padding-left: 40px;
    }

    * {
      margin: 10px 0 10px 0;
    }

    a {
      text-transform: none;
    }`]
})
export class ReturnsComponent implements OnInit {

  constructor(public translate: TranslateService) {
  }

  ngOnInit() {
  }

}
