# enviar-para-whatsapp

### HTML: Sem redirecionamento

```html
<form action="#" method="get" onsubmit="abrirWhatsapp()">
  <input type="text" name="nome" id="nome" placeholder="Nome" required /><br />
  <input type="tel" name="telefone" id="telefone" placeholder="Telefone" required /><br />
  <input type="email" name="email" id="email" placeholder="E-mail" required /><br />
  <textarea name="msg" id="msg" placeholder="Mensagem" rows="5" required></textarea><br />
  <button type="submit">Enviar dados p/ Whatsapp</button>
</form>
```

### HTML: Com redirecionamento

```html
<form action="obrigado.html" method="get" onsubmit="abrirWhatsapp()">
  <input type="text" name="nome" id="nome" placeholder="Nome" required /><br />
  <input type="tel" name="telefone" id="telefone" placeholder="Telefone" required /><br />
  <input type="email" name="email" id="email" placeholder="E-mail" required /><br />
  <textarea name="msg" id="msg" placeholder="Mensagem" rows="5" required></textarea><br />
  <button type="submit">Enviar dados p/ Whatsapp</button>
</form>
```

### Javascript

```js
<script>
    function abrirWhatsapp() {
      var nome = document.getElementById("nome").value;
      var telefone = document.getElementById("telefone").value;
      var email = document.getElementById("email").value;
      var msg = document.getElementById("msg").value;
      var url = "https://wa.me/5517992143072?text="
        + "*Formulário de Contato*" + "%0a"
        + "%0a"
        + "*Nome*: " + nome + "%0a"
        + "*Telefone*: " + telefone + "%0a"
        + "*E-mail*: " + email + "%0a"
        + "*Mensagem*: " + mensagem;
      window.open(url, '_blank').focus();
    }
</script>
```
