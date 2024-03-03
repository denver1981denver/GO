const formOverlay = document.querySelector(".overlay-modal");
const btnAdd = document.querySelector(".call-order-btn");

const modalControl = (btnAdd, formOverlay) => {
  const openModal = () => {
    formOverlay.classList.add("is-visible");
  };
  const closeModal = () => {
    formOverlay.classList.remove("is-visible");
  };
  btnAdd.addEventListener("click", openModal);
  formOverlay.addEventListener("click", (e) => {
    const target = e.target;
    if (target === formOverlay || target.closest(".modal-form__close")) {
      closeModal();
    }
  });
  return {
    closeModal,
  };
};

modalControl(btnAdd, formOverlay);