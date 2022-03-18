function abrirWhatsapp() {
  var nome = document.getElementById("nome").value;
  var telefone = document.getElementById("telefone").value;
  var email = document.getElementById("email").value;
  var msg = document.getElementById("msg").value;
  var url = "https://wa.me/5517992143072?text=" + "*Formulário de Contato*" + "%0a" + "%0a" + "*Nome*: " + nome + "%0a" + "*Telefone*: " + telefone + "%0a" + "*E-mail*: " + email + "%0a" + "*Mensagem*: " + mensagem;
  window.open(url, "_blank").focus();
}
