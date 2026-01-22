document.addEventListener("DOMContentLoaded", function () {
  atalhos = document.querySelectorAll(".atalho")

  atalhos.forEach((atalho) => {
      atalho.addEventListener("click", function (e) {
        e.stopPropagation();

        //Remover hover em todos os atalhos
        atalhos.forEach((atalho) => {
          atalho.classList.remove("scale-110", "text-azul");
        });

        //Adicionar hover no atalho clicado
        this.classList.add("scale-110", "text-azul");
      });

      //Remover o hover quando clicar fora dos atalhos
      document.body.addEventListener("click", function () {
        atalhos.forEach((atalho) => {
          atalho.classList.remove("scale-110", "text-azul");
        });
      });
  });
});
