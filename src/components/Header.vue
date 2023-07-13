<template>
    <header class="header">
        <div class="container">
            <div class="header__wrap">
                <div class="header__col">
                    <nav class="header__nav">
                        <router-link class="header__nav-item element-interaction" to="1">Контрагентам</router-link>
                        <router-link class="header__nav-item element-interaction" to="2">Дизайнерам</router-link>
                        <router-link class="header__nav-item element-interaction" to="3">Вакансии</router-link>
                    </nav>
                </div>
                <div class="header__col">
                    <router-link to="/" class="header__logo">
                        <img src="../assets/img/logo.svg" alt="">
                    </router-link>
                </div>
                <div class="header__col">
                    <div class="header__search">
                        <label for="header__search" class="header__search-icon element-interaction"><svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.0002 17L13.8462 11.846C14.799 10.3979 15.1807 8.64774 14.9172 6.93442C14.6538 5.22111 13.764 3.66648 12.4201 2.57154C11.0762 1.47659 9.37391 0.919227 7.64269 1.00735C5.91148 1.09547 4.27453 1.82281 3.04879 3.04855C1.82305 4.27429 1.09571 5.91123 1.00759 7.64245C0.919471 9.37366 1.47684 11.076 2.57178 12.4199C3.66672 13.7637 5.22135 14.6535 6.93467 14.917C8.64799 15.1804 10.3981 14.7988 11.8462 13.846L17.0002 19L19.0002 17ZM3.00022 7.99998C3.00022 5.24298 5.24322 2.99998 8.00022 2.99998C10.7572 2.99998 13.0002 5.24298 13.0002 7.99998C13.0002 10.757 10.7572 13 8.00022 13C5.24322 13 3.00022 10.757 3.00022 7.99998Z" fill="white"/></svg></label>
                        <input placeholder="Поиск" class="header__search-input" id="header__search" type="search" name="s" title="Search">
                    </div>
                    <Cart :btnClass="'header__login element-interaction'"></Cart>
                    <div class="header__icons">
                        <router-link to="/cabinet" class="header__icon header__icon--profile element-interaction">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 4C13.0609 4 14.0783 4.42143 14.8284 5.17157C15.5786 5.92172 16 6.93913 16 8C16 9.06087 15.5786 10.0783 14.8284 10.8284C14.0783 11.5786 13.0609 12 12 12C10.9391 12 9.92172 11.5786 9.17157 10.8284C8.42143 10.0783 8 9.06087 8 8C8 6.93913 8.42143 5.92172 9.17157 5.17157C9.92172 4.42143 10.9391 4 12 4ZM12 14C16.42 14 20 15.79 20 18V20H4V18C4 15.79 7.58 14 12 14Z" fill="white"/></svg>
                        </router-link>
                        <router-link to="/wishlist" class="header__icon header__icon--profile element-interaction">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M8.97345 4.59641C6.2186 0.341121 0.642883 2.65926 0.642883 7.29469C0.642883 10.7755 8.28688 16.2205 8.97345 16.9285C9.66474 16.2205 16.9286 10.7755 16.9286 7.29469C16.9286 2.69441 11.7335 0.341121 8.97345 4.59641Z" fill="white"/></svg>
                        </router-link>
                    </div>
                </div>
            </div>
            <div class="header__mobile">
                <router-link to="/" class="header__logo">
                        <img src="../assets/img/logo.svg" alt="">
                    </router-link>
                <div :class="[{'burger--change': burgerShow }, 'burger']" @click="burgerShow=!burgerShow">
                    <div class="burger__bar1"></div>
                    <div class="burger__bar2"></div>
                    <div class="burger__bar3"></div>
                </div>
                <div :class="[{'header__mobile-wrap--show': burgerShow }, 'header__mobile-wrap']">
                    <nav class="header__nav">
                        <router-link class="header__nav-item element-interaction" to="1">Контрагентам</router-link>
                        <router-link class="header__nav-item element-interaction" to="2">Дизайнерам</router-link>
                        <router-link class="header__nav-item element-interaction" to="3">Вакансии</router-link>
                        <Cart :btnClass="'header__nav-item element-interaction'"></Cart>
                    </nav>
                    <div class="header__icons">
                        <router-link to="/cabinet" class="header__icon header__icon--profile element-interaction">
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none"><path d="M12 4C13.0609 4 14.0783 4.42143 14.8284 5.17157C15.5786 5.92172 16 6.93913 16 8C16 9.06087 15.5786 10.0783 14.8284 10.8284C14.0783 11.5786 13.0609 12 12 12C10.9391 12 9.92172 11.5786 9.17157 10.8284C8.42143 10.0783 8 9.06087 8 8C8 6.93913 8.42143 5.92172 9.17157 5.17157C9.92172 4.42143 10.9391 4 12 4ZM12 14C16.42 14 20 15.79 20 18V20H4V18C4 15.79 7.58 14 12 14Z" fill="white"/></svg>
                        </router-link>
                        <router-link to="/wishlist" class="header__icon header__icon--profile element-interaction">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 18 18" fill="none"><path d="M8.97345 4.59641C6.2186 0.341121 0.642883 2.65926 0.642883 7.29469C0.642883 10.7755 8.28688 16.2205 8.97345 16.9285C9.66474 16.2205 16.9286 10.7755 16.9286 7.29469C16.9286 2.69441 11.7335 0.341121 8.97345 4.59641Z" fill="white"/></svg>
                        </router-link>
                    </div>
                    <ul class="header__social social">
                        <li class="header__social-item social-item">
                            <a href="#" target="_blank" class="header__social-link element-interaction">
                                <svg xmlns="http://www.w3.org/2000/svg" width="39" height="39" viewBox="0 0 39 39" fill="none"><path d="M35.8435 11.2856C35.6493 10.5641 35.269 9.90634 34.7407 9.37804C34.2124 8.84974 33.5546 8.46947 32.8332 8.27528C30.1763 7.55621 19.5001 7.55621 19.5001 7.55621C19.5001 7.55621 8.82381 7.55621 6.16694 8.27528C5.44549 8.46947 4.78769 8.84974 4.25939 9.37804C3.73109 9.90634 3.35082 10.5641 3.15662 11.2856C2.66053 13.9952 2.41978 16.7454 2.43756 19.5C2.41978 22.2545 2.66053 25.0047 3.15662 27.7143C3.35082 28.4358 3.73109 29.0936 4.25939 29.6219C4.78769 30.1502 5.44549 30.5305 6.16694 30.7246C8.82381 31.4437 19.5001 31.4437 19.5001 31.4437C19.5001 31.4437 30.1763 31.4437 32.8332 30.7246C33.5546 30.5305 34.2124 30.1502 34.7407 29.6219C35.269 29.0936 35.6493 28.4358 35.8435 27.7143C36.3396 25.0047 36.5803 22.2545 36.5626 19.5C36.5803 16.7454 36.3396 13.9952 35.8435 11.2856V11.2856ZM16.0876 24.6187V14.3812L24.9479 19.5L16.0876 24.6187Z" fill="white"/></svg>
                            </a>
                        </li>
                        <li class="header__social-item social-item">
                            <a href="#" target="_blank" class="header__social-link element-interaction">
                                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none"><g clip-path="url(#clip0)"><path fill-rule="evenodd" clip-rule="evenodd" d="M32.0436 22.1364C32.0436 22.1364 34.9542 25.011 35.6742 26.3412C35.6882 26.3603 35.6992 26.3816 35.7066 26.4042C36 26.8956 36.072 27.2808 35.928 27.5652C35.685 28.035 34.8624 28.2708 34.5834 28.2906H29.439C29.0808 28.2906 28.3356 28.197 27.4284 27.5706C26.7354 27.0864 26.046 26.289 25.3782 25.5096C24.381 24.3522 23.5188 23.3478 22.6458 23.3478C22.5356 23.3475 22.4261 23.3658 22.3218 23.4018C21.6612 23.6106 20.8224 24.552 20.8224 27.0594C20.8224 27.8442 20.2032 28.2906 19.7694 28.2906H17.4132C16.6104 28.2906 12.4308 28.0098 8.72464 24.102C4.18324 19.3176 0.10444 9.71995 0.06484 9.63535C-0.18896 9.01435 0.34384 8.67595 0.91984 8.67595H6.11464C6.81124 8.67595 7.03804 9.09715 7.19644 9.47515C7.38004 9.90895 8.06044 11.6442 9.17644 13.5936C10.9836 16.7652 12.0942 18.0558 12.9816 18.0558C13.1484 18.0562 13.3123 18.0128 13.4568 17.9298C14.616 17.2926 14.4 13.1526 14.346 12.2994C14.346 12.1338 14.3442 10.4508 13.7502 9.63715C13.3254 9.05395 12.6018 8.82715 12.1644 8.74435C12.2814 8.57515 12.5298 8.31595 12.8484 8.16295C13.6422 7.76695 15.0768 7.70935 16.5006 7.70935H17.2908C18.8352 7.73095 19.2348 7.82995 19.7964 7.97215C20.9268 8.24215 20.9484 8.97475 20.8494 11.4696C20.8206 12.1824 20.79 12.9852 20.79 13.9302C20.79 14.1318 20.781 14.3568 20.781 14.5854C20.7468 15.8652 20.7018 17.307 21.6054 17.8992C21.7226 17.9722 21.858 18.0108 21.996 18.0108C22.3092 18.0108 23.247 18.0108 25.7904 13.6458C26.9064 11.718 27.7704 9.44455 27.8298 9.27355C27.8802 9.17815 28.0314 8.90995 28.215 8.80195C28.3456 8.73246 28.4919 8.69775 28.6398 8.70115H34.7508C35.4168 8.70115 35.8686 8.80195 35.9568 9.05395C36.1044 9.46255 35.928 10.71 33.138 14.4828C32.6682 15.111 32.256 15.6546 31.8942 16.1298C29.3652 19.449 29.3652 19.6164 32.0436 22.1364V22.1364Z" fill="white"/></g><defs><clipPath id="clip0"><rect width="36" height="36" fill="white"/></clipPath></defs></svg>
                            </a>
                        </li>
                        <li class="header__social-item social-item">
                            <a href="#" target="_blank" class="header__social-link element-interaction">
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="39" viewBox="0 0 40 39" fill="none"><path d="M22.3283 34.1201V20.8016H26.9366L27.6216 15.587H22.3283V12.2655C22.3283 10.7607 22.7583 9.73047 24.9733 9.73047H27.78V5.08134C26.4144 4.93866 25.0417 4.86976 23.6683 4.87497C19.595 4.87497 16.7983 7.29947 16.7983 11.7503V15.5772H12.22V20.7918H16.8083V34.1201H22.3283Z" fill="white"/></svg>
                            </a>
                        </li>
                        <li class="header__social-item social-item">
                            <a href="#" target="_blank" class="header__social-link element-interaction">
                                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none"><path d="M30.9975 5.57554L4.40252 15.831C2.58752 16.56 2.59802 17.5725 4.06952 18.024L10.8975 20.154L26.6955 10.1865C27.4425 9.73203 28.125 9.97653 27.564 10.4745L14.7645 22.026H14.7615L14.7645 22.0275L14.2935 29.0655C14.9835 29.0655 15.288 28.749 15.675 28.3755L18.9915 25.1505L25.89 30.246C27.162 30.9465 28.0755 30.5865 28.392 29.0685L32.9205 7.72654C33.384 5.86804 32.211 5.02654 30.9975 5.57554V5.57554Z" fill="white"/></svg>
                            </a>
                        </li>
                        <li class="header__social-item social-item">
                            <a href="#" target="_blank" class="header__social-link element-interaction">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M8.564 2.445C8.564 2.12 8.597 1.925 9.154 1.925H16.619C17.919 1.925 18.639 3.035 19.159 5.118L19.579 6.784H20.849C21.079 2.056 21.279 0 21.279 0C21.279 0 18.083 0.36 16.189 0.36H6.64L1.526 0.196V1.566L3.251 1.892C4.461 2.132 4.751 2.388 4.851 3.498C4.851 3.498 4.961 6.768 4.961 12.138C4.961 17.523 4.871 20.748 4.871 20.748C4.871 21.721 4.481 22.081 3.281 22.321L1.559 22.651V24L6.689 23.835H15.239C17.174 23.835 21.629 24 21.629 24C21.734 22.83 22.379 17.52 22.484 16.936H21.284L20 19.846C18.995 22.126 17.524 22.291 15.89 22.291H10.984C9.354 22.291 8.569 21.651 8.569 20.241V12.8C8.569 12.8 12.189 12.8 13.359 12.896C14.271 12.96 14.822 13.221 15.119 14.494L15.509 16.189H16.919L16.829 11.911L17.021 7.606H15.63L15.18 9.496C14.897 10.74 14.7 10.966 13.426 11.096C11.76 11.266 8.611 11.236 8.611 11.236V2.45H8.561L8.564 2.445Z" fill="white"/></svg>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
import Cart from "../components/Cart";

export default {
  components: {Cart},
  data: function() {
            return {
                burgerShow: false
            }
        },
    }
</script>

<style lang="scss">
@import "../assets/scss/utils/vars.scss";

    .header {
        padding-top: 27px;
        padding-bottom: 31px;
        background: #333333;
        position: fixed;
        left: 0;
        box-sizing: border-box;
        top: 0;
        width: 100%;
        z-index: 2;
        .header__wrap {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
    }

    .header__logo {
        display: flex;
        margin: 0 40px;
        justify-content: center;
    }

    .header__mobile-wrap, .header__mobile {
        display: none;
    }

    .header__col {
        &:nth-child(2) {
            flex-grow: 1;
            text-align: center;
        }
        &:nth-child(3) {
            display: flex;
        }
    }

    .header__nav-item {
        text-decoration: none;
        color: #fff;
        transition: 0.4s ease;
        line-height: 150%;
        background: transparent;
        border: none;
        padding: 0;
        &:not(:last-child) {
            margin-right: 40px;
        }
    }

    .header__search {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .header__search-input {
        background: none;
        border: none;
        color: #fff;
        max-width: 80px;
        height: 100%;
        padding: 0;
        font-family: $defaultFont;
        &::placeholder {
            font-family: $defaultFont;
            font-weight: normal;
            font-size: $defaultFontSize;
            color: #fff;
        }
    }

    .header__search-icon {
        margin-right: 13px;
    }

    .header__login {
        color: #fff;
        display: flex;
        align-items: center;
        margin-right: 40px;
        text-decoration: none;
        background: transparent;
        border: none;
        padding: 0;
        height: 100%;
    }

    .header__icons {
        display: flex;
        align-items: center;
    }

    .header__icon {
        display: inline-block;
        &:not(:last-child) {
            margin-right: 25px;
        }
    }

    .burger {
        display: none;
        cursor: pointer;
    }

    @media (max-width:768px) {
        .header{
            padding: 30px 35px;
            .container {
                padding: 0;
            }
            .header__wrap {
                display: none;
            }
        }
        .header__logo {
            justify-content: flex-end;
            margin-left: 0;
        }
        .header__mobile {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .header__mobile-wrap {
            position: absolute;
            background: #333333;
            padding: 30px;
            box-sizing: border-box;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 100vh;
            display: flex;
            flex-direction: column;
            z-index: 2;
            transform: translateY(100%) translateX(100%);
            transition: 0.4s ease;
            &.header__mobile-wrap.header__mobile-wrap--show {
                transform: translateY(100%) translateX(0%);
            }
            .header__nav {
                display: flex;
                flex-direction: column;
                width: 100%;
                padding-bottom: 35px;
                border-bottom: 1px solid #fff;
            }
            .header__nav-item {
                font-size: 2.1rem;
                &:not(:last-child) {
                    margin-right: 0;
                    margin-bottom: 30px;
                }
            }
            .header__icons {
                padding: 25px 0;
                border-bottom: 1px solid #fff;
            }
        }
        .burger {
            display: block;
        }
        .burger__bar1, .burger__bar2, .burger__bar3 {
            width: 33px;
            height: 4px;
            background-color: #fff;
            margin: 8px 0;
            transition: 0.4s;
            border-radius: 3px;
        }
        .burger__bar2 {
            width: 20px;
            height: 4px;
        }
        .burger--change {
            .burger__bar1 {
                -webkit-transform: rotate(-45deg) translate(-11px, 7px);
                transform: rotate(-45deg) translate(-11px, 7px);
            }
            .burger__bar2 {
                opacity: 0;
            }
            .burger__bar3 {
                -webkit-transform: rotate(45deg) translate(-9px, -6px);
                transform: rotate(45deg) translate(-9px, -6px);
            }
        }
    }
</style>
