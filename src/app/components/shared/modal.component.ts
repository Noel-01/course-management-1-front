import { Component, ElementRef, Input, OnInit, OnDestroy } from '@angular/core';

import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-modal',
  template: `<div class="app-modal">
                <div class="app-modal-body">
                    <ng-content></ng-content>
                </div>
            </div>
            <div class="app-modal-background"></div>`
})
export class ModalComponent implements OnInit, OnDestroy {
  @Input() id: string;
  private element: any;

  constructor(private modalService: ModalService, private el: ElementRef) {
      this.element = el.nativeElement;
  }

  ngOnInit(): void {
      const modal = this;

      if (!this.id) {
          console.error('modal must have an id');
          return;
      }


      document.body.appendChild(this.element);


      this.element.addEventListener('click', function (e: any) {
          if (e.target.className === 'app-modal') {
              modal.close();
          }
      });
      this.modalService.add(this);
  }

  ngOnDestroy(): void {
      this.modalService.remove(this.id);
      this.element.remove();
  }

  open(): void {
      this.element.style.display = 'block';
      document.body.classList.add('app-modal-open');
  }

  close(): void {
      this.element.style.display = 'none';
      document.body.classList.remove('app-modal-open');
  }

}