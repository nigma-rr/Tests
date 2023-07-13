<template>
    <footer class="footer">
        <section class="mailing">
            <div class="container">
                <div class="mailing__suptitle">Полезные советы и персональный предложения</div>
                <h2 class="mailing__title h2-title">Эксклюзивная рассылка</h2>
                <div class="mailing__wrap">
                    <div class="mailing__col">
                        <ul class="mailing__advantages">
                            <li class="mailing__item">
                                <div class="mailing__item-icon">
                                    <img src="../assets/img/subscribe__icon.svg" alt="">
                                </div>
                                <div class="mailing__item-title">Личный менеджер</div>
                            </li>
                            <li class="mailing__item">
                                <div class="mailing__item-icon">
                                    <img src="../assets/img/subscribe__icon.svg" alt="">
                                </div>
                                <div class="mailing__item-title">Доставка и оформление</div>
                            </li>
                            <li class="mailing__item">
                                <div class="mailing__item-icon">
                                    <img src="../assets/img/subscribe__icon.svg" alt="">
                                </div>
                                <div class="mailing__item-title">Индивидуальный дизайн</div>
                            </li>
                        </ul>
                    </div>
                    <div class="mailing__col">
                        <div class="mailing__form-wrap">
                            <form action="#" class="mailing__form" method="post" @submit.prevent="sendForm">
                                <input type="email" name="email" class="mailing__form-email" v-model.trim="form.email" placeholder="Ваш e-mail" required>
                                <input type="submit" class="mailing__form-submit button-style element-interaction" value="Отправить">
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="footer__info">
            <div class="container">
                <div class="footer__info-col">
                    <div class="footer__info-title">Полезные ссылки</div>
                    <div class="footer__nav">
                        <div class="footer__nav-item">
                            <router-link to="/7" class="footer__nav-link element-interaction link-reset">Доставка</router-link>
                        </div>
                        <div class="footer__nav-item">
                            <router-link to="/8" class="footer__nav-link element-interaction link-reset">Оплата</router-link>
                        </div>
                        <div class="footer__nav-item">
                            <router-link to="/9" class="footer__nav-link element-interaction link-reset">Акции</router-link>
                        </div>
                        <div class="footer__nav-item">
                            <router-link to="/10" class="footer__nav-link element-interaction link-reset">Политика конфиденциальности</router-link>
                        </div>
                    </div>
                </div>
                <div class="footer__info-col">
                    <div class="footer__info-title">Оплата</div>
                    <div class="footer__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper justo, nec, pellentesque.</div>
                    <div class="footer__image"><img src="../assets/img/visa.png" alt=""></div>
                </div>
                <div class="footer__info-col">
                    <div class="footer__info-title">Контакты</div>
                    <div class="footer__contacts">
                        <div class="footer__contacts-item">
                            <div class="footer__contacts-icon"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" viewBox="0 0 20 16" fill="none"><path d="M17.256 10.253C17.16 9.586 16.645 9.066 15.982 8.911C13.405 8.307 12.759 6.823 12.65 5.177C12.193 5.092 11.38 5 10 5C8.62 5 7.807 5.092 7.35 5.177C7.241 6.823 6.595 8.307 4.018 8.911C3.355 9.067 2.84 9.586 2.744 10.253L2.247 13.695C2.072 14.907 2.962 16 4.2 16H15.8C17.037 16 17.928 14.907 17.753 13.695L17.256 10.253ZM10 13.492C8.605 13.492 7.474 12.372 7.474 10.992C7.474 9.612 8.605 8.492 10 8.492C11.395 8.492 12.526 9.612 12.526 10.992C12.526 12.372 11.394 13.492 10 13.492ZM19.95 4C19.926 2.5 16.108 0.001 10 0C3.891 0.001 0.073 2.5 0.05 4C0.027 5.5 0.0710001 7.452 2.585 7.127C5.526 6.746 5.345 5.719 5.345 4.251C5.345 3.227 7.737 2.98 10 2.98C12.263 2.98 14.654 3.227 14.655 4.251C14.655 5.719 14.474 6.746 17.415 7.127C19.928 7.452 19.973 5.5 19.95 4Z" fill="#333333"/></svg></div>
                            <a href="tel:88122345655" class="footer__contacts-link element-interaction link-reset">8 (812) 234-56-55</a>
                        </div>
                        <div class="footer__contacts-item">
                            <div class="footer__contacts-icon"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" viewBox="0 0 20 16" fill="none"><path d="M17.256 10.253C17.16 9.586 16.645 9.066 15.982 8.911C13.405 8.307 12.759 6.823 12.65 5.177C12.193 5.092 11.38 5 10 5C8.62 5 7.807 5.092 7.35 5.177C7.241 6.823 6.595 8.307 4.018 8.911C3.355 9.067 2.84 9.586 2.744 10.253L2.247 13.695C2.072 14.907 2.962 16 4.2 16H15.8C17.037 16 17.928 14.907 17.753 13.695L17.256 10.253ZM10 13.492C8.605 13.492 7.474 12.372 7.474 10.992C7.474 9.612 8.605 8.492 10 8.492C11.395 8.492 12.526 9.612 12.526 10.992C12.526 12.372 11.394 13.492 10 13.492ZM19.95 4C19.926 2.5 16.108 0.001 10 0C3.891 0.001 0.073 2.5 0.05 4C0.027 5.5 0.0710001 7.452 2.585 7.127C5.526 6.746 5.345 5.719 5.345 4.251C5.345 3.227 7.737 2.98 10 2.98C12.263 2.98 14.654 3.227 14.655 4.251C14.655 5.719 14.474 6.746 17.415 7.127C19.928 7.452 19.973 5.5 19.95 4Z" fill="#333333"/></svg></div>
                            <a href="tel:88122345655" class="footer__contacts-link element-interaction link-reset">8 (812) 234-56-55</a>
                        </div>
                        <div class="footer__contacts-item">
                            <div class="footer__contacts-icon"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M1.574 5.286L9.074 9.315C9.326 9.45 9.652 9.514 9.98 9.514C10.308 9.514 10.634 9.45 10.886 9.315L18.386 5.286C18.875 5.023 19.337 4 18.44 4H1.521C0.624 4 1.086 5.023 1.574 5.286ZM18.613 7.489L10.886 11.516C10.546 11.694 10.308 11.715 9.98 11.715C9.652 11.715 9.414 11.694 9.074 11.516C8.734 11.338 1.941 7.777 1.386 7.488C0.996 7.284 1 7.523 1 7.707V15C1 15.42 1.566 16 2 16H18C18.434 16 19 15.42 19 15V7.708C19 7.524 19.004 7.285 18.613 7.489Z" fill="#333333"/></svg></div>
                            <a href="mailto:ojjo@ojjo.ru" class="footer__contacts-link element-interaction link-reset">ojjo@ojjo.ru</a>
                        </div>
                    </div>
                </div>
                <div class="footer__info-col">
                    <div class="footer__info-title">Социальные сети</div> 
                    <div class="footer__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper justo, nec, pellentesque.</div>  
                    
                    <ul class="footer__social social">
                        <li class="footer__social-item social-item">
                            <a href="#" target="_blank" class="footer__social-link element-interaction">
                                <svg xmlns="http://www.w3.org/2000/svg" width="39" height="39" viewBox="0 0 39 39" fill="none"><path d="M35.8435 11.2856C35.6493 10.5641 35.269 9.90634 34.7407 9.37804C34.2124 8.84974 33.5546 8.46947 32.8332 8.27528C30.1763 7.55621 19.5001 7.55621 19.5001 7.55621C19.5001 7.55621 8.82381 7.55621 6.16694 8.27528C5.44549 8.46947 4.78769 8.84974 4.25939 9.37804C3.73109 9.90634 3.35082 10.5641 3.15662 11.2856C2.66053 13.9952 2.41978 16.7454 2.43756 19.5C2.41978 22.2545 2.66053 25.0047 3.15662 27.7143C3.35082 28.4358 3.73109 29.0936 4.25939 29.6219C4.78769 30.1502 5.44549 30.5305 6.16694 30.7246C8.82381 31.4437 19.5001 31.4437 19.5001 31.4437C19.5001 31.4437 30.1763 31.4437 32.8332 30.7246C33.5546 30.5305 34.2124 30.1502 34.7407 29.6219C35.269 29.0936 35.6493 28.4358 35.8435 27.7143C36.3396 25.0047 36.5803 22.2545 36.5626 19.5C36.5803 16.7454 36.3396 13.9952 35.8435 11.2856V11.2856ZM16.0876 24.6187V14.3812L24.9479 19.5L16.0876 24.6187Z" fill="white"/></svg>
                            </a>
                        </li>
                        <li class="footer__social-item social-item">
                            <a href="#" target="_blank" class="footer__social-link element-interaction">
                                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none"><g clip-path="url(#clip0)"><path fill-rule="evenodd" clip-rule="evenodd" d="M32.0436 22.1364C32.0436 22.1364 34.9542 25.011 35.6742 26.3412C35.6882 26.3603 35.6992 26.3816 35.7066 26.4042C36 26.8956 36.072 27.2808 35.928 27.5652C35.685 28.035 34.8624 28.2708 34.5834 28.2906H29.439C29.0808 28.2906 28.3356 28.197 27.4284 27.5706C26.7354 27.0864 26.046 26.289 25.3782 25.5096C24.381 24.3522 23.5188 23.3478 22.6458 23.3478C22.5356 23.3475 22.4261 23.3658 22.3218 23.4018C21.6612 23.6106 20.8224 24.552 20.8224 27.0594C20.8224 27.8442 20.2032 28.2906 19.7694 28.2906H17.4132C16.6104 28.2906 12.4308 28.0098 8.72464 24.102C4.18324 19.3176 0.10444 9.71995 0.06484 9.63535C-0.18896 9.01435 0.34384 8.67595 0.91984 8.67595H6.11464C6.81124 8.67595 7.03804 9.09715 7.19644 9.47515C7.38004 9.90895 8.06044 11.6442 9.17644 13.5936C10.9836 16.7652 12.0942 18.0558 12.9816 18.0558C13.1484 18.0562 13.3123 18.0128 13.4568 17.9298C14.616 17.2926 14.4 13.1526 14.346 12.2994C14.346 12.1338 14.3442 10.4508 13.7502 9.63715C13.3254 9.05395 12.6018 8.82715 12.1644 8.74435C12.2814 8.57515 12.5298 8.31595 12.8484 8.16295C13.6422 7.76695 15.0768 7.70935 16.5006 7.70935H17.2908C18.8352 7.73095 19.2348 7.82995 19.7964 7.97215C20.9268 8.24215 20.9484 8.97475 20.8494 11.4696C20.8206 12.1824 20.79 12.9852 20.79 13.9302C20.79 14.1318 20.781 14.3568 20.781 14.5854C20.7468 15.8652 20.7018 17.307 21.6054 17.8992C21.7226 17.9722 21.858 18.0108 21.996 18.0108C22.3092 18.0108 23.247 18.0108 25.7904 13.6458C26.9064 11.718 27.7704 9.44455 27.8298 9.27355C27.8802 9.17815 28.0314 8.90995 28.215 8.80195C28.3456 8.73246 28.4919 8.69775 28.6398 8.70115H34.7508C35.4168 8.70115 35.8686 8.80195 35.9568 9.05395C36.1044 9.46255 35.928 10.71 33.138 14.4828C32.6682 15.111 32.256 15.6546 31.8942 16.1298C29.3652 19.449 29.3652 19.6164 32.0436 22.1364V22.1364Z" fill="white"/></g><defs><clipPath id="clip0"><rect width="36" height="36" fill="white"/></clipPath></defs></svg>
                            </a>
                        </li>
                        <li class="footer__social-item social-item">
                            <a href="#" target="_blank" class="footer__social-link element-interaction">
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="39" viewBox="0 0 40 39" fill="none"><path d="M22.3283 34.1201V20.8016H26.9366L27.6216 15.587H22.3283V12.2655C22.3283 10.7607 22.7583 9.73047 24.9733 9.73047H27.78V5.08134C26.4144 4.93866 25.0417 4.86976 23.6683 4.87497C19.595 4.87497 16.7983 7.29947 16.7983 11.7503V15.5772H12.22V20.7918H16.8083V34.1201H22.3283Z" fill="white"/></svg>
                            </a>
                        </li>
                        <li class="footer__social-item social-item">
                            <a href="#" target="_blank" class="footer__social-link element-interaction">
                                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none"><path d="M30.9975 5.57554L4.40252 15.831C2.58752 16.56 2.59802 17.5725 4.06952 18.024L10.8975 20.154L26.6955 10.1865C27.4425 9.73203 28.125 9.97653 27.564 10.4745L14.7645 22.026H14.7615L14.7645 22.0275L14.2935 29.0655C14.9835 29.0655 15.288 28.749 15.675 28.3755L18.9915 25.1505L25.89 30.246C27.162 30.9465 28.0755 30.5865 28.392 29.0685L32.9205 7.72654C33.384 5.86804 32.211 5.02654 30.9975 5.57554V5.57554Z" fill="white"/></svg>
                            </a>
                        </li>
                        <li class="footer__social-item social-item">
                            <a href="#" target="_blank" class="footer__social-link element-interaction">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M8.564 2.445C8.564 2.12 8.597 1.925 9.154 1.925H16.619C17.919 1.925 18.639 3.035 19.159 5.118L19.579 6.784H20.849C21.079 2.056 21.279 0 21.279 0C21.279 0 18.083 0.36 16.189 0.36H6.64L1.526 0.196V1.566L3.251 1.892C4.461 2.132 4.751 2.388 4.851 3.498C4.851 3.498 4.961 6.768 4.961 12.138C4.961 17.523 4.871 20.748 4.871 20.748C4.871 21.721 4.481 22.081 3.281 22.321L1.559 22.651V24L6.689 23.835H15.239C17.174 23.835 21.629 24 21.629 24C21.734 22.83 22.379 17.52 22.484 16.936H21.284L20 19.846C18.995 22.126 17.524 22.291 15.89 22.291H10.984C9.354 22.291 8.569 21.651 8.569 20.241V12.8C8.569 12.8 12.189 12.8 13.359 12.896C14.271 12.96 14.822 13.221 15.119 14.494L15.509 16.189H16.919L16.829 11.911L17.021 7.606H15.63L15.18 9.496C14.897 10.74 14.7 10.966 13.426 11.096C11.76 11.266 8.611 11.236 8.611 11.236V2.45H8.561L8.564 2.445Z" fill="white"/></svg>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
        <section class="footer__copyright">
            <div class="container">
                <div class="footer__copyright-col">
                    <a href="#" class="footer__copyright-link link-reset">(c) 2020 OJJO jewelry</a>
                </div>
                <div class="footer__copyright-col">
                    <a href="#" class="footer__copyright-link link-reset">Договор публичной офферты</a>
                </div>
                <div class="footer__copyright-col">
                    <a href="#" class="footer__copyright-link link-reset">Контрагентам</a>
                </div>
                <div class="footer__copyright-col">
                    <a href="#" class="footer__copyright-link link-reset">Сделано Figma.info</a>
                </div>
            </div>
        </section>
    </footer>
</template>

<style lang="scss">
    .mailing {
        padding-top: 100px;
        padding-bottom: 120px;
        background: url("../assets/img/mailing-bg.jpg") center/cover no-repeat;
    }

    .mailing__title {
        color: #fff;
    }

    .mailing__suptitle {
        font-size: 2.1rem;
        line-height: 140%;
        text-align: center;
        color: #fff;
        margin-bottom: 15px;
    }

    .mailing__wrap {
        margin-top: 60px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .mailing__col {
        &:nth-child(1) {
            margin-right: 80px;
        }
    }

    .mailing__item {
        display: flex;
        align-items: center;
        &:not(:last-child) {
            margin-bottom: 15px;
        }
    }

    .mailing__item-icon {
        margin-right: 20px;
        display: flex;
    }

    .mailing__item-title {
        font-size: 1.8rem;
        line-height: 140%;
        color: #FFFFFF;
    }

    .mailing__form-wrap {
        border: 1px solid #FFFFFF;
        padding: 15px;
    }

    .mailing__form {
        padding: 20px 22px;
        background: #fff;
        display: flex;
    }

    .mailing__form-email {
        padding: 15px 87px 15px 20px;
        font-weight: 500;
        line-height: 1.6rem;
        letter-spacing: 0.1em;
        background: #fff;
        border: 1px solid #D6D6D6;
        color: rgba(51, 51, 51, 0.5);
        margin-right: 15px;
        width: 60%;
        &::placeholder {
            font-weight: 500;
            line-height: 1.6rem;
            letter-spacing: 0.1em;
            text-transform: uppercase;
            color: rgba(51, 51, 51, 0.5);
        }
    }

    .mailing__form-submit {
        padding: 14px 35px;
        border: none;
        cursor: pointer;
        width: 40%;
        text-transform: uppercase;
    }

    .footer__info {
        padding-top: 80px;
        background: #e5e5e5;
        .container {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            grid-gap: 30px;
            border-bottom: 1px solid #333333;
            padding-bottom: 60px;
        }
    }

    .footer__info-title {
        font-weight: 500;
        font-size: 1.8rem;
        line-height: 140%;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        color: #333333;
        padding-bottom: 10px;
        margin-bottom: 30px;
        border-bottom: 1px solid #333333;
    }

    .footer__nav-item {
        &:not(:last-child) {
            margin-bottom: 15px;
        }
    }

    .footer__text {
        margin-bottom: 22px;
    }

    .footer__contacts-item {
        display: flex;
        align-items: center;
        .footer__contacts-icon {
            margin-right: 20px;
        }
        &:not(:last-child) {
            margin-bottom: 15px;
        }
    }

    .footer__social-link svg * {
        fill: #333333;
    }

    .footer__copyright {
        padding: 20px 0;
        background: #e5e5e5;
        .container {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            grid-gap: 30px;
        }
    }

    .footer__copyright-col {
        .footer__copyright-link {
            display: block;
        }
        &:nth-child(2) .footer__copyright-link {
            padding-left: 40px;
        }
        &:nth-child(3) .footer__copyright-link {
            text-align: right;
            padding-right: 80px;
        }
        &:last-child .footer__copyright-link {
            text-align: right;
            text-decoration-line: underline;
            font-weight: 600;
        }
    }

    @media (max-width: 768px) {
        .mailing__wrap {
            flex-direction: column;
        }
        .mailing__col {
            &:nth-child(1) {
                margin-right: 0;
                margin-bottom: 45px;
            }
            &:nth-child(2) {
                width: 100%;
            }
        }
        .footer__info, .footer__copyright {
            .container {
                grid-template-columns: repeat(2, 1fr);
            }
        }
        .footer__copyright-col {
            &:nth-child(3) .footer__copyright-link {
                text-align: left;
                padding-right: 0;
            }
            &:nth-child(2) .footer__copyright-link {
                text-align: right;
                padding: 0;
            }
        }
    }

    @media (max-width: 480px) {
        .footer__info, .footer__copyright {
            .container {
                grid-template-columns: repeat(1, 1fr);
            }
        }
        .footer__copyright-col {
            &:nth-child(2) .footer__copyright-link {
                text-align: left;
                padding: 0;
            }
            &:nth-child(4) .footer__copyright-link {
                text-align: left;
                padding: 0;
            }
        }
        .mailing__form {
            flex-direction: column;
        }
        .mailing__form-email, .mailing__form-submit {
            width: auto;
            margin: 0;
        }
        .mailing__form-email {
            margin-bottom: 15px;
        }
        .social {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-gap: 30px;
        }
        .social-item {
            margin-right: 0;
        }
    }
</style>

<script>
import { validationMixin } from 'vuelidate'
import { required, email } from 'vuelidate/lib/validators'
    export default {
        mixins: [validationMixin],
        data: function() {
            return {
                form: {
                    email: ''
                }
            }
        },
        validations: {
            form: {
                email: { required, email }
            }
        },
        methods: {
            sendForm() {
                    this.$v.form.$touch()
                    if (!this.$v.form.$error) {
                        this.$load(async() => {
                            await this.$api.send.sendForm('test', {
                                email: this.form.email
                            })
                        })
                    }
                
            }
        }
    }
</script>
