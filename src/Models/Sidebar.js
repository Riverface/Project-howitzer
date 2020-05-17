import $ from 'jquery';

export class Sidebar
{
  static log(info) {
    $(".sidebarLog").prepend(`<div>${info}</div>`);
  }
}
