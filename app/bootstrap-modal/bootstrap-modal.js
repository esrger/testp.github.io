"use strict";
var BootstrapModal = (function () {
    function BootstrapModal() {
    }
    BootstrapModal.prototype.openModal = function () {
        if (this.modalComponent) {
            this.modalComponent.openModal();
        }
    };
    BootstrapModal.prototype.closeModal = function (destroyComponent) {
        if (this.modalComponent) {
            destroyComponent ? this.modalComponent.closeModal(destroyComponent) : this.modalComponent.closeModal();
        }
    };
    BootstrapModal.prototype.getModalOptions = function () {
        return this.modalOptions;
    };
    BootstrapModal.prototype.setModalOptions = function (modalOptions) {
        this.modalOptions = modalOptions;
    };
    BootstrapModal.prototype.getModalClosedCallback = function () {
        return this.modalClosedCallback;
    };
    BootstrapModal.prototype.setModalClosedCallback = function (callback) {
        this.modalClosedCallback = callback;
    };
    BootstrapModal.prototype.getModalComponent = function () {
        return this.modalComponent;
    };
    BootstrapModal.prototype.setModalComponent = function (modalComponent) {
        this.modalComponent = modalComponent;
    };
    return BootstrapModal;
}());
exports.BootstrapModal = BootstrapModal;
//# sourceMappingURL=bootstrap-modal.js.map