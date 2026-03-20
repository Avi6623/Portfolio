import "./styles/BackgroundEffect.css";

const BackgroundEffect = () => {
  const row1 = "--- [EXEC] NODE.JS --- [DB] MONGODB --- [CACHE] REDIS --- [API] EXPRESS --- [CLOUD] AWS --- [CONTAINER] DOCKER --- ";
  const row2 = "--- [FRONT] REACT --- [SSR] NEXT.JS --- [TYPE] TYPESCRIPT --- [STYLE] TAILWIND --- [STATE] REDUX --- [DATA] GRAPHQL --- ";
  const row3 = "--- [CORE] SYSTEM ARCHITECTURE --- [NET] WEBSOCKETS --- [STRUCT] MICROSERVICES --- [OPS] CI/CD PIPELINES --- ";

  return (
    <div className="bg-effect-container">
      <div className="bg-row-1">
        <div className="bg-scroll-text">{row1.repeat(4)}</div>
      </div>
      <div className="bg-row-2">
        <div className="bg-scroll-text">{row2.repeat(4)}</div>
      </div>
      <div className="bg-row-3">
        <div className="bg-scroll-text">{row3.repeat(4)}</div>
      </div>
    </div>
  );
};

export default BackgroundEffect;
