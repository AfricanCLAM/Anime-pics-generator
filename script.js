function updateDropdown() {
            const typeSelect = document.getElementById("type-select");
            const selectedCategory = document.querySelector('input[name="category"]:checked').value;

            // Clear existing options
            typeSelect.innerHTML = "";

            // Populate options based on the selected category
            if (selectedCategory === "sfw") {
                const sfwOptions = ["waifu", "neko", "shinobu", "megumin", "bully", "cuddle", "cry", "hug", "awoo", 
                                    "kiss", "lick", "pat", "smug", "bonk", "yeet", "blush", "smile", "wave", 
                                    "highfive", "handhold", "nom", "bite", "glomp", "slap", "kill", "kick", 
                                    "happy", "wink", "poke", "dance", "cringe"];
                sfwOptions.forEach(option => {
                    const opt = document.createElement("option");
                    opt.value = option;
                    opt.text = option.charAt(0).toUpperCase() + option.slice(1);
                    typeSelect.add(opt);
                });
            } else if (selectedCategory === "nsfw") {
                const nsfwOptions = ["waifu", "neko", "trap", "blowjob"];
                nsfwOptions.forEach(option => {
                    const opt = document.createElement("option");
                    opt.value = option;
                    opt.text = option.charAt(0).toUpperCase() + option.slice(1);
                    typeSelect.add(opt);
                });
            }
        }

        async function waifu() {
            try {
                // Get the selected category and type
                const selectedCategory = document.querySelector('input[name="category"]:checked').value;
                const selectedType = document.getElementById("type-select").value;

                // Construct the URL based on the selected category and type
                const response = await fetch(`https://api.waifu.pics/${selectedCategory}/${selectedType}`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    }
                });
                
                const data = await response.json();
                
                // Get the image container
                const imageContainer = document.getElementById("image-container");
                
                // Create an image element
                const img = document.createElement("img");
                img.src = data.url;
                img.alt = "Waifu Image";
                
                // Style the image
                img.style.width = "100%";
                img.style.borderRadius = "10px";
                
                // Clear the previous image (if any)
                imageContainer.innerHTML = "";
                
                // Append the new image to the container
                imageContainer.appendChild(img);
            } catch (error) {
                console.error("Error fetching the image:", error);
            }
        }

        // Initial population of the dropdown
        updateDropdown();