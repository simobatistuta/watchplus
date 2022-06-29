import { animate, group, query, style, transition, trigger } from "@angular/animations";

export const slider = 
trigger('routeAnimations', [

    transition('page_1 => page_2', slideTo('top')),
    transition('page_1 => page_3', slideTo('top')),
    transition('page_1 => page_4', slideTo('top')),

    transition('page_2 => page_3', slideTo('top')),
    transition('page_2 => page_4', slideTo('top')),
    transition('page_3 => page_4', slideTo('top')),

    //up 
    transition('page_4 => page_1', slideTo('bottom')),
    transition('page_4 => page_2', slideTo('bottom')),
    transition('page_4 => page_3', slideTo('bottom')),

    transition('page_3 => page_2', slideTo('bottom')),
    transition('page_3 => page_1', slideTo('bottom')),

    transition('page_2 => page_1', slideTo('bottom')),

])

function slideTo(ref: string){
    return[
        query(':enter, :leave', style({
            position: 'absolute',
            width: '100%',
            height: '100%',

        })) ,
        query(':enter', style({
            [ref]: '100%'

        })),
        query(':leave', style({
            [ref]: '0%'
        })),
        group([
            query(':enter',[
                animate('600ms ease', style({
                    [ref]: '0%'

                }))
            ]),
            query(':leave',[
                animate('600ms ease', style({
                    [ref]: '-100%'

                }))
            ]),
        ])
    ];  
}