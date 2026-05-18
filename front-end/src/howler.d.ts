declare module "howler" {
  export class Howl {
    constructor(options: { src: string | string[]; html5?: boolean; volume?: number });
    play(spriteOrId?: string | number): number;
    pause(id?: number): this;
    stop(id?: number): this;
    playing(id?: number): boolean;
    seek(): number;
    seek(position: number, id?: number): this;
    duration(id?: number): number;
    unload(): void;
    on(event: string, fn: () => void, id?: number): this;
    off(event?: string, fn?: () => void, id?: number): this;
  }
}
