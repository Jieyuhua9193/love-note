interface ILoadAnimationOptions {
  loop?: boolean;
  autoplay?: boolean;
  path?: string;
  animationData?: any;
  rendererSettings: {
    context: object;
    clearCanvas?: boolean;
  },
  renderer?: string;
}

declare module 'lottie-miniprogram' {
  function setup(canvas: object): void;
  function loadAnimation(options: ILoadAnimationOptions): {
    play: () => void;
  }
}