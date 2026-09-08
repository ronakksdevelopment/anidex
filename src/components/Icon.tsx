import React from 'react';
import {
  Wifi, Cpu, Archive, ArrowRight, Compass, Book, Scan, Heart, Settings2, Search,
  AudioLines, Volume2, Database, PawPrint, Bird, Bug, Droplet, Waves, Mountain, Bookmark,
  Brain, Filter, FileSearch, X, Rows3, LayoutGrid, Cloud, ChevronRight, Snowflake, Leaf,
  Eye, FileEdit, Scale, Ruler, Gauge, FlaskConical, Sunset, Feather, Wind, Download, FileText,
  Share2, ArrowLeft, ChevronLeft, Play, Clock, Utensils, Globe, ChevronDown, Bot, Loader2,
  CheckCircle2, Zap, Focus, Box, Images, Mic, Palette, Moon, Sun, Terminal, RefreshCw, AlertCircle, CloudOff, Key, EyeOff, CheckCircle
} from 'lucide-react';

const iconMap: Record<string, any> = {
  'sensors': Wifi, 'memory': Cpu, 'inventory_2': Archive, 'arrow_forward': ArrowRight, 'explore': Compass, 'menu_book': Book,
  'document_scanner': Scan, 'favorite': Heart, 'tune': Settings2, 'search': Search, 'graphic_eq': AudioLines, 'volume_up': Volume2,
  'dataset': Database, 'pets': PawPrint, 'cruelty_free': Bird, 'pest_control': Bug, 'water_drop': Droplet, 'waves': Waves,
  'bug_report': Bug, 'terrain': Mountain, 'bookmark_border': Bookmark, 'neurology': Brain, 'filter_list': Filter,
  'manage_search': FileSearch, 'close': X, 'view_agenda': Rows3, 'grid_view': LayoutGrid, 'cloud_done': Cloud,
  'arrow_forward_ios': ChevronRight, 'ac_unit': Snowflake, 'tsunami': Waves, 'spa': Leaf, 'visibility': Eye,
  'edit_note': FileEdit, 'scale': Scale, 'straighten': Ruler, 'speed': Gauge, 'science': FlaskConical, 'wb_twilight': Sunset,
  'flutter': Feather, 'air': Wind, 'file_download': Download, 'description': FileText, 'share': Share2, 'arrow_back': ArrowLeft,
  'arrow_back_ios': ChevronLeft, 'play_arrow': Play, 'timelapse': Clock, 'nutrition': Utensils, 'public': Globe,
  'expand_more': ChevronDown, 'smart_toy': Bot, 'progress_activity': Loader2, 'check_circle': CheckCircle2, 'flash_on': Zap,
  'filter_center_focus': Focus, 'view_in_ar': Box, 'photo_library': Images, 'mic': Mic, 'palette': Palette, 'dark_mode': Moon,
  'light_mode': Sun, 'terminal': Terminal, 'database': Database, 'sync': RefreshCw, 'error_outline': AlertCircle, 'sync_problem': CloudOff,
  'eco': Leaf, 'key': Key, 'visibility_off': EyeOff, 'verified': CheckCircle, 'task_alt': CheckCircle
};

interface IconProps {
  name: string;
  className?: string;
  style?: React.CSSProperties;
}

export function Icon({ name, className, style }: IconProps) {
  const IconComponent = iconMap[name] || Box;
  const isFilled = style?.fontVariationSettings?.includes("'FILL' 1");
  return <IconComponent className={className} style={style} fill={isFilled ? 'currentColor' : 'none'} width="1em" height="1em" />;
}
