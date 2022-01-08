<template>
  <main>
    <section class="main-input-container">
      <div class="backgroundImg"></div>
      <div class="main-input-container--title">
        <h2>Looking for someone</h2>
        <form class="form">
          <div>
            <label for="username" class="username"></label>
            <input
              type="text"
              id="username"
              placeholder="username"
              class="input-username"
            />
          </div>
          <input type="submit" value="Search" class="primary-button" />
        </form>
        <p>
          We bring the best people to your team and the great opportunities.
        </p>
      </div>
    </section>
  </main>
</template>

<script>
export default {};
</script>

<style>
:root {
  --black: #282623;
  --off-white: #faf8f7;
  --white: #ffffff;
  --blue-primary: #344157;
  --yellow-primary: #fcb215;
}
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
html {
  font-size: 62.5%;
  font-family: 'DM sans', sans-serif;
}
main {
  width: 100%;
  height: auto;
  background-color: var(--off-white);
}
.main-input-container {
  width: 100%;
  height: auto;
  padding-top: 80px;
  padding-bottom: 30px;
  text-align: center;
}
.main-input-container--title {
  width: 90%;
  min-width: 288px;
  max-width: 900px;
  margin: 0 auto;
}
.main-input-container .backgroundImg {
  width: 200px;
  height: 200px;
  margin: 0 auto;
  margin-bottom: 50px;
  background-image: url('https://media.istockphoto.com/photos/the-leader-is-connected-with-employees-by-a-wide-network-of-lines-at-picture-id1184825367?k=20&m=1184825367&s=612x612&w=0&h=5YjY-yyYPyEGx2mYqwleJCHA-Ei4c-wSGV0tMX-AOVk=');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 5px;
}
.main-input-container h2 {
  margin-bottom: 30px;
  font-size: 2.4rem;
  font-weight: bold;
  line-height: 2.6rem;
  color: var(--black);
}
.main-input-container .form {
  width: 100%;
  height: auto;
  margin-block-end: 20px;
}
.main-input-container .form div {
  width: 100%;
  height: auto;
  margin-block-end: 10px;
}
.main-input-container .input-username {
  background-color: var(--white);
  border-radius: 8px;
  border: 1px solid var(--black);
  height: 30px;
  font-size: 12px;
  padding: 6px;
  margin-bottom: 12px;
  width: 200px;
}
.main-input-container .primary-button {
  background-color: var(--blue-primary);
  border-radius: 8px;
  color: var(--yellow-primary);
  width: 100px;
  cursor: pointer;
  font-size: 12px;
  height: 40px;
}
.main-input-container p {
  margin-bottom: 30px;
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 1.6rem;
  color: rgba(117, 117, 117, 1);
}
</style>
