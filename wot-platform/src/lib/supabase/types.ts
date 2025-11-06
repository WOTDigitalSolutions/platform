export type Database = {
  public: {
    Tables: {
      sermons: {
        Row: {
          id: string
          created_at: string
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
          published: boolean
        }
        Insert: {
          id?: string
          created_at?: string
          title: string
          description?: string | null
          preacher: string
          sermon_date: string
          media_type: 'youtube' | 'audio' | 'video'
          media_url: string
          thumbnail_url?: string | null
          scripture_reference?: string | null
          tags?: string[] | null
          duration?: string | null
          published?: boolean
        }
        Update: {
          id?: string
          created_at?: string
          title?: string
          description?: string | null
          preacher?: string
          sermon_date?: string
          media_type?: 'youtube' | 'audio' | 'video'
          media_url?: string
          thumbnail_url?: string | null
          scripture_reference?: string | null
          tags?: string[] | null
          duration?: string | null
          published?: boolean
        }
      }
      events: {
        Row: {
          id: string
          created_at: string
          title: string
          description: string | null
          event_date: string
          event_time: string | null
          location: string | null
          image_url: string | null
          registration_url: string | null
          published: boolean
        }
        Insert: {
          id?: string
          created_at?: string
          title: string
          description?: string | null
          event_date: string
          event_time?: string | null
          location?: string | null
          image_url?: string | null
          registration_url?: string | null
          published?: boolean
        }
        Update: {
          id?: string
          created_at?: string
          title?: string
          description?: string | null
          event_date?: string
          event_time?: string | null
          location?: string | null
          image_url?: string | null
          registration_url?: string | null
          published?: boolean
        }
      }
      contact_submissions: {
        Row: {
          id: string
          created_at: string
          name: string
          email: string
          phone: string | null
          message: string
          status: 'new' | 'read' | 'responded'
        }
        Insert: {
          id?: string
          created_at?: string
          name: string
          email: string
          phone?: string | null
          message: string
          status?: 'new' | 'read' | 'responded'
        }
        Update: {
          id?: string
          created_at?: string
          name?: string
          email?: string
          phone?: string | null
          message?: string
          status?: 'new' | 'read' | 'responded'
        }
      }
      prayer_requests: {
        Row: {
          id: string
          created_at: string
          name: string
          email: string | null
          phone: string | null
          request: string
          status: 'new' | 'praying' | 'answered'
          is_anonymous: boolean
        }
        Insert: {
          id?: string
          created_at?: string
          name: string
          email?: string | null
          phone?: string | null
          request: string
          status?: 'new' | 'praying' | 'answered'
          is_anonymous?: boolean
        }
        Update: {
          id?: string
          created_at?: string
          name?: string
          email?: string | null
          phone?: string | null
          request?: string
          status?: 'new' | 'praying' | 'answered'
          is_anonymous?: boolean
        }
      }
      pages: {
        Row: {
          id: string
          created_at: string
          updated_at: string
          slug: string
          title: string
          content: string
          meta_description: string | null
          published: boolean
        }
        Insert: {
          id?: string
          created_at?: string
          updated_at?: string
          slug: string
          title: string
          content: string
          meta_description?: string | null
          published?: boolean
        }
        Update: {
          id?: string
          created_at?: string
          updated_at?: string
          slug?: string
          title?: string
          content?: string
          meta_description?: string | null
          published?: boolean
        }
      }
    }
  }
}
