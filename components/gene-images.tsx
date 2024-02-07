"use client";
export const GenerateImages = () => {
    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
            }}
            className="flex flex-col items-center justify-between gap-5 px-10 h-full w-full select-none"
        >
            <div className="text-4xl font-semibold">Generate Images</div>

            <div className="flex flex-col items-center justify-center gap-2">
                <div className="font-medium text-lg">Select any one option</div>
                <div className="flex items-center justify-center gap-4">
                    <label>
                        <input
                            type="radio"
                            name="typeofimage"
                            value={"barcode"}
                            className="hidden peer"
                            required
                            defaultChecked
                        />
                        <div className="bg-[#18676d]/20 px-6 py-2 text-lg font-semibold rounded-lg transition-colors hover:bg-[#18676d] hover:text-white peer-checked:bg-[#18676d] peer-checked:text-white">
                            Barcode
                        </div>
                    </label>

                    <span>or</span>
                    <label>
                        <input
                            type="radio"
                            name="typeofimage"
                            value={"barcode"}
                            className="hidden peer"
                            required
                            defaultChecked
                        />
                        <div className="bg-[#18676d]/20 px-6 py-2 text-lg font-semibold rounded-lg transition-colors hover:bg-[#18676d] hover:text-white peer-checked:bg-[#18676d] peer-checked:text-white">
                            Product
                        </div>
                    </label>
                </div>
            </div>

            <label className="flex flex-col items-center justify-center w-3/4 h-3/4 bg-gray-500/40 outline-dashed outline-2 outline-offset-2 rounded-xl p-4 my-4">
                <input
                    type="file"
                    accept="image/png, image/jpeg, image/jpeg, image/webp"
                    multiple
                    className="peer hidden"
                />
                <div className="text-2xl font-semibold">Upload your images</div>
            </label>

            <button className="bg-[#18676d]/20 px-8 py-3 text-xl font-semibold rounded-lg transition-colors hover:bg-[#18676d] hover:text-white">
                Add to your product
            </button>
        </form>
    );
};
