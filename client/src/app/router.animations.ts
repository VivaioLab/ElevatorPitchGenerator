import {sequence, trigger, stagger, animate, style, group, query, transition, keyframes, animateChild} from '@angular/animations';
// const query = (s,a,o={optional:true})=>q(s,a,o);

import { ChangeDetectorRef } from "@angular/core";
import { Component } from "@angular/core";
type Orientation = ( "prev" | "next" | "none" );

export const routerTransition = trigger('routerTransition', [
  transition('* => *', [
    query(':enter, :leave', style({ position: 'fixed', width:'100%' }), {optional: true}),
    query(':enter', style({ transform: 'translateX(100%)' }), {optional: true}),
    sequence([
      query(':leave', animateChild(), {optional: true}), 
      group([
        query(':leave', [
          style({ transform: 'translateX(0%)' }),
          animate('1s cubic-bezier(.75,-0.48,.26,1.52)', 
            style({ transform: 'translateX(-100%)' }))
        ], {optional: true}),
        query(':enter', [
          style({ transform: 'translateX(100%)' }),
          animate('1s cubic-bezier(.75,-0.48,.26,1.52)', 
            style({ transform: 'translateX(0%)' })),
        ], {optional: true}),
      ]),
      query(':enter', animateChild(), {optional: true}),
    ])
  ])

//   transition(
//     "void => prev", // ---> Entering --->
//     [
//         // In order to maintain a zIndex of 2 throughout the ENTIRE
//         // animation (but not after the animation), we have to define it
//         // in both the initial and target styles. Unfortunately, this
//         // means that we ALSO have to define target values for the rest
//         // of the styles, which we wouldn't normally have to.
//         style({
//             left: -100,
//             opacity: 0.0,
//             zIndex: 2
//         }),
//         animate(
//             "200ms ease-in-out",
//             style({
//                 left: 0,
//                 opacity: 1.0,
//                 zIndex: 2
//             })
//         )
//     ]
// ),
// transition(
//   "prev => void", // ---> Leaving --->
//   [
//       animate(
//           "200ms ease-in-out",
//           style({
//               left: 100,
//               opacity: 0.0
//           })
//       )
//   ]
// ),
// transition(
//   "void => next", // <--- Entering <---
//   [
//       // In order to maintain a zIndex of 2 throughout the ENTIRE
//       // animation (but not after the animation), we have to define it
//       // in both the initial and target styles. Unfortunately, this
//       // means that we ALSO have to define target values for the rest
//       // of the styles, which we wouldn't normally have to.
//       style({
//           left: 100,
//           opacity: 0.0,
//           zIndex: 2
//       }),
//       animate(
//           "200ms ease-in-out",
//           style({
//               left: 0,
//               opacity: 1.0,
//               zIndex: 2
//           })
//       )
//   ]
// ),
// transition(
//   "next => void", // <--- Leaving <---
//   [
//       animate(
//           "200ms ease-in-out",
//           style({
//               left: -100,
//               opacity: 0.0
//           })
//       )
//   ]
// )

]);
// export default {};