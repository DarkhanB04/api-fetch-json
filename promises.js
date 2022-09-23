console.log("Requesting data...")
setTimeout(() => {
    console.log("Preparing data...")
    const backendData = {
    server: 'aws',
    port: 3000,
    status: 'working'
    }
    setTimeout(() => {
        backendData.modified = true;
        console.log("Data received succesfully", backendData)
    }, 2000)
}, 2000)