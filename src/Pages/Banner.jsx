const Banner = () => {
  const handleSearch = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const searchItem = form.get("search");

    console.log(searchItem);
  };

  return (
    <div
      className="hero"
      style={{ backgroundImage: "url(https://i.ibb.co/tbRbCkV/donet2.jpg)" }}
    >
      <div className="hero-overlay bg-opacity-50 my-52 py-20 "></div>
      <div className="hero-content text-center text-neutral-content">
        <div className=" mt-20">
          <h1 className="mb-5 mt-5 text-2xl md:text-4xl lg:5xl font-bold  text-white">
            I Grow By Helping People In Need
          </h1>

          <form onSubmit={handleSearch}>
            <div className="mt-7">
              <div className="relative mb-4 flex w-full flex-wrap items-stretch bg-slate-50 rounded-md">
                <input
                  type="search"
                  name="search"
                  className="relative m-0 -mr-0.5 block min-w-0 flex-auto rounded-l   bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-gray-500 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                  placeholder="Search"
                />

                <button className="relative z-[2] rounded-r   px-6 py-2 text-xs font-medium uppercase text-white bg-red-500 transition duration-150 ease-in-out hover:bg-red-400 focus:outline-none ">
                  Search
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Banner;
