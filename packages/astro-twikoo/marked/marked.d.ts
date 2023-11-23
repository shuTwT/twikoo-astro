/**
 * Block Lexer
 */
declare class Lexer {
    /**
     * Expose Rules
     */
    static get rules(): {
        block: {
            newline: RegExp;
            code: RegExp;
            fences: RegExp;
            hr: RegExp;
            heading: RegExp;
            blockquote: RegExp;
            list: RegExp;
            html: string;
            def: RegExp;
            table: {
                exec: () => void;
            };
            lheading: RegExp;
            _paragraph: RegExp;
            text: RegExp;
        };
        inline: {
            owo: RegExp;
            escape: RegExp;
            autolink: RegExp;
            url: {
                exec: () => void;
            };
            tag: string;
            link: RegExp;
            reflink: RegExp;
            nolink: RegExp;
            reflinkSearch: string;
            emStrong: {
                lDelim: RegExp;
                rDelimAst: RegExp;
                rDelimUnd: RegExp;
            };
            code: RegExp;
            br: RegExp;
            del: {
                exec: () => void;
            };
            text: RegExp;
            punctuation: RegExp;
        };
    };
    /**
     * Static Lex Method
     */
    static lex(src: any, options: any): any[];
    /**
     * Static Lex Inline Method
     */
    static lexInline(src: any, options: any): any[];
    constructor(options: any);
    tokens: any[];
    options: any;
    tokenizer: any;
    inlineQueue: any[];
    state: {
        inLink: boolean;
        inRawBlock: boolean;
        top: boolean;
    };
    /**
     * Preprocessing
     */
    lex(src: any): any[];
    /**
     * Lexing
     */
    blockTokens(src: any, tokens?: any[]): any[];
    inline(src: any, tokens?: any[]): any[];
    /**
     * Lexing/Compiling
     */
    inlineTokens(src: any, tokens?: any[]): any[];
}

/**
 * TextRenderer
 * returns only the textual part of the token
 */
declare class TextRenderer {
    strong(text: any): any;
    em(text: any): any;
    codespan(text: any): any;
    del(text: any): any;
    html(text: any): any;
    text(text: any): any;
    link(href: any, title: any, text: any): string;
    image(href: any, title: any, text: any): string;
    br(): string;
}

/**
 * Slugger generates header id
 */
declare class Slugger {
    seen: {};
    serialize(value: any): any;
    /**
     * Finds the next safe (unique) slug to use
     */
    getNextSafeSlug(originalSlug: any, isDryRun: any): any;
    /**
     * Convert string to unique id
     * @param {object} options
     * @param {boolean} options.dryrun Generates the next unique slug without updating the internal accumulator.
     */
    slug(value: any, options?: {
        dryrun: boolean;
    }): any;
}

/**
 * Parsing & Compiling
 */
declare class Parser {
    /**
     * Static Parse Method
     */
    static parse(tokens: any, options: any): string | undefined;
    /**
     * Static Parse Inline Method
     */
    static parseInline(tokens: any, options: any): string | undefined;
    constructor(options: any);
    options: any;
    renderer: any;
    textRenderer: TextRenderer;
    slugger: Slugger;
    /**
     * Parse Loop
     */
    parse(tokens: any, top?: boolean): string | undefined;
    /**
     * Parse Inline Tokens
     */
    parseInline(tokens: any, renderer: any): string | undefined;
}

/**
 * Tokenizer
 */
declare class Tokenizer {
    constructor(options: any);
    options: any;
    space(src: any): {
        type: string;
        raw: any;
    } | undefined;
    code(src: any): {
        type: string;
        raw: any;
        codeBlockStyle: string;
        text: any;
    } | undefined;
    fences(src: any): {
        type: string;
        raw: any;
        lang: any;
        text: any;
    } | undefined;
    heading(src: any): {
        type: string;
        raw: any;
        depth: any;
        text: any;
        tokens: any;
    } | undefined;
    hr(src: any): {
        type: string;
        raw: any;
    } | undefined;
    blockquote(src: any): {
        type: string;
        raw: any;
        tokens: any;
        text: any;
    } | undefined;
    list(src: any): {
        type: string;
        raw: string;
        ordered: boolean;
        start: string | number;
        loose: boolean;
        items: never[];
    } | undefined;
    html(src: any): {
        type: string;
        raw: any;
        pre: boolean;
        text: any;
    } | undefined;
    def(src: any): {
        type: string;
        tag: any;
        raw: any;
        href: any;
        title: any;
    } | undefined;
    table(src: any): {
        type: string;
        header: any;
        align: any;
        rows: any;
    } | undefined;
    lheading(src: any): {
        type: string;
        raw: any;
        depth: number;
        text: any;
        tokens: any;
    } | undefined;
    paragraph(src: any): {
        type: string;
        raw: any;
        text: any;
        tokens: any;
    } | undefined;
    text(src: any): {
        type: string;
        raw: any;
        text: any;
        tokens: any;
    } | undefined;
    escape(src: any): {
        type: string;
        raw: any;
        text: any;
    } | undefined;
    tag(src: any): {
        type: string;
        raw: any;
        inLink: any;
        inRawBlock: any;
        text: any;
    } | undefined;
    link(src: any): {
        type: string;
        raw: any;
        href: any;
        title: any;
        text: any;
    } | undefined;
    reflink(src: any, links: any): {
        type: string;
        raw: any;
        href: any;
        title: any;
        text: any;
    } | {
        type: string;
        raw: any;
        text: any;
    } | undefined;
    emStrong(src: any, maskedSrc: any, prevChar?: string): {
        type: string;
        raw: any;
        text: any;
        tokens: any;
    } | undefined;
    codespan(src: any): {
        type: string;
        raw: any;
        text: any;
    } | undefined;
    br(src: any): {
        type: string;
        raw: any;
    } | undefined;
    del(src: any): {
        type: string;
        raw: any;
        text: any;
        tokens: any;
    } | undefined;
    owo(src: any): {
        type: string;
        raw: any;
        text: any;
    } | undefined;
    autolink(src: any, mangle: any): {
        type: string;
        raw: any;
        text: any;
        href: any;
        tokens: {
            type: string;
            raw: any;
            text: any;
        }[];
    } | undefined;
    url(src: any, mangle: any): {
        type: string;
        raw: any;
        text: any;
        href: any;
        tokens: {
            type: string;
            raw: any;
            text: any;
        }[];
    } | undefined;
    inlineText(src: any, smartypants: any): {
        type: string;
        raw: any;
        text: any;
    } | undefined;
}

