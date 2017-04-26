import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name:'markdown'})
export class MarkdownPipe implements PipeTransform {
    transform(value: string, arg?: any): any {
      return processText(value);
    }
}


function processText(text) {


    //headers
    let exp = /(#+)(.*)/)/g;
    text = text.replace(exp, "self::header");
    //links
    exp = /\[([^\[]+)\]\(([^\)]+)\)/g;
    text = text.replace(exp, "<a href='$2' target='_blank'>$2</a>");
    //bold
    exp = /(\*\*|__)(.*?)\1/g;
    text = text.replace(exp, "<strong>$2</strong>");
    //emphasis
    exp = /(\*|_)(.*?)\1/g;
    text = text.replace(exp, "<em>$2</em>");
    //deletions
    exp = /\~\~(.*?)\~\~/g;
    text = text.replace(exp, "<del>$1</del>");
    //quote
    exp = /\:\"(.*?)\"\:/g;
    text = text.replace(exp, "<q>$1</q>");
    //inline code
    exp = /`(.*?)`/g;
    text = text.replace(exp, "<code>$1</code>");
    // ul list
    exp = /\n\*(.*)/g;
    text = text.replace(exp, "self::ul_list");
    //ol list
    exp = /\n[0-9]+\.(.*)/g;
    text = text.replace(exp, "self::ol_list");
    //blockquote
    exp = /\n(&gt;|\>)(.*)/g;
    text = text.replace(exp, "self::blockquote");
    //horizontal rule
    exp = /\n-{5,}/g;
    text = text.replace(exp, "\n<hr />"); 
    //add paragraph
    exp = /\n([^\n]+)\n/g;
    text = text.replace(exp, "self::para");
    //fix extra ul
    exp = /<\/ul>\s?<ul>/g;
    text = text.replace(exp, " ");
    //fix extra ol
    exp = /<\/ol>\s?<ol>/g;
    text = text.replace(exp, " ");
    //fix extra blockquote
    exp = /<\/blockquote><blockquote>/g;
    text = text.replace(exp, "/n");

    return text;
}

