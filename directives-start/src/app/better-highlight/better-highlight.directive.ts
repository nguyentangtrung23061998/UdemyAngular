import { Directive, Renderer2, OnInit,ElementRef, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{
  @Input() defaultColor:string='transparent';
  @Input() highlightColor:string='blue';
  // @HostBinding('style.backgroundColor') backgroundColor:string = 'transparent';
  @HostBinding('style.backgroundColor') backgroundColor:string = this.defaultColor;

  constructor(private elRef:ElementRef,private render:Renderer2) { }

  ngOnInit(){
    this.backgroundColor = this.defaultColor;
    //this.render.setStyle(this.elRef.nativeElement,'background-color','red');
  }

  @HostListener('mouseenter') mouseover(evenData:Event){
    //this.render.setStyle(this.elRef.nativeElement,'background-color','blue');
    // this.backgroundColor = 'blue';
    this.backgroundColor=this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave(evenData:Event){
  //  this.render.setStyle(this.elRef.nativeElement,'background-color',"yellow");
    // this.backgroundColor='transparent';
    this.backgroundColor=this.defaultColor;
  }
}
