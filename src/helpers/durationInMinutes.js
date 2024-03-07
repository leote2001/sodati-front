const durationInMinutes = (segundos) => {
    let minutos = segundos / 60;
    const seconds = segundos % 60;
    minutos = Math.floor(minutos);
    const duration = `${minutos}:${seconds.toString().padStart(2, "0")}`;
    return duration;
}
export { durationInMinutes };