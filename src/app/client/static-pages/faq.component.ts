import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-faq',
  template: `
    <div *ngIf="translate.currentLang === 'en'">
      <div class="content">
        <h1>SOXPLAY FAQ</h1>
        <h2>SHIPPING & DELIVERY</h2>

        <li>ORDER</li>
        <strong>Can I change my order (quantity, size, style, address,etc..) after I have placed it?</strong><br>
        <p>It is difficult to change your order once is confirmed. We do our best to ship all orders very quickly and we process them within
          1 day.
          <br>But if a change is necessary please contact us at info@soxplay.com and we will do our best to help you.</p>

        <strong>What can I do if I receive a wrong product/size? And if a product is missing?</strong><br>
        <p>Please contact us at info@soxplay.com and decide If you want a new product or a refund.</p>

        <li>DELIVERY</li>
        <strong>How long does the delivery take?</strong><br>
        <p>All orders are shipped from our warehouse in Italy. The delivery time depends on the destination country. Please keep in mind
          that all times are estimates and depend on the local postal service in your country.
          <br>Please note also that during final sales and holiday season (August/December) delivery times can be longer.</p>

        <strong>What can I do if my order hasn't been delivered yet?</strong><br>
        <p>Your estimated delivery date depends on the local postal service in your country.
          <br>If your estimated delivery date has passed by more than 5 working days and you haven’t received your order, please contact us
          at info@soxplay.com and provide us your name, surname and order number.
          <br>Please note that during final sales and the holiday season (August/December) delivery times can be longer than usual.</p>

        <strong>Can I track my order?</strong><br>
        <p>You can track your order from our site WWW.SOXPLAY.COM.</p>

        <strong>Which countries do you ship to?</strong><br>
        <p>We ship everyhere.</p>
        <strong>How much do you charge for shipping?</strong><br>
        <p>Spending €27 or more you'll get free shipping. Otherwise a shipping charge of €3 will be added to your order.
          <br>Orders to countries within the EU are subject to VAT which is included in the price. Orders to countries outside the EU may be
          subject to VAT, import duties and/or taxes, which are levied once your package reaches your country. We ship your package
          according to Incoterm Delivered Duty Unpaid (DDU), which means we do not collect VAT, duties and/or taxes on orders to countries
          outside the USA & EU and we cannot predict what your particular charges may be, you have to contact your local customs office for
          more information.</p>


        <h2>RETURNS & EXCHANGES</h2>
        <li>RETURNS POLICY</li>
        <strong>What about Soxplay Return Policy?</strong><br>
        <p>You can return all products you have bought from www.soxplay.com and request a refund or exchange within 30 days of receiving
          them.
          <br>To return or exchange an item, it must be unused and with all the labels and packaging intact; in case of return or exchange
          of any product, you have to cover the shipping charges. Please also note that you will not be reimbursed for the original shipping
          charges. Any refunds made by us will be processed back to the original payment method when you placed your order.
          <br><br>
          <br>We do not take any responsibility for items lost during the return shipping.
          <br><strong>Items bought from www.soxplay.com can not be returned or exchanged in a retail store.</strong></p>

        <h2>RETURNS & EXCHANGE PROCESS</h2>
        <strong>How can I return or exchange the products I bought on Soxplay.com?</strong><br>
        <p>Returns & Exchange Process</p>
        <ol>
          <li>Please contact us at info@soxplay.com providing us your name, surname, order number and style number and size of the product/s
            you want to return and the instructions on how we should process your return (e.g. refund, exchange to another size, style,
            etc.); if you want to exchange, you need to clarify the new product you want by specifying style number and size; the style
            chosen must have equal or lesser price of the item/s returned.
          </li>
          <li>When you receive our return e-mail with all the info for the return and the address to ship the goods you want to return,
            please send us back the items you want to return.
          </li>
        </ol>
        <p>When we receive your return shipment, we will process your request and send you an email confirmation. Please note that we do not
          cover any return shipping cost and you are responsible for items lost in shipping.
          <br><br>If you have any other questions regarding the process, please contact us at info@soxplay.com</p>

        <h2>PAYMENT & SECURITY</h2>

        <li>PAYMENT METHODS</li>
        <strong>How can I pay for my order?</strong><br>
        <p>We accept Visa, MasterCard, American Express and PayPal, as well as various local debit cards and invoicing options. The total
          amount (price of order + shipping) will be withdrawn from your account when the order is completed and approved.</p>

        <li>SECURITY</li>

        <strong>Is my payment information safe?</strong><br>
        <p>All transactions are handled by PayPal, GestPay and Stripe payment services. Your credit card number is sent to your bank via an
          encrypted connection.</p>

        <li>CURRENCY</li>
        <strong>Which currency is used on the website?</strong><br>
        <p>All the prices on www.soxplay.com are in Euro. They exclude possible shipping charges, which are calculated and added at
          checkout.</p>
        <p>Soxplay is not responsible for any changes in currency value or conversion rates that your bank or credit card company may use
          when charging in your country’s currency.</p>

        <li>FEES</li>
        <strong>Will my parcel be charged customs and import charges?</strong><br>
        <p>Within the EU there are no customs or import charges.</p>
        <p>Orders to countries outside the EU may be subject to VAT, import duties and/or taxes, which are levied once your package reaches
          your country. We ship your package according to Incoterm Delivered Duty Unpaid (DDU), which means we do not collect VAT, duties
          and/or taxes on orders to countries outside the USA & EU and we cannot predict what your particular charges may be, you have to
          contact your local customs office for more information.</p>

        <h2>PRODUCTS</h2>

        <li>SOCKS</li>
        <p>Available for men and women – unisex.</p>
        <p>Composition: 63%-65% Cotton, 33%-35% Nylon, 2% Lycra depending on design</p>
        <p>Description: Elastic cuff, reinforced heel</p>
        <p>Sizing: Please find information about sizing and our size charts below.</p>
        <p>Made in India</p>

        <li>SOCKS - CARE INSTRUCTIONS</li>

        <strong>How should I wash and care for my socks?</strong><br>
        <p>We work hard to ensure that our socks are of the highest quality possible. However, the life span can vary depending on the care
          and handling of your Soxpaly.</p>
        <p>For our socks we recommend a washing temperature of 40°C/104°F.</p>
        <p>All socks should be turned inside out and bleaching or ironing should be avoided. Even though our socks are durable, they will
          last longer if they are kept out of the tumble dryer.</p>
        <p>Important: When putting on your brand new pair of Soxplay, please take the time to cut the thread on the label with a pair of
          scissors instead of ripping it off as this will damage the socks.</p>

        <h2>QUALITY & PRODUCTION</h2>

        <li>PRODUCTION</li>
        <strong>How do you manufacture your products?</strong><br>
        <p>Soxplay products are produced in India. Soxplay ensures that suppliers have high standards by keeping close contact with all of
          them through regular visits and inspections at all their factories.</p>
        <p>We carry out on site audits at least once a year that are performed by staff from our Italy headquarters. Furthermore, we have a
          local production office in Mumbai, India that has daily contact with our suppliers and regularly visits them. During these visits
          production standards are controlled.</p>

        <li>QUALITY</li>

        <strong>How do you ensure the quality of your products?</strong><br>
        <p>Soxplay pays close attention to the production of its collections and only uses the best materials and the sharpest designs. A
          meticulous care for detail allows Soxplay to maintain and constantly develop the product quality. The life span of the products
          varies depending on the care and handling. Make sure you check our care instructions which can be found here.</p>

        <li>WARRANTY</li>

        <strong>What do I do if I receive a faulty item in my order?</strong><br>
        <strong>Soxplay Warranty Process</strong><br>
        <p>We work hard to ensure that our products are of the highest quality possible. Tests during production and before shipping are
          performed to ensure the quality of every single product. Should you come across a product that does not live up to these
          standards, please follow the steps below:
        </p>
        <p>If you have bought your Soxplay product in a store, please get in touch with the store directly to resolve the problem. Most
          stores have their own warranty policy and should be able to help you.
        </p>
        <p>If you have bought your Soxplay product in our online shop at www.soxplay.com, please take a photo of the faulty product, attach
          it to an email in which you describe the issue, and send it to info@soxplay.com. We will then review your claim with our
          production team and decide how to go forward.
        </p>

        <h2>WEBSITE & TROUBLESHOOTING</h2>

        <li>WEBSITE</li>

        <strong>What can I do if I can't find a product on soxplay.com?</strong><br>
        <p>You can search for a product entering the style name/number in the product search bar</p>
        <strong>Which browser do you support?</strong><br>
        <p>Soxplay.com support all the most common web browsers. Should you encounter any problems, we recommend that you try Mozilla
          Firefox, Explorer, Safari or Chrome.
        </p>
        <strong>Do the colours on the website reflect the original product?</strong><br>
        <p>All the pictures of the products on soxplay.com are photographed to be as representative as possible to the real product.
          Considering that computer screens and screen settings are different, we can’t guarantee that the socks on your screen will look
          identical to the socks in your hand. However, the difference is usually barely noticeable and they still look great.
        </p>
        <strong>I can’t pay my order or I have problems with the checkout?</strong><br>
        <p>If you can’t pay on soxplay.com, please try the following steps:</p>
        <ol>
          <li>Refresh your browser window</li>
          <li>If a message stating that your item(s) are not in stock anymore, the problem could be that some items in your cart got sold
            out while you were placing the order. Please check and remove sold out items by clicking the small X next to the item.
          </li>
          <li>Make sure your address does not contain any invalid characters (for instance: / ( & € * # and so on)</li>
          <li>Payment attempts could potentially be denied by your bank. Please get in touch with your bank to find out if this is the case.
            They will also be able to help you and unlock your card to allow you to re-try.
          </li>
          <li>If none of the above works, try placing your order on a different browser or clear your internet browser cookies and try
            again.
          </li>
        </ol>

        <p>*If none of the above suggestions resolve your checkout issue, please contact support at info@soxplay.com.</p>
        <strong>When I click on the "buy" button nothing happens. What can I do?</strong><b></b>
        <p>Please try to clear the cookies in your browser before you place the order.</p>
        <ol>
          <li>Go to Tools</li>
          <li>Clear history</li>
          <li>Clear cookies</li>
          <li>Afterwards, please restart/refresh your browser.</li>
        </ol>
        <p>*This path might be slightly different depending on the browser you use.</p>
        <p>If you still cannot place your order, please contact support at info@soxplay.com.</p>

        <strong>I have placed an order but I haven't received any confirmation email. What can I do?</strong><br>
        <p>Please check your spam folder because our confirmation email could be end up in there.</p>
        <p>The order confirmation should be sent just after order confirmation, but it can happen that there is a delay. If you have not
          received anything after 24 h, please contact us at info@soxplay.com.</p>

        <h2>GIFTS</h2>

        <li>GIFT WRAPPING</li>
        <strong>If I want to make a gift, do you offer gift wrapping or personal messages?</strong><br>
        <p>At the moment we are not still able to offer the option of gift wrapping or personalized messages. </p>

        <li>GIFT BOXES</li>
        <strong>Soxplay Gift Boxes</strong><br>
        <p>Our gift boxes are pre-packed and sold only with the exact socks combination displayed on the product page and all the designs
          are in the same size. The content can not be changed or personalized.
        </p>
        <p>The gift boxes can not be purchased separately.
        </p>
        <p>The sock gift boxes contain six single sock and are available in sizes 36-40 as well as 41-46.
        </p>
        
        <strong>Can I unsubscribe from the Soxplay newsletter?</strong><br>
        
        <p>If you would like to unsubscribe from our newsletter, please follow these steps:</p>
        <ol>
          <li>Scroll all the way down to the bottom of your Soxplay newsletter and look for the dedicated link to unsubscribe</li>
          <li>Click the link to unsubscribe to no longer receive any future information and updates from Soxplay</li>
          <li>You will be redirected to a confirmation screen, which will show that you have been successfully unsubscribed</li>
          <li>Trouble finding the unsubscribe button? Please use the search function of your browser or email program to locate it in your window</li>
        </ol>
        
        <h2>USEFUL CONTACTS</h2>
        
        <li>SALES - WHOLESALE & RETAIL</li>
        
        <strong>I want to sell Soxplay -  what can I do?</strong><br>
        <p>Please contact us to the following address:</p>
        <strong>info@soxplay.com</strong>
        <p>Personalized socks and bulk order</p>
        
        <strong>Do you want a personalized Soxplay socks with your own design? Or do you need a bulk order?</strong><br>
        <p>Please send your request t info@soxplay.com</p>
        <ul>
          <li>Business Name, VAT-number, Full invoice Address </li>
          <li>Country</li>
          <li>Contact details (name, phone, and Email)</li>
          <li>Quantities requested</li>
          <li>Any relevant additional information.</li>
        </ul>
        
        <li>SOCIAL MEDIA & MARKETING</li>
        <strong>I want to collaborate with soxplay on Social Media – whAT CAN I do?</strong><br>
        <p>Please contact us to the following address: info@soxplay.com</p>
        
        <li>ONLINE MARKETING</li>
        <strong>I want to become an Affiliate or start an Online Partnership with Soxplay – what can I do?</strong><br>
        <p>Please contact us to the following address</p>
        <strong>info@soxplay.com</strong>
      </div>
    </div>
  `,
  styles: [`
    h1, h2, h3 {
      text-align: center;
      margin: 30px 0 20px 0;
    }
    .content {
      max-width: 900px;
      margin: 0 auto;
      padding: 0 5px;
    }
    .content> ul, ol {
      padding-left: 40px;
    }

    * {
      margin: 10px 0 10px 0;
    }

    a {
      text-transform: none;
    }
  `]
})
export class FAQComponent implements OnInit {

  constructor(public translate: TranslateService) {
  }

  ngOnInit() {
  }

}
