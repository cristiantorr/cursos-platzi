const getDate = (callback) => {
  console.log('Llega a este callback: ' + new Date());
  setTimeout(() => {
    let date = new Date();
    callback(date);
    console.log('setimeut a este callback: ' + date);

  }, 3000);
};

const printDate = (dateNow) => console.log('Luego este callback: ' + dateNow);

getDate(printDate);
