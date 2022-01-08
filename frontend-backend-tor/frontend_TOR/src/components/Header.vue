<template>
  <header>
    <img
      src="https://images.pexels.com/photos/625279/pexels-photo-625279.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
      alt="Logo header"
    />
    <div class="header-title-container">
      <h1>Welcome to the amazing JobSearch .</h1>
      <p>Here you can find the best opportunities and grow your networking.</p>
      <a href="#findOne" class="header-button">Find Someone <span></span></a>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style>
:root {
  --soft-orange: #ffe9d5;
  --warm-black: #201e1c;
  --black: #282623;
  --off-white: #faf8f7;
  --white: #ffffff;
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
header {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  min-width: 320px;
  height: 334px;
  text-align: center;
  background: linear-gradient(207.8deg, #201e1c 16.69%, #fcb215 100%);
}
header img {
  width: 450px;
  height: 200px;
  margin-top: 60px;
  align-self: center;
  border-radius: 3px;
}
.header-title-container {
  width: 90%;
  min-width: 288px;
  max-width: 900px;
  height: 218px;
  margin-top: 40px;
  text-align: center;
  align-self: center;
}
.header-title-container h1 {
  font-size: 2.4rem;
  font-weight: bold;
  line-height: 2.5rem;
  color: var(--white);
}
.header-title-container p {
  margin-top: 30px;
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 1.8rem;
  color: var(--soft-orange);
}
.header-title-container .header-button {
  position: absolute;
  left: calc(50% - 118px);
  top: 270px;
  display: block;
  margin-top: 45px;
  padding: 16px;
  width: 229px;
  height: 50px;
  background-color: var(--off-white);
  /*shadow*/
  box-shadow: 0px 4px 8px rgba(89, 73, 30, 0.16);
  border: none;
  border-radius: 5px;
  font-size: 1.4rem;
  font-weight: bold;
  text-decoration: none;
  color: var(--black);
}
.header-button span {
  display: inline-block;
  width: 13px;
  height: 8px;
  margin-left: 10px;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAICAYAAAAiJnXPAAAAWklEQVQYlY3OsQ2AMAxEUY+QEimW+fs3jJIRMkJGCAVBESjGXP2fdCIiAhsSDEhAkhtguWJaPsGuB5YrkAbShmlfwQm0X2i88qALZvCEIXBgC8Ea/gAvWDxwAg3lL/Uax7BOAAAAAElFTkSuQmCC);
}
</style>
