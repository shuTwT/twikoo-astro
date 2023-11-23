/// <reference types="astro/client" />
import { $twikooGlobal} from "astro-twikoo/client";
declare global{
    namespace globalThis{
        var $twikoo:$twikooGlobal
    }
}