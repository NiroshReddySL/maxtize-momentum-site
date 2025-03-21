
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
  Volume2
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
        className="fixed bottom-6 left-6 z-50 p-3 bg-orange-500 text-white rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2"
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
            className="fixed bottom-20 left-6 z-50 w-72 bg-white dark:bg-gray-800 rounded-lg shadow-xl p-4 border border-gray-200 dark:border-gray-700"
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
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                aria-label="Close accessibility panel"
              >
                <X size={20} />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="flex items-center text-sm font-medium">
                    <Type size={18} className="mr-2" />
                    Font Size
                  </label>
                  <div className="flex items-center">
                    <button
                      onClick={() => updateFontSize(false)}
                      className="p-1 bg-gray-200 dark:bg-gray-700 rounded-l hover:bg-gray-300 dark:hover:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-orange-500"
                      aria-label="Decrease font size"
                      disabled={settings.fontSize <= 0.8}
                    >
                      <Minimize2 size={16} />
                    </button>
                    <span className="px-2 bg-gray-100 dark:bg-gray-900 text-sm">
                      {Math.round(settings.fontSize * 100)}%
                    </span>
                    <button
                      onClick={() => updateFontSize(true)}
                      className="p-1 bg-gray-200 dark:bg-gray-700 rounded-r hover:bg-gray-300 dark:hover:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-orange-500"
                      aria-label="Increase font size"
                      disabled={settings.fontSize >= 1.5}
                    >
                      <Maximize2 size={16} />
                    </button>
                  </div>
                </div>
              </div>

              <div>
                <button
                  onClick={toggleContrast}
                  className={`flex justify-between items-center w-full p-2 rounded ${
                    settings.contrast ? 'bg-orange-100 dark:bg-orange-900/30' : 'hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                  aria-pressed={settings.contrast}
                >
                  <span className="flex items-center text-sm font-medium">
                    <Contrast size={18} className="mr-2" />
                    High Contrast
                  </span>
                  <span className={`w-10 h-5 relative rounded-full transition-colors duration-200 ease-in-out ${
                    settings.contrast ? 'bg-orange-500' : 'bg-gray-300 dark:bg-gray-600'
                  }`}>
                    <span className={`absolute left-0.5 top-0.5 w-4 h-4 bg-white rounded-full transition-transform duration-200 ease-in-out ${
                      settings.contrast ? 'transform translate-x-5' : ''
                    }`} />
                  </span>
                </button>
              </div>

              <div>
                <button
                  onClick={toggleReduceMotion}
                  className={`flex justify-between items-center w-full p-2 rounded ${
                    settings.reduceMotion ? 'bg-orange-100 dark:bg-orange-900/30' : 'hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                  aria-pressed={settings.reduceMotion}
                >
                  <span className="flex items-center text-sm font-medium">
                    <Eye size={18} className="mr-2" />
                    Reduce Motion
                  </span>
                  <span className={`w-10 h-5 relative rounded-full transition-colors duration-200 ease-in-out ${
                    settings.reduceMotion ? 'bg-orange-500' : 'bg-gray-300 dark:bg-gray-600'
                  }`}>
                    <span className={`absolute left-0.5 top-0.5 w-4 h-4 bg-white rounded-full transition-transform duration-200 ease-in-out ${
                      settings.reduceMotion ? 'transform translate-x-5' : ''
                    }`} />
                  </span>
                </button>
              </div>

              <div>
                <button
                  onClick={toggleSounds}
                  className={`flex justify-between items-center w-full p-2 rounded ${
                    settings.disableSounds ? 'bg-orange-100 dark:bg-orange-900/30' : 'hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                  aria-pressed={settings.disableSounds}
                >
                  <span className="flex items-center text-sm font-medium">
                    {settings.disableSounds ? (
                      <VolumeX size={18} className="mr-2" />
                    ) : (
                      <Volume2 size={18} className="mr-2" />
                    )}
                    Disable Sounds
                  </span>
                  <span className={`w-10 h-5 relative rounded-full transition-colors duration-200 ease-in-out ${
                    settings.disableSounds ? 'bg-orange-500' : 'bg-gray-300 dark:bg-gray-600'
                  }`}>
                    <span className={`absolute left-0.5 top-0.5 w-4 h-4 bg-white rounded-full transition-transform duration-200 ease-in-out ${
                      settings.disableSounds ? 'transform translate-x-5' : ''
                    }`} />
                  </span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AccessibilityWidget;
