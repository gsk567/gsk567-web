<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
            <slot name="header">
                <h3>{{title}}</h3>
            </slot>
          </div>
          <div class="modal-body">
            <slot name="body">{{body}}</slot>
          </div>
          <div class="modal-footer">
            <slot name="footer">
                <button class="modal-default-button hvr-pop" @click="$emit('close')">{{button}}</button>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
    export default {
        data() {
            return {
                
            }
        },
        props: {
            title: String,
            body: String,
            button: String
        }
    }
</script>

<style>
    .modal-mask {
        position: fixed;
        z-index: 9998;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, .5);
        display: table;
        transition: opacity .3s ease;
    }

    .modal-wrapper {
        display: table-cell;
        vertical-align: middle;
    }

    .modal-container {
        width: 300px;
        margin: 0px auto;
        padding: 5px;
        background-color: #fff;
        border-radius: 2px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
        transition: all .3s ease;
    }

    .modal-header h3 {
        margin-top: 0;
        font-size: 20px;
    }

    .modal-body {
        margin: 10px 0;
        line-height: 22px;
    }

    .modal-footer {
        padding: 0px;
        border: none;
        height: auto;
    }

    .modal-default-button {
        font-size: 20px;
        height: 47px;
        width: 100%;
        outline: none;
        -webkit-transition: all 1s ease-out;
        -moz-transition: all 1s ease-out;
        -o-transition: all 1s ease-out;
        transition: all 1s ease-out;
        background: #fff !important;
        cursor: pointer;
        border: 1px solid #bebebe;
        color: #000;
        border-radius: 4px;
    }
</style>