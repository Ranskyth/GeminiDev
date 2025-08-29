const Perfil = () => {
  return (
    <div className="w-full p-10">
      <h1 className="text-2xl font-bold">Perfil</h1>
      <div className="flex w-full justify-center items-center">
        <form className="bg-[#222533] flex flex-col gap-5 px-5 py-2 h-[550px] w-[350px]">
          <div className="grid">
            <label className="text-[#8C8D95]" htmlFor="nome">
              E-mail
            </label>
            <input
              className="w-full border-3 border-[#313640] pl-5 py-2 rounded-[5px]"
              placeholder="Nome"
              type="text"
            />
          </div>
          <div className="grid">
            <label className="text-[#8C8D95]" htmlFor="nome">
              E-mail
            </label>
            <input
              className="w-full border-3 border-[#313640] pl-5 py-2 rounded-[5px]"
              placeholder="Nome"
              type="text"
            />
          </div>
          <div className="grid">
            <label className="text-[#8C8D95]" htmlFor="nome">
              E-mail
            </label>
            <input
              className="w-full border-3 border-[#313640] pl-5 py-2 rounded-[5px]"
              placeholder="Nome"
              type="text"
            />
          </div>
          <div className="grid">
            <label className="text-[#8C8D95]" htmlFor="nome">
              E-mail
            </label>
            <input
              className="w-full border-3 border-[#313640] pl-5 py-2 rounded-[5px]"
              placeholder="Nome"
              type="text"
            />
          </div>
          <div className="grid">
            <label className="text-[#8C8D95]" htmlFor="nome">
              E-mail
            </label>
            <input
              className="w-full border-3 border-[#313640] pl-5 py-2 rounded-[5px]"
              placeholder="Nome"
              type="text"
            />
          </div>
          <button className="bg-[#A72AE2] p-3" type="submit">
            Salvar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Perfil;
