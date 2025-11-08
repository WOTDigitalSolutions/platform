-- WOT Digital Solutions - Content Update with Beautiful Formatting
-- Run this in Supabase SQL Editor to update About page with excellent formatting

UPDATE pages
SET
  content = E'<div class="space-y-12">
  <div>
    <h2 class="text-3xl font-bold text-blue-800 mb-6">About WOT Digital Solutions</h2>
    <p class="text-lg text-gray-700 leading-relaxed mb-4">WOT Digital Solutions is the digital innovation and media technology arm of Word of Truth Ministries International (WOTMI). We exist to translate the ministry\'s apostolic vision into digital systems, visual communication, and technological excellence that carry the Spirit of the House across nations.</p>
    <p class="text-lg text-gray-700 leading-relaxed">Born from the vision of Pastor Emma Mukisa, WOT Digital Solutions is not a secular agency — it is a prophetic infrastructure built to empower ministries, movements, and leaders with tools that preserve revelation, multiply reach, and sustain global transformation. Every project is a digital altar, where creativity meets consecration and technology becomes a vessel for truth.</p>
  </div>

  <div class="bg-blue-50 border-l-4 border-blue-700 p-8 rounded-r-lg">
    <h2 class="text-2xl font-bold text-blue-900 mb-4">Our Vision</h2>
    <p class="text-xl font-semibold text-blue-800 leading-relaxed">To build a global ecosystem of Spirit-led digital solutions that amplify truth, multiply vision, and disciple nations through technology.</p>
  </div>

  <div>
    <h2 class="text-3xl font-bold text-blue-800 mb-6">Our Mission</h2>
    <p class="text-lg text-gray-700 leading-relaxed mb-6">We digitize and deploy the Word, the culture, and the systems of the Kingdom — by designing and developing platforms, media, and communication systems that:</p>
    <ul class="space-y-4">
      <li class="flex items-start gap-3">
        <span class="flex-shrink-0 w-2 h-2 bg-blue-700 rounded-full mt-2"></span>
        <div><strong class="text-blue-900">Preserve the Message</strong> <span class="text-gray-700">— ensuring the Word of Truth remains visible, accessible, and enduring.</span></div>
      </li>
      <li class="flex items-start gap-3">
        <span class="flex-shrink-0 w-2 h-2 bg-blue-700 rounded-full mt-2"></span>
        <div><strong class="text-blue-900">Empower the Movement</strong> <span class="text-gray-700">— providing digital tools that enhance ministry administration, communication, and reach.</span></div>
      </li>
      <li class="flex items-start gap-3">
        <span class="flex-shrink-0 w-2 h-2 bg-blue-700 rounded-full mt-2"></span>
        <div><strong class="text-blue-900">Multiply Influence</strong> <span class="text-gray-700">— using creative media and technology to expand the ministry\'s voice across nations and generations.</span></div>
      </li>
    </ul>
  </div>

  <div>
    <h2 class="text-3xl font-bold text-blue-800 mb-6">Core Values</h2>
    <ul class="space-y-4">
      <li class="flex items-start gap-3">
        <span class="flex-shrink-0 w-2 h-2 bg-blue-700 rounded-full mt-2"></span>
        <div><strong class="text-blue-900">Divine Innovation</strong> <span class="text-gray-700">— We create by revelation, not imitation.</span></div>
      </li>
      <li class="flex items-start gap-3">
        <span class="flex-shrink-0 w-2 h-2 bg-blue-700 rounded-full mt-2"></span>
        <div><strong class="text-blue-900">Excellence</strong> <span class="text-gray-700">— Every product reflects the perfection of the King we represent.</span></div>
      </li>
      <li class="flex items-start gap-3">
        <span class="flex-shrink-0 w-2 h-2 bg-blue-700 rounded-full mt-2"></span>
        <div><strong class="text-blue-900">Integrity</strong> <span class="text-gray-700">— We communicate truth without distortion.</span></div>
      </li>
      <li class="flex items-start gap-3">
        <span class="flex-shrink-0 w-2 h-2 bg-blue-700 rounded-full mt-2"></span>
        <div><strong class="text-blue-900">Service</strong> <span class="text-gray-700">— We exist to serve the vision of the House and the Body of Christ.</span></div>
      </li>
      <li class="flex items-start gap-3">
        <span class="flex-shrink-0 w-2 h-2 bg-blue-700 rounded-full mt-2"></span>
        <div><strong class="text-blue-900">Honor</strong> <span class="text-gray-700">— Every project is handled with reverence for its spiritual significance.</span></div>
      </li>
      <li class="flex items-start gap-3">
        <span class="flex-shrink-0 w-2 h-2 bg-blue-700 rounded-full mt-2"></span>
        <div><strong class="text-blue-900">Expansionism</strong> <span class="text-gray-700">— We build for growth — scalable, sustainable, and Spirit-breathed.</span></div>
      </li>
    </ul>
  </div>

  <div>
    <h2 class="text-3xl font-bold text-blue-800 mb-6">Leadership</h2>
    <p class="text-lg text-gray-700 leading-relaxed">Our ministry is led by <strong class="text-blue-900">Pastor Emma Mukisa</strong>, Founder & President of Word of Truth Ministries International - an Apostolic Architect, Global Reformer, and Visionary Leader. Under his oversight, <strong class="text-blue-900">Pastor Caroline Nakiwala</strong> serves as Executive Director, responsible for operational execution, client partnerships, and team synergy.</p>
  </div>

  <div class="bg-gradient-to-r from-blue-50 to-blue-100 p-8 rounded-lg">
    <h2 class="text-3xl font-bold text-blue-900 mb-6">Our Distinctive</h2>
    <p class="text-lg text-gray-700 leading-relaxed">While most agencies focus on branding, we focus on <strong class="text-blue-900">mandate embodiment</strong>. We don\'t just build websites or visuals — we translate heavenly blueprints into digital architecture. Our solutions are designed for prophetic continuity, ensuring that what God is doing through His servant is preserved, multiplied, and extended through technology.</p>
  </div>
</div>',
  meta_description = 'WOT Digital Solutions is the digital innovation arm of Word of Truth Ministries International. We build Spirit-led digital solutions that amplify truth and disciple nations through technology.',
  updated_at = NOW()
WHERE slug = 'about';
