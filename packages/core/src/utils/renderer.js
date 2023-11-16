import { Lexer, Marked,inline } from "marked";

const rules={
    inline:{
        ...inline,
        owo: /^:(\S*):/,
        text:/^(`+|[^`])(?:[\s\S]*?(?:(?=[\\<!\[`:f*]|\b_|$)|[^ ](?= {2,}\n))|(?= {2,}\n))/,
        gfm:{
            ...inline.gfm,
            text:/^(`+|[^`])(?:[\s\S]*?(?:(?=[\\<!\[`:f*~]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))|(?= {2,}\n|[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))/
        }
    }
}

const marked=new Marked()
marked.setOptions({
    gfm: true,
    tables: true,
    breaks: true,
    pedantic: false,
    smartLists: true,
    smartypants: true
})

export {marked}