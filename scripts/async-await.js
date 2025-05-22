//Using await with a promise


const waitOneSecond = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("1 second passed");
    }, 1000);
  });
};

async function runTimer() {
  const result = await waitOneSecond();
  console.log(result); // Output after 1 second
}
runTimer();



//Try/Catch for error handling


const fetchData = (status) => {
  return new Promise((resolve, reject) => {
    if (status === "ok") {
      resolve("📦 Data received");
    } else {
      reject("❌ Failed to fetch data");
    }
  });
};

async function getData(status) {
  try {
    const response = await fetchData(status);
    console.log("✅", response);
  } catch (error) {
    console.log("❌", error);
  }
}

getData("ok");    // ✅
getData("error"); // ❌

