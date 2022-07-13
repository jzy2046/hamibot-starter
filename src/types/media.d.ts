/*
 * @Author: BATU1579
 * @CreateDate: 2022-07-12 04:23:34
 * @LastEditor: BATU1579
 * @LastTime: 2022-07-12 15:54:53
 * @FilePath: \\src\\types\\media.d.ts
 * @Description: 多媒体模块
 */
declare module 'media' {
    global {

        /**
         * @description: media 模块提供多媒体编程的支持。目前仅支持音乐播放和媒体文件扫描。后续会结合 UI 加入视频播放等功能。
         * - **注意！：使用该模块播放音乐时是在后台异步播放的，在脚本结束后会自动结束播放，因此可能需要插入诸如 `sleep()` 的语句来使脚本保持运行。**
         * @example:
         * ```typescript
         * // 播放音乐
         * media.playMusic('/sdcard/1.mp3');
         * // 让音乐播放完
         * sleep(media.getMusicDuration());
         * ```
         */
        const media: Media;

        interface Media {
            /**
             * @description: 扫描路径 path 的媒体文件，将它加入媒体库中；或者如果该文件以及被删除，则通知媒体库移除该文件。媒体库包括相册、音乐库等，因此该函数可以用于把某个图片文件加入相册。
             * @param {string} path 媒体文件路径。
             * @example:
             * ```typescript
             * // 请求截图
             * requestScreenCapture(false);
             * // 截图
             * let img = captureScreen();
             * let path = '/sdcard/screenshot.png';
             * // 保存图片
             * img.saveTo(path);
             * // 把图片加入相册
             * media.scanFile(path);
             * ```
             */
            scanFile(path: string): void;

            /**
             * @description: 播放音乐文件 `path` 。如果文件不存在或者文件不是受支持的音乐格式，则抛出 `UncheckedIOException` 异常。
             * - **注意！：该函数不会显示任何音乐播放界面。如果要使用音乐播放器播放音乐，请使用 `app.viewFile` 函数。**
             * @param {string} path 音乐文件路径。
             * @param {number} [volume] 播放音量，为 0~1 的浮点数（默认为 1）。
             * @param {boolean} [looping] 是否循环播放，如果为 `true` 则循环播放（默认为 `false` ）。
             * @example:
             * ```typescript
             * // 传递第三个参数为 true 以循环播放音乐
             * media.playMusic("/sdcard/1.mp3", 1, true);
             * // 等待三次播放的时间
             * sleep(media.getMusicDuration() * 3);
             * ```
             */
            playMusic(path: string, volume?: number, looping?: boolean): void;

            /**
             * @description: 把当前播放进度调整到时间 `msec` 的位置。如果当前没有在播放音乐，则调用函数没有任何效果。
             * @param {number} msec 音乐进度，单位毫秒。
             * @example:
             * ```typescript
             * // 播放音乐
             * media.playMusic('/sdcard/1.mp3');
             * // 调整到30秒的位置
             * media.musicSeekTo(30 * 1000);
             * // 等待音乐播放完成
             * sleep(media.getMusicDuration() - 30 * 1000);
             * ```
             */
            musicSeekTo(msec: number): void;

            /**
             * @description: 暂停音乐播放。如果当前没有在播放音乐，则调用函数没有任何效果。
             */
            pauseMusic(): void;

            /**
             * @description: 继续音乐播放。如果当前没有播放过音乐，则调用该函数没有任何效果。
             */
            resumeMusic(): void;

            /**
             * @description: 停止音乐播放。如果当前没有在播放音乐，则调用函数没有任何效果。
             */
            stopMusic(): void;

            /**
             * @description: 检查当前是否正在播放音乐。
             * @return {boolean} 如果正在播放音乐则为 `true` 。
             */
            isMusicPlaying(): boolean;

            /**
             * @description: 获取当前音乐的时长。
             * @return {number} 当前音乐的时长，单位毫秒。
             */
            getMusicDuration(): number;

            /**
             * @description: 获取当前音乐的播放进度。
             * @return {number} 当前音乐的播放进度(已经播放的时间)，单位毫秒。
             */
            getMusicCurrentPosition(): number;
        }
    }
}