import React from 'react';
import { VscArrowRight } from "react-icons/vsc";

export default function Footer() {
    return (
        <footer>
            <div class="w-[1512px] h-[600px] bg-black ml-auto mr-auto -mb-15 flex flex-col items-center justify-center gap-7">
                <p className="text-[#E1D5C2] text-[34px] font-['Gilda_Display']">Fique por dentro de todas as promoções</p>
                <p className="text-[#EAE5E1] text-[16px] font-['Gilda_Display']">Quer receber nossas ofertas? Cadastre-se e comece a recebê-las!</p>

                <div className="mt-8">
                    <input className="w-[600px] h-[50px] bg-[#FFFFFF] text-black  font-['Montserrat'] rounded-[10px] pl-10" type="email" placeholder="Digite seu E-mail" />
                </div>
            </div>

            <div className="flex items-center justify-between ml-22 mr-22">
                <div>
                    <p className="text-[#E1D5C2] text-[24px] font-[Gilda_Display]">Entre em contato conosco</p>
                    <div className="mt-7">
                        <p className="text-[#EAE5E1] text-[18px] font-['Gilda_Display']">Rua Mário Salton, 300 - Bento Gonçalves, RS</p>
                        <p className="text-[#251305] text-[18px] font-['Gilda_Display']">(12) 9 8202-1943</p>
                        <p className="text-[#EAE5E1] text-[18px] font-['Gilda_Display']">vivant.contato@gmail.com</p>
                    </div>
                </div>

                <div className="items-center justify-center flex flex-col gap-5">
                    <p className="text-[#E1D5C2] text-[24px] font-['Gilda_Display']">Formas de pagamento</p>
                    <img class="w-80 h-24" src='formas-de-pagamento.png' />
                </div>

                <div>
                    <p className="text-[#E1D5C2] text-[24px] font-['Gilda_Display']">Siga-nos e brinde com a gente</p>
                    <div className="mt-7">
                        <p className="text-[#EAE5E1] text-[18px] font-['Gilda_Display']">@vivant</p>
                        <p className="text-[#EAE5E1] text-[18px] font-['Gilda_Display']">@vivant</p>
                        <p className="text-[#EAE5E1] text-[18px] font-['Gilda_Display']">@vivant</p>
                    </div>
                </div>
            </div>

            <div className="items-center justify-center flex flex-col gap-5 mt-40">
            <p className="text-[#E1D5C2] text-[18px] font-['Gilda_Display']">&copy;2025 Vivant. Todos os direitos reservados.</p>
            </div>
        </footer>
    )
}