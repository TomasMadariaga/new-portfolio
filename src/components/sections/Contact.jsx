export const Contact = () => {
  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-bg">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <div className="flex items-center justify-end gap-3 mb-2">
            <h2 className="text-3xl sm:text-4xl font-name text-text-h">
              Contact
            </h2>
            <span className="text-5xl font-bold text-accent/20 font-name">
              04
            </span>
          </div>
          <p className="text-text text-right">
            Do you have a project in mind or do you want to chat? Send me a
            message and I'll get back to you shortly.
          </p>
        </div>

        <form
          action="https://formspree.io/f/mzdjwlbl"
          method="POST"
          className="space-y-6 max-w-4xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-text text-sm mb-2">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                className="w-full px-4 py-3 rounded-lg border border-border bg-transparent text-text focus:outline-none focus:border-accent transition-colors"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-text text-sm mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                className="w-full px-4 py-3 rounded-lg border border-border bg-transparent text-text focus:outline-none focus:border-accent transition-colors"
                placeholder="your@email.com"
              />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-text text-sm mb-2">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              rows={5}
              required
              className="w-full px-4 py-3 rounded-lg border border-border bg-transparent text-text focus:outline-none focus:border-accent transition-colors resize-none"
              placeholder="Tell me about your project..."
            />
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="px-6 py-3 rounded-lg hover:opacity-90 transition-all duration-200 hover:bg-accent hover:text-bg font-medium border border-accent text-accent"
            >
              Send message →
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};
