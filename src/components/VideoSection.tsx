const VideoSection = () => {
  const videoId = "SYkXQ_lO6lE";
  
  return (
    <section className="py-12 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl">
            <iframe
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&rel=0&modestbranding=1&controls=0&showinfo=0&playsinline=1&enablejsapi=1`}
              title="Vídeo Institucional"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="absolute inset-0 w-full h-full border-0"
              style={{ border: 'none' }}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