/**
 * Renderer
 */
declare class Renderer {
    constructor(options: any);
    options: any;
    owo(text: any): string;
    code(code: any, infostring: any, escaped: any): string;
    blockquote(quote: any): string;
    html(html: any): any;
    heading(text: any, level: any, raw: any, slugger: any): string;
    hr(): "<hr/>\n" | "<hr>\n";
    list(body: any, ordered: any, start: any): string;
    listitem(text: any): string;
    checkbox(checked: any): string;
    paragraph(text: any): string;
    table(header: any, body: any): string;
    tablerow(content: any): string;
    tablecell(content: any, flags: any): string;
    strong(text: any): string;
    em(text: any): string;
    codespan(text: any): string;
    br(): "<br/>" | "<br>";
    del(text: any): string;
    link(href: any, title: any, text: any): any;
    image(href: any, title: any, text: any): any;
    text(text: any): any;
}

declare class Hooks {
    static passThroughHooks: Set<string>;
    constructor(options: any);
    options: any;
    /**
     * Process markdown before marked
     */
    preprocess(markdown: any): any;
    /**
     * Process HTML after marked is finished
     */
    postprocess(html: any): any;
}

declare function getDefaults(): {
    async: boolean;
    baseUrl: null;
    breaks: boolean;
    extensions: null;
    gfm: boolean;
    headerIds: boolean;
    headerPrefix: string;
    highlight: null;
    hooks: null;
    langPrefix: string;
    mangle: boolean;
    pedantic: boolean;
    renderer: null;
    sanitize: boolean;
    sanitizer: null;
    silent: boolean;
    smartypants: boolean;
    tokenizer: null;
    walkTokens: null;
    xhtml: boolean;
};
declare namespace defaults {
    const async: boolean;
    const baseUrl: null;
    const breaks: boolean;
    const extensions: null;
    const gfm: boolean;
    const headerIds: boolean;
    const headerPrefix: string;
    const highlight: null;
    const hooks: null;
    const langPrefix: string;
    const mangle: boolean;
    const pedantic: boolean;
    const renderer: null;
    const sanitize: boolean;
    const sanitizer: null;
    const silent: boolean;
    const smartypants: boolean;
    const tokenizer: null;
    const walkTokens: null;
    const xhtml: boolean;
}

/**
 * Marked
 */
declare function marked(src: any, opt: any, callback: any): any;
declare namespace marked {
    export function options(opt: any): typeof marked;
    export function setOptions(opt: any): typeof marked;
    export { getDefaults };
    export { defaults };
    /**
     * Use Extension
     */
    export function use(...args: any[]): void;
    /**
     * Run callback for every token
     */
    export function walkTokens(tokens: any, callback: any): any;
    export function parseInline(src: any, opt: any, callback: any): any;
    export { Parser };
    export const parser: typeof Parser.parse;
    export { Renderer };
    export { TextRenderer };
    export { Lexer };
    export const lexer: typeof Lexer.lex;
    export { Tokenizer };
    export { Slugger };
    export { Hooks };
    export { marked as parse };
}
declare function options(opt: any): typeof marked;
declare function setOptions(opt: any): typeof marked;
/**
 * Use Extension
 */
declare function use(...args: any[]): void;
/**
 * Run callback for every token
 */
declare function walkTokens(tokens: any, callback: any): any;
declare function parseInline(src: any, opt: any, callback: any): any;
/**
 * Marked
 */
declare function parse(src: any, opt: any, callback: any): any;
declare namespace parse { }
declare const parser: typeof Parser.parse;
declare const lexer: typeof Lexer.lex;

export { Hooks, Lexer, Parser, Renderer, Slugger, TextRenderer, Tokenizer, defaults, getDefaults, lexer, marked, options, parse, parseInline, parser, setOptions, use, walkTokens };
