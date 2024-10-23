import React from "react";
import "./FormRegister.css";

export default function FormRegister() {
  return (
    <div>
      <form action="" className="content-form">
        <div class="form__group field">
          <input
            type="input"
            class="form__field"
            placeholder="Name"
            required=""
          />
          <label for="name" class="form__label">
            Name
          </label>
        </div>
        <div class="form__group field">
          <input
            type="input"
            class="form__field"
            placeholder="Name"
            required=""
          />
          <label for="name" class="form__label">
            LastName
          </label>
        </div>
        <div class="form__group field">
          <input
            type="text"
            class="form__field"
            placeholder="Name"
            required=""
          />
          <label for="name" class="form__label">
            Age
          </label>
        </div>
        <div class="form__group field">
          <input
            type="email"
            class="form__field"
            placeholder="Name"
            required=""
          />
          <label for="name" class="form__label">
            Email
          </label>
        </div>
        <div class="form__group field">
          <input
            type="input"
            class="form__field"
            placeholder="Name"
            required=""
          />
          <label for="name" class="form__label">
            RFC
          </label>
        </div>
        <div class="form__group field">
          <input
            name="password"
            type="password"
            class="form__field"
            placeholder="Name"
            required=""
          />
          <label for="name" class="form__label">
            Password
          </label>
        </div>
        <div class="form__group field">
          <input
            type="password"
            class="form__field"
            placeholder="Name"
            required=""
          />
          <label for="name" class="form__label">
            Confirm Password
          </label>
        </div>
        <br />
        <br />
        <button class="buttonpro">
          <span> Button </span>
        </button>
        <br />
        <p className="paragraph">Or sign up with</p>
      </form>
    </div>
  );
}
