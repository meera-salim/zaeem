<script>
  let quote = "";
  async function getQuotes() {
    const resp = await fetch("api/quotes", {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    });

    const data = await resp.json();
    console.log("data in frontend", data);
    quote = data.quote;
  }
</script>

<div class="bg-veryDarkBlue text-white h-screen flex flex-col">
  <h1 class="text-8xl uppercase p-5 mx-auto">Projects</h1>

  <a
    href="/recipe-app"
    class="text-4xl uppercase p-5 w-full mx-auto">Recipe App</a
  >
  <a
    href="/manage-app"
    class="text-4xl uppercase p-5 w-full">Manage App</a
  >
  <a
    href="/ai21Mockup "
    class="text-4xl uppercase p-5 w-full">AI21 Hero Section</a
  >
  <a
    href="/reap "
    class="text-4xl uppercase p-5 w-full">Reap</a
  >
  <button
    on:click={getQuotes}
    class="text-white p-4 text-4xl uppercase w-56">Get Quote</button
  >

  <div class="text-white text-2xl mx-auto p-10 w-4/5 text-center">{quote}</div>
</div>


<style>

</style>