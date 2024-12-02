const tf = require('@tensorflow/tfjs-node');
const InputError = require('../exceptions/InputError');
 
async function predictClassification(model, image) {
    try {
        const tensor = tf.node
            .decodeJpeg(image)
            .resizeNearestNeighbor([224, 224])
            .expandDims()
            .toFloat()
 
        const classes = ['Non-cancer', 'Cancer'];
 
        const prediction = model.predict(tensor);
 
        const classResult = prediction.dataSync()[0];
        // console.log(classResult);
        const label = classes[classResult > 0.5 ? 1 : 0];
 
        let suggestion;
 
        if(label === 'Cancer') {
            suggestion = "Segera periksa ke dokter!"
        }
 
        if(label === 'Non-cancer') {
            suggestion = "Penyakit kanker tidak terdeteksi."
        }
 
        return { label, suggestion };
    } catch (error) {
        throw new InputError(`Terjadi kesalahan dalam melakukan prediksi`)
    }
}
 
module.exports = predictClassification;