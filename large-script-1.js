console.log("Large Script 1 loaded and running...");

function heavyTask(i) {
    // Simulasi operasi berat yang dipecah menjadi beberapa bagian
    if (i < 1000000000) {
        for (let j = 0; j < 100000000; j++) {
            // Lakukan sebagian dari tugas berat
        }
        console.log(`Chunk of work done at iteration ${i}`);
        setTimeout(() => heavyTask(i + 100000000), 0); // Delay 0 ms untuk memecah tugas
    } else {
        console.log("Large Script 1 completed.");
    }
}

heavyTask(0);  // Mulai dari iterasi pertama
