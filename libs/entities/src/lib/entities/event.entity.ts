import { Locale } from '../types/locale.type';
import { User } from './user.entity';
import { Media } from './media.entity';

/**
 * Event interface
 */
export interface Event {
  /**
   * Event body
   */
  body: Locale;

  /**
   * Created at
   */
  created: number;

  /**
   * End date
   */
  end: number;

  /**
   * ID
   */
  id: number;

  /**
   * Main post image
   */
  image: Media;

  /**
   * Owner
   */
  owner: User;

  /**
   * Event is published
   */
  place?: Locale;

  /**
   * Event is published
   */
  published: boolean;

  /**
   * Start date
   */
  start: number;

  /**
   * Event title
   */
  title: Locale;

  /**
   * Updated at
   */
  updated: number;
}
