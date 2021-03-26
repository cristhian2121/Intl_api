(function () {
    console.log("Start with work");

    const date = new Date();
    console.log('date: ', date);

    // Colombian Time
    console.log(
        new Intl.DateTimeFormat(
            'es-Zxxx-CO',
            { dateStyle: 'long', timeStyle: 'medium' }
        ).format(date)
    );

    // Chines time
    console.log(
        new Intl.DateTimeFormat(
            'zh-hans-CN',
            { dataStyle: 'full', timeStyle: 'full' }
        ).format(date)
    );

    // Japanese
    console.log(
        new Intl.DateTimeFormat(
            'ja-Zxxx',
            { dataStyle: 'full', timeStyle: 'full' }
        ).format(date));

    /**
     * The Intl allow us manage date and diferent timezones for example
     * we can use a date in Japanese or English or Spanish ... and change it's format with the above rules:
     * language - script (optionally) - region (optionally) for example 
     * es-Zxxx-CO
     * Spanish - Code for unwritten documents - Colombia
     * about lenguajes, script, regions su can see http://www.iana.org/assignments/language-subtag-registry/language-subtag-registry
     * 
     * Also you can used dataStyle and timeStyle how object's parametes for presetnate date formatting and time formatting with thw above options
     * "full"
        "long"
        "medium"
        "short"
     */



    // Intl.DisplayNames() 
    /*
    * For display different versions of lenguaje of region
    *
    * 
    * */

    const regionNamesInEnglish = new Intl.DisplayNames(['en'], { type: 'region' });
    const regionNamesInSpanish = new Intl.DisplayNames(['es'], { type: 'region' });
    const regionNamesInTraditionalChinese = new Intl.DisplayNames(['zh-Hant'], { type: 'region' });

    console.log(regionNamesInEnglish.of('US'));
    console.log(regionNamesInSpanish.of('US'));
    console.log(regionNamesInTraditionalChinese.of('US'));


    //Intl.ListFormat()
    /**
     * List object with specific properties and lenguage
     */
    const vehicles = ['Motorcycle', 'Bus', 'Car'];
    const formatter = new Intl.ListFormat('en', { style: 'long', type: 'conjunction' });
    console.log(formatter.format(vehicles));
    // expected output: "Motorcycle, Bus, and Car"

    const formatter2 = new Intl.ListFormat('de', { style: 'short', type: 'disjunction' });
    console.log(formatter2.format(vehicles));
    // expected output: "Motorcycle, Bus oder Car"

    const formatter3 = new Intl.ListFormat('en', { style: 'narrow', type: 'unit' });
    console.log(formatter3.format(vehicles));
    // expected output: "Motorcycle Bus Car"


    /**
     * Intl.NumberFormat()
     * It formated numbers how currency and decimals
     */

    const number = 123456.789;

    console.log(new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(number));
    // expected output: "123.456,79 €"

    // the Japanese yen doesn't use a minor unit
    console.log(new Intl.NumberFormat('ja-JP', { style: 'currency', currency: 'JPY' }).format(number));
    // expected output: "￥123,457"

    // limit to three significant digits
    console.log(new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(number));
    // expected output: "1,23,000"


    /**
     * Intl.PluralRules()
     * it pass singular to plural
     */

    var pr = new Intl.PluralRules('es-CO', { type: 'ordinal' });
    pr.select(0);
    console.log(pr.select(1));
    // → 'other' if in US English locale

    pr.select(1);
    // → 'one' if in US English locale

    pr.select(2);
    // → 'other' if in US English locale


    /**
     * Intl.RelativeTimeFormat()
     * Controll for talk abour days example yesterday, tomorrow
     */

    const rtf = new Intl.RelativeTimeFormat("en", {
        localeMatcher: "best fit", // other values: "lookup"
        numeric: "always", // other values: "auto"
        style: "long", // other values: "short" or "narrow"
    });

    // Format relative time using negative value (-1).
    rtf.format(-1, "day");
    // > "1 day ago"

    // Format relative time using positive  value (1).
    rtf.format(1, "day");
    // > "in 1 day"

})()