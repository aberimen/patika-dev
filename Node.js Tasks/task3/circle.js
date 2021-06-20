

const circleArea = (r) => {
    console.log(`Yarıçapı ${r} olan dairenin alanı: ${Math.PI.toFixed(2) * r * r}`);
};

const circleCircumference = (r) => {
    console.log(`Yarıçapı ${r} olan dairenin çevresi: ${2 * Math.PI.toFixed(2) * r}`);
};


module.exports = {
    circleArea, circleCircumference
}