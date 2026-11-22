<template>
  <section class="form-card">
    <form @submit.prevent="handleSignup">
      <div class="form-row">
        <label for="email">Email</label>
        <input
          id="email"
          v-model="email"
          type="email"
          placeholder="Email"
          required
        />
      </div>

      <div class="form-row">
        <label for="password">Password</label>
        <input
          id="password"
          v-model="password"
          type="password"
          placeholder="Password"
          required
        />
      </div>

      <p v-if="errorMessage" class="error-text">
        {{ errorMessage }}
      </p>

      <button type="submit" class="signup-btn">Signup</button>
    </form>
  </section>
</template>

<script>
export default {
  name: "SignupView",
  data() {
    return {
      email: "",
      password: "",
      errorMessage: ""
    }
  },
  methods: {
    handleSignup() {
      let errors = []

      // Password length: 8 to 14 characters
      if (this.password.length < 8 || this.password.length >= 15) {
        errors.push("Password must be 8 to 14 characters long")
      }

      // At least one uppercase letter
      if (!/[A-Z]/.test(this.password)) {
        errors.push("Must contain at least one uppercase letter")
      }

      // At least two lowercase letters
      let lowercase = this.password.match(/[a-z]/g)
      if (!lowercase || lowercase.length < 2) {
        errors.push("Must contain at least two lowercase letters")
      }

      // At least one number
      if (!/[0-9]/.test(this.password)) {
        errors.push("Must contain at least one number")
      }

      // Must start with an uppercase letter
      if (!/^[A-Z]/.test(this.password)) {
        errors.push("Must start with an uppercase letter")
      }

      // Must contain an underscore
      if (!this.password.includes("_")) {
        errors.push("Must contain an underscore (_)")
      }

      // Display errors or continue
      if (errors.length > 0) {
        this.errorMessage = "Password is not valid:\n" + errors.join("\n")
      } else {
        this.errorMessage = ""
        this.$router.push("/")
      }
    }
  }
}
</script>

<style scoped>
.form-card {
  width: min(100%, 400px);
  align-self: flex-start;
  margin-top: 50px;
  background: #e9f0e1;
  border-radius: 14px;
  padding: 28px;
}

.form-card form {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.form-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.form-row label {
  font-weight: bold;
  min-width: 85px;
  text-align: right;
}

.form-row input {
  flex: 1;
  font: inherit;
  padding: 10px 14px;
  border: 1px solid #ccc;
  border-radius: 16px;
}

.error-text {
  color: #b00020;
  font-size: 0.9rem;
  margin: 0;
  text-align: left;
  white-space: pre-line;
}

.signup-btn {
  align-self: center;
  border: 0;
  border-radius: 20px;
  padding: 10px 28px;
  background: #6c9bd1;
  color: #111;
  font-weight: bold;
  cursor: pointer;
  font-size: 1rem;
}

.signup-btn:hover {
  background: #5585bd;
}
</style>