import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

// declare global {
//   interface Window {
//     grecaptcha?: any;
//     onCaptchaSuccess?: (token: string) => void;
//   }
// }

@Component({
  selector: 'app-contatos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contatos.html',
  styleUrl: './contatos.scss',
})
export class Contatos {

  // captchaToken: string | null = null;

  loading = false;
  success = false;

  subjects = [
    'Orçamento',
    'Suporte',
    'Parceria',
    'Dúvidas gerais',
    'Outros'
  ];

  // ngAfterViewInit() {
  //   if (typeof window !== 'undefined') {
  //     window.onCaptchaSuccess = (token: string) => {
  //       this.captchaToken = token;
  //     };
  //   }
  // }

  // FLOAT LABEL ACTIVE
  checkFilled(e: Event) {
    const input = e.target as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;
    const parent = input.closest('.input-box');

    if (input.value.trim() !== '') {
      parent?.classList.add('filled');
    } else {
      parent?.classList.remove('filled');
    }
  }

  // TELEFONE FORMATADO (XX) XXXXX-XXXX
  formatPhone(e: Event) {
    const input = e.target as HTMLInputElement;

    let value = input.value.replace(/\D/g, '');

    if (value.length > 11) value = value.slice(0, 11);

    if (value.length > 6) {
      value = value.replace(/^(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3');
    } else if (value.length > 2) {
      value = value.replace(/^(\d{2})(\d{0,5})$/, '($1) $2');
    } else if (value.length > 0) {
      value = value.replace(/^(\d{0,2})$/, '($1');
    }

    input.value = value;
    this.checkFilled(e);
  }

  public sendEmail(e: Event) {
    e.preventDefault();

    // if (!this.captchaToken) {
    //   alert('Confirme o reCAPTCHA antes de enviar.');
    //   return;
    // }

    this.loading = true;
    this.success = false;

    const form = e.target as HTMLFormElement;

    emailjs.sendForm(
      'service_6bqawn1',
      'template_x8d77lb',
      form,
      'nG5YTy3_IfjVKTB5Z'
    )
    .then(() => {
      this.loading = false;
      this.success = true;

      // form.reset();
      // this.captchaToken = null;

      document.querySelectorAll('.input-box').forEach(el => {
        el.classList.remove('filled');
      });

      // if (window.grecaptcha) {
      //   window.grecaptcha.reset();
      // }

      setTimeout(() => {
        this.success = false;
      }, 3500);
    })
    .catch((error) => {
      this.loading = false;
      alert('Erro ao enviar: ' + (error as EmailJSResponseStatus).text);
    });
  }
}
