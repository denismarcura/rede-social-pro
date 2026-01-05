"use client"

import { memo, useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from "react"
import {
  AnimatePresence,
  motion,
  useAnimation,
  useMotionValue,
  useTransform,
  type MotionValue,
} from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

export const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect

type UseMediaQueryOptions = {
  defaultValue?: boolean
  initializeWithValue?: boolean
}

const IS_SERVER = typeof window === "undefined"

export function useMediaQuery(
  query: string,
  {
    defaultValue = false,
    initializeWithValue = true,
  }: UseMediaQueryOptions = {}
): boolean {
  const getMatches = (query: string): boolean => {
    if (IS_SERVER) {
      return defaultValue
    }
    return window.matchMedia(query).matches
  }

  const [matches, setMatches] = useState<boolean>(() => {
    if (initializeWithValue) {
      return getMatches(query)
    }
    return defaultValue
  })

  const handleChange = () => {
    setMatches(getMatches(query))
  }

  useIsomorphicLayoutEffect(() => {
    const matchMedia = window.matchMedia(query)
    handleChange()

    matchMedia.addEventListener("change", handleChange)

    return () => {
      matchMedia.removeEventListener("change", handleChange)
    }
  }, [query])

  return matches
}

import portfolio1 from "@/assets/portfolio-1.jpg"
import portfolio2 from "@/assets/portfolio-2.jpg"
import portfolio3 from "@/assets/portfolio-3.jpg"
import portfolio4 from "@/assets/portfolio-4.jpg"
import portfolio5 from "@/assets/portfolio-5.png"
import portfolio6 from "@/assets/portfolio-6.png"
import portfolio7 from "@/assets/portfolio-7.jpg"
import portfolio8 from "@/assets/portfolio-8.jpg"

const portfolioImages = [
  portfolio1,
  portfolio2,
  portfolio3,
  portfolio4,
  portfolio5,
  portfolio6,
  portfolio7,
  portfolio8,
]

const duration = 0.15
const transition = { duration, ease: [0.32, 0.72, 0, 1] as any }
const transitionOverlay = { duration: 0.5, ease: [0.32, 0.72, 0, 1] as any }

const Carousel = memo(
  ({
    handleClick,
    controls,
    cards,
    isCarouselActive,
    onRotationChange,
  }: {
    handleClick: (imgUrl: string, index: number) => void
    controls: any
    cards: string[]
    isCarouselActive: boolean
    onRotationChange?: (rotation: any) => void
  }) => {
    const isScreenSizeSm = useMediaQuery("(max-width: 640px)")
    const cylinderWidth = isScreenSizeSm ? 1100 : 1800
    const faceCount = cards.length
    const faceWidth = cylinderWidth / faceCount
    const radius = cylinderWidth / (2 * Math.PI)
    const rotation = useMotionValue(0)
    const transform = useTransform(
      rotation,
      (value) => `rotate3d(0, 1, 0, ${value}deg)`
    )

    useEffect(() => {
      if (onRotationChange) {
        onRotationChange(rotation)
      }
    }, [rotation, onRotationChange])

    return (
      <div
        className="flex h-full items-center justify-center bg-background"
        style={{
          perspective: "1000px",
          transformStyle: "preserve-3d",
          willChange: "transform",
        }}
      >
        <motion.div
          drag={isCarouselActive ? "x" : false}
          className="relative flex h-full origin-center cursor-grab justify-center active:cursor-grabbing"
          style={{
            transform,
            rotateY: rotation,
            width: cylinderWidth,
            transformStyle: "preserve-3d",
          }}
          onDrag={(_, info) =>
            isCarouselActive &&
            rotation.set(rotation.get() + info.offset.x * 0.05)
          }
          onDragEnd={(_, info) =>
            isCarouselActive &&
            controls.start({
              rotateY: rotation.get() + info.velocity.x * 0.05,
              transition: {
                type: "spring",
                stiffness: 100,
                damping: 30,
                mass: 0.1,
              },
            })
          }
          animate={controls}
        >
          {cards.map((imgUrl, i) => (
            <motion.div
              key={`key-${imgUrl}-${i}`}
              className="absolute flex h-full origin-center items-center justify-center rounded-xl bg-card p-2"
              style={{
                width: `${faceWidth}px`,
                transform: `rotateY(${
                  i * (360 / faceCount)
                }deg) translateZ(${radius}px)`,
              }}
              onClick={() => handleClick(imgUrl, i)}
            >
              <motion.img
                src={imgUrl}
                alt={`keyword_${i} ${imgUrl}`}
                layoutId={`img-${imgUrl}`}
                className="pointer-events-none w-full rounded-xl object-cover aspect-square"
                initial={{ filter: "blur(4px)" }}
                layout="position"
                animate={{ filter: "blur(0px)" }}
                transition={transition}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    )
  }
)

const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`
const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`

function ThreeDPhotoCarousel() {
  const [activeImg, setActiveImg] = useState<string | null>(null)
  const [isCarouselActive, setIsCarouselActive] = useState(true)
  const [isAutoplayPaused, setIsAutoplayPaused] = useState(false)
  const controls = useAnimation()
  const cards = useMemo(() => portfolioImages, [])
  const rotationRef = useRef<MotionValue<number> | null>(null)
  const autoplayRef = useRef<NodeJS.Timeout | null>(null)
  const pauseTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    console.log("Cards loaded:", cards)
  }, [cards])

  // Autoplay logic
  useEffect(() => {
    if (!isCarouselActive || isAutoplayPaused) {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current)
        autoplayRef.current = null
      }
      return
    }

    autoplayRef.current = setInterval(() => {
      if (rotationRef.current) {
        const currentRotation = rotationRef.current.get()
        rotationRef.current.set(currentRotation - 0.3)
      }
    }, 50)

    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current)
      }
    }
  }, [isCarouselActive, isAutoplayPaused])

  const pauseAutoplay = useCallback(() => {
    setIsAutoplayPaused(true)
    
    // Clear any existing resume timeout
    if (pauseTimeoutRef.current) {
      clearTimeout(pauseTimeoutRef.current)
    }
    
    // Resume autoplay after 3 seconds of inactivity
    pauseTimeoutRef.current = setTimeout(() => {
      setIsAutoplayPaused(false)
    }, 3000)
  }, [])

  const handleClick = (imgUrl: string) => {
    setActiveImg(imgUrl)
    setIsCarouselActive(false)
    controls.stop()
  }

  const handleClose = () => {
    setActiveImg(null)
    setIsCarouselActive(true)
  }

  const handleRotationChange = useCallback((rotation: MotionValue<number>) => {
    rotationRef.current = rotation
  }, [])

  const handlePrev = useCallback(() => {
    if (rotationRef.current && isCarouselActive) {
      pauseAutoplay()
      const currentRotation = rotationRef.current.get()
      const anglePerCard = 360 / cards.length
      rotationRef.current.set(currentRotation + anglePerCard)
    }
  }, [cards.length, isCarouselActive, pauseAutoplay])

  const handleNext = useCallback(() => {
    if (rotationRef.current && isCarouselActive) {
      pauseAutoplay()
      const currentRotation = rotationRef.current.get()
      const anglePerCard = 360 / cards.length
      rotationRef.current.set(currentRotation - anglePerCard)
    }
  }, [cards.length, isCarouselActive, pauseAutoplay])

  const handleCarouselInteraction = useCallback(() => {
    pauseAutoplay()
  }, [pauseAutoplay])

  return (
    <motion.div layout className="relative">
      <AnimatePresence mode="sync">
        {activeImg && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            layoutId={`img-container-${activeImg}`}
            layout="position"
            onClick={handleClose}
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 m-5 md:m-36 lg:mx-[19rem] rounded-3xl"
            style={{ willChange: "opacity" }}
            transition={transitionOverlay}
          >
            <motion.img
              layoutId={`img-${activeImg}`}
              src={activeImg}
              className="max-w-full max-h-full rounded-lg shadow-lg"
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              transition={{
                delay: 0.5,
                duration: 0.5,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              style={{
                willChange: "transform",
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
      <div 
        className="relative h-[500px] w-full overflow-hidden"
        onMouseDown={handleCarouselInteraction}
        onTouchStart={handleCarouselInteraction}
      >
        <Carousel
          handleClick={handleClick}
          controls={controls}
          cards={cards}
          isCarouselActive={isCarouselActive}
          onRotationChange={handleRotationChange}
        />
        
        {/* Navigation Arrows */}
        <button
          onClick={handlePrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-primary/90 hover:bg-primary text-primary-foreground rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-glow"
          aria-label="Anterior"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-primary/90 hover:bg-primary text-primary-foreground rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-glow"
          aria-label="Próximo"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </motion.div>
  )
}

export { ThreeDPhotoCarousel };