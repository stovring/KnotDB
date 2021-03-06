/*!
 * ┌────────────────────────────────────────────────────────────────────────────────┐
 * | KnotDB®                                                                        |
 * | A manually curated dedicated computational proteomics proteins knots database. |
 * └────────────────────────────────────────────────────────────────────────────────┘
 *
 * To work on Document Generation from — {.txt/.json} formatted.
 * @feature   : charset="utf-8".
 * __________________________________________________________________________________
 *
 * Architecture and Code Handcrafted by Prabhat Kumar.
 * Architectuur en Code handgemaakt door Prabhat Kumar.
 * @author    : Prabhat Kumar [http://prabhatkumar.org/].
 * @copyright : Prabhat Kumar [http://prabhatkumar.org/].
 * __________________________________________________________________________________
 *
 * @date      : 31-Oct-2016
 * @license   : Apache, version 2.0
 * @require   : Node.js®
 * @require   : NPM
 * @require   : Babel
 * __________________________________________________________________________________
 *
 * --/The Heart of JavaScript Data Driven Document Generation System/-- of "KnotDB®".
 * __________________________________________________________________________________
 */

'use strict';

/* presets: es2015 */

// To load required Node module.
// -----------------------------
let fs = require("fs");

// ---------------------------------------------------------------------------|
// Task(s) for SEED™: Document Generation System ||                           |
// ------------------------------------------------                           |
// 1. Translation   : Markdown                                                |
// 2. Data Reading  : {".txt", "utf8"}                                        |
// 3. Data Binding  : in to code block(s)                                     |
// 4. Assembly --> HTML + CSS + JavaScript                                    |
// 5. To Write the resulting HTML page.                                       |
// ---------------------------------------------------------------------------|
