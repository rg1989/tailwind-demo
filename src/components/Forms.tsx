/* ============================================
   FORMS & INPUTS - Copy any input style you need
   ============================================ */

export function Forms() {
  return (
    <section id="forms" className="space-y-8">
      <h2 className="font-outfit text-3xl font-bold text-white border-b border-white/10 pb-4">
        Forms & Inputs
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Text Inputs */}
        <div className="space-y-6">
          <h3 className="text-lg font-medium text-slate-300">Text Inputs</h3>
          
          {/* Basic Input */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-slate-300">Basic Input</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-3 bg-slate-800 border border-white/10 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all"
            />
          </div>

          {/* Input with Icon */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-slate-300">Input with Icon</label>
            <div className="relative">
              <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Search..."
                className="w-full pl-12 pr-4 py-3 bg-slate-800 border border-white/10 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all"
              />
            </div>
          </div>

          {/* Input with Error */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-slate-300">Input with Error</label>
            <input
              type="email"
              defaultValue="invalid-email"
              className="w-full px-4 py-3 bg-slate-800 border-2 border-rose-500 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-rose-500/20"
            />
            <p className="text-rose-400 text-sm flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Please enter a valid email address
            </p>
          </div>

          {/* Floating Label Input */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-slate-300">Floating Label Style</label>
            <div className="relative">
              <input
                type="text"
                placeholder=" "
                className="peer w-full px-4 py-3 pt-6 bg-slate-800 border border-white/10 rounded-lg text-white focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all"
              />
              <label className="absolute left-4 top-1 text-xs text-indigo-400 font-medium">
                Email Address
              </label>
            </div>
          </div>
        </div>

        {/* Other Input Types */}
        <div className="space-y-6">
          <h3 className="text-lg font-medium text-slate-300">Other Input Types</h3>

          {/* Textarea */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-slate-300">Textarea</label>
            <textarea
              rows={4}
              placeholder="Write your message..."
              className="w-full px-4 py-3 bg-slate-800 border border-white/10 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all resize-none"
            />
          </div>

          {/* Select */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-slate-300">Select</label>
            <select className="w-full px-4 py-3 bg-slate-800 border border-white/10 rounded-lg text-white focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all appearance-none cursor-pointer">
              <option value="">Select an option</option>
              <option value="1">Option 1</option>
              <option value="2">Option 2</option>
              <option value="3">Option 3</option>
            </select>
          </div>

          {/* File Input */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-slate-300">File Upload</label>
            <div className="w-full px-4 py-8 border-2 border-dashed border-white/20 rounded-lg text-center hover:border-indigo-500/50 transition-colors cursor-pointer">
              <svg className="w-10 h-10 text-slate-500 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
              </svg>
              <p className="text-slate-400 text-sm">Drop files here or click to upload</p>
            </div>
          </div>
        </div>
      </div>

      {/* Checkboxes and Radios */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-4">
        <div className="space-y-4">
          <h3 className="text-lg font-medium text-slate-300">Checkboxes</h3>
          <label className="flex items-center gap-3 cursor-pointer group">
            <input type="checkbox" className="w-5 h-5 rounded border-white/20 bg-slate-800 text-indigo-600 focus:ring-indigo-500 focus:ring-offset-0 cursor-pointer" />
            <span className="text-slate-300 group-hover:text-white transition-colors">Default checkbox</span>
          </label>
          <label className="flex items-center gap-3 cursor-pointer group">
            <input type="checkbox" defaultChecked className="w-5 h-5 rounded border-white/20 bg-slate-800 text-indigo-600 focus:ring-indigo-500 focus:ring-offset-0 cursor-pointer" />
            <span className="text-slate-300 group-hover:text-white transition-colors">Checked checkbox</span>
          </label>
          <label className="flex items-start gap-3 cursor-pointer group">
            <input type="checkbox" className="w-5 h-5 mt-0.5 rounded border-white/20 bg-slate-800 text-indigo-600 focus:ring-indigo-500 focus:ring-offset-0 cursor-pointer" />
            <span className="text-slate-300 group-hover:text-white transition-colors">I agree to the Terms of Service and Privacy Policy</span>
          </label>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium text-slate-300">Radio Buttons</h3>
          <label className="flex items-center gap-3 cursor-pointer group">
            <input type="radio" name="plan" className="w-5 h-5 border-white/20 bg-slate-800 text-indigo-600 focus:ring-indigo-500 focus:ring-offset-0 cursor-pointer" />
            <span className="text-slate-300 group-hover:text-white transition-colors">Basic Plan</span>
          </label>
          <label className="flex items-center gap-3 cursor-pointer group">
            <input type="radio" name="plan" defaultChecked className="w-5 h-5 border-white/20 bg-slate-800 text-indigo-600 focus:ring-indigo-500 focus:ring-offset-0 cursor-pointer" />
            <span className="text-slate-300 group-hover:text-white transition-colors">Pro Plan</span>
          </label>
          <label className="flex items-center gap-3 cursor-pointer group">
            <input type="radio" name="plan" className="w-5 h-5 border-white/20 bg-slate-800 text-indigo-600 focus:ring-indigo-500 focus:ring-offset-0 cursor-pointer" />
            <span className="text-slate-300 group-hover:text-white transition-colors">Enterprise Plan</span>
          </label>
        </div>
      </div>

      {/* Toggle Switches */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium text-slate-300">Toggle Switches</h3>
        <div className="flex flex-wrap gap-6">
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only peer" />
            <div className="w-11 h-6 bg-slate-700 peer-focus:ring-2 peer-focus:ring-indigo-500/20 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
            <span className="ml-3 text-slate-300">Notifications</span>
          </label>
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" defaultChecked className="sr-only peer" />
            <div className="w-11 h-6 bg-slate-700 peer-focus:ring-2 peer-focus:ring-indigo-500/20 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
            <span className="ml-3 text-slate-300">Dark Mode</span>
          </label>
        </div>
      </div>
    </section>
  );
}

