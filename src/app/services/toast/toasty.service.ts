import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class ToastyService {

  constructor(
    private messageService: MessageService
  ) { }

  success(message: string) {
    const firstCharacter = message.charAt(0).toUpperCase()
    const messageUpdated = firstCharacter + message.slice(1)
    this.messageService.add({ severity: 'success', summary: `${messageUpdated} Successfully`, detail: '¡¡Congratulations!! \u{1F600}' })
  }

}
