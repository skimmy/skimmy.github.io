import SlideshowWithCaption from "../components/ui/SlideshowWithCaption"

const TestPage = () => {
    const info = [
    {
      src: '/bfs-example/bfs-example-1.svg',
      caption: 'In this graph, we want to find paths from the <i>source</i> <code>B</code> to all other nodes.'
    },
    {
      src: '/bfs-example/bfs-example-2.svg',
      caption: '<h3 class="font-bold text-lg mb-2">Forest Path</h3><p>A serene path through a lush green forest.</p>'
    },
    {
      src: '/bfs-example/bfs-example-3.svg',
      caption: '<h3 class="font-bold text-lg mb-2">Ocean Waves</h3><p>Crystal clear waters meeting golden sand beaches.</p>'
    },
    {
      src: '/bfs-example/bfs-example-4.svg',
      caption: '<h3 class="font-bold text-lg mb-2">Desert Dunes</h3><p>Endless sand dunes under a dramatic sky.</p>'
    }
  ];

    return <SlideshowWithCaption slides={info} showThumbnails={false} />
}

export default TestPage;