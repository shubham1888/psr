'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import AudioPlayer from '../../components/AudioPlayer'; // custom component for audio playback

export default function PresidentPage() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [countpalyed, setCountpalyed] = useState(0)
    return (
        <div className="flex flex-col bg-slate-800 min-h-screen items-center justify-center">
            {/* President's Photo */}
            <div className="rounded-full overflow-hidden my-8">
                <Image
                    src="/president.jpeg"
                    alt="President's portrait"
                    width={600}
                    height={600}
                    className="rounded-full shadow-lg object-cover"
                />
            </div>

            {/* Speech Play/Pause Button */}
            <button
                className="px-4 py-2 rounded-md font-semibold text-white bg-blue-500 hover:bg-blue-600"
                onClick={() => { setIsPlaying(!isPlaying); setCountpalyed(countpalyed + 1); }}
            >
                {isPlaying ? 'Pause Speech' : 'Play Speech'}
            </button>

            {/* Optional: Speech Transcript Panel */}
            {isPlaying && (
                <div className="mt-8 px-4 py-2 bg-slate-950 rounded-md shadow-md text-white">
                    <p>President's inspirational speech transcript...</p>
                </div>
            )}

            <AudioPlayer src="/speech.mp3" playing={isPlaying} onFinished={() => setIsPlaying(false)} />

            <div className="mt-8 text-center text-lg text-white font-semibold leading-tight mb-10">
                <p>President's impactful quote or message goes here...</p>
            </div>
            <div className='rounded-lg text-slate-100 mb-10 px-8 bg-slate-900 py-6 h-[50vh] overflow-y-scroll w-[70vw] shadow-lg'>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores eos tempora sint est animi ea dicta maiores, nemo et aperiam mollitia odit amet aliquid, similique impedit placeat commodi ad! Ipsum, quibusdam ratione? Perspiciatis nemo culpa nobis totam repellat consequatur voluptates quibusdam aliquam mollitia numquam ex reiciendis nihil at dolore fugiat minus quis saepe ab ipsum impedit sequi quo, distinctio eligendi. Magnam sapiente aliquam, quasi assumenda repudiandae repellat voluptas, obcaecati tempore soluta earum ullam. Explicabo dolore fuga ipsa modi, quaerat voluptas, aliquam sunt iusto deleniti dolorum error ut. Soluta culpa quas ipsa animi cumque doloremque at amet magnam quisquam reprehenderit et perferendis, delectus qui voluptatum necessitatibus maxime impedit, corrupti numquam, voluptatibus quibusdam obcaecati! Reiciendis laudantium delectus at, amet illum pariatur, cumque, eius inventore nostrum voluptatem itaque optio non expedita iste tempora earum! Ipsa laborum autem, aut sapiente excepturi optio praesentium magnam similique adipisci quam soluta eveniet? Ut omnis deleniti quis tempora a at! Doloremque obcaecati exercitationem saepe, sint animi ea, beatae quis alias reiciendis impedit ad? Velit laudantium fugiat quo accusamus debitis repellat eveniet optio eligendi commodi quaerat aliquid porro iste, pariatur placeat vel officiis labore assumenda amet iusto deserunt temporibus exercitationem! Placeat voluptatem sunt quidem molestiae sit minus accusamus dignissimos! Quod, alias? Laudantium, fuga soluta reiciendis impedit ipsum ducimus facilis optio non quae cum repellat fugiat amet molestias voluptas, necessitatibus suscipit porro deleniti. Aperiam, incidunt explicabo optio suscipit ipsam facere. Velit vero expedita voluptatum id? Labore at optio nam in asperiores adipisci, itaque fuga sapiente iusto laudantium blanditiis, saepe tenetur, doloribus cum animi perferendis mollitia aliquam velit fugiat. Voluptate corporis est vel at commodi repellendus animi et asperiores! Fuga, soluta. Ipsa, natus. Sit nihil, beatae magnam omnis ipsa ullam praesentium, illum aperiam, magni modi dolorem. Recusandae nostrum rem aliquid id impedit porro eaque, aperiam quam fuga, assumenda eius, quisquam facilis numquam fugiat fugit alias soluta! Vero voluptatum provident eius, placeat sint temporibus ab reiciendis minus ut cum eum, amet illum maxime, ipsum culpa deserunt itaque sapiente doloremque soluta tempore deleniti quae veniam atque neque? Dolor amet vero iure beatae incidunt. Aspernatur pariatur natus velit ad explicabo facere deleniti minima error. Blanditiis aut, excepturi sed quaerat repellendus inventore, vitae eveniet ullam adipisci dolorum, exercitationem quas! Vitae, assumenda provident dolorum ex facere mollitia numquam molestias maxime quia quos magnam sed? Ad molestias et tempore provident! Molestias, nulla. Enim cumque soluta, praesentium laudantium repellat commodi animi et quidem facere ullam laborum nisi illo, optio deserunt labore! Minus corporis voluptate exercitationem alias eius iure, perferendis expedita nihil ipsa nulla quibusdam repellendus nisi, saepe ab eum, molestias voluptates ipsam ad adipisci magnam harum. Obcaecati nemo tempora delectus blanditiis excepturi, maiores ad iste ipsam asperiores labore deleniti temporibus voluptatum fugit rem nobis! Sequi, nesciunt? Maxime facere veniam aliquam reiciendis quae quaerat perferendis officiis voluptatibus dolore, placeat harum repellat rerum, ea, vitae provident. Vitae, molestias doloremque enim iure nobis obcaecati esse sequi repellendus animi architecto veniam odit alias tenetur facilis commodi. Et amet unde libero vel repellat alias magnam corrupti. Dolore voluptas porro doloremque placeat iste non voluptatum reprehenderit. Modi neque laboriosam, nulla distinctio assumenda accusamus, possimus ut, et amet tenetur animi ad blanditiis vitae! Quo officiis neque quis repudiandae. Architecto voluptates, fugiat tempora molestiae, minus repellendus dicta vitae nulla quae exercitationem atque commodi accusamus incidunt non! Beatae in quam amet ratione illum cum, vitae repudiandae maiores itaque neque saepe officiis id eaque aliquid natus at, incidunt, odit omnis aspernatur excepturi cupiditate ad enim asperiores? Eveniet consequatur molestias repudiandae, ipsum deserunt sint nulla harum quos odio eius sequi reprehenderit mollitia dicta! Et minima aliquid dignissimos dolorum dolores magni consectetur eum fugit a totam, fugiat, nostrum aut, recusandae libero vitae. Tenetur facere in voluptatem. Nulla, perferendis? Totam vero culpa error nobis ipsum unde, veritatis cupiditate maiores pariatur sint ipsa itaque rem ab nostrum quo, tempora consequuntur rerum officiis optio aliquid nulla, cumque necessitatibus iste. Excepturi quidem voluptatem necessitatibus voluptatum animi illum vitae ex qui magni, est tempore porro culpa autem dolor natus quod labore! Eos nulla reiciendis dicta, qui minus excepturi assumenda id aperiam fugiat eligendi dolorum cupiditate molestias obcaecati dolorem adipisci eveniet at nisi, numquam eaque earum tempora. Aut quidem in, nesciunt, deleniti doloribus, molestiae voluptas iste numquam natus vel beatae. Minus odit alias error? Dignissimos tempora voluptatem quos! Qui voluptatibus laudantium optio dolorum maiores itaque animi molestiae amet ex magni, saepe quis vero repellat cupiditate eligendi, deleniti nostrum hic consequatur cumque unde a rerum assumenda similique dolores. Ducimus provident aliquid quaerat in voluptatem consequuntur dolore quos tempore, minima, officiis eaque perferendis delectus, nostrum eius dolor laborum molestiae possimus id temporibus aliquam. Excepturi odio expedita molestias ex, distinctio iste, earum itaque ratione a ullam doloribus totam rerum consequuntur sint adipisci quam? Commodi vitae provident neque quasi, quaerat adipisci tempora, suscipit quod, quibusdam atque magni. Quos culpa vitae architecto sunt deleniti, commodi officia nobis, repellat vero minus placeat consectetur illo nihil in unde corporis ipsum veniam qui molestiae. Dolorum asperiores, expedita esse sequi dolor adipisci similique illum possimus aperiam rem, dolores error itaque quia consectetur sapiente ullam? Explicabo quidem veniam eos ipsa minus. Temporibus, iste tempora rerum facilis veritatis quaerat inventore, sapiente commodi mollitia voluptas laboriosam error accusamus? Aut, facere fuga. Molestiae sit voluptatum, voluptate vero recusandae nam praesentium dolore voluptatibus ratione accusamus quis voluptates libero labore veniam quasi perferendis sed saepe ut atque suscipit! Reprehenderit debitis delectus labore ipsum accusamus praesentium et assumenda, vel repudiandae veniam laudantium nostrum est vero soluta nam. Quae sed placeat ducimus id possimus quaerat fuga reprehenderit porro soluta. Est eius distinctio qui rerum esse perferendis! Obcaecati ad nulla cum. Vitae ut fuga error rem. Voluptas obcaecati libero facilis provident, excepturi sed fugit nobis. Pariatur delectus recusandae repellendus sint? Ut cupiditate repellat, architecto iste dolorum doloribus commodi ducimus ea officiis odit quam nobis sunt, quasi mollitia vitae sint ex necessitatibus. Officiis cum iste tenetur distinctio consequuntur hic culpa. Voluptas laboriosam, dolore reiciendis voluptates similique rerum minus corrupti exercitationem, aliquid eius totam aliquam tempora? Voluptates aliquid excepturi quia architecto fuga nisi ab exercitationem at earum et, aut aliquam tempore ex iure, temporibus magnam amet.
                </p>
            </div>
        </div>
    );
}
