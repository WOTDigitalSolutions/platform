"use client"

import { Play, Calendar, User, Book } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { useState } from 'react'

type Sermon = {
  id: string
  title: string
  description: string | null
  preacher: string
  sermon_date: string
  media_type: 'youtube' | 'audio' | 'video'
  media_url: string
  thumbnail_url: string | null
  scripture_reference: string | null
  tags: string[] | null
  duration: string | null
}

export function SermonCard({ sermon }: { sermon: Sermon }) {
  const [isPlaying, setIsPlaying] = useState(false)

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    })
  }

  const getYouTubeEmbedUrl = (url: string) => {
    const videoId = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\s]+)/)?.[1]
    return videoId ? `https://www.youtube.com/embed/${videoId}` : url
  }

  const handlePlay = () => {
    setIsPlaying(true)
  }

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative aspect-video bg-gray-900">
        {!isPlaying ? (
          <>
            {sermon.thumbnail_url ? (
              <img
                src={sermon.thumbnail_url}
                alt={sermon.title}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-600 to-blue-800">
                <Book className="text-white" size={48} />
              </div>
            )}
            <button
              onClick={handlePlay}
              className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-colors group"
            >
              <div className="w-16 h-16 bg-blue-700 rounded-full flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                <Play className="text-white ml-1" size={28} fill="white" />
              </div>
            </button>
          </>
        ) : (
          <>
            {sermon.media_type === 'youtube' && (
              <iframe
                src={getYouTubeEmbedUrl(sermon.media_url)}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )}
            {sermon.media_type === 'audio' && (
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-600 to-blue-800 p-8">
                <audio controls autoPlay className="w-full">
                  <source src={sermon.media_url} />
                  Your browser does not support the audio element.
                </audio>
              </div>
            )}
            {sermon.media_type === 'video' && (
              <video controls autoPlay className="w-full h-full">
                <source src={sermon.media_url} />
                Your browser does not support the video tag.
              </video>
            )}
          </>
        )}
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
          {sermon.title}
        </h3>

        {sermon.description && (
          <p className="text-gray-600 mb-4 line-clamp-2">
            {sermon.description}
          </p>
        )}

        <div className="space-y-2 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <User size={16} className="text-blue-700" />
            <span>{sermon.preacher}</span>
          </div>

          <div className="flex items-center gap-2">
            <Calendar size={16} className="text-blue-700" />
            <span>{formatDate(sermon.sermon_date)}</span>
          </div>

          {sermon.scripture_reference && (
            <div className="flex items-center gap-2">
              <Book size={16} className="text-blue-700" />
              <span>{sermon.scripture_reference}</span>
            </div>
          )}
        </div>

        {sermon.tags && sermon.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4">
            {sermon.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  )
}
