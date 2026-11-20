import React, { useState, useRef, useEffect, useCallback } from 'react';

export interface FlipperLabels {
  dropzoneTitle: string;
  dropzoneSubtitle: string;
  browseButton: string;
  loadSampleButton: string;
  supportedFormats: string;
  privacyBadge: string;
  flipHorizontal: string;
  flipVertical: string;
  rotate90: string;
  rotate180: string;
  reset: string;
  downloadFlipped: string;
  changeVideo: string;
  exportingStatus: string;
  exportCompleteStatus: string;
  exportErrorStatus: string;
  activeTransformsLabel: string;
  noTransformsActive: string;
  badgeMirroredH: string;
  badgeFlippedV: string;
  badgeRotated: string;
  originalResolution: string;
  audioPreserved: string;
  cancelExport: string;
}

interface Props {
  labels: FlipperLabels;
}

export default function VideoFlipperIsland({ labels }: Props) {
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [videoMeta, setVideoMeta] = useState<{
    width: number;
    height: number;
    duration: number;
    name: string;
  } | null>(null);

  const [flipH, setFlipH] = useState<boolean>(false);
  const [flipV, setFlipV] = useState<boolean>(false);
  const [rotation, setRotation] = useState<number>(0);

  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [isGeneratingSample, setIsGeneratingSample] = useState<boolean>(false);
  const [isExporting, setIsExporting] = useState<boolean>(false);
  const [exportProgress, setExportProgress] = useState<number>(0);
  const [exportStatusMessage, setExportStatusMessage] = useState<string>('');
  const [exportedDownloadUrl, setExportedDownloadUrl] = useState<string | null>(null);
  const [exportedFileName, setExportedFileName] = useState<string>('');
  const [exportError, setExportError] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const previewVideoRef = useRef<HTMLVideoElement | null>(null);
  const cancelExportRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    return () => {
      if (videoUrl) {
        URL.revokeObjectURL(videoUrl);
      }
      if (exportedDownloadUrl) {
        URL.revokeObjectURL(exportedDownloadUrl);
      }
    };
  }, [videoUrl, exportedDownloadUrl]);

  const loadVideoFile = useCallback(
    (file: File) => {
      if (videoUrl) {
        URL.revokeObjectURL(videoUrl);
      }
      if (exportedDownloadUrl) {
        URL.revokeObjectURL(exportedDownloadUrl);
        setExportedDownloadUrl(null);
      }
      const nextUrl = URL.createObjectURL(file);
      setVideoFile(file);
      setVideoUrl(nextUrl);
      setFlipH(false);
      setFlipV(false);
      setRotation(0);
      setExportProgress(0);
      setExportStatusMessage('');
      setExportError(null);
    },
    [videoUrl, exportedDownloadUrl]
  );

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      loadVideoFile(file);
    }
  };

  const handleDropzoneKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      fileInputRef.current?.click();
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file && file.type.startsWith('video/')) {
      loadVideoFile(file);
    }
  };

  const handleLoadedMetadata = () => {
    const v = previewVideoRef.current;
    if (!v) return;
    setVideoMeta({
      width: v.videoWidth || 1280,
      height: v.videoHeight || 720,
      duration: Number.isFinite(v.duration) ? v.duration : 0,
      name: videoFile?.name || 'sample-video.webm',
    });
  };

  const handleGenerateSampleVideo = async (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isGeneratingSample) return;
    setIsGeneratingSample(true);

    try {
      const canvas = document.createElement('canvas');
      canvas.width = 960;
      canvas.height = 540;
      const ctx = canvas.getContext('2d');
      if (!ctx) throw new Error('Canvas 2D unavailable');

      const stream = canvas.captureStream(30);
      const mimeType = MediaRecorder.isTypeSupported('video/webm;codecs=vp9')
        ? 'video/webm;codecs=vp9'
        : MediaRecorder.isTypeSupported('video/webm')
          ? 'video/webm'
          : 'video/mp4';

      const recorder = new MediaRecorder(stream, { mimeType });
      const chunks: BlobPart[] = [];
      recorder.ondataavailable = (ev) => {
        if (ev.data && ev.data.size > 0) chunks.push(ev.data);
      };

      const donePromise = new Promise<File>((resolve) => {
        recorder.onstop = () => {
          const ext = mimeType.includes('mp4') ? 'mp4' : 'webm';
          const blob = new Blob(chunks, { type: mimeType });
          const sampleFile = new File([blob], `selfie-demo-clip.${ext}`, {
            type: mimeType,
          });
          resolve(sampleFile);
        };
      });

      recorder.start(100);

      const totalFrames = 60;
      for (let frame = 0; frame < totalFrames; frame++) {
        const progress = frame / totalFrames;
        ctx.fillStyle = '#242236';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = '#FFC7C7';
        ctx.fillRect(40, 40, canvas.width - 80, 90);

        ctx.fillStyle = '#242236';
        ctx.font = 'bold 38px sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText('FLIPVIDEO SELFIE TEST →', canvas.width / 2, 100);

        ctx.fillStyle = '#FFE2E2';
        ctx.font = 'bold 32px sans-serif';
        ctx.textAlign = 'left';
        ctx.fillText('⬅ LEFT SIDE', 70, 270);

        ctx.textAlign = 'right';
        ctx.fillText('RIGHT SIDE ➡', canvas.width - 70, 270);

        const ballX = 140 + progress * (canvas.width - 280);
        ctx.beginPath();
        ctx.arc(ballX, 390, 36, 0, Math.PI * 2);
        ctx.fillStyle = '#FFC7C7';
        ctx.fill();

        ctx.fillStyle = '#242236';
        ctx.font = 'bold 22px sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText('TOP ↑', canvas.width / 2, 210);
        ctx.fillText('BOTTOM ↓', canvas.width / 2, 490);

        await new Promise((r) => setTimeout(r, 25));
      }

      recorder.stop();
      const generatedFile = await donePromise;
      loadVideoFile(generatedFile);
    } catch (_) {
      setExportError(labels.exportErrorStatus);
    } finally {
      setIsGeneratingSample(false);
    }
  };

  const toggleFlipH = () => setFlipH((prev) => !prev);
  const toggleFlipV = () => setFlipV((prev) => !prev);
  const handleRotate90 = () => setRotation((prev) => (prev + 90) % 360);
  const handleRotate180 = () => setRotation((prev) => (prev + 180) % 360);
  const handleReset = () => {
    setFlipH(false);
    setFlipV(false);
    setRotation(0);
  };

  const hasAnyTransform = flipH || flipV || rotation !== 0;

  const handleExportVideo = async () => {
    if (!videoUrl || isExporting) return;

    setIsExporting(true);
    setExportProgress(2);
    setExportError(null);
    setExportStatusMessage(labels.exportingStatus);

    if (exportedDownloadUrl) {
      URL.revokeObjectURL(exportedDownloadUrl);
      setExportedDownloadUrl(null);
    }

    const exportVideo = document.createElement('video');
    exportVideo.src = videoUrl;
    exportVideo.crossOrigin = 'anonymous';
    exportVideo.playsInline = true;
    exportVideo.preload = 'auto';

    let animFrameId: number | null = null;
    let audioCtx: AudioContext | null = null;
    let cancelled = false;

    const cleanup = () => {
      if (animFrameId !== null) {
        cancelAnimationFrame(animFrameId);
      }
      exportVideo.pause();
      exportVideo.removeAttribute('src');
      exportVideo.load();
      if (audioCtx && audioCtx.state !== 'closed') {
        audioCtx.close().catch(() => {});
      }
    };

    cancelExportRef.current = () => {
      cancelled = true;
      cleanup();
      setIsExporting(false);
      setExportProgress(0);
      setExportStatusMessage('');
    };

    try {
      await new Promise<void>((resolve, reject) => {
        exportVideo.onloadedmetadata = () => resolve();
        exportVideo.onerror = () => reject(new Error('Failed to load source video'));
      });

      const srcW = exportVideo.videoWidth || 1280;
      const srcH = exportVideo.videoHeight || 720;
      const duration =
        Number.isFinite(exportVideo.duration) && exportVideo.duration > 0
          ? exportVideo.duration
          : 1;

      const isSideways = rotation === 90 || rotation === 270;
      const outW = isSideways ? srcH : srcW;
      const outH = isSideways ? srcW : srcH;

      const canvas = document.createElement('canvas');
      canvas.width = outW;
      canvas.height = outH;
      const ctx = canvas.getContext('2d', { alpha: false });
      if (!ctx) {
        throw new Error('Could not initialize 2D rendering context');
      }

      const canvasStream = canvas.captureStream(30);
      const combinedTracks: MediaStreamTrack[] = [...canvasStream.getVideoTracks()];

      try {
        const rawVid = exportVideo as HTMLVideoElement & {
          captureStream?: () => MediaStream;
          mozCaptureStream?: () => MediaStream;
        };
        const directStream =
          typeof rawVid.captureStream === 'function'
            ? rawVid.captureStream()
            : typeof rawVid.mozCaptureStream === 'function'
              ? rawVid.mozCaptureStream()
              : null;

        if (directStream && directStream.getAudioTracks().length > 0) {
          exportVideo.muted = true;
          combinedTracks.push(...directStream.getAudioTracks());
        } else {
          const AudioContextClass =
            window.AudioContext ||
            (window as unknown as { webkitAudioContext: typeof AudioContext })
              .webkitAudioContext;
          if (AudioContextClass) {
            audioCtx = new AudioContextClass();
            const sourceNode = audioCtx.createMediaElementSource(exportVideo);
            const destNode = audioCtx.createMediaStreamDestination();
            sourceNode.connect(destNode);
            if (destNode.stream.getAudioTracks().length > 0) {
              combinedTracks.push(...destNode.stream.getAudioTracks());
            }
          }
        }
      } catch (_) {
        exportVideo.muted = true;
      }

      const combinedStream = new MediaStream(combinedTracks);

      const candidateMimeTypes = [
        'video/mp4;codecs=avc1,mp4a.40.2',
        'video/mp4',
        'video/webm;codecs=vp9,opus',
        'video/webm;codecs=vp8,opus',
        'video/webm',
      ];
      const selectedMime =
        candidateMimeTypes.find((type) => MediaRecorder.isTypeSupported(type)) || '';

      const recorder = new MediaRecorder(
        combinedStream,
        selectedMime
          ? {
              mimeType: selectedMime,
              videoBitsPerSecond: 8_000_000,
            }
          : {
              videoBitsPerSecond: 8_000_000,
            }
      );

      const recordedChunks: BlobPart[] = [];
      recorder.ondataavailable = (ev) => {
        if (ev.data && ev.data.size > 0) {
          recordedChunks.push(ev.data);
        }
      };

      const drawCurrentFrame = () => {
        ctx.save();
        ctx.fillStyle = '#000000';
        ctx.fillRect(0, 0, outW, outH);
        ctx.translate(outW / 2, outH / 2);
        ctx.rotate((rotation * Math.PI) / 180);
        ctx.scale(flipH ? -1 : 1, flipV ? -1 : 1);
        ctx.drawImage(exportVideo, -srcW / 2, -srcH / 2, srcW, srcH);
        ctx.restore();
      };

      const renderLoop = () => {
        if (cancelled) return;
        drawCurrentFrame();
        if (duration > 0) {
          const pct = Math.min(99, Math.max(5, Math.round((exportVideo.currentTime / duration) * 100)));
          setExportProgress(pct);
        }
        if (!exportVideo.paused && !exportVideo.ended) {
          animFrameId = requestAnimationFrame(renderLoop);
        }
      };

      const exportFinished = new Promise<Blob>((resolve, reject) => {
        recorder.onstop = () => {
          const finalMime = recorder.mimeType || selectedMime || 'video/webm';
          resolve(new Blob(recordedChunks, { type: finalMime }));
        };
        recorder.onerror = () => reject(new Error('MediaRecorder error'));
      });

      exportVideo.currentTime = 0;
      drawCurrentFrame();
      recorder.start(100);
      await exportVideo.play();
      animFrameId = requestAnimationFrame(renderLoop);

      await new Promise<void>((resolve) => {
        exportVideo.onended = () => resolve();
      });

      if (cancelled) return;

      drawCurrentFrame();
      if (recorder.state !== 'inactive') {
        recorder.stop();
      }

      const outputBlob = await exportFinished;
      cleanup();

      const isMp4 = outputBlob.type.includes('mp4');
      const ext = isMp4 ? 'mp4' : 'webm';
      const origBase = (videoFile?.name || 'video').replace(/\.[^/.]+$/, '');
      const transformSuffix = [
        flipH ? 'mirrored' : '',
        flipV ? 'flipped-v' : '',
        rotation ? `rot${rotation}` : '',
      ]
        .filter(Boolean)
        .join('-');
      const outName = `${origBase}-${transformSuffix || 'flipped'}.${ext}`;

      const dlUrl = URL.createObjectURL(outputBlob);
      setExportedDownloadUrl(dlUrl);
      setExportedFileName(outName);
      setExportProgress(100);
      setExportStatusMessage(labels.exportCompleteStatus);

      const a = document.createElement('a');
      a.href = dlUrl;
      a.download = outName;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } catch (_) {
      cleanup();
      if (!cancelled) {
        setExportError(labels.exportErrorStatus);
        setExportStatusMessage(labels.exportErrorStatus);
      }
    } finally {
      if (!cancelled) {
        setIsExporting(false);
      }
    }
  };

  const isSidewaysPreview = rotation === 90 || rotation === 270;
  const previewTransformStyle: React.CSSProperties = {
    transform: `rotate(${rotation}deg) scaleX(${flipH ? -1 : 1}) scaleY(${flipV ? -1 : 1}) scale(${isSidewaysPreview ? 0.72 : 1})`,
    transition: 'transform 0.38s cubic-bezier(0.22, 1, 0.36, 1)',
  };

  return (
    <div className="overflow-hidden rounded-3xl border border-border-token bg-card shadow-[0_20px_50px_-15px_rgba(36,34,54,0.08)]">
      {/* Hidden File Input */}
      <input
        ref={fileInputRef}
        type="file"
        accept="video/mp4,video/webm,video/quicktime,video/*"
        onChange={handleFileChange}
        className="sr-only"
        aria-label={labels.browseButton}
      />

      {!videoUrl ? (
        /* Sleek Single-Surface Professional Studio Dropzone */
        <div
          role="button"
          tabIndex={0}
          aria-label={labels.dropzoneTitle}
          onClick={() => fileInputRef.current?.click()}
          onKeyDown={handleDropzoneKeyDown}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          className={`group relative flex min-h-[340px] cursor-pointer flex-col items-center justify-center px-6 py-10 text-center transition-all sm:min-h-[370px] sm:px-12 ${
            isDragging
              ? 'bg-brand-rose/25'
              : 'bg-card hover:bg-subtle/20'
          }`}
        >
          {/* Elevated Studio Icon Badge */}
          <div
            className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-rose text-[#242236] shadow-sm ring-8 ring-brand-blush/50 transition-transform duration-300 group-hover:scale-105"
            aria-hidden="true"
          >
            <svg
              className="h-8 w-8"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M8 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3" />
              <path d="M16 3h3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-3" />
              <line x1="12" y1="2" x2="12" y2="22" strokeDasharray="3 3" />
              <polyline points="7 9 4 12 7 15" />
              <polyline points="17 9 20 12 17 15" />
            </svg>
          </div>

          <h2 className="text-xl font-extrabold tracking-tight text-text-primary sm:text-2xl">
            {labels.dropzoneTitle}
          </h2>
          <p className="mt-1.5 max-w-md text-sm text-text-secondary">
            {labels.dropzoneSubtitle}
          </p>

          {/* Primary & Demo Action Buttons */}
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <span className="inline-flex min-h-[48px] items-center gap-2.5 rounded-xl bg-brand-rose px-6 py-3 text-sm font-extrabold text-[#242236] shadow-sm transition group-hover:bg-brand-blush">
              <svg
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="17 8 12 3 7 8" />
                <line x1="12" y1="3" x2="12" y2="15" />
              </svg>
              <span>{labels.browseButton}</span>
            </span>

            <button
              type="button"
              onClick={handleGenerateSampleVideo}
              disabled={isGeneratingSample}
              className="inline-flex min-h-[48px] items-center gap-2 rounded-xl border border-border-token bg-page px-5 py-3 text-sm font-bold text-text-primary transition hover:bg-subtle disabled:opacity-50"
            >
              <svg
                className="h-4 w-4 text-brand-slate"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
              <span>
                {isGeneratingSample ? '...' : labels.loadSampleButton}
              </span>
            </button>
          </div>

          {/* Minimal Bottom Status Bar */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 border-t border-border-token/70 pt-5 text-xs font-medium text-text-secondary">
            <span className="inline-flex items-center gap-1.5">
              <svg
                className="h-3.5 w-3.5 text-brand-slate"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
              <span>{labels.privacyBadge}</span>
            </span>
            <span className="hidden sm:inline text-border-token">•</span>
            <span>{labels.supportedFormats}</span>
          </div>
        </div>
      ) : (
        /* Interactive Studio Workspace */
        <div className="p-4 sm:p-6 space-y-5">
          {/* Top Bar: Active Transform Status Badges & Change Video Button */}
          <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl bg-page px-4 py-3">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-text-secondary">
                {labels.activeTransformsLabel}
              </span>
              {!hasAnyTransform && (
                <span className="rounded-lg border border-border-token bg-card px-2.5 py-1 text-xs font-semibold text-text-secondary">
                  {labels.noTransformsActive}
                </span>
              )}
              {flipH && (
                <span className="rounded-lg bg-brand-rose px-2.5 py-1 text-xs font-bold text-[#242236]">
                  ↔ {labels.badgeMirroredH}
                </span>
              )}
              {flipV && (
                <span className="rounded-lg bg-brand-rose px-2.5 py-1 text-xs font-bold text-[#242236]">
                  ↕ {labels.badgeFlippedV}
                </span>
              )}
              {rotation !== 0 && (
                <span className="rounded-lg bg-brand-rose px-2.5 py-1 text-xs font-bold text-[#242236]">
                  ⟳ {labels.badgeRotated} {rotation}°
                </span>
              )}
              {videoMeta && (
                <span className="rounded-lg border border-border-token bg-card px-2.5 py-1 text-xs font-medium text-text-secondary">
                  {labels.originalResolution}: {videoMeta.width}×{videoMeta.height}
                </span>
              )}
            </div>

            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              disabled={isExporting}
              className="inline-flex min-h-[38px] items-center gap-1.5 rounded-xl border border-border-token bg-card px-3.5 py-1.5 text-xs font-bold text-text-primary transition hover:bg-subtle disabled:opacity-50"
            >
              <svg
                className="h-3.5 w-3.5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="17 8 12 3 7 8" />
                <line x1="12" y1="3" x2="12" y2="15" />
              </svg>
              <span>{labels.changeVideo}</span>
            </button>
          </div>

          {/* GPU-Accelerated Live Video Preview Stage */}
          <div className="relative flex aspect-video max-h-[380px] w-full items-center justify-center overflow-hidden rounded-2xl border border-border-token bg-[#0f0e17] shadow-inner">
            <video
              ref={previewVideoRef}
              src={videoUrl}
              controls
              playsInline
              loop
              onLoadedMetadata={handleLoadedMetadata}
              style={previewTransformStyle}
              className="max-h-full max-w-full object-contain"
            />
          </div>

          {/* Primary Transform Controls Grid */}
          <div
            role="group"
            aria-label="Video Orientation Controls"
            className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:grid-cols-5"
          >
            {/* 1. Flip Horizontal (Mirror) */}
            <button
              type="button"
              onClick={toggleFlipH}
              aria-pressed={flipH}
              disabled={isExporting}
              className={`flex min-h-[50px] items-center justify-center gap-2 rounded-xl border px-3.5 py-2.5 text-xs sm:text-sm font-bold transition-all ${
                flipH
                  ? 'border-[#242236] bg-brand-rose text-[#242236] shadow-sm'
                  : 'border-border-token bg-page text-text-primary hover:bg-subtle'
              }`}
            >
              <svg
                className="h-4 w-4 shrink-0"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <line x1="12" y1="3" x2="12" y2="21" strokeDasharray="3 3" />
                <polygon points="16 7 21 12 16 17 16 7" />
                <polygon points="8 7 3 12 8 17 8 7" />
              </svg>
              <span>{labels.flipHorizontal}</span>
            </button>

            {/* 2. Flip Vertical (Upside Down) */}
            <button
              type="button"
              onClick={toggleFlipV}
              aria-pressed={flipV}
              disabled={isExporting}
              className={`flex min-h-[50px] items-center justify-center gap-2 rounded-xl border px-3.5 py-2.5 text-xs sm:text-sm font-bold transition-all ${
                flipV
                  ? 'border-[#242236] bg-brand-rose text-[#242236] shadow-sm'
                  : 'border-border-token bg-page text-text-primary hover:bg-subtle'
              }`}
            >
              <svg
                className="h-4 w-4 shrink-0"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <line x1="3" y1="12" x2="21" y2="12" strokeDasharray="3 3" />
                <polygon points="7 8 12 3 17 8 7 8" />
                <polygon points="7 16 12 21 17 16 7 16" />
              </svg>
              <span>{labels.flipVertical}</span>
            </button>

            {/* 3. Rotate 90° */}
            <button
              type="button"
              onClick={handleRotate90}
              aria-pressed={rotation === 90 || rotation === 270}
              disabled={isExporting}
              className={`flex min-h-[50px] items-center justify-center gap-2 rounded-xl border px-3.5 py-2.5 text-xs sm:text-sm font-bold transition-all ${
                rotation === 90 || rotation === 270
                  ? 'border-[#242236] bg-brand-rose text-[#242236] shadow-sm'
                  : 'border-border-token bg-page text-text-primary hover:bg-subtle'
              }`}
            >
              <svg
                className="h-4 w-4 shrink-0"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8" />
                <polyline points="21 3 21 8 16 8" />
              </svg>
              <span>{labels.rotate90}</span>
            </button>

            {/* 4. Rotate 180° */}
            <button
              type="button"
              onClick={handleRotate180}
              aria-pressed={rotation === 180}
              disabled={isExporting}
              className={`flex min-h-[50px] items-center justify-center gap-2 rounded-xl border px-3.5 py-2.5 text-xs sm:text-sm font-bold transition-all ${
                rotation === 180
                  ? 'border-[#242236] bg-brand-rose text-[#242236] shadow-sm'
                  : 'border-border-token bg-page text-text-primary hover:bg-subtle'
              }`}
            >
              <svg
                className="h-4 w-4 shrink-0"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <polyline points="17 1 21 5 17 9" />
                <path d="M3 11V9a4 4 0 0 1 4-4h14" />
                <polyline points="7 23 3 19 7 15" />
                <path d="M21 13v2a4 4 0 0 1-4 4H3" />
              </svg>
              <span>{labels.rotate180}</span>
            </button>

            {/* 5. Reset */}
            <button
              type="button"
              onClick={handleReset}
              disabled={!hasAnyTransform || isExporting}
              className="col-span-2 sm:col-span-1 flex min-h-[50px] items-center justify-center gap-2 rounded-xl border border-border-token bg-page px-3.5 py-2.5 text-xs sm:text-sm font-bold text-text-secondary transition hover:bg-subtle hover:text-text-primary disabled:cursor-not-allowed disabled:opacity-40"
            >
              <svg
                className="h-4 w-4 shrink-0"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
                <path d="M3 3v5h5" />
              </svg>
              <span>{labels.reset}</span>
            </button>
          </div>

          {/* Live Progress Bar & ARIA-Live Status Region */}
          <div aria-live="polite" className="space-y-3">
            {isExporting && (
              <div className="rounded-2xl border border-border-token bg-page p-4">
                <div className="flex items-center justify-between gap-2 text-sm font-bold text-text-primary">
                  <span>{exportStatusMessage}</span>
                  <div className="flex items-center gap-3">
                    <span>{exportProgress}%</span>
                    <button
                      type="button"
                      onClick={() => cancelExportRef.current?.()}
                      className="rounded-lg border border-border-token bg-card px-2.5 py-1 text-xs font-semibold text-text-secondary hover:bg-subtle"
                    >
                      {labels.cancelExport}
                    </button>
                  </div>
                </div>
                <div className="mt-2.5 h-2.5 w-full overflow-hidden rounded-full bg-subtle">
                  <div
                    className="h-full rounded-full bg-brand-rose transition-all duration-200"
                    style={{ width: `${exportProgress}%` }}
                  />
                </div>
              </div>
            )}

            {!isExporting && exportedDownloadUrl && (
              <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-brand-slate/40 bg-subtle/50 p-3.5 text-sm font-semibold text-text-primary">
                <span>✓ {exportStatusMessage}</span>
                <a
                  href={exportedDownloadUrl}
                  download={exportedFileName}
                  className="underline font-bold"
                >
                  {exportedFileName}
                </a>
              </div>
            )}

            {!isExporting && exportError && (
              <div className="rounded-2xl border border-red-400/50 bg-red-500/10 p-3.5 text-sm font-semibold text-text-primary">
                {exportError}
              </div>
            )}
          </div>

          {/* Primary Download Flipped Video CTA */}
          <div className="flex flex-col items-center justify-between gap-4 border-t border-border-token pt-4 sm:flex-row">
            <div className="flex items-center gap-2 text-xs font-medium text-text-secondary">
              <svg
                className="h-4 w-4 text-brand-slate"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              <span>{labels.privacyBadge} • {labels.audioPreserved}</span>
            </div>

            <button
              type="button"
              onClick={handleExportVideo}
              disabled={isExporting}
              className="inline-flex min-h-[52px] w-full items-center justify-center gap-2.5 rounded-xl bg-brand-rose px-7 py-3.5 text-sm font-extrabold text-[#242236] shadow-md transition hover:bg-brand-blush disabled:cursor-wait disabled:opacity-60 sm:w-auto"
            >
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              <span>{labels.downloadFlipped}</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
