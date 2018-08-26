import {OnDestroy, Pipe, PipeTransform} from '@angular/core';
import {GlobalVariablesService} from './global-variables.service';
import {ExchangeRateApi} from '../lb-services/services/custom';
import 'rxjs/add/operator/takeWhile';
import 'rxjs/add/operator/take';

@Pipe({
  name: 'currencyChange',
  pure: false,
})
export class CurrencyChangePipe implements PipeTransform, OnDestroy {
  static rates;
  alive = true;
  currency = 'eur';

  constructor(private global: GlobalVariablesService, private exchange: ExchangeRateApi) {
    this.currency = this.global.curr;
    if (!CurrencyChangePipe.rates) {
      this.exchange.get().take(1).subscribe(result => {
        CurrencyChangePipe.rates = result.exchanges;
      });
    }
    this.global.getCurrencySubject().takeWhile(() => this.alive).subscribe(val => {
      this.currency = val;
    });
  }

  transform(value: any, args?: any): any {
    if (!value || value === '') {
      return '';
    }
    if (this.currency === 'usd') {
      if (CurrencyChangePipe.rates && CurrencyChangePipe.rates['USDEUR'] && value) {
        return '$ ' + (value / CurrencyChangePipe.rates['USDEUR']).toFixed(2);
      } else if (CurrencyChangePipe['USDEUR'] && value) {
        return '$ ' + (value / CurrencyChangePipe['USDEUR']).toFixed(2);
      }
    } else {
      if (value) {
        return '€ ' + value.toFixed(2);
      }
    }
  }

  ngOnDestroy(): void {
    this.alive = false;
  }

}
