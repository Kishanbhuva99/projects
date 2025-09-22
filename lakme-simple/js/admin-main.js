document.addEventListener("DOMContentLoaded", () => {
    // ---------------- DASHBOARD NAVIGATION ----------------
    const navList = document.querySelectorAll(".navigation li");

    if (navList.length) {
        function activeLink() {
            navList.forEach(item => item.classList.remove("hovered"));
            this.classList.add("hovered");
        }

        navList.forEach(item => item.addEventListener("click", activeLink));
        // If you prefer hover: use this instead
        // navList.forEach(item => item.addEventListener("mouseover", activeLink));
    }

    // ---------------- SIDEBAR TOGGLE ----------------
    const sidebarToggle = document.querySelector(".sidebarToggle");
    const navigationSidebar = document.querySelector(".navigation");
    const dashboardMain = document.querySelector(".dashboard-main");

    if (sidebarToggle && navigationSidebar && dashboardMain) {
        sidebarToggle.addEventListener("click", () => {
            navigationSidebar.classList.toggle("active");
            dashboardMain.classList.toggle("active");
        });
    }

    // ---------------- ADD PRODUCT PAGE ----------------
    let newColorIndex = 0;
    let newIngredientIndex = 0;

    const addColorBtn = document.getElementById("addColorBtn");
    const addIngredientBtn = document.getElementById("addIngredientBtn");

    if (addColorBtn) {
        addColorBtn.addEventListener("click", () => {
            newColorIndex++;
            const newColorSection = document.getElementById('colorContainer');

            if (newColorSection) {
                const colorBlock = document.createElement('div');
                colorBlock.classList.add('color-block');
                colorBlock.innerHTML = `
                <div class="row mb-2">
                  <div class="col-md-4">
                    <label class="form-label">Color Name</label>
                    <input type="text" name="new_colors[${newColorIndex}][name]" class="form-control" required>
                  </div>
                  <div class="col-md-3">
                    <label class="form-label">Color Picker</label>
                    <input type="color" name="new_colors[${newColorIndex}][code]" class="form-control form-control-color" value="#ffffff">
                  </div>
                  <div class="col-md-4">
                    <label class="form-label">Upload Images</label>
                    <input type="file" name="new_colors[${newColorIndex}][images][]" class="form-control" multiple required>
                  </div>
                  <div class="col-md-1 position-relative">
                    <button type="button" class="btn btn-outline-danger btn-sm remove-block-btn position-absolute top-50">✖</button>
                  </div>
                </div>
              `;
                newColorSection.appendChild(colorBlock);
            }
        });
    }

    if (addIngredientBtn) {
        addIngredientBtn.addEventListener("click", () => {
            newIngredientIndex++;
            const ingredientSection = document.getElementById('ingredientContainer');

            if (ingredientSection) {
                const ingredientBlock = document.createElement('div');
                ingredientBlock.classList.add('ingredient-block', 'mb-2');
                ingredientBlock.innerHTML = `
                <div class="input-group">
                  <input type="text" name="new_ingredients[]" class="form-control" placeholder="New Ingredient Name" required>
                  <button type="button" class="btn btn-outline-danger remove-block-btn">✖</button>
                </div>
              `;
                ingredientSection.appendChild(ingredientBlock);
            }
        });
    }

    // ---------------- EXISTING COLOR UPLOAD TOGGLE ----------------
    const colorCheckboxes = document.querySelectorAll(".existing-color-checkbox");
    const existingColorUploadsSection = document.getElementById("existingColorUploads");

    if (colorCheckboxes.length && existingColorUploadsSection) {
        colorCheckboxes.forEach((checkbox) => {
            checkbox.addEventListener("change", function () {
                const colorName = this.value;
                const uploadFieldId = `upload-${colorName.toLowerCase()}`;

                if (this.checked) {
                    const uploadBlock = document.createElement("div");
                    uploadBlock.classList.add("mb-2");
                    uploadBlock.id = uploadFieldId;
                    uploadBlock.innerHTML = `
                        <label class="form-label">Images for <strong>${colorName}</strong></label>
                        <input type="file" name="existing_color_images[${colorName}][]" class="form-control" multiple required>
                    `;
                    existingColorUploadsSection.appendChild(uploadBlock);
                } else {
                    const toRemove = document.getElementById(uploadFieldId);
                    if (toRemove) toRemove.remove();
                }
            });
        });
    }

    // ---------------- REMOVE DYNAMIC BLOCKS (Delegated) ----------------
    document.addEventListener("click", function (e) {
        if (e.target.classList.contains("remove-block-btn")) {
            const block = e.target.closest(".color-block, .ingredient-block");
            if (block) block.remove();
        }
    });

    // ---------------- ADMIN SEARCH ENTER ----------------
    const adminSearchInput = document.getElementById("adminSearchInput");

    if (adminSearchInput) {
        adminSearchInput.addEventListener("keydown", (event) => {
            if (event.key === "Enter") {
                event.preventDefault();
                const query = adminSearchInput.value.trim();
                if (query) {
                    console.log("Enter pressed, search query:", query);
                    // Handle search submission logic here
                }
            }
        });
    }
});
