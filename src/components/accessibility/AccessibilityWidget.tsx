
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Accessibility, 
  Maximize2, 
  Eye, 
  Contrast, 
  Type, 
  Minimize2, 
  X,
  VolumeX,
  Volume2,
  MoveUpRight
} from 'lucide-react';

const AccessibilityWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState({
    fontSize: 1, // normal size
    contrast: false,
    reduceMotion: false,
    disableSounds: false
  });

  useEffect(() => {
    // Apply font size
    const htmlElement = document.documentElement;
    const baseFontSize = 16; // Default browser font size
    htmlElement.style.fontSize = `${baseFontSize * settings.fontSize}px`;

    // Apply high contrast if needed
    if (settings.contrast) {
      htmlElement.classList.add('high-contrast');
    } else {
      htmlElement.classList.remove('high-contrast');
    }

    // Apply reduced motion if needed
    if (settings.reduceMotion) {
      htmlElement.classList.add('reduced-motion');
    } else {
      htmlElement.classList.remove('reduced-motion');
    }

    // Handle muting sounds
    if (settings.disableSounds) {
      document.querySelectorAll('audio, video').forEach(element => {
        if (element instanceof HTMLMediaElement) {
          element.muted = true;
        }
      });
    }

    // Save preferences to localStorage
    localStorage.setItem('accessibilitySettings', JSON.stringify(settings));
  }, [settings]);

  // Load saved preferences on mount
  useEffect(() => {
    const savedSettings = localStorage.getItem('accessibilitySettings');
    if (savedSettings) {
      try {
        setSettings(JSON.parse(savedSettings));
      } catch (e) {
        console.error('Error parsing accessibility settings:', e);
      }
    }

    // Check for system preference for reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setSettings(prev => ({ ...prev, reduceMotion: true }));
    }
  }, []);

  const togglePanel = () => {
    setIsOpen(!isOpen);
  };

  const updateFontSize = (increment: boolean) => {
    setSettings(prev => {
      const newSize = increment 
        ? Math.min(prev.fontSize + 0.1, 1.5) 
        : Math.max(prev.fontSize - 0.1, 0.8);
      return { ...prev, fontSize: parseFloat(newSize.toFixed(1)) };
    });
  };

  const toggleContrast = () => {
    setSettings(prev => ({ ...prev, contrast: !prev.contrast }));
  };

  const toggleReduceMotion = () => {
    setSettings(prev => ({ ...prev, reduceMotion: !prev.reduceMotion }));
  };

  const toggleSounds = () => {
    setSettings(prev => ({ ...prev, disableSounds: !prev.disableSounds }));
  };

  return (
    <>
      <button
        onClick={togglePanel}
        className="fixed bottom-6 left-6 z-50 p-3 bg-orange-500 text-white rounded-full shadow-lg hover:bg-orange-600 transition-colors duration-200 focus:outline-none focus:ring-4 focus:ring-orange-300"
        aria-label="Accessibility options"
        aria-expanded={isOpen}
      >
        <Accessibility size={24} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed bottom-20 left-6 z-50 w-72 bg-white dark:bg-gray-800 rounded-xl shadow-2xl p-5 border border-gray-200 dark:border-gray-700"
            role="dialog"
            aria-labelledby="accessibility-title"
          >
            <div className="flex justify-between items-center mb-4">
              <h2 id="accessibility-title" className="text-lg font-bold flex items-center">
                <Accessibility size={18} className="mr-2" />
                Accessibility
              </h2>
              <button 
                onClick={togglePanel}
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500 rounded-full p-1"
                aria-label="Close accessibility panel"
              >
                <X size={18} />
              </button>
            </div>

            <div className="space-y-5">
              <div className="space-y-2">
                <div className="flex justify-between items-center mb-1">
                  <label className="flex items-center text-sm font-medium text-gray-700 dark:text-gray-300">
                    <Type size={16} className="mr-2" />
                    Font Size
                  </label>
                  <div className="flex items-center">
                    <button
                      onClick={() => updateFontSize(false)}
                      className="p-1 bg-gray-200 dark:bg-gray-700 rounded-l hover:bg-gray-300 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
                      aria-label="Decrease font size"
                      disabled={settings.fontSize <= 0.8}
                    >
                      <Minimize2 size={16} />
                    </button>
                    <span className="px-2 bg-gray-100 dark:bg-gray-900 text-sm text-gray-800 dark:text-gray-200 min-w-[45px] text-center">
                      {Math.round(settings.fontSize * 100)}%
                    </span>
                    <button
                      onClick={() => updateFontSize(true)}
                      className="p-1 bg-gray-200 dark:bg-gray-700 rounded-r hover:bg-gray-300 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
                      aria-label="Increase font size"
                      disabled={settings.fontSize >= 1.5}
                    >
                      <Maximize2 size={16} />
                    </button>
                  </div>
                </div>
                <div className="h-1 bg-gray-100 dark:bg-gray-700 rounded-full w-full">
                  <div 
                    className="h-1 bg-orange-500 rounded-full" 
                    style={{ width: `${((settings.fontSize - 0.8) / 0.7) * 100}%` }}
                  ></div>
                </div>
              </div>

              <div className="space-y-3">
                <button
                  onClick={toggleContrast}
                  className={`flex justify-between items-center w-full p-3 rounded-lg transition-colors ${
                    settings.contrast 
                      ? 'bg-orange-100 dark:bg-orange-900/30 text-orange-900 dark:text-orange-200' 
                      : 'hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300'
                  }`}
                  aria-pressed={settings.contrast}
                >
                  <span className="flex items-center text-sm font-medium">
                    <Contrast size={16} className="mr-2" />
                    High Contrast
                  </span>
                  <span className={`w-10 h-5 relative rounded-full transition-colors duration-200 ease-in-out ${
                    settings.contrast ? 'bg-orange-500' : 'bg-gray-300 dark:bg-gray-600'
                  }`}>
                    <span className={`absolute left-0.5 top-0.5 w-4 h-4 bg-white rounded-full shadow transition-transform duration-200 ease-in-out ${
                      settings.contrast ? 'transform translate-x-5' : ''
                    }`} />
                  </span>
                </button>

                <button
                  onClick={toggleReduceMotion}
                  className={`flex justify-between items-center w-full p-3 rounded-lg transition-colors ${
                    settings.reduceMotion 
                      ? 'bg-orange-100 dark:bg-orange-900/30 text-orange-900 dark:text-orange-200' 
                      : 'hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300'
                  }`}
                  aria-pressed={settings.reduceMotion}
                >
                  <span className="flex items-center text-sm font-medium">
                    <MoveUpRight size={16} className="mr-2" />
                    Reduce Motion
                  </span>
                  <span className={`w-10 h-5 relative rounded-full transition-colors duration-200 ease-in-out ${
                    settings.reduceMotion ? 'bg-orange-500' : 'bg-gray-300 dark:bg-gray-600'
                  }`}>
                    <span className={`absolute left-0.5 top-0.5 w-4 h-4 bg-white rounded-full shadow transition-transform duration-200 ease-in-out ${
                      settings.reduceMotion ? 'transform translate-x-5' : ''
                    }`} />
                  </span>
                </button>

                <button
                  onClick={toggleSounds}
                  className={`flex justify-between items-center w-full p-3 rounded-lg transition-colors ${
                    settings.disableSounds 
                      ? 'bg-orange-100 dark:bg-orange-900/30 text-orange-900 dark:text-orange-200' 
                      : 'hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300'
                  }`}
                  aria-pressed={settings.disableSounds}
                >
                  <span className="flex items-center text-sm font-medium">
                    {settings.disableSounds ? (
                      <VolumeX size={16} className="mr-2" />
                    ) : (
                      <Volume2 size={16} className="mr-2" />
                    )}
                    Disable Sounds
                  </span>
                  <span className={`w-10 h-5 relative rounded-full transition-colors duration-200 ease-in-out ${
                    settings.disableSounds ? 'bg-orange-500' : 'bg-gray-300 dark:bg-gray-600'
                  }`}>
                    <span className={`absolute left-0.5 top-0.5 w-4 h-4 bg-white rounded-full shadow transition-transform duration-200 ease-in-out ${
                      settings.disableSounds ? 'transform translate-x-5' : ''
                    }`} />
                  </span>
                </button>
              </div>
              
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-4 pt-3 border-t border-gray-200 dark:border-gray-700">
                Your accessibility preferences are saved automatically between visits.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AccessibilityWidget;
