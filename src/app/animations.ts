import { trigger, style, animate, transition, state } from '@angular/animations';

export const fade = [
  trigger('fade', [
    state('in', style({ 'opacity': '1', transform: 'translateX(0)' })),
    state('out', style({ 'opacity': '0', transform: 'translateX(5%)' })),
    transition('* <=> *', [
      animate(100)
    ])
  ])
];
