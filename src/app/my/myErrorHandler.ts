import { ErrorHandler, Injectable} from '@angular/core';

@Injectable()
export class myErrorHandler implements ErrorHandler{
 handleError(error) {
     console.log('Hi ');
     throw error;
  }
}
