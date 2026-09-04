import React, { useState, useEffect, useRef } from 'react';
import { StateExperienceBlog } from '../types';
import { INITIAL_STATE_BLOGS } from '../data/stateBlogsData';
import { STATES_HERITAGE_DATA } from '../data/statesData';
import { ClearImageLightboxModal, LightboxImageItem } from './ClearImageLightboxModal';
import { 
  PenTool, 
  Search, 
  MapPin, 
  Calendar, 
  Clock, 
  Heart, 
  Share2, 
  Sparkles, 
  X, 
  Check, 
  Tag, 
  ShieldCheck, 
  User, 
  Filter, 
  Trash2,
  BookOpen,
  Image as ImageIcon,
  Upload,
  Maximize2
} from 'lucide-react';

const COMMON_TAGS = [
  'Artisans', 
  'Architecture', 
  'Rituals', 
  'Cuisine & Food Trails', 
  'Handlooms & Weaving', 
  'Monasteries & Temples', 
  'Folk Music & Dance', 
  'Festivals'
];

export const StateBlogsSection: React.FC = () => {
  const [blogs, setBlogs] = useState<StateExperienceBlog[]>(() => {
    try {
      const saved = localStorage.getItem('virasat_user_state_blogs');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          // Merge user blogs with initial blogs
          const initialIds = new Set(INITIAL_STATE_BLOGS.map((b) => b.id));
          const userOnly = parsed.filter((b: StateExperienceBlog) => !initialIds.has(b.id));
          return [...userOnly, ...INITIAL_STATE_BLOGS];
        }
      }
    } catch {}
    return INITIAL_STATE_BLOGS;
  });

  const [selectedStateFilter, setSelectedStateFilter] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedTagFilter, setSelectedTagFilter] = useState<string>('All');
  
  // Modal / Reader state
  const [readingBlog, setReadingBlog] = useState<StateExperienceBlog | null>(null);
  const [isWriteModalOpen, setIsWriteModalOpen] = useState<boolean>(false);
  const [lightboxImage, setLightboxImage] = useState<LightboxImageItem | null>(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState<boolean>(false);
  const [likedBlogIds, setLikedBlogIds] = useState<Set<string>>(() => {
    try {
      const savedLikes = localStorage.getItem('virasat_liked_blogs');
      if (savedLikes) {
        return new Set(JSON.parse(savedLikes));
      }
    } catch {}
    return new Set();
  });
  const [copyNotification, setCopyNotification] = useState<string | null>(null);

  // Form State
  const [formTitle, setFormTitle] = useState<string>('');
  const [formStateId, setFormStateId] = useState<string>('rajasthan');
  const [formAuthorName, setFormAuthorName] = useState<string>('');
  const [formAuthorBio, setFormAuthorBio] = useState<string>('');
  const [formContent, setFormContent] = useState<string>('');
  const [formPreservationTip, setFormPreservationTip] = useState<string>('');
  const [formImageOption, setFormImageOption] = useState<'upload' | 'none'>('upload');
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [uploadedImageName, setUploadedImageName] = useState<string>('');
  const [isDraggingOver, setIsDraggingOver] = useState<boolean>(false);
  const [imageUploadError, setImageUploadError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [formSelectedTags, setFormSelectedTags] = useState<string[]>(['Artisans']);
  const [formCustomTagInput, setFormCustomTagInput] = useState<string>('');
  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});

  // Process uploaded image file with client-side downscaling for safe local storage
  const handleProcessImageFile = (file: File) => {
    if (!file.type.startsWith('image/')) {
      setImageUploadError('Please select a valid image file (JPG, PNG, WebP).');
      return;
    }
    if (file.size > 10 * 1024 * 1024) {
      setImageUploadError('Image size exceeds 10MB limit. Please choose a smaller photo.');
      return;
    }
    setImageUploadError(null);

    const reader = new FileReader();
    reader.onload = (event) => {
      const dataUrl = event.target?.result as string;
      const img = new Image();
      img.onload = () => {
        const maxWidth = 1200;
        const maxHeight = 800;
        let { width, height } = img;
        if (width > maxWidth || height > maxHeight) {
          if (width / height > maxWidth / maxHeight) {
            height = Math.round((height * maxWidth) / width);
            width = maxWidth;
          } else {
            width = Math.round((width * maxHeight) / height);
            height = maxHeight;
          }
        }
        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        if (ctx) {
          ctx.drawImage(img, 0, 0, width, height);
          const compressed = canvas.toDataURL('image/jpeg', 0.85);
          setUploadedImage(compressed);
          setUploadedImageName(file.name);
        } else {
          setUploadedImage(dataUrl);
          setUploadedImageName(file.name);
        }
      };
      img.onerror = () => {
        setUploadedImage(dataUrl);
        setUploadedImageName(file.name);
      };
      img.src = dataUrl;
    };
    reader.readAsDataURL(file);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleProcessImageFile(file);
    }
    // reset input value so re-selecting same file triggers change
    if (e.target) e.target.value = '';
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDraggingOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDraggingOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDraggingOver(false);
    const file = e.dataTransfer.files?.[0];
    if (file) {
      handleProcessImageFile(file);
    }
  };

  // Sync blogs to localStorage
  const saveBlogsToStorage = (updatedBlogs: StateExperienceBlog[]) => {
    setBlogs(updatedBlogs);
    try {
      localStorage.setItem('virasat_user_state_blogs', JSON.stringify(updatedBlogs));
    } catch {}
  };

  // Like Toggle
  const handleToggleLike = (blogId: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    const isLiked = likedBlogIds.has(blogId);
    const nextLiked = new Set(likedBlogIds);

    let delta = 0;
    if (isLiked) {
      nextLiked.delete(blogId);
      delta = -1;
    } else {
      nextLiked.add(blogId);
      delta = 1;
    }

    setLikedBlogIds(nextLiked);
    try {
      localStorage.setItem('virasat_liked_blogs', JSON.stringify(Array.from(nextLiked)));
    } catch {}

    const updatedBlogs = blogs.map((b) => (b.id === blogId ? { ...b, likes: Math.max(0, b.likes + delta) } : b));
    saveBlogsToStorage(updatedBlogs);

    if (readingBlog && readingBlog.id === blogId) {
      setReadingBlog({ ...readingBlog, likes: Math.max(0, readingBlog.likes + delta) });
    }
  };

  // Delete User Authored Blog
  const handleDeleteBlog = (blogId: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (!window.confirm('Are you sure you want to remove your published experience?')) return;

    const filtered = blogs.filter((b) => b.id !== blogId);
    saveBlogsToStorage(filtered);
    if (readingBlog && readingBlog.id === blogId) {
      setReadingBlog(null);
    }
  };

  // Toggle form tags
  const handleToggleTag = (tag: string) => {
    if (formSelectedTags.includes(tag)) {
      setFormSelectedTags(formSelectedTags.filter((t) => t !== tag));
    } else {
      setFormSelectedTags([...formSelectedTags, tag]);
    }
  };

  const handleAddCustomTag = () => {
    const trimmed = formCustomTagInput.trim();
    if (trimmed && !formSelectedTags.includes(trimmed)) {
      setFormSelectedTags([...formSelectedTags, trimmed]);
      setFormCustomTagInput('');
    }
  };

  // Share handler
  const handleShare = (blog: StateExperienceBlog, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    const shareText = `Read "${blog.title}" by ${blog.authorName} on Virasat Heritage Chronicles: ${window.location.origin}`;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(shareText);
      setCopyNotification('Link & story details copied to clipboard!');
      setTimeout(() => setCopyNotification(null), 3000);
    }
  };

  // Handle Submit Form
  const handleSubmitBlog = (e: React.FormEvent) => {
    e.preventDefault();
    const errors: { [key: string]: string } = {};

    if (!formTitle.trim()) errors.title = 'Please provide an inspiring title.';
    if (!formAuthorName.trim()) errors.authorName = 'Author name is required.';
    if (!formContent.trim() || formContent.trim().length < 50) {
      errors.content = 'Please share at least a couple of sentences describing your experience (50+ chars).';
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    const stateObj = STATES_HERITAGE_DATA.find((s) => s.id === formStateId);
    const resolvedStateName = stateObj ? stateObj.name : formStateId;

    let chosenCover: string | undefined = undefined;
    if (formImageOption === 'upload' && uploadedImage) {
      chosenCover = uploadedImage;
    }

    const wordCount = formContent.trim().split(/\s+/).length;
    const readMinutes = Math.max(1, Math.ceil(wordCount / 150));

    const newBlog: StateExperienceBlog = {
      id: `user-blog-${Date.now()}`,
      title: formTitle.trim(),
      stateId: formStateId,
      stateName: resolvedStateName,
      authorName: formAuthorName.trim(),
      authorBio: formAuthorBio.trim() || 'Heritage Enthusiast',
      date: new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' }),
      readTime: `${readMinutes} min read`,
      coverImage: chosenCover,
      content: formContent.trim(),
      tags: formSelectedTags.length > 0 ? formSelectedTags : ['Travel Experience'],
      preservationTip: formPreservationTip.trim() || undefined,
      likes: 1,
      isUserAuthored: true
    };

    const updated = [newBlog, ...blogs];
    saveBlogsToStorage(updated);

    // Auto-like own blog
    const nextLiked = new Set(likedBlogIds);
    nextLiked.add(newBlog.id);
    setLikedBlogIds(nextLiked);
    try {
      localStorage.setItem('virasat_liked_blogs', JSON.stringify(Array.from(nextLiked)));
    } catch {}

    // Reset Form
    setFormTitle('');
    setFormAuthorName('');
    setFormAuthorBio('');
    setFormContent('');
    setFormPreservationTip('');
    setUploadedImage(null);
    setUploadedImageName('');
    setImageUploadError(null);
    setFormImageOption('upload');
    setFormSelectedTags(['Artisans']);
    setFormErrors({});
    setIsWriteModalOpen(false);
    setReadingBlog(newBlog);
  };

  // Filtered list
  const filteredBlogs = blogs.filter((blog) => {
    const matchState = selectedStateFilter === 'All' || blog.stateId === selectedStateFilter;
    const matchTag = selectedTagFilter === 'All' || blog.tags.some((t) => t.toLowerCase() === selectedTagFilter.toLowerCase());
    const matchQuery =
      !searchQuery.trim() ||
      blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.stateName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.authorName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchState && matchTag && matchQuery;
  });

  return (
    <div id="state-blogs-section" className="space-y-8">
      {/* Toast Notification */}
      {copyNotification && (
        <div className="fixed bottom-6 right-6 z-50 bg-stone-900 text-amber-200 px-4 py-2.5 rounded-xl shadow-xl border border-amber-500/30 text-xs font-semibold flex items-center gap-2 animate-in fade-in slide-in-from-bottom-3">
          <Check className="w-4 h-4 text-emerald-400" />
          <span>{copyNotification}</span>
        </div>
      )}

      {/* Header Banner & Compose Trigger */}
      <div className="bg-white rounded-3xl border border-stone-200 shadow-sm p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-2 max-w-2xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#8B1E22]/10 text-[#8B1E22] text-xs font-bold uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Community Heritage Chronicles</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900">
            Voices of Bharat: State Travel & Heritage Experiences
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
            Every step across India tells an ancient story. Read firsthand journeys from fellow travelers, document encounters with master artisans, and publish your own memorable state experience.
          </p>
        </div>

        <button
          id="btn-open-blog-composer"
          onClick={() => setIsWriteModalOpen(true)}
          className="flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-[#8B1E22] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#721519] shadow-md hover:shadow-lg transition-all cursor-pointer flex-shrink-0"
        >
          <PenTool className="w-4 h-4" />
          <span>Write Your Experience</span>
        </button>
      </div>

      {/* Controls & Search Toolbar */}
      <div className="bg-white rounded-2xl border border-stone-200 shadow-xs p-4 sm:p-5 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
        {/* Search Input */}
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            id="input-search-blogs"
            placeholder="Search stories by state, temple, artisan, or keyword..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-stone-200 text-xs sm:text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-[#8B1E22]/20 bg-stone-50"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600 p-1"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* State Filter Dropdown */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 text-xs font-bold text-stone-500 uppercase tracking-wider flex-shrink-0">
            <Filter className="w-3.5 h-3.5" />
            <span>State:</span>
          </div>
          <select
            id="select-filter-state"
            value={selectedStateFilter}
            onChange={(e) => setSelectedStateFilter(e.target.value)}
            className="px-3.5 py-2.5 rounded-xl border border-stone-200 text-xs sm:text-sm font-semibold text-stone-800 bg-stone-50 focus:outline-none focus:ring-2 focus:ring-[#8B1E22]/20 cursor-pointer"
          >
            <option value="All">All States & UTs ({blogs.length})</option>
            {STATES_HERITAGE_DATA.map((state) => {
              const count = blogs.filter((b) => b.stateId === state.id).length;
              return (
                <option key={state.id} value={state.id}>
                  {state.name} {count > 0 ? `(${count})` : ''}
                </option>
              );
            })}
          </select>
        </div>
      </div>

      {/* Popular Tag Filters */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none text-xs">
        <span className="text-stone-500 font-bold uppercase tracking-wider text-[10px] pl-1 flex items-center gap-1">
          <Tag className="w-3 h-3" />
          <span>Topic:</span>
        </span>
        <button
          onClick={() => setSelectedTagFilter('All')}
          className={`px-3 py-1.5 rounded-lg font-bold transition-all cursor-pointer ${
            selectedTagFilter === 'All'
              ? 'bg-[#8B1E22] text-white shadow-xs'
              : 'bg-white text-stone-600 hover:bg-stone-100 border border-stone-200'
          }`}
        >
          All Topics
        </button>
        {COMMON_TAGS.map((tag) => (
          <button
            key={tag}
            onClick={() => setSelectedTagFilter(selectedTagFilter === tag ? 'All' : tag)}
            className={`px-3 py-1.5 rounded-lg font-medium whitespace-nowrap transition-all cursor-pointer ${
              selectedTagFilter === tag
                ? 'bg-[#8B1E22] text-white shadow-xs'
                : 'bg-white text-stone-600 hover:bg-stone-100 border border-stone-200'
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Blog Cards Grid */}
      {filteredBlogs.length === 0 ? (
        <div className="bg-white rounded-3xl border border-stone-200 p-12 text-center max-w-lg mx-auto space-y-4 shadow-xs">
          <div className="w-14 h-14 rounded-2xl bg-amber-50 text-amber-700 flex items-center justify-center mx-auto">
            <BookOpen className="w-7 h-7" />
          </div>
          <h3 className="font-serif text-xl font-bold text-stone-900">
            No chronicles found for this filter
          </h3>
          <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
            Be the first to share an inspiring personal memory or travel story from this state!
          </p>
          <button
            onClick={() => {
              if (selectedStateFilter !== 'All') {
                setFormStateId(selectedStateFilter);
              }
              setIsWriteModalOpen(true);
            }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#8B1E22] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#721519] cursor-pointer"
          >
            <PenTool className="w-3.5 h-3.5" />
            <span>Write Chronicle Now</span>
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredBlogs.map((blog) => {
            const isLiked = likedBlogIds.has(blog.id);
            return (
              <article
                key={blog.id}
                id={`card-blog-${blog.id}`}
                onClick={() => setReadingBlog(blog)}
                className="bg-white rounded-3xl border border-stone-200 overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between cursor-pointer group hover:-translate-y-1"
              >
                <div>
                  {/* Card Cover Image (if present) or Editorial Header */}
                  {blog.coverImage ? (
                    <div className="relative aspect-16/10 overflow-hidden bg-stone-900">
                      <img
                        src={blog.coverImage}
                        alt={blog.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-black/20" />
                      
                      {/* State Badge */}
                      <div className="absolute top-3.5 left-3.5">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-950/85 backdrop-blur-md text-amber-300 text-[11px] font-bold tracking-wide uppercase shadow-sm">
                          <MapPin className="w-3 h-3 text-[#8B1E22]" />
                          <span>{blog.stateName}</span>
                        </span>
                      </div>

                      {blog.isUserAuthored && (
                        <div className="absolute top-3.5 right-3.5">
                          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-600/90 text-white text-[10px] font-bold uppercase tracking-wider">
                            <Sparkles className="w-3 h-3" />
                            <span>Community Author</span>
                          </span>
                        </div>
                      )}

                      <div className="absolute bottom-3 left-3.5 right-3.5 flex items-center justify-between text-stone-300 text-[11px] font-medium">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          <span>{blog.date}</span>
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          <span>{blog.readTime}</span>
                        </span>
                      </div>
                    </div>
                  ) : (
                    <div className="relative p-5 pb-4 bg-gradient-to-br from-stone-900 via-stone-850 to-[#8B1E22]/30 text-white border-b border-stone-100 flex flex-col justify-between min-h-[110px]">
                      <div className="flex items-center justify-between gap-2">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-amber-300 text-[11px] font-bold tracking-wide uppercase border border-white/10">
                          <MapPin className="w-3 h-3 text-amber-400" />
                          <span>{blog.stateName}</span>
                        </span>

                        {blog.isUserAuthored && (
                          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-600/90 text-white text-[10px] font-bold uppercase tracking-wider">
                            <Sparkles className="w-3 h-3" />
                            <span>Community Author</span>
                          </span>
                        )}
                      </div>

                      <div className="flex items-center justify-between text-stone-300 text-[11px] font-medium mt-4">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3 text-stone-400" />
                          <span>{blog.date}</span>
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3 text-stone-400" />
                          <span>{blog.readTime}</span>
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Card Body */}
                  <div className="p-6 space-y-3">
                    <h3 className="font-serif text-lg sm:text-xl font-bold text-stone-900 group-hover:text-[#8B1E22] transition-colors line-clamp-2 leading-snug">
                      {blog.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-stone-600 line-clamp-3 leading-relaxed">
                      {blog.content}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {blog.tags.slice(0, 3).map((t, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 rounded-md bg-stone-100 text-stone-600 text-[10px] font-semibold"
                        >
                          #{t}
                        </span>
                      ))}
                      {blog.tags.length > 3 && (
                        <span className="text-[10px] text-stone-400 font-semibold self-center">
                          +{blog.tags.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="px-6 py-4 bg-stone-50/80 border-t border-stone-100 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-[#8B1E22]/15 text-[#8B1E22] flex items-center justify-center font-serif text-xs font-bold">
                      {blog.authorName[0]}
                    </div>
                    <div className="text-[11px]">
                      <p className="font-bold text-stone-800 leading-none">{blog.authorName}</p>
                      <p className="text-stone-500 text-[10px] line-clamp-1 mt-0.5">{blog.authorBio || 'Traveler'}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <button
                      id={`btn-like-${blog.id}`}
                      onClick={(e) => handleToggleLike(blog.id, e)}
                      className={`flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                        isLiked
                          ? 'bg-red-50 text-red-700'
                          : 'text-stone-500 hover:bg-stone-200/60'
                      }`}
                      title={isLiked ? 'Unlike' : 'Give claps / like'}
                    >
                      <Heart className={`w-3.5 h-3.5 ${isLiked ? 'fill-red-600 text-red-600' : ''}`} />
                      <span>{blog.likes}</span>
                    </button>

                    <button
                      onClick={(e) => handleShare(blog, e)}
                      className="p-1.5 text-stone-400 hover:text-stone-700 hover:bg-stone-200/60 rounded-lg transition-all"
                      title="Share story"
                    >
                      <Share2 className="w-3.5 h-3.5" />
                    </button>

                    {blog.isUserAuthored && (
                      <button
                        onClick={(e) => handleDeleteBlog(blog.id, e)}
                        className="p-1.5 text-stone-400 hover:text-red-700 hover:bg-red-50 rounded-lg transition-all"
                        title="Delete this story"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      )}

      {/* FULL BLOG READER MODAL */}
      {readingBlog && (
        <div 
          id="modal-blog-reader"
          className="fixed inset-0 z-50 bg-stone-950/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-in fade-in"
          onClick={() => setReadingBlog(null)}
        >
          <div
            className="bg-white rounded-3xl border border-stone-200 shadow-2xl max-w-3xl w-full overflow-y-auto max-h-[90vh] my-auto relative animate-in zoom-in-95 duration-200 flex flex-col justify-between"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Sticky Floating Close Button */}
            <div className="sticky top-4 right-4 z-40 flex justify-end px-4 pointer-events-none -mb-12">
              <button
                id="btn-close-reader-modal"
                onClick={() => setReadingBlog(null)}
                className="pointer-events-auto w-10 h-10 rounded-full bg-stone-950/75 hover:bg-stone-950 text-white backdrop-blur-md border border-white/25 flex items-center justify-center transition-all cursor-pointer shadow-xl hover:scale-105"
                title="Close chronicle"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div>
              {/* Modal Header: Cover Image (scrolls up with content) or Editorial Header */}
              {readingBlog.coverImage ? (
                <div 
                  onClick={() => {
                    setLightboxImage({
                      src: readingBlog.coverImage!,
                      alt: readingBlog.title,
                      title: readingBlog.title,
                      subtitle: `${readingBlog.stateName} • ${readingBlog.authorName}`,
                      description: readingBlog.content.slice(0, 150) + '...',
                      category: 'Travel Chronicle',
                    });
                    setIsLightboxOpen(true);
                  }}
                  className="relative aspect-21/9 sm:aspect-16/7 w-full overflow-hidden bg-stone-900 cursor-pointer group"
                  title="Click to zoom cover photo in full resolution"
                >
                  <img
                    src={readingBlog.coverImage}
                    alt={readingBlog.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent" />
                  
                  {/* Click to Zoom Badge */}
                  <div className="absolute top-4 left-6 opacity-90 group-hover:opacity-100 transition-opacity">
                    <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-xs font-semibold border border-white/20 flex items-center gap-1.5 shadow-md">
                      <Maximize2 className="w-3.5 h-3.5 text-amber-300" /> Click to Zoom
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-6 right-16">
                    <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                      <span className="px-3 py-1 rounded-full bg-[#8B1E22] text-white text-[11px] font-bold uppercase tracking-wider">
                        📍 {readingBlog.stateName}
                      </span>
                      <span className="text-xs text-stone-300 font-medium">
                        {readingBlog.readTime} • {readingBlog.date}
                      </span>
                    </div>
                    <h2 className="font-serif text-xl sm:text-3xl font-bold text-white leading-tight">
                      {readingBlog.title}
                    </h2>
                  </div>
                </div>
              ) : (
                <div className="p-6 sm:p-8 pb-4 pt-8 border-b border-stone-100 bg-stone-50/70">
                  <div className="flex items-center gap-2 mb-2 flex-wrap pr-12">
                    <span className="px-3 py-1 rounded-full bg-[#8B1E22] text-white text-[11px] font-bold uppercase tracking-wider">
                      📍 {readingBlog.stateName}
                    </span>
                    <span className="text-xs text-stone-500 font-medium">
                      {readingBlog.readTime} • {readingBlog.date}
                    </span>
                  </div>
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 leading-tight pr-10">
                    {readingBlog.title}
                  </h2>
                </div>
              )}

              {/* Modal Content - natural document flow in scrollable container */}
              <div className="p-6 sm:p-8 space-y-6">
                {/* Author Strip */}
                <div className="flex items-center justify-between border-b border-stone-100 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-full bg-[#8B1E22] text-amber-200 font-serif text-lg font-bold flex items-center justify-center shadow-xs">
                      {readingBlog.authorName[0]}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-stone-900 text-sm">{readingBlog.authorName}</span>
                        {readingBlog.isUserAuthored && (
                          <span className="px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-800 text-[10px] font-bold uppercase">
                            Author
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-stone-500">{readingBlog.authorBio || 'Cultural Traveler'}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleToggleLike(readingBlog.id)}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                        likedBlogIds.has(readingBlog.id)
                          ? 'bg-red-50 text-red-700 ring-1 ring-red-200'
                          : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                      }`}
                    >
                      <Heart className={`w-4 h-4 ${likedBlogIds.has(readingBlog.id) ? 'fill-red-600 text-red-600' : ''}`} />
                      <span>{readingBlog.likes} Claps</span>
                    </button>

                    <button
                      onClick={() => handleShare(readingBlog)}
                      className="p-2 rounded-xl bg-stone-100 text-stone-700 hover:bg-stone-200 transition-all cursor-pointer"
                      title="Share story"
                    >
                      <Share2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Story Text */}
                <div className="space-y-4 text-stone-800 text-sm sm:text-base leading-relaxed">
                  {readingBlog.content.split('\n\n').map((para, i) => (
                    <p key={i} className="leading-relaxed">
                      {para}
                    </p>
                  ))}
                </div>

                {/* Preservation Tip Box */}
                {readingBlog.preservationTip && (
                  <div className="p-5 rounded-2xl bg-amber-50 border border-amber-200/80 space-y-2">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-900">
                      <ShieldCheck className="w-4 h-4 text-amber-700" />
                      <span>Preservation & Ethical Traveler Advice</span>
                    </div>
                    <p className="text-xs sm:text-sm text-amber-950 leading-relaxed font-medium">
                      {readingBlog.preservationTip}
                    </p>
                  </div>
                )}

                {/* Tags */}
                <div className="pt-2 border-t border-stone-100 flex flex-wrap items-center gap-2">
                  <span className="text-xs text-stone-400 font-semibold">Topics:</span>
                  {readingBlog.tags.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-lg bg-stone-100 text-stone-700 text-xs font-medium"
                    >
                      #{t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-stone-50 border-t border-stone-100 flex items-center justify-between text-xs sticky bottom-0 z-30">
              <span className="text-stone-500">
                Published in Virasat Heritage Archives
              </span>
              <button
                onClick={() => setReadingBlog(null)}
                className="px-5 py-2 rounded-xl bg-stone-900 text-white font-bold text-xs hover:bg-stone-800 transition-all cursor-pointer"
              >
                Close Chronicle
              </button>
            </div>
          </div>
        </div>
      )}

      {/* WRITE YOUR EXPERIENCE MODAL */}
      {isWriteModalOpen && (
        <div 
          id="modal-blog-composer"
          className="fixed inset-0 z-50 bg-stone-950/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-in fade-in"
          onClick={() => setIsWriteModalOpen(false)}
        >
          <div
            className="bg-white rounded-3xl border border-stone-200 shadow-2xl max-w-2xl w-full overflow-hidden my-auto max-h-[92vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-6 border-b border-stone-100 flex items-center justify-between bg-stone-50">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-xl bg-[#8B1E22]/10 text-[#8B1E22] flex items-center justify-center">
                  <PenTool className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-stone-900">
                    Write Your State Experience
                  </h3>
                  <p className="text-xs text-stone-500">
                    Share your authentic personal encounters with India’s culture & crafts.
                  </p>
                </div>
              </div>
              <button
                id="btn-close-composer-modal"
                onClick={() => setIsWriteModalOpen(false)}
                className="w-8 h-8 rounded-full hover:bg-stone-200 flex items-center justify-center text-stone-500 transition-all cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Scrollable Form Area */}
            <form onSubmit={handleSubmitBlog} className="p-6 overflow-y-auto space-y-5 flex-1">
              {/* Title */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                  Chronicle Title *
                </label>
                <input
                  type="text"
                  id="input-blog-title"
                  placeholder="e.g. Dawn at the Varanasi Ghats: Chants, Mist, and Silk Weavers"
                  value={formTitle}
                  onChange={(e) => setFormTitle(e.target.value)}
                  className={`w-full px-4 py-2.5 rounded-xl border text-sm font-medium focus:outline-none focus:ring-2 bg-stone-50 ${
                    formErrors.title
                      ? 'border-red-400 focus:ring-red-200'
                      : 'border-stone-300 focus:ring-[#8B1E22]/30'
                  }`}
                />
                {formErrors.title && <p className="text-xs text-red-600 mt-1 font-medium">{formErrors.title}</p>}
              </div>

              {/* State & Author Name Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                    Select Indian State / UT *
                  </label>
                  <select
                    id="select-blog-state"
                    value={formStateId}
                    onChange={(e) => setFormStateId(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-sm font-medium text-stone-900 bg-stone-50 focus:outline-none focus:ring-2 focus:ring-[#8B1E22]/30"
                  >
                    {STATES_HERITAGE_DATA.map((s) => (
                      <option key={s.id} value={s.id}>
                        {s.name} ({s.region} India)
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="input-blog-author"
                    placeholder="e.g. Aditi Sharma"
                    value={formAuthorName}
                    onChange={(e) => setFormAuthorName(e.target.value)}
                    className={`w-full px-4 py-2.5 rounded-xl border text-sm font-medium focus:outline-none focus:ring-2 bg-stone-50 ${
                      formErrors.authorName
                        ? 'border-red-400 focus:ring-red-200'
                        : 'border-stone-300 focus:ring-[#8B1E22]/30'
                    }`}
                  />
                  {formErrors.authorName && (
                    <p className="text-xs text-red-600 mt-1 font-medium">{formErrors.authorName}</p>
                  )}
                </div>
              </div>

              {/* Author Bio */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                  About You / Traveler Role (Optional)
                </label>
                <input
                  type="text"
                  id="input-blog-author-bio"
                  placeholder="e.g. Solo Backpacker from Bangalore / Architecture Student"
                  value={formAuthorBio}
                  onChange={(e) => setFormAuthorBio(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-stone-300 text-sm font-medium text-stone-900 bg-stone-50 focus:outline-none focus:ring-2 focus:ring-[#8B1E22]/30"
                />
              </div>

              {/* Cover Photo Choice (Optional) */}
              <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-stone-800">
                    Story Cover Photo (Optional)
                  </span>
                  <span className="text-[11px] text-stone-500 font-medium">
                    Upload your own photo or publish as text-only
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    id="btn-img-opt-upload"
                    onClick={() => setFormImageOption('upload')}
                    className={`px-4 py-2.5 rounded-xl text-xs font-bold flex items-center justify-center gap-2 border transition-all cursor-pointer ${
                      formImageOption === 'upload'
                        ? 'bg-[#8B1E22] text-white border-[#8B1E22] shadow-xs'
                        : 'bg-white text-stone-700 border-stone-300 hover:bg-stone-100'
                    }`}
                  >
                    <Upload className="w-4 h-4" />
                    <span>Upload Photo</span>
                  </button>

                  <button
                    type="button"
                    id="btn-img-opt-none"
                    onClick={() => setFormImageOption('none')}
                    className={`px-4 py-2.5 rounded-xl text-xs font-bold flex items-center justify-center gap-2 border transition-all cursor-pointer ${
                      formImageOption === 'none'
                        ? 'bg-[#8B1E22] text-white border-[#8B1E22] shadow-xs'
                        : 'bg-white text-stone-700 border-stone-300 hover:bg-stone-100'
                    }`}
                  >
                    <X className="w-4 h-4" />
                    <span>No Photo</span>
                  </button>
                </div>

                {/* Hidden File Input for click selection */}
                <input
                  type="file"
                  ref={fileInputRef}
                  accept="image/jpeg,image/png,image/webp,image/gif"
                  className="hidden"
                  onChange={handleFileChange}
                />

                {formImageOption === 'upload' && (
                  <div className="space-y-2 pt-1 animate-in fade-in">
                    {uploadedImage ? (
                      <div className="relative aspect-16/9 rounded-xl overflow-hidden border border-stone-200 bg-stone-900 shadow-sm">
                        <img
                          src={uploadedImage}
                          alt="Story cover preview"
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
                        
                        <div className="absolute top-3 right-3 flex items-center gap-2">
                          <button
                            type="button"
                            id="btn-change-uploaded-image"
                            onClick={() => fileInputRef.current?.click()}
                            className="px-2.5 py-1.5 rounded-lg bg-black/70 hover:bg-black text-white text-xs font-semibold flex items-center gap-1.5 backdrop-blur-md transition-all cursor-pointer"
                          >
                            <Upload className="w-3.5 h-3.5" />
                            <span>Change</span>
                          </button>
                          <button
                            type="button"
                            id="btn-remove-uploaded-image"
                            onClick={() => {
                              setUploadedImage(null);
                              setUploadedImageName('');
                            }}
                            className="px-2.5 py-1.5 rounded-lg bg-black/70 hover:bg-red-700 text-white text-xs font-semibold flex items-center gap-1.5 backdrop-blur-md transition-all cursor-pointer"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                            <span>Remove</span>
                          </button>
                        </div>

                        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs">
                          <span className="truncate max-w-[70%] font-medium bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-md">
                            📷 {uploadedImageName || 'Cover image selected'}
                          </span>
                          <span className="text-[11px] text-emerald-300 font-semibold bg-emerald-950/80 px-2 py-0.5 rounded">
                            ✓ Ready to publish
                          </span>
                        </div>
                      </div>
                    ) : (
                      <div
                        id="dropzone-blog-cover"
                        onDragOver={handleDragOver}
                        onDragLeave={handleDragLeave}
                        onDrop={handleDrop}
                        onClick={() => fileInputRef.current?.click()}
                        className={`p-6 border-2 border-dashed rounded-2xl flex flex-col items-center justify-center text-center cursor-pointer transition-all ${
                          isDraggingOver
                            ? 'border-[#8B1E22] bg-red-50/60 scale-[1.01]'
                            : 'border-stone-300 hover:border-[#8B1E22] bg-white hover:bg-stone-50/60'
                        }`}
                      >
                        <div className="w-12 h-12 rounded-2xl bg-amber-100/80 text-[#8B1E22] flex items-center justify-center mb-2 shadow-xs">
                          <Upload className="w-6 h-6" />
                        </div>
                        <p className="text-xs sm:text-sm font-bold text-stone-800">
                          Click to upload or drag & drop photo
                        </p>
                        <p className="text-[11px] text-stone-500 mt-1">
                          PNG, JPG, WebP (up to 10MB)
                        </p>
                      </div>
                    )}

                    {imageUploadError && (
                      <p className="text-xs text-red-600 font-medium">{imageUploadError}</p>
                    )}
                  </div>
                )}

                {formImageOption === 'none' && (
                  <p className="text-xs text-stone-500 italic pt-1 animate-in fade-in">
                    No cover photo will be attached. Your chronicle will be showcased with an elegant text-first layout.
                  </p>
                )}
              </div>

              {/* Story Content */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                  Your Cultural Experience / Narrative *
                </label>
                <p className="text-[11px] text-stone-500 mb-2">
                  Tip: Separate paragraphs with an empty line. Describe who you met, the living craft, the sensory details, or ancient traditions.
                </p>
                <textarea
                  id="textarea-blog-content"
                  rows={6}
                  placeholder="Walking into the temple courtyards at dawn, the scent of fresh jasmine and burning camphor greeted us. An artisan sitting on a reed mat was carving rosewood figurines with centuries of generational skill..."
                  value={formContent}
                  onChange={(e) => setFormContent(e.target.value)}
                  className={`w-full p-4 rounded-xl border text-sm font-medium focus:outline-none focus:ring-2 bg-stone-50 ${
                    formErrors.content
                      ? 'border-red-400 focus:ring-red-200'
                      : 'border-stone-300 focus:ring-[#8B1E22]/30'
                  }`}
                />
                {formErrors.content && (
                  <p className="text-xs text-red-600 mt-1 font-medium">{formErrors.content}</p>
                )}
              </div>

              {/* Preservation Tip */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5 flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#8B1E22]" />
                  <span>Preservation Tip / Ethical Travel Advice (Optional)</span>
                </label>
                <input
                  type="text"
                  id="input-blog-preservation-tip"
                  placeholder="e.g. Support weavers directly by visiting government co-ops, avoid touching delicate terracotta carvings..."
                  value={formPreservationTip}
                  onChange={(e) => setFormPreservationTip(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-stone-300 text-sm font-medium text-stone-900 bg-stone-50 focus:outline-none focus:ring-2 focus:ring-[#8B1E22]/30"
                />
              </div>

              {/* Topic Tags */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-2">
                  Select Topics & Tags
                </label>
                <div className="flex flex-wrap gap-2 mb-3">
                  {COMMON_TAGS.map((tag) => {
                    const isSelected = formSelectedTags.includes(tag);
                    return (
                      <button
                        type="button"
                        key={tag}
                        onClick={() => handleToggleTag(tag)}
                        className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-[#8B1E22] text-white shadow-xs'
                            : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                        }`}
                      >
                        {isSelected ? '✓ ' : '+ '}
                        {tag}
                      </button>
                    );
                  })}
                </div>

                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    placeholder="Add custom tag (e.g. Spiti Valley)..."
                    value={formCustomTagInput}
                    onChange={(e) => setFormCustomTagInput(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        e.preventDefault();
                        handleAddCustomTag();
                      }
                    }}
                    className="px-3 py-1.5 rounded-lg border border-stone-300 text-xs bg-stone-50 focus:outline-none focus:ring-2 focus:ring-[#8B1E22]/30"
                  />
                  <button
                    type="button"
                    onClick={handleAddCustomTag}
                    className="px-3 py-1.5 rounded-lg bg-stone-800 text-white text-xs font-bold hover:bg-stone-900 cursor-pointer"
                  >
                    Add
                  </button>
                </div>
              </div>

              {/* Submit Buttons */}
              <div className="pt-4 border-t border-stone-100 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsWriteModalOpen(false)}
                  className="px-5 py-2.5 rounded-xl border border-stone-300 text-stone-700 text-xs font-bold hover:bg-stone-100 transition-all cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  id="btn-publish-blog"
                  className="px-6 py-2.5 rounded-xl bg-[#8B1E22] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#721519] shadow-md transition-all cursor-pointer flex items-center gap-2"
                >
                  <Sparkles className="w-4 h-4 text-amber-300" />
                  <span>Publish Chronicle</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      {/* Lightbox for Chronicle Images */}
      {isLightboxOpen && lightboxImage && (
        <ClearImageLightboxModal
          isOpen={isLightboxOpen}
          onClose={() => setIsLightboxOpen(false)}
          image={lightboxImage}
        />
      )}
    </div>
  );
};
