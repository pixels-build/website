export default function NounCard(props: { id: number }) {
  return (
    <div class="flex flex-col bg-white rounded-2xl overflow-hidden drop-shadow-2xl w-48 group cursor-pointer">
      <img
        src={`https://api.cloudnouns.com/v2/nouns/${props.id}`}
        draggable={false}
        class="object-cover object-center"
      />
      <div class="relative text-xl font-medium p-3 leading-none font-silkscreen whitespace-nowrap">
        Noun {props.id}
        <div class="absolute left-0 top-0 h-full flex items-center justify-center font-silkscreen bg-blue w-full text-white translate-y-12 group-hover:translate-y-0 transition-transform">
          Add to bag
        </div>
      </div>
    </div>
  );
}
