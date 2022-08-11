



//fonksiyonun string returnleyeceğini belirttik
// değişkenin yanına ? eklersek opsiyonel yapmış oluyoruz.

function getAverage(a: number, b: number, c?: number): string {

    let total = a + b;
    let count = 2;

    if (typeof c !== "undefined") {
        total += c;
        count++;
    }

    const result = total / count;
    return "result: " + result;
}

getAverage(10, 20, 30)
getAverage(40, 50)


/***********************************************/


//parametre sayısı belli değilse

const getAvg = (...a: number[]): string => {

    let total = 0;
    let count = 0;


    for (let i = 0; i < a.length; i++) {

        total += a[i];
        count++;
    }

    const result = total / count;
    return "result: " + result;
}

getAvg(10, 20, 30, 40, 50, 60, 70)