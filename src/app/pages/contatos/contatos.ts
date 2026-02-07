import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contatos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contatos.html',
  styleUrl: './contatos.scss',
})
export class Contatos {

  loading = false;
  success = false;
  buttonError = false;

  subjects = [
    'Orçamento',
    'Suporte',
    'Parceria',
    'Dúvidas gerais',
    'Outros'
  ];

  checkFilled(e: Event) {
    const input = e.target as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;
    const parent = input.closest('.input-box');

    if (input.value.trim() !== '') {
      parent?.classList.add('filled');
    } else {
      parent?.classList.remove('filled');
    }
  }

  // AUTO MASK TELEFONE INTELIGENTE
  formatPhone(e: Event) {
    const input = e.target as HTMLInputElement;
    let value = input.value.replace(/\D/g, '');

    if (value.length > 11) value = value.slice(0, 11);

    if (value.length >= 11) {
      value = value.replace(/^(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3');
    } 
    else if (value.length >= 10) {
      value = value.replace(/^(\d{2})(\d{4})(\d{4})$/, '($1) $2-$3');
    } 
    else if (value.length > 2) {
      value = value.replace(/^(\d{2})(\d{0,5})$/, '($1) $2');
    } 
    else if (value.length > 0) {
      value = value.replace(/^(\d{0,2})$/, '($1');
    }

    input.value = value;
    this.checkFilled(e);
  }

  sendEmail(e: Event, formRef: any) {
    e.preventDefault();

    // INVALID FORM FEEDBACK
    if (!formRef.valid) {
      Object.values(formRef.controls).forEach((control: any) => {
        control.markAsTouched();
      });

      this.buttonError = true;
      setTimeout(() => this.buttonError = false, 600);
      return;
    }

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

      form.reset();
      formRef.resetForm();

      document.querySelectorAll('.input-box').forEach(el => {
        el.classList.remove('filled');
      });

      setTimeout(() => {
        this.success = false;
      }, 3500);
    })
    .catch(() => {
      this.loading = false;
      alert('Erro ao enviar. Tente novamente.');
    });
  }
}
